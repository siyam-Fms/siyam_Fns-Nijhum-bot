import login from '../index.js';
import fs from 'fs';
import assert from 'assert';
import { getType, formatDeltaMessage } from '../utils.js';
import shareAttachmentFixture from './data/shareAttach.js';

// কনফিগারেশন লোড করা
const conf = JSON.parse(process.env.testconfig || fs.readFileSync('test/test-config.json', 'utf8'));
const credentials = {
  email: conf.user.email,
  password: conf.user.password,
};

const userIDs = conf.userIDs;
const options = { selfListen: true, listenEvents: true, logLevel: 'silent' };
const userID = conf.user.id;

let groupChatID;
let groupChatName;

function checkErr(done) {
  return function (err) {
    if (err) done(err);
  };
}

describe('Login & API Functions Test:', function () {
  let api = null;
  let tests = [];
  let stopListening;
  this.timeout(20000);

  // অটোমেটিক লগআউট হ্যান্ডলার
  process.on('SIGINT', () => api && !api.logout() && console.log('Logged out :)'));

  function listen(done, matcher) {
    tests.push({ matcher: matcher, done: done });
  }

  before(function (done) {
    login(credentials, options, function (err, localAPI) {
      if (err) return done(err);

      assert(localAPI);
      api = localAPI;
      stopListening = api.listen(function (err, msg) {
        if (err) throw err;
        if (msg.type === 'message') {
          assert(msg.senderID && !isNaN(msg.senderID));
          assert(msg.threadID && !isNaN(msg.threadID));
          assert(msg.timestamp && !isNaN(msg.timestamp));
          assert(msg.messageID != null && msg.messageID.length > 0);
          assert(msg.body != null || msg.attachments.length > 0);
        }

        tests = tests.filter(function (test) {
          return !(test.matcher(msg) && (test.done() || true));
        });
      });

      done();
    });
  });

  it('should login without error', function () {
    assert(api);
  });

  it('should get the current user ID', function () {
    assert(userID === api.getCurrentUserID());
  });

  it('should send text message object (user)', function (done) {
    const body = 'text-msg-obj-' + Date.now();
    listen(done, (msg) => msg.type === 'message' && msg.body === body && msg.isGroup === false);
    api.sendMessage({ body: body }, userID, checkErr(done));
  });

  it('should send sticker message object (user)', function (done) {
    const stickerID = '767334526626290';
    listen(
      done,
      (msg) =>
        msg.type === 'message' &&
        msg.attachments.length > 0 &&
        msg.attachments[0].type === 'sticker' &&
        msg.attachments[0].stickerID === stickerID &&
        msg.isGroup === false
    );
    api.sendMessage({ sticker: stickerID }, userID, checkErr(done));
  });

  it('should send basic string (user)', function (done) {
    const body = 'basic-str-' + Date.now();
    listen(done, (msg) => msg.type === 'message' && msg.body === body && msg.isGroup === false);
    api.sendMessage(body, userID, checkErr(done));
  });

  it('should get thread info (user)', function (done) {
    api.getThreadInfo(userID, (err, info) => {
      if (err) return done(err);

      assert(info.participantIDs != null && info.participantIDs.length > 0);
      assert(!info.participantIDs.some(isNaN));
      assert(!info.participantIDs.some((v) => v.length === 0));
      assert(info.name != null);
      assert(info.messageCount != null && !isNaN(info.messageCount));
      assert(Object.prototype.hasOwnProperty.call(info, 'emoji'));
      assert(Object.prototype.hasOwnProperty.call(info, 'nicknames'));
      assert(Object.prototype.hasOwnProperty.call(info, 'color'));
      done();
    });
  });

  it('should get the history of the chat (user)', function (done) {
    api.getThreadHistory(userID, 5, null, function (err, data) {
      checkErr(done)(err);
      assert(getType(data) === 'Array');
      assert(data.every((v) => getType(v) === 'Object'));
      done();
    });
  });

  it('should create a chat', function (done) {
    const body = 'new-chat-' + Date.now();
    let inc = 0;

    function doneHack() {
      if (inc === 1) return done();
      inc++;
    }

    listen(doneHack, (msg) => msg.type === 'message' && msg.body === body);
    api.sendMessage(body, userIDs, function (err, info) {
      checkErr(done)(err);
      groupChatID = info.threadID;
      doneHack();
    });
  });

  it('should send text message object (group)', function (done) {
    const body = 'text-msg-obj-' + Date.now();
    listen(done, (msg) => msg.type === 'message' && msg.body === body && msg.isGroup === true);
    api.sendMessage({ body: body }, groupChatID, function (err, info) {
      checkErr(done)(err);
      assert(groupChatID === info.threadID);
    });
  });

  it('should send an attachment with a body (group)', function (done) {
    const body = 'attach-' + Date.now();
    const attach = [
      fs.createReadStream('test/data/test.txt'),
      fs.createReadStream('test/data/test.png')
    ];
    listen(done, (msg) => msg.type === 'message' && msg.body === body);
    api.sendMessage({ attachment: attach, body: body }, groupChatID, function (err, info) {
      checkErr(done)(err);
      assert(groupChatID === info.threadID);
    });
  });

  it('should change chat title', function (done) {
    const title = 'test-chat-title-' + Date.now();
    listen(
      done,
      (msg) =>
        msg.type === 'event' &&
        msg.logMessageType === 'log:thread-name' &&
        msg.logMessageData.name === title
    );
    groupChatName = title;
    api.setTitle(title, groupChatID, checkErr(done));
  });

  it('should kick user', function (done) {
    const id = userIDs[0];
    listen(
      done,
      (msg) =>
        msg.type === 'event' &&
        msg.logMessageType === 'log:unsubscribe' &&
        msg.logMessageData.leftParticipantFbId === id
    );
    api.removeUserFromGroup(id, groupChatID, checkErr(done));
  });

  it('should add user', function (done) {
    const id = userIDs[0];
    listen(
      done,
      (msg) =>
        msg.type === 'event' &&
        msg.logMessageType === 'log:subscribe' &&
        msg.logMessageData.addedParticipants.length > 0 &&
        msg.logMessageData.addedParticipants[0].userFbId === id
    );
    api.addUserToGroup(id, groupChatID, (err) => {
      if (err) console.warn('[AddUser Notice]:', err.message || err);
    });
  });

  it('should mark as read', function (done) {
    api.markAsRead(groupChatID, done);
  });

  it('should log out', function (done) {
    api.logout(done);
  });

  after(function () {
    if (stopListening) stopListening();
  });
});

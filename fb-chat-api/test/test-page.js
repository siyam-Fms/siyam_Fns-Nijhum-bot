import login from '../index.js';
import fs from 'fs';
import assert from 'assert';
import { getType } from '../utils.js';

// কনফিগারেশন লোড
const conf = JSON.parse(process.env.testconfig || fs.readFileSync('test/test-config.json', 'utf8'));
const credentials = {
  email: conf.user.email,
  password: conf.user.password,
};

const userIDs = conf.userIDs;

const options = {
  selfListen: true,
  listenEvents: true,
  logLevel: "silent",
  pageID: conf.pageID
};

const userID = conf.user.id;

let groupChatID;
let groupChatName;

function checkErr(done) {
  return function (err) {
    if (err) done(err);
  };
}

// ==========================================
// Facebook Page Login Test Suite (Optional)
// ==========================================
/*
describe('Login As Page:', function() {
  let api = null;
  let tests = [];
  let stopListening;
  this.timeout(20000);

  process.on('SIGINT', () => api && !api.logout() && console.log("Logged out :)"));

  function listen(done, matcher) {
    tests.push({ matcher: matcher, done: done });
  }

  before(function(done) {
    login(credentials, options, function (err, localAPI) {
      if (err) return done(err);

      assert(localAPI);
      api = localAPI;
      stopListening = api.listen(function (err, msg) {
        if (err) throw err;
        tests = tests.filter(function(test) {
          return !(test.matcher(msg) && (test.done() || true));
        });
      });

      done();
    });
  });

  it('should login without error', function () {
    assert(api);
  });

  it('should get the right user ID', function () {
    assert(userID == api.getCurrentUserID());
  });

  it('should send text message object (user)', function (done) {
    const body = "text-msg-obj-" + Date.now();
    listen(done, msg =>
      msg.type === 'message' &&
      msg.body === body &&
      msg.isGroup === false
    );
    api.sendMessage({ body: body }, userID, checkErr(done));
  });

  it('should send sticker message object (user)', function (done) {
    const stickerID = '767334526626290';
    listen(done, msg =>
      msg.type === 'message' &&
      msg.attachments.length > 0 &&
      msg.attachments[0].type === 'sticker' &&
      msg.attachments[0].stickerID === stickerID &&
      msg.isGroup === false
    );
    api.sendMessage({ sticker: stickerID }, userID, checkErr(done));
  });

  it('should send basic string (user)', function (done) {
    const body = "basic-str-" + Date.now();
    listen(done, msg =>
      msg.type === 'message' &&
      msg.body === body &&
      msg.isGroup === false
    );
    api.sendMessage(body, userID, checkErr(done));
  });

  it('should send typing indicator', function (done) {
    const stopType = api.sendTypingIndicator(userID, function(err) {
      checkErr(done)(err);
      stopType();
      done();
    });
  });

  it('should get the right user info', function (done) {
    api.getUserInfo(userID, function(err, data) {
      checkErr(done)(err);
      const user = data[userID];
      assert(user.name);
      assert(user.firstName);
      assert(user.vanity !== null);
      assert(user.profileUrl);
      assert(user.gender);
      assert(user.type);
      assert(!user.isFriend);
      done();
    });
  });

  it('should get the list of friends', function (done) {
    api.getFriendsList(function(err, data) {
      checkErr(done)(err);
      assert(getType(data) === "Array");
      done();
    });
  });

  it('should log out', function (done) {
    api.logout(done);
  });

  after(function () {
    if (stopListening) stopListening();
  });
});
*/

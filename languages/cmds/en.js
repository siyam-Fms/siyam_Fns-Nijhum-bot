module.exports = {
	// Customized language configuration file
	onlyadminbox: {
		description: "turn on/off only admin box can use bot",
		guide: "   {pn} [on | off]",
		text: {
			turnedOn: "⚠️ | 𝐓𝐮𝐫𝐧𝐞𝐝 𝐨𝐧 𝐭𝐡𝐞 𝐦𝐨𝐝𝐞: 𝐎𝐧𝐥𝐲 𝐠𝐫𝐨𝐮𝐩 𝐚𝐝𝐦𝐢𝐧𝐬 𝐜𝐚𝐧 𝐮𝐬𝐞 𝐭𝐡𝐞 𝐛𝐨𝐭!",
			turnedOff: "✅ | 𝐓𝐮𝐫𝐧𝐞𝐝 𝐨𝐟𝐟 𝐭𝐡𝐞 𝐦𝐨𝐝𝐞: 𝐎𝐧𝐥𝐲 𝐠𝐫𝐨𝐮𝐩 𝐚𝐝𝐦𝐢𝐧𝐬 𝐜𝐚𝐧 𝐮𝐬𝐞 𝐭𝐡𝐞 𝐛𝐨𝐭!",
			syntaxError: "📜 | 𝐒𝐲𝐧𝐭𝐚𝐱 𝐞𝐫𝐫𝐨𝐫, 𝐨𝐧𝐥𝐲 𝐮𝐬𝐞 {pn} 𝐨𝐧 𝐨𝐫 {pn} 𝐨𝐟𝐟"
		}
	},
	adduser: {
		description: "Add user to box chat of you",
		guide: "   {pn} [link profile | uid]",
		text: {
			alreadyInGroup: "⚠️ | 𝐔𝐬𝐞𝐫 𝐢𝐬 𝐚𝐥𝐫𝐞𝐚𝐝𝐲 𝐢𝐧 𝐭𝐡𝐞 𝐠𝐫𝐨𝐮𝐩!",
			successAdd: "✅ | 𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐚𝐝𝐝𝐞𝐝 %1 𝐦𝐞𝐦𝐛𝐞𝐫(𝐬) 𝐭𝐨 𝐭𝐡𝐞 𝐠𝐫𝐨𝐮𝐩.",
			failedAdd: "❌ | 𝐅𝐚𝐢𝐥𝐞𝐝 𝐭𝐨 𝐚𝐝𝐝 %1 𝐦𝐞𝐦𝐛𝐞𝐫(𝐬) 𝐭𝐨 𝐭𝐡𝐞 𝐠𝐫𝐨𝐮𝐩.",
			approve: "📥 | 𝐀𝐝𝐝𝐞𝐝 %1 𝐦𝐞𝐦𝐛𝐞𝐫(𝐬) 𝐭𝐨 𝐭𝐡𝐞 𝐚𝐩𝐩𝐫𝐨𝐯𝐚𝐥 𝐥𝐢𝐬𝐭.",
			invalidLink: "⚠️ | 𝐏𝐥𝐞𝐚𝐬𝐞 𝐞𝐧𝐭𝐞𝐫 𝐚 𝐯𝐚𝐥𝐢𝐝 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐥𝐢𝐧𝐤!",
			cannotGetUid: "❌ | 𝐂𝐚𝐧𝐧𝐨𝐭 𝐠𝐞𝐭 𝐔𝐈𝐃 𝐨𝐟 𝐭𝐡𝐢𝐬 𝐮𝐬𝐞𝐫!",
			linkNotExist: "❌ | 𝐓𝐡𝐢𝐬 𝐩𝐫𝐨𝐟𝐢𝐥𝐞 𝐔𝐑𝐋 𝐝𝐨𝐞𝐬 𝐧𝐨𝐭 𝐞𝐱𝐢𝐬𝐭!",
			cannotAddUser: "❌ | 𝐁𝐨𝐭 𝐢𝐬 𝐛𝐥𝐨𝐜𝐤𝐞𝐝 𝐨𝐫 𝐭𝐡𝐢𝐬 𝐮𝐬𝐞𝐫 𝐛𝐥𝐨𝐜𝐤𝐞𝐝 𝐬𝐭𝐫𝐚𝐧𝐠𝐞𝐫𝐬 𝐟𝐫𝐨𝐦 𝐚𝐝𝐝𝐢𝐧𝐠 𝐭𝐡𝐞𝐦!"
		}
	},
	admin: {
		description: "Add, remove, edit admin role (Controlled by 𝐒𝐈𝐘𝐀𝐌-𝐇𝐀𝐒𝐀𝐍)",
		guide: "   {pn} [add | -a] <uid>: Add admin role for user\n\t  {pn} [remove | -r] <uid>: Remove admin role of user\n\t  {pn} [list | -l]: List all admins",
		text: {
			added: "✅ | 𝐀𝐝𝐝𝐞𝐝 𝐚𝐝𝐦𝐢𝐧 𝐫𝐨𝐥𝐞 𝐟𝐨𝐫 %1 𝐮𝐬𝐞𝐫(𝐬):\n%2",
			alreadyAdmin: "\n⚠️ | %1 𝐮𝐬𝐞𝐫(𝐬) 𝐚𝐥𝐫𝐞𝐚𝐝𝐲 𝐡𝐚𝐯𝐞 𝐚𝐝𝐦𝐢𝐧 𝐫𝐨𝐥𝐞:\n%2",
			missingIdAdd: "⚠️ | 𝐏𝐥𝐞𝐚𝐬𝐞 𝐞𝐧𝐭𝐞𝐫 𝐈𝐃 𝐨𝐫 𝐭𝐚𝐠 𝐮𝐬𝐞𝐫 𝐭𝐨 𝐚𝐝𝐝 𝐚𝐝𝐦𝐢𝐧 𝐫𝐨𝐥𝐞!",
			removed: "✅ | 𝐑𝐞𝐦𝐨𝐯𝐞𝐝 𝐚𝐝𝐦𝐢𝐧 𝐫𝐨𝐥𝐞 𝐨𝐟 %1 𝐮𝐬𝐞𝐫(𝐬):\n%2",
			notAdmin: "⚠️ | %1 𝐮𝐬𝐞𝐫(𝐬) 𝐝𝐨𝐧'𝐭 𝐡𝐚𝐯𝐞 𝐚𝐝𝐦𝐢𝐧 𝐫𝐨𝐥𝐞:\n%2",
			missingIdRemove: "⚠️ | 𝐏𝐥𝐞𝐚𝐬𝐞 𝐞𝐧𝐭𝐞𝐫 𝐈𝐃 𝐨𝐫 𝐭𝐚𝐠 𝐮𝐬𝐞𝐫 𝐭𝐨 𝐫𝐞𝐦𝐨𝐯𝐞 𝐚𝐝𝐦𝐢𝐧 𝐫𝐨𝐥𝐞!",
			listAdmin: "👑 ━━━ [ 𝐁𝐎𝐓 𝐀𝐃𝐌𝐈𝐍 𝐋𝐈𝐒𝐓 ] ━━━ 👑\n👑 𝐎𝐰𝐧𝐞𝐫/ Main Admin: 𝐒𝐈𝐘𝐀𝐌-𝐇𝐀𝐒𝐀𝐍\n─────────────────\n%1"
		}
	},
	adminonly: {
		description: "turn on/off only admin can use bot",
		guide: "{pn} [on | off]",
		text: {
			turnedOn: "⚠️ | 𝐓𝐮𝐫𝐧𝐞𝐝 𝐨𝐧 𝐭𝐡𝐞 𝐦𝐨𝐝𝐞: 𝐎𝐧𝐥𝐲 𝐒𝐈𝐘𝐀𝐌-𝐇𝐀𝐒𝐀𝐍 / 𝐁𝐨𝐭 𝐀𝐝𝐦𝐢𝐧𝐬 𝐜𝐚𝐧 𝐮𝐬𝐞 𝐭𝐡𝐞 𝐛𝐨𝐭!",
			turnedOff: "✅ | 𝐓𝐮𝐫𝐧𝐞𝐝 𝐨𝐟𝐟 𝐭𝐡𝐞 𝐦𝐨𝐝𝐞: 𝐎𝐧𝐥𝐲 𝐒𝐈𝐘𝐀𝐌-𝐇𝐀𝐒𝐀𝐍 / 𝐁𝐨𝐭 𝐀𝐝𝐦𝐢𝐧𝐬 𝐜𝐚𝐧 𝐮𝐬𝐞 𝐭𝐡𝐞 𝐛𝐨𝐭!",
			syntaxError: "📜 | 𝐒𝐲𝐧𝐭𝐚𝐱 𝐞𝐫𝐫𝐨𝐫, 𝐨𝐧𝐥𝐲 𝐮𝐬𝐞 {pn} 𝐨𝐧 𝐨𝐫 {pn} 𝐨𝐟𝐟"
		}
	},
	all: {
		description: "Tag all members in your group chat",
		guide: "{pn} [content | empty]"
	},
	anime: {
		description: "random anime image",
		guide: "{pn} <endpoint>\n   List of endpoint: neko, kitsune, hug, pat, waifu, cry, kiss, slap, smug, punch",
		text: {
			loading: "⏳ | 𝐈𝐧𝐢𝐭𝐢𝐚𝐥𝐢𝐳𝐢𝐧𝐠 𝐢𝐦𝐚𝐠𝐞, 𝐩𝐥𝐞𝐚𝐬𝐞 𝐰𝐚𝐢𝐭...",
			error: "❌ | 𝐀𝐧 𝐞𝐫𝐫𝐨𝐫 𝐨𝐜𝐜𝐮𝐫𝐫𝐞𝐝, 𝐩𝐥𝐞𝐚𝐬𝐞 𝐭𝐫𝐲 𝐚𝐠𝐚𝐢𝐧 𝐥𝐚𝐭𝐞𝐫!"
		}
	},
	antichangeinfobox: {
		description: "Turn on/off anti change info box",
		guide: "   {pn} avt [on | off]: anti change avatar box chat\n   {pn} name [on | off]: anti change name box chat\n   {pn} theme [on | off]: anti change theme box chat\n   {pn} emoji [on | off]: anti change emoji box chat",
		text: {
			antiChangeAvatarOn: "🛡️ | 𝐓𝐮𝐫𝐧𝐞𝐝 𝐨𝐧 𝐚𝐧𝐭𝐢-𝐜𝐡𝐚𝐧𝐠𝐞 𝐠𝐫𝐨𝐮𝐩 𝐚𝐯𝐚𝐭𝐚𝐫!",
			antiChangeAvatarOff: "⚙️ | 𝐓𝐮𝐫𝐧𝐞𝐝 𝐨𝐟𝐟 𝐚𝐧𝐭𝐢-𝐜𝐡𝐚𝐧𝐠𝐞 𝐠𝐫𝐨𝐮𝐩 𝐚𝐯𝐚𝐭𝐚𝐫!",
			missingAvt: "⚠️ | 𝐘𝐨𝐮 𝐡𝐚𝐯𝐞 𝐧𝐨𝐭 𝐬𝐞𝐭 𝐚𝐧 𝐚𝐯𝐚𝐭𝐚𝐫 𝐟𝐨𝐫 𝐭𝐡𝐢𝐬 𝐠𝐫𝐨𝐮𝐩!",
			antiChangeNameOn: "🛡️ | 𝐓𝐮𝐫𝐧𝐞𝐝 𝐨𝐧 𝐚𝐧𝐭𝐢-𝐜𝐡𝐚𝐧𝐠𝐞 𝐠𝐫𝐨𝐮𝐩 𝐧𝐚𝐦𝐞!",
			antiChangeNameOff: "⚙️ | 𝐓𝐮𝐫𝐧𝐞𝐝 𝐨𝐟𝐟 𝐚𝐧𝐭𝐢-𝐜𝐡𝐚𝐧𝐠𝐞 𝐠𝐫𝐨𝐮𝐩 𝐧𝐚𝐦𝐞!",
			antiChangeThemeOn: "🛡️ | 𝐓𝐮𝐫𝐧𝐞𝐝 𝐨𝐧 𝐚𝐧𝐭𝐢-𝐜𝐡𝐚𝐧𝐠𝐞 𝐠𝐫𝐨𝐮𝐩 𝐭𝐡𝐞𝐦𝐞!",
			antiChangeThemeOff: "⚙️ | 𝐓𝐮𝐫𝐧𝐞𝐝 𝐨𝐟𝐟 𝐚𝐧𝐭𝐢-𝐜𝐡𝐚𝐧𝐠𝐞 𝐠𝐫𝐨𝐮𝐩 𝐭𝐡𝐞𝐦𝐞!",
			antiChangeEmojiOn: "🛡️ | 𝐓𝐮𝐫𝐧𝐞𝐝 𝐨𝐧 𝐚𝐧𝐭𝐢-𝐜𝐡𝐚𝐧𝐠𝐞 𝐠𝐫𝐨𝐮𝐩 𝐞𝐦𝐨𝐣𝐢!",
			antiChangeEmojiOff: "⚙️ | 𝐓𝐮𝐫𝐧𝐞𝐝 𝐨𝐟𝐟 𝐚𝐧𝐭𝐢-𝐜𝐡𝐚𝐧𝐠𝐞 𝐠𝐫𝐨𝐮𝐩 𝐞𝐦𝐨𝐣𝐢!",
			antiChangeAvatarAlreadyOn: "⚠️ | 𝐀𝐧𝐭𝐢-𝐜𝐡𝐚𝐧𝐠𝐞 𝐚𝐯𝐚𝐭𝐚𝐫 𝐢𝐬 𝐚𝐥𝐫𝐞𝐚𝐝𝐲 𝐞𝐧𝐚𝐛𝐥𝐞𝐝!",
			antiChangeNameAlreadyOn: "⚠️ | 𝐀𝐧𝐭𝐢-𝐜𝐡𝐚𝐧𝐠𝐞 𝐧𝐚𝐦𝐞 𝐢𝐬 𝐚𝐥𝐫𝐞𝐚𝐝𝐲 𝐞𝐧𝐚𝐛𝐥𝐞𝐝!",
			antiChangeThemeAlreadyOn: "⚠️ | 𝐀𝐧𝐭𝐢-𝐜𝐡𝐚𝐧𝐠𝐞 𝐭𝐡𝐞𝐦𝐞 𝐢𝐬 𝐚𝐥𝐫𝐞𝐚𝐝𝐲 𝐞𝐧𝐚𝐛𝐥𝐞𝐝!",
			antiChangeEmojiAlreadyOn: "⚠️ | 𝐀𝐧𝐭𝐢-𝐜𝐡𝐚𝐧𝐠𝐞 𝐞𝐦𝐨𝐣𝐢 𝐢𝐬 𝐚𝐥𝐫𝐞𝐚𝐝𝐲 𝐞𝐧𝐚𝐛𝐥𝐞𝐝!"
		}
	},
	appstore: {
		description: "Search app on appstore",
		text: {
			missingKeyword: "⚠️ | 𝐘𝐨𝐮 𝐡𝐚𝐯𝐞𝐧'𝐭 𝐞𝐧𝐭𝐞𝐫𝐞𝐝 𝐚𝐧𝐲 𝐬𝐞𝐚𝐫𝐜𝐡 𝐤𝐞𝐲𝐰𝐨𝐫𝐝!",
			noResult: "❌ | 𝐍𝐨 𝐫𝐞𝐬𝐮𝐥𝐭𝐬 𝐟𝐨𝐮𝐧𝐝 𝐟𝐨𝐫 𝐤𝐞𝐲𝐰𝐨𝐫𝐝: %1"
		}
	},
	autosetname: {
		description: "Auto change nickname of new member",
		guide: "   {pn} set <nickname>: use to set config to auto change nickname, with shortcuts:\n   + {userName}: name of new member\n   + {userID}: member id\n   Example:\n    {pn} set {userName} 🚀\n\n   {pn} [on | off]: turn on/off this feature\n   {pn} [view | info]: show current config",
		text: {
			missingConfig: "⚠️ | 𝐏𝐥𝐞𝐚𝐬𝐞 𝐞𝐧𝐭𝐞𝐫 𝐭𝐡𝐞 𝐫𝐞𝐪𝐮𝐢𝐫𝐞𝐝 𝐜𝐨𝐧𝐟𝐢𝐠𝐮𝐫𝐚𝐭𝐢𝐨𝐧!",
			configSuccess: "✅ | 𝐓𝐡𝐞 𝐜𝐨𝐧𝐟𝐢𝐠𝐮𝐫𝐚𝐭𝐢𝐨𝐧 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐬𝐞𝐭 𝐬𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲.",
			currentConfig: "📌 | 𝐓𝐡𝐞 𝐜𝐮𝐫𝐫𝐞𝐧𝐭 autoSetName 𝐜𝐨𝐧𝐟𝐢𝐠𝐮𝐫𝐚𝐭𝐢𝐨𝐧:\n%1",
			notSetConfig: "⚠️ | 𝐘𝐨𝐮𝐫 𝐠𝐫𝐨𝐮𝐩 𝐡𝐚𝐬 𝐧𝐨𝐭 𝐬𝐞𝐭 𝐚𝐧𝐲 autoSetName 𝐜𝐨𝐧𝐟𝐢𝐠𝐮𝐫𝐚𝐭𝐢𝐨𝐧!",
			syntaxError: "📜 | 𝐒𝐲𝐧𝐭𝐚𝐱 𝐞𝐫𝐫𝐨𝐫, 𝐨𝐧𝐥𝐲 \"{pn} on\" 𝐨𝐫 \"{pn} off\" 𝐜𝐚𝐧 𝐛𝐞 𝐮𝐬𝐞𝐝.",
			turnOnSuccess: "✅ | 𝐓𝐡𝐞 autoSetName 𝐟𝐞𝐚𝐭𝐮𝐫𝐞 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐭𝐮𝐫𝐧𝐞𝐝 𝐨𝐧.",
			turnOffSuccess: "⚙️ | 𝐓𝐡𝐞 autoSetName 𝐟𝐞𝐚𝐭𝐮𝐫𝐞 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐭𝐮𝐫𝐧𝐞𝐝 𝐨𝐟𝐟.",
			error: "❌ | 𝐀𝐧 𝐞𝐫𝐫𝐨𝐫 𝐨𝐜𝐜𝐮𝐫𝐫𝐞𝐝, 𝐭𝐫𝐲 𝐭𝐮𝐫𝐧𝐢𝐧𝐠 𝐨𝐟𝐟 𝐭𝐡𝐞 𝐢𝐧𝐯𝐢𝐭𝐞 𝐥𝐢𝐧𝐤 𝐟𝐞𝐚𝐭𝐮𝐫𝐞 𝐚𝐧𝐝 𝐭𝐫𝐲 𝐚𝐠𝐚𝐢𝐧!"
		}
	},
	avatar: {
		description: "create anime avatar with signature",
		guide: "{pn} <character id or name> | <bg text> | <signature> | <color>\n{pn} help: view how to use this command",
		text: {
			initImage: "⏳ | 𝐈𝐧𝐢𝐭𝐢𝐚𝐥𝐢𝐳𝐢𝐧𝐠 𝐢𝐦𝐚𝐠𝐞, 𝐩𝐥𝐞𝐚𝐬𝐞 𝐰𝐚𝐢𝐭...",
			invalidCharacter: "⚠️ | 𝐎𝐧𝐥𝐲 %1 𝐜𝐡𝐚𝐫𝐚𝐜𝐭𝐞𝐫𝐬 𝐚𝐫𝐞 𝐚𝐯𝐚𝐢𝐥𝐚𝐛𝐥𝐞. 𝐄𝐧𝐭𝐞𝐫 𝐚 𝐯𝐚𝐥𝐢𝐝 𝐈𝐃!",
			notFoundCharacter: "❌ | 𝐍𝐨 𝐜𝐡𝐚𝐫𝐚𝐜𝐭𝐞𝐫 𝐧𝐚𝐦𝐞𝐝 \"%1\" 𝐰𝐚𝐬 𝐟𝐨𝐮𝐧𝐝!",
			errorGetCharacter: "❌ | 𝐄𝐫𝐫𝐨𝐫 𝐠𝐞𝐭𝐭𝐢𝐧𝐠 𝐜𝐡𝐚𝐫𝐚𝐜𝐭𝐞𝐫 𝐝𝐚𝐭𝐚:\n%1: %2",
			success: "✅ | 𝐘𝐨𝐮𝐫 𝐀𝐯𝐚𝐭𝐚𝐫:\n» 𝐂𝐡𝐚𝐫𝐚𝐜𝐭𝐞𝐫: %1\n» 𝐈𝐃: %2\n» 𝐁𝐆 𝐓𝐞𝐱𝐭: %3\n» 𝐒𝐢𝐠𝐧𝐚𝐭𝐮𝐫𝐞: %4\n» 𝐂𝐨𝐥𝐨𝐫: %5",
			defaultColor: "default",
			error: "❌ | 𝐀𝐧 𝐞𝐫𝐫𝐨𝐫 𝐨𝐜𝐜𝐮𝐫𝐫𝐞𝐝:\n%1: %2"
		}
	},
	badwords: {
		description: "Turn on/off/add/remove bad words warning",
		guide: "   {pn} add <words>\n   {pn} delete <words>\n   {pn} list <hide | leave blank>\n   {pn} unwarn [<userID> | <@tag>]\n   {pn} [on | off]",
		text: {
			onText: "on",
			offText: "off",
			onlyAdmin: "⚠️ | 𝐎𝐧𝐥𝐲 𝐠𝐫𝐨𝐮𝐩 𝐚𝐝𝐦𝐢𝐧𝐬 𝐜𝐚𝐧 𝐚𝐝𝐝 𝐛𝐚𝐧𝐧𝐞𝐝 𝐰𝐨𝐫𝐝𝐬!",
			missingWords: "⚠️ | 𝐘𝐨𝐮 𝐡𝐚𝐯𝐞𝐧'𝐭 𝐞𝐧𝐭𝐞𝐫𝐞𝐝 𝐭𝐡𝐞 𝐛𝐚𝐧𝐧𝐞𝐝 𝐰𝐨𝐫𝐝𝐬!",
			addedSuccess: "✅ | 𝐀𝐝𝐝𝐞𝐝 %1 𝐛𝐚𝐧𝐧𝐞𝐝 𝐰𝐨𝐫𝐝(𝐬) 𝐭𝐨 𝐭𝐡𝐞 𝐥𝐢𝐬𝐭.",
			alreadyExist: "❌ | %1 𝐛𝐚𝐧𝐧𝐞𝐝 𝐰𝐨𝐫𝐝(𝐬) 𝐚𝐥𝐫𝐞𝐚𝐝𝐲 𝐞𝐱𝐢𝐬𝐭: %2",
			tooShort: "⚠️ | %1 𝐛𝐚𝐧𝐧𝐞𝐝 𝐰𝐨𝐫𝐝(𝐬) 𝐚𝐫𝐞 𝐭𝐨𝐨 𝐬𝐡𝐨𝐫𝐭 (<𝟐 𝐜𝐡𝐚𝐫𝐬): %2",
			onlyAdmin2: "⚠️ | 𝐎𝐧𝐥𝐲 𝐠𝐫𝐨𝐮𝐩 𝐚𝐝𝐦𝐢𝐧𝐬 𝐜𝐚𝐧 𝐝𝐞𝐥𝐞𝐭𝐞 𝐛𝐚𝐧𝐧𝐞𝐝 𝐰𝐨𝐫𝐝𝐬!",
			missingWords2: "⚠️ | 𝐘𝐨𝐮 𝐡𝐚𝐯𝐞𝐧'𝐭 𝐞𝐧𝐭𝐞𝐫𝐞𝐝 𝐰𝐨𝐫𝐝𝐬 𝐭𝐨 𝐝𝐞𝐥𝐞𝐭𝐞!",
			deletedSuccess: "✅ | 𝐃𝐞𝐥𝐞𝐭𝐞𝐝 %1 𝐛𝐚𝐧𝐧𝐞𝐝 𝐰𝐨𝐫𝐝(𝐬) 𝐟𝐫𝐨𝐦 𝐭𝐡𝐞 𝐥𝐢𝐬𝐭.",
			notExist: "❌ | %1 𝐛𝐚𝐧𝐧𝐞𝐝 𝐰𝐨𝐫𝐝(𝐬) 𝐝𝐨 𝐧𝐨𝐭 𝐞𝐱𝐢𝐬𝐭: %2",
			emptyList: "⚠️ | 𝐓𝐡𝐞 𝐛𝐚𝐧𝐧𝐞𝐝 𝐰𝐨𝐫𝐝𝐬 𝐥𝐢𝐬𝐭 𝐢𝐬 𝐜𝐮𝐫𝐫𝐞𝐧𝐭𝐥𝐲 𝐞𝐦𝐩𝐭𝐲!",
			badWordsList: "📑 | 𝐁𝐚𝐧𝐧𝐞𝐝 𝐰𝐨𝐫𝐝𝐬 𝐥𝐢𝐬𝐭:\n%1",
			onlyAdmin3: "⚠️ | 𝐎𝐧𝐥𝐲 𝐠𝐫𝐨𝐮𝐩 𝐚𝐝𝐦𝐢𝐧𝐬 𝐜𝐚𝐧 %1 𝐭𝐡𝐢𝐬 𝐟𝐞𝐚𝐭𝐮𝐫𝐞!",
			turnedOnOrOff: "✅ | 𝐁𝐚𝐧𝐧𝐞𝐝 𝐰𝐨𝐫𝐝𝐬 𝐰𝐚𝐫𝐧𝐢𝐧𝐠 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 %1.",
			onlyAdmin4: "⚠️ | 𝐎𝐧𝐥𝐲 𝐠𝐫𝐨𝐮𝐩 𝐚𝐝𝐦𝐢𝐧𝐬 𝐜𝐚𝐧 𝐫𝐞𝐦𝐨𝐯𝐞 𝐰𝐚𝐫𝐧𝐢𝐧𝐠𝐬!",
			missingTarget: "⚠️ | 𝐏𝐥𝐞𝐚𝐬𝐞 𝐞𝐧𝐭𝐞𝐫 𝐚 𝐔𝐒𝐄𝐑 𝐈𝐃 𝐨𝐫 𝐭𝐚𝐠 𝐚 𝐮𝐬𝐞𝐫!",
			notWarned: "⚠️ | 𝐔𝐬𝐞𝐫 %1 𝐡𝐚𝐬 𝐧𝐨𝐭 𝐛𝐞𝐞𝐧 𝐰𝐚𝐫𝐧𝐞𝐝!",
			removedWarn: "✅ | 𝐔𝐬𝐞𝐫 %1 | %2 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐫𝐞𝐦𝐨𝐯𝐞𝐝 𝟏 𝐰𝐚𝐫𝐧𝐢𝐧𝐠.",
			warned: "⚠️ | 𝐁𝐚𝐧𝐧𝐞𝐝 𝐰𝐨𝐫𝐝 \"%1\" 𝐝𝐞𝐭𝐞𝐜𝐭𝐞𝐝! 𝐅𝐮𝐫𝐭𝐡𝐞𝐫 𝐯𝐢𝐨𝐥𝐚𝐭𝐢𝐨𝐧𝐬 𝐰𝐢𝐥𝐥 𝐫𝐞𝐬𝐮𝐥𝐭 𝐢𝐧 𝐚 𝐤𝐢𝐜𝐤.",
			warned2: "⚠️ | 𝐁𝐚𝐧𝐧𝐞𝐝 𝐰𝐨𝐫𝐝 \"%1\" 𝐝𝐞𝐭𝐞𝐜𝐭𝐞𝐝! 𝐘𝐨𝐮 𝐡𝐚𝐯𝐞 𝐯𝐢𝐨𝐥𝐚𝐭𝐞𝐝 𝟐 𝐭𝐢𝐦𝐞𝐬 𝐚𝐧𝐝 𝐰𝐢𝐥𝐥 𝐛𝐞 𝐤𝐢𝐜𝐤𝐞𝐝.",
			needAdmin: "❌ | 𝐁𝐨𝐭 𝐧𝐞𝐞𝐝𝐬 𝐚𝐝𝐦𝐢𝐧 𝐩𝐫𝐢𝐯𝐢𝐥𝐞𝐠𝐞𝐬 𝐭𝐨 𝐤𝐢𝐜𝐤 𝐦𝐞𝐦𝐛𝐞𝐫𝐬!",
			unwarned: "✅ | 𝐑𝐞𝐦𝐨𝐯𝐞𝐝 𝐛𝐚𝐧𝐧𝐞𝐝 𝐰𝐨𝐫𝐝𝐬 𝐰𝐚𝐫𝐧𝐢𝐧𝐠 𝐟𝐨𝐫 %1 | %2"
		}
	},
	balance: {
		description: "view your money or the money of the tagged person",
		guide: "   {pn}\n   {pn} <@tag>",
		text: {
			money: "💰 | 𝐘𝐨𝐮 𝐜𝐮𝐫𝐫𝐞𝐧𝐭𝐥𝐲 𝐡𝐚𝐯𝐞: %1$",
			moneyOf: "💰 | %1 𝐜𝐮𝐫𝐫𝐞𝐧𝐭𝐥𝐲 𝐡𝐚𝐬: %2$"
		}
	},
	batslap: {
		description: "Batslap image",
		text: {
			noTag: "⚠️ | 𝐘𝐨𝐮 𝐦𝐮𝐬𝐭 𝐭𝐚𝐠 𝐭𝐡𝐞 𝐩𝐞𝐫𝐬𝐨𝐧 𝐲𝐨𝐮 𝐰𝐚𝐧𝐭 𝐭𝐨 𝐬𝐥𝐚𝐩!"
		}
	},
	busy: {
		description: "turn on do not disturb mode",
		guide: "   {pn} [<reason>]\n   {pn} off",
		text: {
			turnedOff: "✅ | 𝐃𝐨 𝐧𝐨𝐭 𝐝𝐢𝐬𝐭𝐮𝐫𝐛 𝐦𝐨𝐝𝐞 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐭𝐮𝐫𝐧𝐞𝐝 𝐨𝐟𝐟.",
			turnedOn: "✅ | 𝐃𝐨 𝐧𝐨𝐭 𝐝𝐢𝐬𝐭𝐮𝐫𝐛 𝐦𝐨𝐝𝐞 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐭𝐮𝐫𝐧𝐞𝐝 𝐨𝐧.",
			turnedOnWithReason: "✅ | 𝐃𝐨 𝐧𝐨𝐭 𝐝𝐢𝐬𝐭𝐮𝐫𝐛 𝐦𝐨𝐝𝐞 𝐭𝐮𝐫𝐧𝐞𝐝 𝐨𝐧. 𝐑𝐞𝐚𝐬𝐨𝐧: %1",
			alreadyOn: "📌 | 𝐔𝐬𝐞𝐫 %1 𝐢𝐬 𝐜𝐮𝐫𝐫𝐞𝐧𝐭𝐥𝐲 𝐛𝐮𝐬𝐲!",
			alreadyOnWithReason: "📌 | 𝐔𝐬𝐞𝐫 %1 𝐢𝐬 𝐜𝐮𝐫𝐫𝐞𝐧𝐭𝐥𝐲 𝐛𝐮𝐬𝐲. 𝐑𝐞𝐚𝐬𝐨𝐧: %2"
		}
	},
	callad: {
		description: "send report, feedback, bug,... to 𝐒𝐈𝐘𝐀𝐌-𝐇𝐀𝐒𝐀𝐍 (Bot Admin)",
		guide: "   {pn} <message>",
		text: {
			missingMessage: "⚠️ | 𝐏𝐥𝐞𝐚𝐬𝐞 𝐞𝐧𝐭𝐞𝐫 𝐭𝐡𝐞 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 𝐲𝐨𝐮 𝐰𝐚𝐧𝐭 𝐭𝐨 𝐬𝐞𝐧𝐝 𝐭𝐨 𝐒𝐈𝐘𝐀𝐌-𝐇𝐀𝐒𝐀𝐍!",
			sendByGroup: "\n- 𝐒𝐞𝐧𝐭 𝐟𝐫𝐨𝐦 𝐠𝐫𝐨𝐮𝐩: %1\n- 𝐓𝐡𝐫𝐞𝐚𝐝 𝐈𝐃: %2",
			sendByUser: "\n- 𝐒𝐞𝐧𝐭 𝐟𝐫𝐨𝐦 𝐩𝐫𝐢𝐯𝐚𝐭𝐞 𝐜𝐡𝐚𝐭",
			content: "\n\n📩 ━━━ [ 𝐅𝐄𝐄𝐃𝐁𝐀𝐂𝐊 ] ━━━\n%1\n─────────────────\n» 𝐑𝐞𝐩𝐥𝐲 𝐭𝐨 𝐭𝐡𝐢𝐬 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 𝐭𝐨 𝐫𝐞𝐬𝐩𝐨𝐧𝐝.",
			success: "✅ | 𝐒𝐞𝐧𝐭 𝐲𝐨𝐮𝐫 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 𝐭𝐨 𝐒𝐈𝐘𝐀𝐌-𝐇𝐀𝐒𝐀𝐍 𝐬𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲!",
			reply: "📍 ━━━ [ 𝐑𝐄𝐏𝐋𝐘 𝐅𝐑𝐎𝐌 𝐒𝐈𝐘𝐀𝐌-𝐇𝐀𝐒𝐀𝐍 ] ━━━\n- 𝐅𝐫𝐨𝐦 𝐎𝐰𝐧𝐞𝐫: 𝐒𝐈𝐘𝐀𝐌-𝐇𝐀𝐒𝐀𝐍 (%1)\n─────────────────\n%2\n─────────────────\n» 𝐑𝐞𝐩𝐥𝐲 𝐭𝐨 𝐭𝐡𝐢𝐬 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 𝐭𝐨 𝐜𝐨𝐧𝐭𝐢𝐧𝐮𝐞 𝐜𝐡𝐚𝐭𝐭𝐢𝐧𝐠.",
			replySuccess: "✅ | 𝐒𝐞𝐧𝐭 𝐲𝐨𝐮𝐫 𝐫𝐞𝐩𝐥𝐲 𝐭𝐨 𝐒𝐈𝐘𝐀𝐌-𝐇𝐀𝐒𝐀𝐍 𝐬𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲!",
			feedback: "📝 ━━━ [ 𝐔𝐒𝐄 𝐑𝐄𝐏𝐋𝐘 ] ━━━\n- 𝐅𝐫𝐨𝐦 𝐔𝐬𝐞𝐫: %1\n- 𝐔𝐬𝐞𝐫 𝐈𝐃: %2%3\n\n Content:\n─────────────────\n%4\n─────────────────\n» 𝐑𝐞𝐩𝐥𝐲 𝐭𝐨 𝐭𝐡𝐢𝐬 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 𝐭𝐨 𝐬𝐞𝐧𝐝 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 𝐭𝐨 𝐮𝐬𝐞𝐫.",
			replyUserSuccess: "✅ | 𝐒𝐞𝐧𝐭 𝐲𝐨𝐮𝐫 𝐫𝐞𝐩𝐥𝐲 𝐭𝐨 𝐮𝐬𝐞𝐫 𝐬𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲!"
		}
	},
	cmd: {
		description: "Manage your command files",
		guide: "{pn} load <command name>\n{pn} loadAll\n{pn} install <url> <filename>",
		text: {
			missingFileName: "⚠️ | 𝐏𝐥𝐞𝐚𝐬𝐞 𝐞𝐧𝐭𝐞𝐫 𝐭𝐡𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐧𝐚𝐦𝐞 𝐲𝐨𝐮 𝐰𝐚𝐧𝐭 𝐭𝐨 𝐫𝐞𝐥𝐨𝐚𝐝!",
			loaded: "✅ | 𝐋𝐨𝐚𝐝𝐞𝐝 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 \"%1\" 𝐬𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲.",
			loadedError: "❌ | 𝐅𝐚𝐢𝐥𝐞𝐝 𝐭𝐨 𝐥𝐨𝐚𝐝 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 \"%1\":\n%2: %3",
			loadedSuccess: "✅ | 𝐋𝐨𝐚𝐝𝐞𝐝 𝐬𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 \"%1\" 𝐜𝐨𝐦𝐦𝐚𝐧𝐝(𝐬).",
			loadedFail: "❌ | 𝐅𝐚𝐢𝐥𝐞𝐝 𝐭𝐨 𝐥𝐨𝐚𝐝 \"%1\" 𝐜𝐨𝐦𝐦𝐚𝐧𝐝:\n%2",
			missingCommandNameUnload: "⚠️ | 𝐏𝐥𝐞𝐚𝐬𝐞 𝐞𝐧𝐭𝐞𝐫 𝐭𝐡𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐧𝐚𝐦𝐞 𝐭𝐨 𝐮𝐧𝐥𝐨𝐚𝐝!",
			unloaded: "✅ | 𝐔𝐧𝐥𝐨𝐚𝐝𝐞𝐝 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 \"%1\" 𝐬𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲.",
			unloadedError: "❌ | 𝐅𝐚𝐢𝐥𝐞𝐝 𝐭𝐨 𝐮𝐧𝐥𝐨𝐚𝐝 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 \"%1\":\n%2: %3",
			missingUrlCodeOrFileName: "⚠️ | 𝐏𝐥𝐞𝐚𝐬𝐞 𝐞𝐧𝐭𝐞𝐫 𝐔𝐑𝐋/𝐜𝐨𝐝𝐞 𝐚𝐧𝐝 𝐟𝐢𝐥𝐞 𝐧𝐚𝐦𝐞!",
			missingUrlOrCode: "⚠️ | 𝐏𝐥𝐞𝐚𝐬𝐞 𝐞𝐧𝐭𝐞𝐫 𝐭𝐡𝐞 𝐔𝐑𝐋 𝐨𝐫 𝐜𝐨𝐝𝐞!",
			missingFileNameInstall: "⚠️ | 𝐏𝐥𝐞𝐚𝐬𝐞 𝐞𝐧𝐭𝐞𝐫 𝐭𝐡𝐞 𝐟𝐢𝐥𝐞 𝐧𝐚𝐦𝐞 (.𝐣𝐬)!",
			invalidUrlOrCode: "⚠️ | 𝐔𝐧𝐚𝐛𝐥𝐞 𝐭𝐨 𝐟𝐞𝐭𝐜𝐡 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐜𝐨𝐝𝐞!",
			alreadExist: "⚠️ | 𝐅𝐢𝐥𝐞 𝐚𝐥𝐫𝐞𝐚𝐝𝐲 𝐞𝐱𝐢𝐬𝐭𝐬! 𝐑𝐞𝐚𝐜𝐭 𝐭𝐨 𝐨𝐯𝐞𝐫𝐰𝐫𝐢𝐭𝐞.",
			installed: "✅ | 𝐈𝐧𝐬𝐭𝐚𝐥𝐥𝐞𝐝 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 \"%1\" 𝐬𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐚𝐭 %2.",
			installedError: "❌ | 𝐅𝐚𝐢𝐥𝐞𝐝 𝐭𝐨 𝐢𝐧𝐬𝐭𝐚𝐥𝐥 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 \"%1\":\n%2: %3",
			missingFile: "⚠️ | 𝐂𝐨𝐦𝐦𝐚𝐧𝐝 𝐟𝐢𝐥𝐞 \"%1\" 𝐧𝐨𝐭 𝐟𝐨𝐮𝐧𝐝!",
			invalidFileName: "⚠️ | 𝐈𝐧𝐯𝐚𝐥𝐢𝐝 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐟𝐢𝐥𝐞 𝐧𝐚𝐦𝐞!",
			unloadedFile: "✅ | 𝐔𝐧𝐥𝐨𝐚𝐝𝐞𝐝 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 \"%1\""
		}
	},
	count: {
		description: "View message statistics",
		guide: "   {pn}\n   {pn} @tag\n   {pn} all",
		text: {
			count: "📊 ━━━ [ 𝐌𝐄𝐒𝐒𝐀𝐆𝐄 𝐂𝐎𝐔𝐍𝐓 ] ━━━",
			endMessage: "📌 Members not listed have 0 messages.",
			page: "📄 Page [%1/%2]",
			reply: "» Reply to this message with page number to navigate.",
			result: "🏆 Rank %2: %1 - %3 messages",
			yourResult: "📊 You are ranked %1 with %2 messages in this group.",
			invalidPage: "⚠️ | Invalid page number!"
		}
	},
	customrankcard: {
		description: "Design rank card by your own",
		guide: {
			body: "   {pn} [maincolor | subcolor | linecolor | progresscolor | alphasubcolor | textcolor | namecolor | expcolor | rankcolor | levelcolor | reset] <value>",
			attachment: {
				[`${process.cwd()}/scripts/cmds/assets/guide/customrankcard_1.jpg`]: "https://i.ibb.co/BZ2Qgs1/image.png",
				[`${process.cwd()}/scripts/cmds/assets/guide/customrankcard_2.png`]: "https://i.ibb.co/wy1ZHHL/image.png"
			}
		},
		text: {
			invalidImage: "⚠️ | Invalid image URL!",
			invalidAttachment: "⚠️ | Please attach a valid image file!",
			invalidColor: "⚠️ | Invalid color code!",
			notSupportImage: "⚠️ | Image URL not supported for \"%1\"",
			success: "✅ | Changes saved successfully!",
			reseted: "🔄 | Reset all settings to default!",
			invalidAlpha: "⚠️ | Choose a number from 0 to 1"
		}
	},
	dhbc: {
		description: "play game catch the word",
		guide: "{pn}",
		text: {
			reply: "🎮 | Reply to this message with your answer:\n%1",
			isSong: "🎵 Hint: Song by singer %1",
			notPlayer: "⚠️ | You are not the player for this question!",
			correct: "🎉 | Correct answer! You received %1$",
			wrong: "❌ | Incorrect answer! Try again."
		}
	},
	emojimix: {
		description: "Mix 2 emoji together",
		guide: "   {pn} <emoji1> <emoji2>"
	},
	eval: {
		description: "Test code quickly",
		guide: "{pn} <code to test>",
		text: {
			error: "❌ | An error occurred:"
		}
	},
	event: {
		description: "Manage your event command files",
		guide: "{pn} load <event name>\n{pn} loadAll\n{pn} install <url> <filename>",
		text: {
			missingFileName: "⚠️ | Please enter the event command name to reload!",
			loaded: "✅ | Loaded event \"%1\" successfully.",
			loadedError: "❌ | Failed to load event \"%1\":\n%2: %3",
			loadedSuccess: "✅ | Loaded \"%1\" event command(s) successfully.",
			loadedFail: "❌ | Failed to load event command \"%1\":\n%2",
			missingCommandNameUnload: "⚠️ | Please enter event command name to unload!",
			unloaded: "✅ | Unloaded event \"%1\" successfully.",
			unloadedError: "❌ | Unloaded event \"%1\" failed:\n%2: %3",
			missingUrlCodeOrFileName: "⚠️ | Please enter URL/code and filename!",
			missingUrlOrCode: "⚠️ | Please enter URL or code!",
			missingFileNameInstall: "⚠️ | Please enter filename (.js)!",
			invalidUrlOrCode: "⚠️ | Unable to fetch event code!",
			alreadExist: "⚠️ | File already exists! React to overwrite.",
			installed: "✅ | Installed event \"%1\" successfully at %2.",
			installedError: "❌ | Failed to install event \"%1\":\n%2: %3",
			missingFile: "⚠️ | File \"%1\" not found!",
			invalidFileName: "⚠️ | Invalid file name!",
			unloadedFile: "✅ | Unloaded event command \"%1\""
		}
	},
	filteruser: {
		description: "filter group members by number of messages or locked account",
		guide: "   {pn} [<number of messages> | die]",
		text: {
			needAdmin: "⚠️ | Please make the bot an admin to use this feature!",
			confirm: "⚠️ | Delete members with < %1 messages? React to confirm.",
			kickByBlock: "✅ | Successfully removed %1 locked account(s).",
			kickByMsg: "✅ | Successfully removed %1 member(s) with < %2 messages.",
			kickError: "❌ | Error removing %1 member(s):\n%2",
			noBlock: "✅ | No locked accounts found.",
			noMsg: "✅ | No members with < %1 messages found."
		}
	},
	getfbstate: {
		description: "Get current fbstate",
		guide: "{pn}",
		text: {
			success: "📬 | Sent fbstate to your private message!"
		}
	},
	grouptag: {
		description: "Tag members by group",
		guide: "   {pn} add <tagname> <@tags>\n   {pn} del <tagname> <@tags>\n   {pn} remove <tagname>\n   {pn} rename <old> | <new>\n   {pn} list\n   {pn} info <tagname>",
		text: {
			noGroupTagName: "⚠️ | Please enter group tag name!",
			noMention: "⚠️ | You haven't tagged any members!",
			addedSuccess: "✅ | Added members to group tag \"%2\":\n%1",
			addedSuccess2: "✅ | Created group tag \"%1\" with members:\n%2",
			existedInGroupTag: "⚠️ | Members already exist in \"%2\":\n%1",
			notExistedInGroupTag: "⚠️ | Members don't exist in \"%2\":\n%1",
			noExistedGroupTag: "❌ | Group tag \"%1\" does not exist!",
			noExistedGroupTag2: "⚠️ | No group tags created yet!",
			noMentionDel: "⚠️ | Tag members to remove from \"%1\"!",
			deletedSuccess: "✅ | Removed members from \"%2\":\n%1",
			deletedSuccess2: "✅ | Deleted group tag \"%1\"",
			tagged: "📣 | Tagging group \"%1\":\n%2",
			noGroupTagName2: "⚠️ | Enter old and new tag name separated by \"|\"",
			renamedSuccess: "✅ | Renamed group tag \"%1\" to \"%2\"",
			infoGroupTag: "📑 ━━━ [ 𝐆𝐑𝐎𝐔𝐏 𝐓𝐀𝐆 ] ━━━\n🏷️ Name: \"%1\"\n👥 Members: %2\n📜 List:\n%3"
		}
	},
	help: {
		description: "View command usage",
		guide: "{pn} [empty | <page> | <command>]",
		text: {
			help: "╭─────────────⭓\n%1\n├─────⭔\n│ 📄 𝐏𝐚𝐠𝐞 [ %2/%3 ]\n│ 🤖 𝐓𝐨𝐭𝐚𝐥 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬: %4\n│ » 𝐓𝐲𝐩𝐞 %5𝐡𝐞𝐥𝐩 <𝐩𝐚𝐠𝐞> 𝐭𝐨 𝐧𝐚𝐯𝐢𝐠𝐚𝐭𝐞\n│ » 𝐓𝐲𝐩𝐞 %5𝐡𝐞𝐥𝐩 <𝐜𝐦𝐝> 𝐟𝐨𝐫 𝐝𝐞𝐭𝐚𝐢𝐥𝐬\n├────────⭔\n│ %6\n╰─────────────⭓",
			help2: "%1├───────⭔\n│ 🤖 𝐓𝐨𝐭𝐚𝐥 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬: %2\n│ » 𝐓𝐲𝐩𝐞 %3𝐡𝐞𝐥𝐩 <𝐜𝐨𝐦𝐦𝐚𝐧𝐝> 𝐟𝐨𝐫 𝐝𝐞𝐭𝐚𝐢𝐥𝐬\n│ %4\n╰─────────────⭓",
			commandNotFound: "❌ | 𝐂𝐨𝐦𝐦𝐚𝐧𝐝 \"%1\" 𝐝𝐨𝐞𝐬 𝐧𝐨𝐭 𝐞𝐱𝐢𝐬𝐭!",
			getInfoCommand: "╭── 𝐍𝐀𝐌𝐄 ────⭓\n│ ⚙️ %1\n├── 𝐈𝐍𝐅𝐎\n│ 📝 𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧: %2\n│ 🔤 𝐀𝐥𝐢𝐚𝐬𝐞𝐬: %3\n│ 🏠 𝐆𝐫𝐨𝐮𝐩 𝐀𝐥𝐢𝐚𝐬𝐞𝐬: %4\n│ 🏷️ 𝐕𝐞𝐫𝐬𝐢𝐨𝐧: %5\n│ 👑 𝐑𝐨𝐥𝐞: %6\n│ ⏱️ 𝐂𝐨𝐨𝐥𝐝𝐨𝐰𝐧: %7𝐬\n│ 👤 𝐀𝐮𝐭𝐡𝐨𝐫: %8\n├── 𝐔𝐒𝐀𝐆𝐄\n%9\n├── 𝐍𝐎𝐓𝐄𝐒\n│ • Content inside <...> is required\n│ • Content inside [...] is optional\n╰──────⭔",
			doNotHave: "None",
			roleText0: "0 (All users)",
			roleText1: "1 (Group administrators)",
			roleText2: "2 (𝐒𝐈𝐘𝐀𝐌-𝐇𝐀𝐒𝐀𝐍 / Bot Admin)",
			roleText0setRole: "0 (All users)",
			roleText1setRole: "1 (Group administrators)",
			pageNotFound: "❌ | Page %1 does not exist!"
		}
	},
	kick: {
		description: "Kick member out of chat box",
		guide: "{pn} @tags: use to kick members who are tagged"
	},
	loadconfig: {
		description: "Reload config of bot"
	},
	moon: {
		description: "view moon image on the night you choose (dd/mm/yyyy)",
		guide: "  {pn} <day/month/year>\n   {pn} <day/month/year> <caption>",
		text: {
			invalidDateFormat: "⚠️ | Please enter a valid date in DD/MM/YYYY format",
			error: "❌ | An error occurred while getting the moon image of %1",
			invalidDate: "⚠️ | %1 is not a valid date",
			caption: "- Moon image on %1"
		}
	},
	notification: {
		description: "Send notification from 𝐒𝐈𝐘𝐀𝐌-𝐇𝐀𝐒𝐀𝐍 to all box",
		guide: "{pn} <message>",
		text: {
			missingMessage: "⚠️ | Please enter the message you want to send to all groups!",
			notification: "📢 ━━━ [ 𝐍𝐎𝐓𝐈𝐅𝐈𝐂𝐀𝐓𝐈𝐎𝐍 𝐅𝐑𝐎𝐌 𝐒𝐈𝐘𝐀𝐌-𝐇𝐀𝐒𝐀𝐍 ] ━━━\n(Do not reply to this message)",
			sendingNotification: "🚀 | Start sending notification from 𝐒𝐈𝐘𝐀𝐌-𝐇𝐀𝐒𝐀𝐍 to %1 chat groups...",
			sentNotification: "✅ | Sent notification to %1 groups successfully!",
			errorSendingNotification: "❌ | An error occurred while sending to %1 groups:\n %2"
		}
	},
	prefix: {
		description: "Change bot prefix in box chat or system wide (𝐒𝐈𝐘𝐀𝐌-𝐇𝐀𝐒𝐀𝐍 only)",
		guide: "   {pn} <new prefix>: change prefix in current box chat\n   {pn} <new prefix> -g: change system prefix (𝐒𝐈𝐘𝐀𝐌-𝐇𝐀𝐒𝐀𝐍 only)\n   {pn} reset: reset prefix to default",
		text: {
			reset: "🔄 | Your prefix has been reset to default: %1",
			onlyAdmin: "⚠️ | Only 𝐒𝐈𝐘𝐀𝐌-𝐇𝐀𝐒𝐀𝐍 can change the system-wide prefix!",
			confirmGlobal: "⚠️ | Please react to this message to confirm system-wide prefix change.",
			confirmThisThread: "⚠️ | Please react to this message to confirm prefix change in this box chat.",
			successGlobal: "✅ | Changed system prefix to: %1",
			successThisThread: "✅ | Changed prefix in your box chat to: %1",
			myPrefix: "🌐 System prefix: %1\n🛸 Your box chat prefix: %2"
		}
	},
	rank: {
		description: "View your level or the level of the tagged person"
	},
	rankup: {
		description: "Turn on/off level up notification",
		guide: "{pn} [on | off]",
		text: {
			syntaxError: "📜 | Syntax error, only use {pn} on or {pn} off",
			turnedOn: "✅ | Turned on level up notification!",
			turnedOff: "⚙️ | Turned off level up notification!",
			notiMessage: "🎉🎉 Congratulations on reaching level %1!"
		}
	},
	refresh: {
		description: "refresh information of group chat or user",
		guide: "   {pn} [thread | group]\n   {pn} group <threadID>\n   {pn} user\n   {pn} user [<userID> | @tag]",
		text: {
			refreshMyThreadSuccess: "✅ | Refresh information of your group chat successfully!",
			refreshThreadTargetSuccess: "✅ | Refresh information of group chat %1 successfully!"
		}
	},
	rules: {
		description: "Create/view/add/edit/change position/delete group rules",
		guide: "   {pn} [add | -a] <rule>\n   {pn}: view group rules\n   {pn} [edit | -e] <n> <content>\n   {pn} [move | -m] <stt1> <stt2>\n   {pn} [delete | -d] <n>\n   {pn} [remove | -r]: delete all rules"
	},
	sendnoti: {
		description: "Create and send notification to groups that you manage",
		guide: "   {pn} create <groupName>\n   {pn} add <groupName>\n   {pn} delete <groupName>\n   {pn} send <groupName> | <message>\n   {pn} remove <groupName>",
		text: {
			missingGroupName: "⚠️ | Please enter notification group name!",
			groupNameExists: "⚠️ | Notification group %1 already exists!",
			createdGroup: "✅ | Created notification group successfully:\n- Name: %1\n- ID: %2",
			missingGroupNameToAdd: "⚠️ | Enter notification group name to add this chat!",
			groupNameNotExists: "❌ | Notification group \"%1\" does not exist or you don't manage it!",
			notAdmin: "⚠️ | You are not an admin of this group chat!",
			added: "✅ | Added current group chat to notification group: %1",
			missingGroupNameToDelete: "⚠️ | Enter notification group name to delete this chat!",
			notInGroup: "⚠️ | Current group chat is not in notification group %1",
			deleted: "✅ | Deleted current group chat from notification group: %1",
			failed: "❌ | Failed to send notification to %1 group chats:\n%2",
			missingGroupNameToRemove: "⚠️ | Enter notification group name to remove!",
			removed: "✅ | Removed notification group: %1",
			missingGroupNameToSend: "⚠️ | Enter notification group name to send message!",
			groupIsEmpty: "⚠️ | Notification group \"%1\" is empty!",
			sending: "🚀 | Sending notification to %1 group chats...",
			success: "✅ | Sent notification to %1 group chats in \"%2\" successfully!",
			notAdminOfGroup: "⚠️ | You are not an admin of this group!",
			missingGroupNameToView: "⚠️ | Enter notification group name to view info!",
			groupInfo: "📑 ━━━ [ 𝐍𝐎𝐓𝐈 𝐆𝐑𝐎𝐔𝐏 𝐈𝐍𝐅𝐎 ] ━━━\n- Name: %1\n- ID: %2\n- Created: %3\n%4",
			groupInfoHasGroup: "- Has group chats:\n%1",
			noGroup: "⚠️ | You have not created/managed any notification group!"
		}
	},
	setalias: {
		description: "Add an alias for any command in your group",
		guide: "   {pn} add <alias> <command>\n   {pn} add <alias> <command> -g (𝐒𝐈𝐘𝐀𝐌-𝐇𝐀𝐒𝐀𝐍 only)\n   {pn} [remove | rm] <alias> <command>\n   {pn} list\n   {pn} list -g"
	},
	setavt: {
		description: "Change bot avatar (𝐒𝐈𝐘𝐀𝐌-𝐇𝐀𝐒𝐀𝐍 only)",
		text: {
			cannotGetImage: "❌ | An error occurred while querying the image url",
			invalidImageFormat: "❌ | Invalid image format",
			changedAvatar: "✅ | Changed bot avatar successfully"
		}
	},
	setlang: {
		description: "Set default language of bot for current chat or all chats",
		guide: "   {pn} <language code>\n   Example: {pn} en",
		text: {
			setLangForAll: "🌐 | Set default language for all chats: %1",
			setLangForCurrent: "🌐 | Set default language for current chat: %1",
			noPermission: "⚠️ | Only 𝐒𝐈𝐘𝐀𝐌-𝐇𝐀𝐒𝐀𝐍 (Bot Owner) can use this command!"
		}
	},
	setleave: {
		description: "Edit content/turn on/off leave message when member leave your group chat",
		guide: {
			body: "   {pn} on: Turn on leave message\n   {pn} off: Turn off leave message\n   {pn} text [<content> | reset]\n Shortcuts:\n  + {userName}\n  + {userNameTag}\n  + {boxName}\n  + {type}\n  + {session}\n\n   {pn} file: reply/attach file\n   {pn} file reset: reset file",
			attachment: {
				[`${process.cwd()}/scripts/cmds/assets/guide/setleave/setleave_en_1.png`]: "https://i.ibb.co/2FKJHJr/guide1.png"
			}
		},
		text: {
			missingContent: "⚠️ | Please enter leave message content!",
			edited: "✅ | Edited leave message content to:\n%1",
			reseted: "🔄 | Reset leave message content to default.",
			noFile: "⚠️ | No leave message attachment file to reset!",
			resetedFile: "🔄 | Reset leave message attachment file successfully!",
			missingFile: "⚠️ | Please reply to this message with an image/video/audio file!",
			addedFile: "✅ | Added %1 attachment file(s) to leave message."
		}
	},
	setname: {
		description: "Change nickname of all members in chat or members tagged by a format",
		guide: {
			body: "   {pn} <nickname>\n   {pn} @tags <nickname>\n   {pn} all <nickname>\n Shortcuts:\n   + {userName}\n   + {userID}",
			attachment: {
				[`${process.cwd()}/scripts/cmds/assets/guide/setname_1.png`]: "https://i.ibb.co/gFh23zb/guide1.png",
				[`${process.cwd()}/scripts/cmds/assets/guide/setname_2.png`]: "https://i.ibb.co/BNWHKgj/guide2.png"
			}
		},
		text: {
			error: "❌ | An error occurred, try turning off the invite link feature in the group and try again later!"
		}
	},
	setrole: {
		description: "Edit role of command (commands with role < 2)",
		guide: "   {pn} <commandName> <new role>\n   + 0: All users\n   + 1: Group Admin\n   + default: Reset\n   {pn} [viewrole|view|show]",
		text: {
			noEditedCommand: "✅ | Your group has no edited command roles.",
			editedCommand: "⚠️ | Your group has edited command roles:\n",
			noPermission: "⚠️ | Only group administrators can use this command!",
			commandNotFound: "❌ | Command \"%1\" not found!",
			noChangeRole: "❌ | Cannot change role of command \"%1\"!",
			resetRole: "🔄 | Reset role of command \"%1\" to default.",
			changedRole: "✅ | Changed role of command \"%1\" to %2"
		}
	},
	setwelcome: {
		description: "Edit welcome message content when new member join your group chat",
		guide: {
			body: "   {pn} text [<content> | reset]\n Shortcuts:\n  + {userName}\n  + {userNameTag}\n  + {boxName}\n  + {multiple}\n  + {session}\n\n   {pn} file: reply/attach file\n   {pn} file reset: delete file attachments",
			attachment: {
				[`${process.cwd()}/scripts/cmds/assets/guide/setwelcome/setwelcome_en_1.png`]: "https://i.ibb.co/vsCz0ks/setwelcome-en-1.png"
			}
		},
		text: {
			missingContent: "⚠️ | Please enter welcome message content!",
			edited: "✅ | Edited welcome message content to: %1",
			reseted: "🔄 | Reset welcome message content to default.",
			noFile: "⚠️ | No file attachments to delete!",
			resetedFile: "🔄 | Reset file attachments successfully!",
			missingFile: "⚠️ | Please reply to this message with image/video/audio file!",
			addedFile: "✅ | Added %1 file attachment(s) to welcome message."
		}
	},
	shortcut: {
		description: "Add a shortcut for your message in group chat",
		text: {
			missingContent: '⚠️ | Please enter the message content!',
			shortcutExists: '⚠️ | Shortcut "%1" already exists, react to this message to overwrite.',
			shortcutExistsByOther: '⚠️ | Shortcut "%1" has been added by another member!',
			added: '✅ | Added shortcut: %1 => %2',
			addedAttachment: ' with %1 attachment(s)',
			missingKey: '⚠️ | Please enter the keyword of the shortcut to delete!',
			notFound: '❌ | No shortcut found for keyword: %1',
			onlyAdmin: '⚠️ | Only group administrators can delete other people\'s shortcuts!',
			deleted: '✅ | Deleted shortcut: %1',
			empty: '⚠️ | Your group chat has not added any shortcuts!',
			message: 'Message',
			attachment: 'Attachment',
			list: '📜 ━━━ [ 𝐒𝐇𝐎𝐑𝐓𝐂𝐔𝐓 𝐋𝐈𝐒𝐓 ] ━━━',
			onlyAdminRemoveAll: '⚠️ | Only group administrators can remove all shortcuts!',
			confirmRemoveAll: '⚠️ | Delete all shortcuts? React to this message to confirm.',
			removedAll: '✅ | Removed all shortcuts in this group chat.'
		}
	},
	simsimi: {
		description: "Chat with simsimi",
		guide: "   {pn} [on | off]\n   {pn} <word>",
		text: {
			turnedOn: "✅ | Turned on simsimi successfully!",
			turnedOff: "⚙️ | Turned off simsimi successfully!",
			chatting: "💬 | Chatting with simsimi...",
			error: "❌ | Simsimi is busy, please try again later!"
		}
	},
	sorthelp: {
		description: "Sort help list",
		guide: "{pn} [name | category]",
		text: {
			savedName: "✅ | Saved sort help list by name.",
			savedCategory: "✅ | Saved sort help list by category."
		}
	},
	thread: {
		description: "Manage group chat in bot system (𝐒𝐈𝐘𝐀𝐌-𝐇𝐀𝐒𝐀𝐍 only)",
		guide: "   {pn} [find | -f] <name>\n   {pn} [ban | -b] [<tid>] <reason>\n   {pn} unban [<tid>]",
		text: {
			noPermission: "⚠️ | You don't have permission to use this feature! (𝐒𝐈𝐘𝐀𝐌-𝐇𝐀𝐒𝐀𝐍 only)",
			found: "🔎 | Found %1 group(s) matching \"%2\":\n%3",
			notFound: "❌ | No group found matching keyword: \"%1\"",
			hasBanned: "⚠️ | Group [%1 | %2] was banned before:\n» Reason: %3\n» Time: %4",
			banned: "🚫 | Banned group [%1 | %2] from using bot.\n» Reason: %3\n» Time: %4",
			notBanned: "📌 | Group [%1 | %2] is not banned.",
			unbanned: "✅ | Unbanned group [%1 | %2].",
			missingReason: "⚠️ | Ban reason cannot be empty!",
			info: "📊 ━━━ [ 𝐆𝐑𝐎𝐔𝐏 𝐈𝐍𝐅𝐎 ] ━━━\n» Box ID: %1\n» Name: %2\n» Created: %3\n» Total members: %4\n» Male: %5\n» Female: %6\n» Total Messages: %7%8"
		}
	},
	tid: {
		description: "View threadID of your group chat",
		guide: "{pn}"
	},
	tik: {
		description: "Download video/slide/audio from TikTok link",
		guide: "   {pn} [video|-v|v] <url>\n   {pn} [audio|-a|a] <url>",
		text: {
			invalidUrl: "⚠️ | Please enter a valid TikTok URL!",
			downloadingVideo: "⏳ | Downloading video: %1...",
			downloadedSlide: "✅ | Downloaded slide: %1\n%2",
			downloadedVideo: "✅ | Downloaded video: %1\nDownload Url: %2",
			downloadingAudio: "⏳ | Downloading audio: %1...",
			downloadedAudio: "✅ | Downloaded audio: %1"
		}
	},
	trigger: {
		description: "Trigger image",
		guide: "{pn} [@tag | empty]"
	},
	uid: {
		description: "View facebook user id of user",
		guide: "   {pn}\n   {pn} @tag\n   {pn} <profile link>",
		text: {
			syntaxError: "⚠️ | Please tag a user or enter a profile link, or leave empty for your UID!"
		}
	},
	unsend: {
		description: "Unsend bot's message",
		guide: "Reply to the bot message you want to unsend and type {pn}",
		text: {
			syntaxError: "⚠️ | Please reply to the bot message you want to unsend!"
		}
	},
	user: {
		description: "Manage users in bot system (𝐒𝐈𝐘𝐀𝐌-𝐇𝐀𝐒𝐀𝐍 only)",
		guide: "   {pn} [find | -f] <name>\n   {pn} [ban | -b] [<uid> | @tag | reply] <reason>\n   {pn} unban [<uid> | @tag | reply]",
		text: {
			noUserFound: "❌ | No user found matching: \"%1\"",
			userFound: "🔎 | Found %1 user(s) matching \"%2\":\n%3",
			uidRequired: "⚠️ | UID or tag required to ban user!",
			reasonRequired: "⚠️ | Reason required to ban user!",
			userHasBanned: "⚠️ | User [%1 | %2] was banned before:\n» Reason: %3\n» Date: %4",
			userBanned: "🚫 | Banned user [%1 | %2]:\n» Reason: %3\n» Date: %4",
			uidRequiredUnban: "⚠️ | UID required to unban user!",
			userNotBanned: "📌 | User [%1 | %2] is not banned.",
			userUnbanned: "✅ | Unbanned user [%1 | %2]."
		}
	},
	videofb: {
		description: "Download video/story from facebook (public)",
		guide: "   {pn} <url video/story>",
		text: {
			missingUrl: "⚠️ | Please enter a valid public Facebook video/story URL!",
			error: "❌ | An error occurred while downloading the video!",
			downloading: "⏳ | Downloading Facebook video for you...",
			tooLarge: "⚠️ | Video size is larger than 83MB and cannot be sent!"
		}
	},
	warn: {
		description: "warn member in group (3 warns = ban)",
		guide: "   {pn} @tag <reason>\n   {pn} list\n   {pn} listban\n   {pn} info [@tag | <uid>]\n   {pn} unban <uid>\n   {pn} unwarn <uid> [<warn number>]\n   {pn} warn reset",
		text: {
			list: "📑 ━━━ [ 𝐖𝐀𝐑𝐍𝐄𝐃 𝐌𝐄𝐌𝐁𝐄𝐑𝐒 ] ━━━\n%1\n\nType \"%2warn info [@tag | <uid>]\" for details.",
			listBan: "🚫 ━━━ [ 𝐁𝐀𝐍𝐍𝐄𝐃 𝐌𝐄𝐌𝐁𝐄𝐑𝐒 ] ━━━\n%1",
			listEmpty: "✅ | Your group has no warned members.",
			listBanEmpty: "✅ | Your group has no banned members.",
			invalidUid: "⚠️ | Please enter a valid UID!",
			noData: "No data",
			noPermission: "⚠️ | Only group administrators can unban members!",
			invalidUid2: "⚠️ | Please enter a valid UID to unban!",
			notBanned: "📌 | User ID %1 is not banned in this group.",
			unbanSuccess: "✅ | Successfully unbanned [%1 | %2]!",
			noPermission2: "⚠️ | Only group administrators can remove warnings!",
			invalidUid3: "⚠️ | Please enter UID or tag user to remove warning!",
			noData2: "📌 | User ID %1 has no warning records.",
			notEnoughWarn: "❌ | User %1 only has %2 warning(s).",
			unwarnSuccess: "✅ | Removed warning #%1 for [%2 | %3].",
			noPermission3: "⚠️ | Only group administrators can reset warning data!",
			resetWarnSuccess: "🔄 | Successfully reset all warning data!",
			noPermission4: "⚠️ | Only group administrators can warn members!",
			invalidUid4: "⚠️ | Tag or reply to the message of the user to warn!",
			warnSuccess: "⚠️ | Warned member %1 (%2/3 times)\n- UID: %3\n- Reason: %4\n- Date: %5\nUser reached 3 warnings and is banned. Unban via \"%6warn unban <uid>\"",
			noPermission5: "❌ | Bot needs admin privileges to kick banned members!",
			warnSuccess2: "⚠️ | Warned member %1 (%2/3 times)\n- UID: %3\n- Reason: %4\n- Date: %5\n(%6 more warning(s) until ban)",
			hasBanned: "⚠️ | Members banned due to 3 warnings:\n%1",
			failedKick: "❌ | Error kicking members:\n%1"
		}
	},
	weather: {
		description: "view the current and next 5 days weather forecast",
		guide: "{pn} <location>",
		text: {
			syntaxError: "⚠️ | Please enter a location name!",
			notFound: "❌ | Location not found: %1",
			error: "❌ | An error occurred: %1",
			today: "🌤️ ━━━ [ 𝐖𝐄𝐀𝐓𝐇𝐄𝐑 𝐅𝐎𝐑𝐄𝐂𝐀𝐒𝐓 ] ━━━\n%1\n🌡️ Low/High: %2°C - %3°C\n🌡️ Feels like: %4°C - %5°C\n🌅 Sunrise: %6\n🌄 Sunset: %7\n🌃 Moonrise: %8\n🏙️ Moonset: %9\n🌞 Day: %10\n🌙 Night: %11"
		}
	},
	ytb: {
		description: "Download video, audio or view video information on YouTube",
		guide: "   {pn} [video|-v] [<name>|<link>]\n   {pn} [audio|-a] [<name>|<link>]\n   {pn} [info|-i] [<name>|<link>]",
		text: {
			error: "❌ | An error occurred: %1",
			noResult: "❌ | No YouTube results found for: %1",
			choose: "🎬 | %1Reply with number to choose or anything to cancel.",
			downloading: "⏳ | Downloading YouTube video: %1...",
			noVideo: "⚠️ | No video found under 83MB size limit!",
			downloadingAudio: "⏳ | Downloading YouTube audio: %1...",
			noAudio: "⚠️ | No audio found under 26MB size limit!",
			info: "🎬 ━━━ [ 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐈𝐍𝐅𝐎 ] ━━━\n💠 Title: %1\n🏪 Channel: %2\n👥 Subscribers: %3\n⏱ Duration: %4\n👀 Views: %5\n👍 Likes: %6\n🆙 Uploaded: %7\n🔠 ID: %8\n🔗 Link: %9",
			listChapter: "\n📖 Chapters: %1\n"
		}
	}
};

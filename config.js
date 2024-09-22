//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUdLWjJ2VzNXaHZZT1hsU0M1amt5ZWpVbXYzeW1yOFNKQWhCWC90L2kyND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibkdIY0JGeHVxU2dCSi9CQTJ4Mk1UUTVYdzUvM1hoSUpzVVUwNTJLS0V5ST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPUEp4dWcrYjU1eGJYR2tiSGZrNXkrakREZWF6Ny9BRlluck1jQm83NEhnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3L25ITE5EMGVFY0Irbk5xRVF2L1hqRFl2YURNNzIwUHhESWZDbDBmV2lFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndFODUzbi9aUHlkS3dkdjMrZlpNYkh4WVZBMHNYMEpoa3drOXFjMmJtR289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijllb0NTL0o0SjJySXFUb2tuZWRNTFM5UWFVWExCclpVUXlWQXdtNXV4bDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0djWkxHWXlIUjl6elRxdFpZQkFDdXl4NFlWZW1VbzJ4VkluV2tOSFgzaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUkVDcnA2Ym9hSEtIRkQzS2FGVU1xY25MSzNDWHpIcUlRYzNRcndTRlJ6WT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllmRkxtZzkvQVJqSUVLcVRJa24rbG1KTGt6L1hHaVNGNDg5VUZmSGpFZWtFbXlSRzBPZ0RxL2dQeFIwTTN5MXJLMVE3VDFOR3R3bXV5eXdudWtzNkF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc0LCJhZHZTZWNyZXRLZXkiOiJNL2VEbE5lNjAyQ1pFYzYwY01lMVM0RVo4MWxta1pKSzRMREhYS3YxK0lvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzYyMTE0NTY1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjQwQjY2NDhCNDVBRkZBMzcyRDI5NDhGMTA3NzUzMjQwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjcwMDAxODh9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzYyMTE0NTY1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjdGNzExMkJFOTJDODRDNDlERkI2OEIxMzM5MjgwNTM3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjcwMDAxODh9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzYyMTE0NTY1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkQ0Q0JDRDdERTcwQTI4OTNGMjJDQUNGNzQ2NzQxQjk5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjcwMDAxOTB9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzYyMTE0NTY1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkYxQ0NERUU3M0RDMTE3Qzc1MEQxMjY5MTNENThDMTIwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjcwMDAxOTB9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjJUOWZORW5JUnBpc0JaRVQxNUF1d0EiLCJwaG9uZUlkIjoiZmVhOTc4YWMtNjBjYS00NDVjLTllZGMtZWQ0ZWYyNDczODViIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNaRFVPTzFrQXQzeXdIbXl3UVMybk1kbC9ETT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKN2wyQ1VPSGxnQ01FcmxWM2VYWmdzOUhtRG89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUlIyWk1GNDMiLCJtZSI6eyJpZCI6Ijk0NzYyMTE0NTY1OjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoibiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTjZkeWJJREVPemN2N2NHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQllKWGp4QzFEd3dneHQrUUxFdXdBOHRWdUxBdVVXa1hISlEzMlZDNzhUZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoibWVLSFVITlRYejdoKzk4YXpZZ0c2R3FYT09HTTRFRVllNEhidW92aHBvRXZaU3E3cGRFVEdtTkF2eHVTKzZnYlBlTU1iWWR0ejNhRjJFeVdxSlpLQkE9PSIsImRldmljZVNpZ25hdHVyZSI6IjgyT1N1b3lMWHphamlWOWg0TlllazhLZ1R4NlcxTGcrVjlFeXRYZDRQQjV2RGIrNWhSUWRxSjFBVytWczNGTFdYdFNyRzhSYWx4TGR6SjVYRXZOdURnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjIxMTQ1NjU6NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRV0NWNDhRdFE4TUlNYmZrQ3hMc0FQTFZiaXdMbEZwRnh5VU45bFF1L0U0In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI3MDAwMTg2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFmcCJ9";
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

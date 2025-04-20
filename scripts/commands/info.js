module.exports.config = {
    name: "admin",
    version: "1.0.0",
    permission: 0,
    credits: "Weird Kenji",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5
};

module.exports.run = async function({ api, event }) {
    const moment = require("moment-timezone");
    const timeNow = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");

    return api.sendMessage(`
╭───〔 ⚡ About Me 〕───╮
│
│ 📝 Name           : 𝐖𝐞𝐢𝐫𝐝 𝐊𝐞𝐧𝐣𝐢
│ 📅 Age            : 𝟏𝟖+
│ 🎂 Date of Birth  : 𝟎𝟒-𝟎𝟔
│ ☪️ Religion       : 𝐈𝐬𝐥𝐚𝐦
│ 🚹 Gender         : 𝐌𝐚𝐥𝐞
│ 🎓 Work           : 𝐒𝐭𝐮𝐝𝐞𝐧𝐭
│ 💔 Relationship   : 𝐒𝐢𝐧𝐠𝐥𝐞
│ 🏠 Address        : 𝐃𝐡𝐚𝐤𝐚, 𝐆𝐚𝐳𝐢𝐩𝐮𝐫
│ 🎨 Fav Color      : 𝐁𝐥𝐮𝐞
│ 🌐 Facebook Link  : fb.com/profile.php?id=61572891756852
│
╰──〔 ⏰ Time: ${timeNow} 〕──╯
`, event.threadID);
};

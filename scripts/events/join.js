if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
  api.changeNickname(`[ ${global.config.PREFIX} ] • ➠${(!global.config.BOTNAME) ? "Weird Kenji" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());

  return api.sendMessage(
    "চলে এসেছি আমি তোমাদের মাঝে Weird Kenji এর জন্য gf খুঁজতে🤭!",
    event.threadID,
    () => api.sendMessage(
      {
        body: `Weird Kenji CONNECTED«\n\nআসসালামু আলাইকুম ☘️
<------------------------------>  
বট যুক্ত হয়েছে সফলভাবে !!!

এই গ্রুপে এখন থেকে বট চালু ✅
<------------------------------>

কমান্ড দেখতে লিখো 👉 ${global.config.PREFIX}help
সব কমান্ড দেখতে 👉 ${global.config.PREFIX}command

উদাহরণঃ
${global.config.PREFIX}admin (তথ্য)
${global.config.PREFIX}islam (ভিডিও)
${global.config.PREFIX}tik (লিংক)
${global.config.PREFIX}fbvideo (লিংক)

<------------------------------>

বট নিয়ে কোনো অভিযোগ থাকলে বা যোগাযোগ করতে চাও?

**ডেভেলপার:** Weird Kenji

🟣 ফেসবুকঃ  
https://www.facebook.com/profile.php?id=61572891756852

🟢 ইমেইলঃ  
weirdkenji@gmail.com`
      },
      threadID
    )
  );
}

const TelegramBot = require("node-telegram-bot-api");

const TOKEN = "6875347652:AAGdW13eN3clZjTUmI6t-f9d2IX-xJja9w4";

const bot = new TelegramBot(TOKEN, { polling: true });

const remenberData = [
  "Say — Alhamdulillah",
  "Say — Astag’firullah",
  "Say — Allahu Akbar",
  "Say — Astag’firullah va atubu ilayhi",
  "Say — Astag’firullah al aziym",
  "Say — Allahumma solli a’la sayyidina Muhammad",
  "Say — Inna lillahi va inna ilaihi rojiun",
  "Say — Hasbunallohu ve ne’mal vakil",
  "Say — Subhanallahiyl a’ziym",
  "Say — Subhanallahi va bixamdixi",
  "Say — Subhanallah",
  "Say — Bismillah",
  "Say — La ilaha illa Allah ☝🏻 Muhammad ﷺ Rasul Allah",
  "Say — La x’aula va la quvvata illa billah",
  "Say — La ilaha illa anta subhanaka inniy kuntu minaz zolimiyn",
];

bot.onText(/\/start/, async (msg) => {
    const chatId = msg.from.id;
    const name = msg.from.first_name;
    await bot.sendMessage(chatId, `Assalomu alaykum ${name}`);
    await bot.sendMessage(
      chatId,
      `Men siz doimiy zikir qilib turishingiz kerak bo'lgan kalimalarni eslatib turaman`
    );
    
    async function sendRemenberData(chatId) {
      for (const el of remenberData) {
        await bot.sendMessage(chatId, `${el}`);
      }
    }
    await sendRemenberData(chatId);
  
    setInterval(async () => {
      remenberData.forEach(async (el) => {
        await bot.sendMessage(chatId, `${el}`);
      });
    }, 3600000);
  });
  

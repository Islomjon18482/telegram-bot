const TelegramBot = require("node-telegram-bot-api");

const TOKEN = "6352030129:AAGkgupV_SKYd0DlPBE1uGKVKHcStBkxwUI";

const bot = new TelegramBot(TOKEN, { polling: true });

const remenberData = [];

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const name = msg.from.first_name;
    bot.sendMessage(chatId, `Assalomu alaykum ${name}`);
    bot.sendMessage(chatId, "MindfulMate botiga xush kelibsiz");
    bot.sendMessage(
        chatId,
        "Bu bot sizga har kuni zikir qilishingiz zarur bo'lgan kalimalarni eslatib turadi"
    );
    bot.sendMessage(chatId, "Qaysi zikirlarni eslatib turishimni hohlaysiz?", {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: " La ilaha illa Allah ☝🏻 Muhammad ﷺ Rasul Allah",
                        callback_data: "button1",
                    },
                ],
                [
                    {
                        text: " La x’aula va la quvvata illa billah",
                        callback_data: "button2",
                    },
                ],
                [{ text: " Alhamdulillah", callback_data: "button3" }],
                [{ text: " Astag’firullah", callback_data: "button4" }],
                [{ text: " Allahu Akbar", callback_data: "button5" }],
                [{ text: " Astag’firullah al aziym", callback_data: "button6" }],
                [
                    {
                        text: " Allahumma solli a’la sayyidina Muhammad",
                        callback_data: "button7",
                    },
                ],
                [
                    {
                        text: " Inna lillahi va inna ilaihi rojiun",
                        callback_data: "button8",
                    },
                ],
                [{ text: " ZIKIRNI BOSHLASH", callback_data: "start" }],
            ],
        },
    });
});

// bot.on("message", (msg) => {
//     console.log(msg);
// });

bot.on("callback_query", (callbackQuery) => {
    const action = callbackQuery.data;
    const chatId = callbackQuery.message.chat.id;
    switch (action) {
        case "button1":
            bot.sendMessage(chatId, "Yana qaysi kalimani tanlaysiz?");
            remenberData.push(" La ilaha illa Allah ☝🏻 Muhammad ﷺ Rasul Allah");
            break;
        case "button2":
            bot.sendMessage(
                chatId,
                "Eslatmalarani ishga tushirish uchun ZIKIRNI BOSHLASH tugmasini bosin"
            );
            remenberData.push(" La x’aula va la quvvata illa billah");
            break;
        case "button3":
            bot.sendMessage(
                chatId,
                "Eslatmalarani ishga tushirish uchun ZIKIRNI BOSHLASH tugmasini bosin"
            );
            remenberData.push(" Alhamdulillah");
            break;
        case "button4":
            bot.sendMessage(
                chatId,
                "Eslatmalarani ishga tushirish uchun ZIKIRNI BOSHLASH tugmasini bosin"
            );
            remenberData.push(" Astag’firullah");
            break;
        case "button5":
            bot.sendMessage(
                chatId,
                "Eslatmalarani ishga tushirish uchun ZIKIRNI BOSHLASH tugmasini bosin"
            );
            remenberData.push(" Allahu Akbar");
            break;
        case "button6":
            bot.sendMessage(
                chatId,
                "Eslatmalarani ishga tushirish uchun ZIKIRNI BOSHLASH tugmasini bosin"
            );
            remenberData.push(" Astag’firullah al aziym");
            break;
        case "button7":
            bot.sendMessage(
                chatId,
                "Eslatmalarani ishga tushirish uchun ZIKIRNI BOSHLASH tugmasini bosin"
            );
            remenberData.push(" Allahumma solli a’la sayyidina Muhammad");
            break;
        case "button8":
            bot.sendMessage(
                chatId,
                "Eslatmalarani ishga tushirish uchun ZIKIRNI BOSHLASH tugmasini bosin"
            );
            remenberData.push(" Inna lillahi va inna ilaihi rojiun");
            break;
        case "start":
            bot.sendMessage(
                chatId,
                `Bu kalimalarni har 12 soatda sizga eslatib turaman`
            );
            remenberData.forEach((el)=>{
                setInterval(sendReminder(chatId, el), 12*60*60*1000)
                remData(chatId);
            })
            break;
    }
});

function sendReminder(chatId ,text) { 
    bot.sendMessage(chatId, text);
  }

bot.onText(/\/stop/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, `Bot to'xtatildi. Uni qayta ishga tushurish uchun /start buyrug'ini bosing`);
    stopBot();
});


async function remData(chatId) {
    bot.sendMessage(chatId, `Qani ketdik. Bismillah`);
    remenberData.forEach((el) => {
        bot.sendMessage(chatId, `${el}`);
    });
}

function startBot() {
    bot.startPolling();
}

function stopBot() {
    bot.stopPolling();
}

startBot();

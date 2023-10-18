// discord.jsライブラリの中から必要な設定を呼び出し、変数に保存します
const { Client, Events, GatewayIntentBits } = require('discord.js');

// 設定ファイルからトークン情報を呼び出し、変数に保存します
const { token } = require('./config.json');

const client = new Client({ //インテントを設定してクライアントを定義する
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
});


// ログインします
client.login(token);

// クライアントオブジェクトが準備OKとなったとき一度だけ実行されます
client.once(Events.ClientReady, c => {
    console.log(`準備OKです! ${c.user.tag}がログインします。`);
});

//MessageCreateEvent処理(サーバーにメッセージが送信された時の処理)
client.on(Events.MessageCreate, async message => {//messageに作られたmessageとかいろいろ入る
    if (message.author.bot) {//メッセージの送信者がBOTなら
        return;//returnしてこの先の処理をさせない。
    }
    if (message.content.includes("https://twitter.com")) {
        var https = String(message.content);
        var vx = "https://vx";

        var https2 = https.slice(8);
        var link = vx + https2;
        await message.channel.send(link);
    }
    if (message.content.includes("https://x.com")) {
        var https = String(message.content);
        var vx = "https://vxtwitter";

        var https2 = https.slice(9);
        var link = vx + https2;
        console.log(link);
        await message.channel.send(link);
    }
});

const { DiscordTogether } = require("discord-together");

client.discordTogether = new DiscordTogether(client);

client.on("message", async message => {
  if (message.content === "g.ytt") {
    if (message.member.voice.channel) {
      client.discordTogether
        .createTogetherCode(message.member.voice.channelID, "youtube")
        .then(async invite => {
          return message.inlineReply(
            `<a:check:844812514529509386> YouTube Together Başlatıldı! \n<:codesty_link:844468557605240862> ${invite.code}`
          );
        });
    }
  }
});

client.on("message", async message => {
  if (message.content === "g.poker") {
    if (message.member.voice.channel) {
      client.discordTogether
        .createTogetherCode(message.member.voice.channelID, "poker")
        .then(async invite => {
          return message.inlineReply(
            `<a:check:844812514529509386> Poker Başlatıldı! \n<:codesty_link:844468557605240862> ${invite.code}`
          );
        });
    }
  }
});

client.on("message", async message => {
  if (message.content === "g.chess") {
    if (message.member.voice.channel) {
      client.discordTogether
        .createTogetherCode(message.member.voice.channelID, "chess")
        .then(async invite => {
          return message.inlineReply(
            `<a:check:844812514529509386> Chess Başlatıldı! \n<:codesty_link:844468557605240862> ${invite.code}`
          );
        });
    }
  }
});

client.on("message", async message => {
  if (message.content === "g.betrayal") {
    if (message.member.voice.channel) {
      client.discordTogether
        .createTogetherCode(message.member.voice.channelID, "betrayal")
        .then(async invite => {
          return message.inlineReply(
            `<a:check:844812514529509386> Betrayal Başlatıldı! \n<:codesty_link:844468557605240862> ${invite.code}`
          );
        });
    }
  }
});

client.on("message", async message => {
  if (message.content === "g.fishing") {
    if (message.member.voice.channel) {
      client.discordTogether
        .createTogetherCode(message.member.voice.channelID, "fishing")
        .then(async invite => {
          return message.inlineReply(
            `<a:check:844812514529509386> Fishing Başlatıldı! \n<:codesty_link:844468557605240862> ${invite.code}`
          );
        });
    }
  }
});

const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const client = new Discord.Client();
const { MessageEmbed } = require('discord.js');

const prefix = ("&");
client.on("ready", async () =>{
    console.log(`${client.user.username} is online!`);
    client.user.setActivity("", {type: "WATCHING"});

});



client.login(botconfig.token)
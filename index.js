const { REST, Routes } = require('discord.js');
const Discord = require('discord.js');

const { Client } = require('discord.js');
const client = new Client();


client.on('ready', () => {
    console.log(`I am login in ${client.user.tag}`);
})
client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

client.on("message", (message) => {
	if(message.content === "s.tpstart"){
setInterval(function(){
	let log = "1045966681253613679"
							const logch = client.channels.cache.get(log);
message.channel.send("tp!modstarts");
	
	const collector = message.channel.createMessageCollector((m) => m.author.id === "923841520191283231" && ['PONG'].includes(m.content), {
            time: 2000,
            max: 1
        });
        collector.on('collect', (m) => {
            const confirm = m.content === 'PONG';
            collector.stop();
            if (confirm) {
							
											logch.send('✅ the bot is online :) ');
						}
				});
					
        collector.on('end', (collected, reason) => {
            if (reason === 'time')
                return logch.send(':x: bot is offline :( ');

    })
},300000);


	}
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.TOKEN);
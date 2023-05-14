const { MessageAttachment, MessageEmbed, Client, MessageButton, MessageActionRow } = require("discord.js");
const { convertTime } = require('../../utils/convert.js');
const { trackStartEventHandler } = require("../../utils/functions");
const db = require("../../schema/setup");

module.exports = {
	name: "playerStart",
	/**
	 * 
	 * @param {Client} client 
	 * @param {*} player 
	 * @param {*} track 
	 */
	run: async (client, player, track) => {
		let guild = client.guilds.cache.get(player.guild);
		if (!guild) return;
		let channel = guild.channels.cache.get(player.text);
		if (!channel) return;
		let data = await db.findOne({ Guild: guild.id });
		if (data && data.Channel) {
			let textChannel = guild.channels.cache.get(data.Channel);
			const id = data.Message;
			if (channel === textChannel) {
				return await trackStartEventHandler(id, textChannel, player, track, client);
			}
   
      else {
				await trackStartEventHandler(id, textChannel, player, track, client);
			};
    
		}
		const emojiplay = client.emoji.play;

const { Canvas, resolveImage } = require('canvas-constructor');
const canvas = require('canvas')
const { registerFont } = require('canvas');
registerFont("./fonts/Open Sans.ttf", { family: 'Open Sans' });
registerFont("./fonts/Montserrat.ttf", { family: 'Ope' });

    const nail = player.current.thumbnail || `${`https://img.youtube.com/vi/${player.current.identifier}/hqdefault.jpg`}`;
    
  const titlee = player.current.title
 let namees = titlee.toString().split(' ').slice(0, 5).join(` `);
          const imge = await canvas.loadImage('./musicplayer.png');
   const imgge = await canvas.loadImage(nail);
    let imagee = new Canvas(680, 220)
    .printImage(imge, 0, 0, 680, 220)
    .setColor("#FFFFFF")
      .setTextFont('20px Open Sans')
      .setTextAlign("center")
    .printWrappedText(namees, 470, 55)
      .setTextFont('14px Ope')
      .printWrappedText(player.current.author, 470, 85)
    // .printRectangle(81, 26,208, 116)
    .printImage(imgge, 71, 20,218, 120)
      .setTextFont('14px Ope')
      .printWrappedText(`${player.current.isStream ? 'LIVE' : convertTime(player.current.length)}`, 613, 180)
    // .setColor("#000000")
    .toBuffer();


 const file = new MessageAttachment(imagee, 'spotify.png');
    
		// const main = new MessageEmbed()
		// 	.setAuthor({ name: track.requester.tag, iconURL: track.requester.displayAvatarURL() })
		// 	.setDescription(`${emojiplay} Now Playing - [${track.title}](${track.uri}) - \`[ ${track.isStream ? '[**◉ LIVE**]' : convertTime(player.current.length)} ]\``)
		// 	.setColor(client.embedColor)
		// 	.setTimestamp()
		// 	.setThumbnail(`${track.thumbnail ? track.thumbnail : `https://img.youtube.com/vi/${player.current.identifier}/hqdefault.jpg`}`)
			
		client.channels.cache.get(player.text)?.send({files: [file]}).then(x => player.data.set("message", x));
    // console.log(player.current.identifier)
		await player.data.set("autoplaySystem", player.current.identifier);
	}
};

const { Command } = require('klasa');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			cooldown: 3,
			aliases: ['q'],
			description: 'Shows information on a Quest. (Work in Progress)',
			usage: '<questName:str>'
		});
	}

	async run(msg, [questName]) {
		switch (questName
			.replace("'", '')
			.replace(/\s+/g, '')
			.replace(/\./g, '')
			.toUpperCase()) {
			case 'ASOULSBANE':
				return msg.send(this.questInfo(ASOULSBANE));
				break;
			case 'ANOTHERSLICEOFHAM':
				return msg.send(this.questInfo(ANOTHERSLICEOFHAM));
				break;
			case 'BARCRAWL':
			case 'ALFREDGRIMHANDSBARCRAWL':
				return msg.send(this.questInfo(BARCRAWL));
				break;
			case 'ATAILOFTWOCATS':
			case 'ATAILOF2CATS':
			case 'TAILOF2CATS':
			case 'TAILOFTWOCATS':
				return msg.send(this.questInfo(ATAILOFTWOCATS));
				break;
			case 'ANIMALMAGNETISM':
			case 'ANIMALMAG':
				return msg.send(this.questInfo(ANIMALMAGNETISM));
				break;
			case 'BEARYOURSOUL':
				return msg.send(this.questInfo(BEARYOURSOUL));
				break;
			case 'ARCHITECTURALALLIANCE':
				return msg.send(this.questInfo(ARCHITECTURALALLIANCE));
				break;
			case 'BETWEENAROCK':
			case 'BETWEENAROCK...':
				return msg.send(this.questInfo(BETWEENAROCK));
				break;
			case 'BIOHAZARD':
				return msg.send(this.questInfo(BIOHAZARD));
				break;
			case 'BIGCHOMPYBIRDHUNTING':
			case 'CHOMPYBIRDHUNTING':
				return msg.send(this.questInfo(BIGCHOMPYBIRDHUNTING));
				break;
			case 'CABINFEVER':
				return msg.send(this.questInfo(CABINFEVER));
				break;
			case 'BLACKKNIGHTSFORTRESS':
				return msg.send(this.questInfo(BLACKKNIGHTSFORTRESS));
				break;
			case 'CLOCKTOWER':
				return msg.send(this.questInfo(CLOCKTOWER));
				break;
			case 'CLIENTOFKOUREND':
				return msg.send(this.questInfo(CLIENTOFKOUREND));
				break;
			case 'CONTACT':
			case 'CONTACT!':
				return msg.send(this.questInfo(CONTACT));
				break;
			case 'COLDWAR':
				return msg.send(this.questInfo(COLDWAR));
				break;
			case 'CURSEOFTHEEMPTYLORD':
				return msg.send(this.questInfo(CURSEOFTHEEMPTYLORD));
				break;
			case 'DARKNESSOFHALLOWVALE':
				return msg.send(this.questInfo(DARKNESSOFHALLOWVALE));
				break;
			case 'CREATUREOFFENEKNSTRAIN':
				return msg.send(this.questInfo(CREATUREOFFENEKNSTRAIN));
				break;
			case 'DEATHPLATEAU':
				return msg.send(this.questInfo(DEATHPLATEAU));
				break;
			case 'DEATHTOTHEDORGESHUUN':
			case 'DEATHTOTHEDORG':
			case 'DEATHTOTHEDORGRESHUN':
				return msg.send(this.questInfo(DEATHTOTHEDORGESHUUN));
				break;
			case 'DEMONSLAYER':
				return msg.send(this.questInfo(DEMONSLAYER));
				break;
			case 'DEVIOUSMINDS':
				return msg.send(this.questInfo(DEVIOUSMINDS));
				break;
			case 'COOKSASSISTANT':
			case 'COOKASSISTANT':
				return msg.send(this.questInfo(COOKSASSISTANT));
				break;
			case 'DORICSQUEST':
				return msg.send(this.questInfo(DORICSQUEST));
				break;
			case 'DESERTTREASURE':
				return msg.send(this.questInfo(DESERTTREASURE));
				break;
			case 'DRAGONSLAYER':
				return msg.send(this.questInfo(DRAGONSLAYER));
				break;
			case 'DREAMMENTOR':
				return msg.send(this.questInfo(DREAMMENTOR));
				break;
			case 'DWARFCANNON':
				return msg.send(this.questInfo(DWARFCANNON));
				break;
			case 'DRUIDICRITUAL':
				return msg.send(this.questInfo(DRUIDICRITUAL));
				break;
			case 'EADGARSRUSE':
			case 'EDGARSRUSE':
				return msg.send(this.questInfo(EADGARSRUSE));
				break;
			case 'EAGLESPEAK':
			case 'EAGLEPEAK':
				return msg.send(this.questInfo(EAGLESPEAK));
				break;
			case 'ELEMENTALWORKSHOPI':
			case 'ELEMENTALWORKSHOP1':
			case 'ELEMENTALWORKSHOP':
				return msg.send(this.questInfo(ELEMENTALWORKSHOPI));
				break;
			case 'ERNESTTHECHICKEN':
				return msg.send(this.questInfo(ERNESTTHECHICKEN));
				break;
			case 'ENLIGHTENEDJOURNEY':
				return msg.send(this.questInfo(ENLIGHTENEDJOURNEY));
				break;
			case 'ENAKHRASLAMENT':
				return msg.send(this.questInfo(LAMENT));
				break;
			case 'ELEMENTALWORKSHOPII':
			case 'ELEMENTALWORKSHOP2':
				return msg.send(this.questInfo(ELEMENTALWORKSHOPII));
				break;
			case 'THEEYESOFGLOUPHRIE':
			case 'EYESOFGLOUPHRIE':
				return msg.send(this.questInfo(THEEYESOFGLOUPHRIE));
				break;
			case 'ENTERTHEABYSS':
				return msg.send(this.questInfo(ENTERTHEABYSS));
				break;
			case 'FAIRYTALEIICUREAQUEEN':
			case 'FAIRYTALEPART2':
			case 'FAIRYTALE2':
			case 'FAIRYTALEPARTII':
			case 'FAIRYTALEII':
				return msg.send(this.questInfo(FAIRYTALEIICUREAQUEEN));
				break;
			case 'FAMILYCREST':
				return msg.send(this.questInfo(FAMILYCREST));
				break;
			case 'FAIRYTALEIGROWINGPAINS':
			case 'FAIRYTALEPART1':
			case 'FAIRYTALE1':
			case 'FAIRYTALEPARTI':
				return msg.send(this.questInfo(FAIRYTALEIGROWINGPAINS));
				break;
			case 'FIGHTARENA':
				return msg.send(this.questInfo(FIGHTARENA));
				break;
			case 'FISHINGCONTEST':
				return msg.send(this.questInfo(FISHINGCONTEST));
				break;
			case 'FAMILYPEST':
				return msg.send(this.questInfo(FAMILYPEST));
				break;
			case 'FORGETTABLETALEOFADRUNKENDWARF':
			case 'FORGETTABLETALE':
				return msg.send(this.questInfo(FORGETTABLETALE));
				break;
			case 'GERTRUDESCAT':
				return msg.send(this.questInfo(GERTRUDESCAT));
				break;
			case 'GARDENOFTRANQUILLITY':
			case 'GARDENOFTRANQUILITY':
				return msg.send(this.questInfo(GARDENOFTRANQ));
				break;
			case 'GOBLINDIPLOMACY':
				return msg.send(this.questInfo(GOBLINDIPLOMACY));
				break;
			case 'GHOSTSAHOY':
				return msg.send(this.questInfo(GHOSTSAHOY));
				break;
			case 'THEGRANDTREE':
			case 'GRANDTREE':
				return msg.send(this.questInfo(THEGRANDTREE));
				break;
			case 'HAUNTEDMINE':
				return msg.send(this.questInfo(HAUNTEDMINE));
				break;
			case 'GRIMTALES':
				return msg.send(this.questInfo(GRIMTALES));
				break;
			case 'THEGOLEM':
				return msg.send(this.questInfo(THEGOLEM));
				break;
			case 'HAZEELCULT':
				return msg.send(this.questInfo(HAZEELCULT));
				break;
			case 'HEROESQUEST':
			case 'HEROSQUEST':
				return msg.send(this.questInfo(HEROESQUEST));
				break;
			case 'HORRORFROMTHEDEEP':
				return msg.send(this.questInfo(HORRORFROMTHEDEEP));
				break;
			case 'HOLYGRAIL':
				return msg.send(this.questInfo(HOLYGRAIL));
				break;
			case 'IMPCATCHER':
				return msg.send(this.questInfo(IMPCATCHER));
				break;
			case 'ICHLARINSLITTLEHELPER':
				return msg.send(this.questInfo(LITTLEHELPER));
				break;
			case 'JUNGLEPOTION':
				return msg.send(this.questInfo(JUNGLEPOTION));
				break;
			case 'INAIDOFTHEMYREQUE':
				return msg.send(this.questInfo(AIDOFMYREQUE));
				break;
			case 'KINGSRANSOM':
				return msg.send(this.questInfo(KINGSRANSOM));
				break;
			case 'INSEARCHOFTHEMYREQUE':
				return msg.send(this.questInfo(SEARCHOFMYREQUE));
				break;
			case 'LEGENDSQUEST':
				return msg.send(this.questInfo(LEGENDSQUEST));
				break;
			case 'LAIROFTARNRAZORLOR':
				return msg.send(this.questInfo(TARN));
				break;
			case 'LOSTCITY':
				return msg.send(this.questInfo(LOSTCITY));
				break;
			case 'LUNARDIPLOMACY':
				return msg.send(this.questInfo(LUNARDIPLOMACY));
				break;
			case 'MAKINGHISTORY':
				return msg.send(this.questInfo(MAKINGHISTORY));
				break;
			case 'MERLINSCRYSTAL':
				return msg.send(this.questInfo(MERLINSCRYSTAL));
				break;
			case 'MONKSFRIEND':
				return msg.send(this.questInfo(MONKSFRIEND));
				break;
			case 'MONKEYMADNESSII':
			case 'MM2':
			case 'MONEYMADNESS2':
				return msg.send(this.questInfo(MONKEYMADNESSII));
				break;
			case 'MONKEYMADNESS':
			case 'MM':
			case 'MONEYMADNESS1':
				return msg.send(this.questInfo(MONKEYMADNESS));
				break;
			case 'MISTHALINMYSTERY':
				return msg.send(this.questInfo(MISTHALINMYSTERY));
				break;
			case 'MOUNTAINDAUGHTER':
				return msg.send(this.questInfo(MOUNTAINDAUGHTER));
				break;
			case 'MOURNINGSENDPARTI':
			case 'MOURNINGSEND':
			case 'MOURNINGSENDPART1':
				return msg.send(this.questInfo(MOURNINGSENDPARTI));
				break;
			case 'MURDERMYSTERY':
				return msg.send(this.questInfo(MURDERMYSTERY));
				break;
			case 'MOURNINGSENDPART2':
			case 'MOURNINGSEND2':
			case 'MOURNINGSENDPARTII':
				return msg.send(this.questInfo(MOURNINGSENDPARTI));
				break;
			case 'NATURESPIRIT':
				return msg.send(this.questInfo(NATURESPIRIT));
				break;
			case 'MYARMSBIGADVENTURE':
				return msg.send(this.questInfo(MYARM));
				break;
			case 'OBSERVATORYQUEST':
				return msg.send(this.questInfo(OBSERVATORYQUEST));
				break;
			case 'OLAFSQUEST':
				return msg.send(this.questInfo(OLAFSQUEST));
				break;
			case 'ONESMALLFAVOUR':
				return msg.send(this.questInfo(ONESMALLFAVOUR));
				break;
			case 'PIRATESTREASURE':
				return msg.send(this.questInfo(PIRATESTREASURE));
				break;
			case 'PRIESTINPERIL':
				return msg.send(this.questInfo(PRIESTINPERIL));
				break;
			case 'PLAGUECITY':
				return msg.send(this.questInfo(PLAGUECITY));
				break;
			case 'PRINCEALIRESCUE':
				return msg.send(this.questInfo(PRINCEALIRESCUE));
				break;
			case 'RAG&BONEMANWISHLIST':
			case 'RAGANDBONEMANWISHLIST':
				return msg.send(this.questInfo(WISHLIST));
				break;
			case 'RAGANDBONEMAN':
				return msg.send(this.questInfo(RAGANDBONEMAN));
				break;
			case 'RATCATCHERS':
				return msg.send(this.questInfo(RATCATCHERS));
				break;
			case 'REGICIDE':
				return msg.send(this.questInfo(REGICIDE));
				break;
			case 'RESTLESSGHOST':
			case 'THERESTLESSGHOST':
				return msg.send(this.questInfo(RESTLESSGHOST));
				break;
			case 'RECRUITMENTDRIVE':
				return msg.send(this.questInfo(RECRUITMENTDRIVE));
				break;
			case 'ROMEOANDJULIET':
			case 'ROMEO&JULIET':
				return msg.send(this.questInfo(ROMEOANDJULIET));
				break;
			case 'ROVINGELVES':
				return msg.send(this.questInfo(ROVINGELVES));
				break;
			case 'ROYALTROUBLE':
				return msg.send(this.questInfo(ROYALTROUBLE));
				break;
			case 'RFD':
			case 'RECIPEFORDISASTER':
				return msg.send(this.questInfo(RFD));
				break;
			case 'CORSAIRCURSE':
			case 'THECORSAIRCURSE':
				return msg.send(this.questInfo(CORSAIRCURSE));
				break;
			case 'KNIGHTSSWORD':
			case 'THEKNIGHTSSWORD':
				return msg.send(this.questInfo(KNIGHTSSWORD));
				break;
			case 'RUNEMYSTERIES':
				return msg.send(this.questInfo(RUNEMYSTERIES));
				break;
			case 'SHEEPSHEARER':
				return msg.send(this.questInfo(SHEEPSHEARER));
				break;
			case 'SHIELDOFARRAV':
				return msg.send(this.questInfo(SHIELDOFARRAV));
				break;
			case 'VAMPIRESLAYER':
				return msg.send(this.questInfo(VAMPIRESLAYER));
				break;
			case 'WITCHSPOTION':
				return msg.send(this.questInfo(WITCHSPOTION));
				break;
			case 'BONEVOYAGE':
				return msg.send(this.questInfo(BONEVOYAGE));
				break;
			case 'CREATUREOFFENKENSTRAIN':
				return msg.send(this.questInfo(CREATUREOFFENKENSTRAIN));
				break;
			case 'DEPTHSOFDESPAIR':
			case 'THEDEPTHSOFDESPAIR':
				return msg.send(this.questInfo(DEPTHSOFDESPAIR));
				break;
			case 'DIGSITE':
			case 'THEDIGSITE':
				return msg.send(this.questInfo(DIGSITE));
				break;
			case 'THEFEUD':
				return msg.send(this.questInfo(THEFEUD));
				break;
			case 'FREMISLES':
			case 'FREMENNIKISLES':
			case 'THEFREMENNIKISLES':
				return msg.send(this.questInfo(FREMISLES));
				break;
			default:
				return msg.send("I don't have the data for that quest, sorry.");
		}
	}
	questInfo(quest) {
		const embed = {
			title: quest.name,
			description: quest.description,
			url: quest.url,
			thumbnail: { url: quest.thumbnail },
			fields: [
				{
					name: '**Difficulty**',
					value: quest.difficulty,
					inline: true
				},
				{
					name: '**Length**',
					value: quest.length,
					inline: true
				},
				{
					name: 'Requirements',
					value: quest.requirements.join('\n'),
					inline: true
				},
				{
					name: 'Rewards',
					value: quest.rewards.join('\n'),
					inline: true
				},
				{
					name: 'Trivia',
					value: quest.trivia[Math.floor(Math.random() * quest.trivia.length)],
					inline: true
				}
			]
		};
		return { embed: embed };
	}

};

const ASOULSBANE = {
		thumbnail: 'https://vignette2.wikia.nocookie.net/2007scape/images/0/0a/A_Soul%27s_Bane.png/revision/latest/scale-to-width-down/300?cb=20170212062606',
		url: 'http://oldschoolrunescape.wikia.com/wiki/A_Soul%27s_Bane',
		name: "A Soul's Bane",
		questType: 'Normal',
		length: 'Medium',
		difficulty: 'Novice',
		description:
      'A rift in the ground has opened up releasing all manner of strange monsters into the lands near the Digsite. A sorrowful mother waits at the top of the rift for her long lost son, who has been missing for 25 years. You can journey down into the rift for an adventure full of twisted monsters all created from the mind of a young boy driven to madness through incarceration.',
		startPoint: 'Go east of [Varrock](http://oldschoolrunescape.wikia.com/wiki/Varrock), through the gate by the [earth altar](http://oldschoolrunescape.wikia.com/wiki/Earth_altar) and just south of there, speak to [Launa](http://oldschoolrunescape.wikia.com/wiki/Launa).',
		rewards: [
			'1 [Quest Point](http://oldschoolrunescape.wikia.com/wiki/Quest_Point)',
			'500 [Defence](http://oldschoolrunescape.wikia.com/wiki/Defence) XP',
			'500 [Hitpoints](http://oldschoolrunescape.wikia.com/wiki/Hitpoints) XP',
			'500 [GP](http://oldschoolrunescape.wikia.com/wiki/Coins)',
			'Access to [Dungeon of Tolna](http://oldschoolrunescape.wikia.com/wiki/Tolna%27s_rift)'
		],
		requirements: ['Ability to kill level 45+ enemies.'],
		trivia: ["The map of the final room resembles a brain, possibly representing Tolna's troubled mind as the player fights him to bring things back to normal."],
		freeToPlay: !1
	},
	ANOTHERSLICEOFHAM = {
		thumbnail: 'https://vignette2.wikia.nocookie.net/2007scape/images/5/5e/Another_Slice_Of_H.A.M.png/revision/latest/scale-to-width-down/300?cb=20160822171632',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Another_Slice_of_H.A.M.',
		name: 'Another Slice of H.A.M.',
		questType: 'Normal',
		length: 'Medium',
		difficulty: 'Intermediate',
		description:
      "The dwarves are building a new underground rail link between their city of Keldagrim and the cave goblins' Dorgesh-Kaan, but work is being held up by the discovery of ancient goblin artifacts, and they need the help of a qualified archaeologist. Helping them out should be simple enough - unless you stumble upon another H.A.M. plot against the city.",
		startPoint: "Go to [Ur-tag](http://oldschoolrunescape.wikia.com/wiki/Ur-tag)'s house in [Dorgesh-Kaan](http://oldschoolrunescape.wikia.com/wiki/Dorgesh-Kaan).",
		rewards: [
			'1 [Quest point](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'3,000 [Mining](http://oldschoolrunescape.wikia.com/wiki/Mining) XP',
			'3,000 [Prayer](http://oldschoolrunescape.wikia.com/wiki/Prayer) experience',
			'The [ancient mace](http://oldschoolrunescape.wikia.com/wiki/Ancient_mace)',
			'[Goblin Village](http://oldschoolrunescape.wikia.com/wiki/Goblin_Village) [tele orbs](http://oldschoolrunescape.wikia.com/wiki/Goblin_Village_Sphere)',
			'[Dorgesh-Kaan/Keldagrim Trains](http://oldschoolrunescape.wikia.com/wiki/Dorgesh-Kaan_-_Keldagrim_Train_System)'
		],
		requirements: [
			'15 [Attack](http://oldschoolrunescape.wikia.com/wiki/Attack)',
			'25 [Prayer](http://oldschoolrunescape.wikia.com/wiki/Prayer)',
			'[Death to the Dorgeshuun](http://oldschoolrunescape.wikia.com/wiki/Death_to_the_Dorgeshuun)',
			'[The Giant Dwarf](http://oldschoolrunescape.wikia.com/wiki/The_Giant_Dwarf)',
			'[The Dig Site](http://oldschoolrunescape.wikia.com/wiki/The_Dig_Site)'
		],
		trivia: [
			"[Sigmund](http://oldschoolrunescape.wikia.com/wiki/Sigmund) ties [Zanik](http://oldschoolrunescape.wikia.com/wiki/Zanik) to a railway track. This is a classic scenario from old films and cartoons, such as [Charlie Chaplin](http://en.wikipedia.org/wiki/Charlie_Chaplin) films from the 1920's (hence the music in this scene: Slice of Silent Movie).",
			'The quest page had a different spoiler message on the first day of release . Instead of the usual message, it said, "Stop! H.A.M. time! No spoilers for you, this day." This refers to the song "[U Can\'t Touch This](https://www.youtube.com/watch?v=otCpCn0l4Wo)" by [MC Hammer](http://en.wikipedia.org/wiki/MC_Hammer).',
			'This quest is required for the "MAJOR LAVAS BADS AIR" anagram during an [elite clue](http://oldschoolrunescape.wikia.com/wiki/Clue_scroll_(elite)).'
		],
		freeToPlay: !1
	},
	BARCRAWL = {
		thumbnail: 'https://vignette3.wikia.nocookie.net/2007scape/images/c/cc/Alfred_Grimhand%27s_Barcrawl.png/revision/latest/scale-to-width-down/280?cb=20170413004357',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Alfred_Grimhand%27s_Barcrawl',
		name: "Alfred Grimhand's Barcrawl",
		questType: 'Miniquests',
		length: 'Medium',
		difficulty: 'Easy',
		description: 'None',
		startPoint: 'Speak to the Barbarian Guard at the entrance of the Barbarian Agility Training Course.',
		rewards: ['Access to Barbarian Agility Course'],
		requirements: ['None'],
		trivia: [
			'After completing all bar crawl locations, you will be unable to read the bar crawl card as you will be "too drunk."',
			'After drinking in Brimhaven, it says you think you see two bartenders signing two barcrawl cards.',
			'After drinking at the Falador pub, your screen will sway slightly to indicate you are drunk.',
			"None of the drinks appear in a player's inventory but are drunk automatically.",
			'After you hand the bar crawl card to the guard, he says that he never learned to read, he just sees you are plenty drunk and lets you go to the agility arena.'
		],
		freeToPlay: !1
	},
	ATAILOFTWOCATS = {
		thumbnail: 'https://vignette3.wikia.nocookie.net/2007scape/images/8/8c/A_Tail_of_Two_Cats.png/revision/latest/scale-to-width-down/300?cb=20170409180332',
		url: 'http://oldschoolrunescape.wikia.com/wiki/A_Tail_of_Two_Cats',
		name: 'A Tail of Two Cats',
		questType: 'Normal',
		length: 'Long',
		difficulty: 'Intermediate',
		description: 'Missing: small black cat, answers to the name of Bob. Last seen on the 19th of Bennath. Please contact Unferth in Burthorpe.',
		startPoint: 'Talk to [Unferth](http://oldschoolrunescape.wikia.com/wiki/Unferth) in his house in [Burthorpe](http://oldschoolrunescape.wikia.com/wiki/Burthorpe)',
		rewards: ['2 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)', '2,500 XP in 2 [skills](http://oldschoolrunescape.wikia.com/wiki/Skills) over 30, or 5000 XP in 1 skill.', "A Doctor or nurse's hat", 'A [Mouse toy](http://oldschoolrunescape.wikia.com/wiki/Mouse_toy)'],
		requirements: ["[Icthlarin's Little Helper](http://oldschoolrunescape.wikia.com/wiki/Icthlarin%27s_Little_Helper)"],
		trivia: [
			'The name of the quest "A Tail of Two Cats" is a reference to the Charles Dickens novel, "[A Tale of Two Cities](http://en.wikipedia.org/wiki/A_Tale_of_Two_Cities)".',
			'When you first speak to Bob he says "Love looks not with the eyes but with the mind. And therefore is winged Cupid painted blind." It is spoken by Helena to Lysander in Shakespeare\'s "[A Midsummer\'s Night Dream](http://en.wikipedia.org/wiki/A_Midsummer%27s_Night_Dream)."',
			'One of the scenes in the second cutscene shows a spoof scene of the film [Titanic](http://en.wikipedia.org/wiki/Titanic_(1997_film)), Bob is standing on the bow of the ship and says: "I\'m king of Runescape".',
			"You can find a recipe for the [chocolate cake](http://oldschoolrunescape.wikia.com/wiki/Chocolate_cake) if you search the bookcase while doing the chores in [Unferth's](http://oldschoolrunescape.wikia.com/wiki/Unferth) house.",
			"During the cutscene with the Sphinx, Bob says \"Hey, I'm just this cat, you know.\" This is likely a reference to the character Gag Halfrunt in Douglas Adams' [The Hitchhiker's Guide to the Galaxy](http://en.wikipedia.org/wiki/The_Hitchhiker%27s_Guide_to_the_Galaxy).",
			'Upon examining the potato plants in Unferth\'s house, it says "You say Potato,I say Poh-tar-to". This is a reference to a 1937 film "Shall We Dance"'
		],
		freeToPlay: !1
	},
	ANIMALMAGNETISM = {
		thumbnail: 'https://vignette3.wikia.nocookie.net/2007scape/images/3/3c/Animal_Magnetism_5.png/revision/latest/scale-to-width-down/300?cb=20170326061337',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Animal_Magnetism',
		name: 'Animal Magnetism',
		questType: 'Normal',
		length: 'Medium/Long',
		difficulty: 'Intermediate',
		description:
      "Draynor Manor has a new resident and, adventurers rejoice, she is a damsel in distress. Far from being Sleeping Beauty, she finds the Manor's beds not to her liking and is suffering from insomniac nights. If you fancy yourself able to aid Ava in her search for a good night's sleep, who knows what the budding scientist will produce as a reward?",
		startPoint: 'Speak to [Ava](http://oldschoolrunescape.wikia.com/wiki/Ava) in [Draynor Manor](http://oldschoolrunescape.wikia.com/wiki/Draynor_Manor).',
		rewards: [
			'1 [Quest point](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'1,000 [Crafting](http://oldschoolrunescape.wikia.com/wiki/Crafting), [Fletching](http://oldschoolrunescape.wikia.com/wiki/Fletching), & [Slayer](http://oldschoolrunescape.wikia.com/wiki/Slayer) XP',
			'2,500 [Woodcutting](http://oldschoolrunescape.wikia.com/wiki/Woodcutting) XP',
			"[Ava's device](http://oldschoolrunescape.wikia.com/wiki/Ava%27s_device)"
		],
		requirements: [
			'[The Restless Ghost](http://oldschoolrunescape.wikia.com/wiki/The_Restless_Ghost)',
			'[Ernest the Chicken](http://oldschoolrunescape.wikia.com/wiki/Ernest_the_Chicken)',
			'[Priest in Peril](http://oldschoolrunescape.wikia.com/wiki/Priest_in_Peril)',
			'Level 18 [Slayer](http://oldschoolrunescape.wikia.com/wiki/Slayer)',
			'Level 19 [Crafting](http://oldschoolrunescape.wikia.com/wiki/Crafting)',
			'Level 30 [Ranged](http://oldschoolrunescape.wikia.com/wiki/Ranged)',
			'Level 35 [Woodcutting](http://oldschoolrunescape.wikia.com/wiki/Woodcutting)',
			'[Ironmen](http://oldschoolrunescape.wikia.com/wiki/Ironman_mode) need 31 [Prayer](http://oldschoolrunescape.wikia.com/wiki/Prayer)'
		],
		trivia: ["As of 22 January 2015, Ava's accumulator now picks up all ammo regardless of being trapped behind an object."],
		freeToPlay: !1
	},
	BEARYOURSOUL = {
		thumbnail: 'https://vignette1.wikia.nocookie.net/2007scape/images/d/d5/Soul_bearer_detail.png/revision/latest/scale-to-width-down/150?cb=20160519134311',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Bear_your_Soul',
		name: 'Bear your Soul',
		questType: 'Miniquests',
		length: 'Medium/Very Long',
		difficulty: 'Easy',
		description: 'None',
		startPoint: 'Find a book called [Soul journey](http://oldschoolrunescape.wikia.com/wiki/Soul_journey) in the [Arceuus House Library](http://oldschoolrunescape.wikia.com/wiki/Arceuus_House_Library).',
		rewards: ['None'],
		requirements: ['None'],
		trivia: ['The soul bearer is an ancient artifact that draws souls from one place to another, enabling them to travel within the River of Souls across the dimensions.'],
		freeToPlay: !1
	},
	ARCHITECTURALALLIANCE = {
		thumbnail: 'https://vignette3.wikia.nocookie.net/2007scape/images/2/29/Kourend_sigil.png/revision/latest/scale-to-width-down/130?cb=20160303162022',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Architectural_Alliance',
		name: 'Architectural Alliance',
		questType: 'Miniquests',
		length: 'Very Long',
		difficulty: 'Medium',
		description: 'None',
		startPoint: 'Speak to [Hosa](http://oldschoolrunescape.wikia.com/wiki/Hosa) in the centre of [Great Kourend](http://oldschoolrunescape.wikia.com/wiki/Great_Kourend).',
		rewards: ['None'],
		requirements: [
			'30 [Crafting](http://oldschoolrunescape.wikia.com/wiki/Crafting)',
			'42 [Mining](http://oldschoolrunescape.wikia.com/wiki/Mining)',
			'10 [Slayer](http://oldschoolrunescape.wikia.com/wiki/Slayer), or started [Plague City](http://oldschoolrunescape.wikia.com/wiki/Plague_City)',
			'[Client of Kourend](http://oldschoolrunescape.wikia.com/wiki/Client_of_Kourend)',
			'42 [Woodcutting](http://oldschoolrunescape.wikia.com/wiki/Woodcutting)',
			'15 [Hunter](http://oldschoolrunescape.wikia.com/wiki/Hunter)',
			'65 [Mining](http://oldschoolrunescape.wikia.com/wiki/Mining)',
			'25 [Cooking](http://oldschoolrunescape.wikia.com/wiki/Cooking)',
			'Kill level 53 and 62 [Lizardmen](http://oldschoolrunescape.wikia.com/wiki/Lizardmen)'
		],
		trivia: ["Completing this quest allows you to teleport to the centre of Kourend with an Xeric's Talisman."],
		freeToPlay: !1
	},
	BETWEENAROCK = {
		thumbnail: 'https://vignette3.wikia.nocookie.net/2007scape/images/a/a7/Between_a_Rock....png/revision/latest/scale-to-width-down/300?cb=20160919224254',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Between_a_Rock...',
		name: 'Between a Rock...',
		questType: 'Normal',
		length: 'Long',
		difficulty: 'Experienced',
		description:
      "Hidden away from the fearsome trolls and the roaming Fremennik, the dwarves delve deep beneath the mountains in search for the ore they need to support their home of Keldagrim. One dwarf in particular, however, has for years been trying to crack open a rock that seems to be impervious to any material that he's tried on it. Convinced that solving the riddle of the rock will lead him to unimaginable wealth, he has spent the later part of his life on just this lump of stone. Help him out, but take care you don't end up in a tight spot!",
		startPoint: 'The [Keldagrim](http://oldschoolrunescape.wikia.com/wiki/Keldagrim) mines east of [Rellekka](http://oldschoolrunescape.wikia.com/wiki/Rellekka), north of the [Mountain Camp](http://oldschoolrunescape.wikia.com/wiki/Mountain_Camp).',
		rewards: [
			'2 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'5,000 [Defence](http://oldschoolrunescape.wikia.com/wiki/Defence) XP',
			'5,000 [Mining](http://oldschoolrunescape.wikia.com/wiki/Mining) XP',
			'5,000 [Smithing](http://oldschoolrunescape.wikia.com/wiki/Smithing) XP',
			'A [rune pickaxe](http://oldschoolrunescape.wikia.com/wiki/Rune_pickaxe)'
		],
		requirements: [
			'30 [Defence](http://oldschoolrunescape.wikia.com/wiki/Defence)',
			'40 [Mining](http://oldschoolrunescape.wikia.com/wiki/Mining)',
			'50 [Smithing](http://oldschoolrunescape.wikia.com/wiki/Smithing)',
			'[Dwarf Cannon](http://oldschoolrunescape.wikia.com/wiki/Dwarf_Cannon)',
			'[Fishing Contest](http://oldschoolrunescape.wikia.com/wiki/Fishing_Contest)',
			'Ability to defeat a level 75-125 enemy'
		],
		trivia: ["After the quest, you may attempt to make an offer to buy Dondakan's [Granite boots](http://oldschoolrunescape.wikia.com/wiki/Granite_boots), but no matter how much you offer, he will never sell them."],
		freeToPlay: !1
	},
	BIOHAZARD = {
		thumbnail: 'https://vignette3.wikia.nocookie.net/2007scape/images/b/b3/Biohazard.png/revision/latest/scale-to-width-down/300?cb=20161128043232',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Biohazard',
		name: 'Biohazard',
		questType: 'Normal',
		length: 'Long',
		difficulty: 'Novice',
		description: "This is the second part of an ongoing adventure. Help Elena discover the truth about the infamous Ardougne plague. Smuggle test samples across Ardougne to Elena's old mentor.",
		startPoint: 'Talk to [Elena](http://oldschoolrunescape.wikia.com/wiki/Elena) in her house in [East Ardougne](http://oldschoolrunescape.wikia.com/wiki/East_Ardougne). She lives right across the road from where you started [Plague City](http://oldschoolrunescape.wikia.com/wiki/Plague_City).',
		rewards: [
			'3 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'1,250 [Thieving](http://oldschoolrunescape.wikia.com/wiki/Thieving) XP',
			'Use of [Combat Training Camp](http://oldschoolrunescape.wikia.com/wiki/Combat_Training_Camp)',
			'Ability to open [West Ardougne](http://oldschoolrunescape.wikia.com/wiki/West_Ardougne) gate.',
			'[West Ardougne Tele](http://oldschoolrunescape.wikia.com/wiki/West_Ardougne_Teleport)'
		],
		requirements: ['[Plague City](http://oldschoolrunescape.wikia.com/wiki/Plague_City)'],
		trivia: [
			'[Da Vinci](http://oldschoolrunescape.wikia.com/wiki/Da_Vinci) is a reference to the famous multi-talented Italian, [Leonardo Da Vinci](http://en.wikipedia.org/wiki/Leonardo_da_Vinci).',
			"The name of the man who helps you get over the wall, [Jerico](http://oldschoolrunescape.wikia.com/wiki/Jerico), could be a reference to [Jericho's wall](http://en.wikipedia.org/wiki/Battle_of_Jericho).",
			'The Inn of the [Dancing Donkey](http://oldschoolrunescape.wikia.com/wiki/Dancing_Donkey_Inn) is likely an allusion to the Inn of the Prancing Pony where Frodo and Sam go to meet Gandalf in [The Lord of the Rings](https://en.wikipedia.org/wiki/The_Lord_of_the_Rings): [The Fellowship of the Ring](https://en.wikipedia.org/wiki/The_Lord_of_the_Rings:_The_Fellowship_of_the_Ring).',
			"It's possible to avoid giving any of the vials to the Chemist's cronies by dropping the vials outside the gate, having the guard check you, and then [telegrabbing](http://oldschoolrunescape.wikia.com/wiki/Telekinetic_Grab) them from the other side."
		],
		freeToPlay: !1
	},
	BIGCHOMPYBIRDHUNTING = {
		thumbnail: 'https://vignette2.wikia.nocookie.net/2007scape/images/a/ac/Big_Chompy_Bird_Hunting.png/revision/latest/scale-to-width-down/300?cb=20170210210920',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Big_Chompy_Bird_Hunting',
		name: 'Big Chompy Bird Hunting',
		questType: 'Normal',
		length: 'Short',
		difficulty: 'Intermediate',
		description: "Rantz the Ogre needs to feed his demanding children, Fycie and Bugs, so he wants to go Big Chompy Bird hunting. Problem is, he's all fingers and thumbs when it comes to making ogre arrows. Could someone please give him a hand?",
		startPoint: 'Speak to [Rantz](http://oldschoolrunescape.wikia.com/wiki/Rantz), far east of [Feldip Hills](http://oldschoolrunescape.wikia.com/wiki/Feldip_Hills).',
		rewards: [
			'2 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'262 [Fletching](http://oldschoolrunescape.wikia.com/wiki/Fletching) XP',
			'1,470 [Cooking](http://oldschoolrunescape.wikia.com/wiki/Cooking) XP',
			'735 [Ranged](http://oldschoolrunescape.wikia.com/wiki/Ranged) XP',
			'An [ogre bow](http://oldschoolrunescape.wikia.com/wiki/Ogre_bow)',
			'Ability to fletch [ogre arrows](http://oldschoolrunescape.wikia.com/wiki/Ogre_arrow)',
			'Ability to cook [chompy birds](http://oldschoolrunescape.wikia.com/wiki/Chompy_bird)',
			'Ability to earn [bowman hats](http://oldschoolrunescape.wikia.com/wiki/Bowman_hat)'
		],
		requirements: [
			'5 [Fletching](http://oldschoolrunescape.wikia.com/wiki/Fletching)',
			'30 [Cooking](http://oldschoolrunescape.wikia.com/wiki/Cooking)',
			'30 [Ranged](http://oldschoolrunescape.wikia.com/wiki/Ranged)',
			'Defend against level 64 [wolves](http://oldschoolrunescape.wikia.com/wiki/Wolves)',
			'Defend against level 53 [ogres](http://oldschoolrunescape.wikia.com/wiki/Ogre)'
		],
		trivia: ['When [Rantz](http://oldschoolrunescape.wikia.com/wiki/Rantz) misses the [bird](http://oldschoolrunescape.wikia.com/wiki/Chompy), he blames the "arrows" rather than the "stabbers".'],
		freeToPlay: !1
	},
	CABINFEVER = {
		thumbnail: 'https://vignette4.wikia.nocookie.net/2007scape/images/0/02/Cabin_Fever.png/revision/latest/scale-to-width-down/300?cb=20160713215309',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Cabin_Fever',
		name: 'Cabin Fever',
		questType: 'Normal',
		length: 'Medium',
		difficulty: 'Experienced',
		description:
      "It's war on the high seas as Bill Teach tries to make the journey from Port Phasmatys to the pirate enclave of Mos Le'Harmless! With his crew heading for the hills, he's looking to recruit anyone eager to become a pirate to help him sink the enemy before he ends up swimming home. He's offering a lot more than a shilling to join his crew. Have you got what it takes to be a pirate?",
		startPoint: 'Talk to [Bill Teach](http://oldschoolrunescape.wikia.com/wiki/Bill_Teach) in the [Port Phasmatys](http://oldschoolrunescape.wikia.com/wiki/Port_Phasmatys) [Inn](http://oldschoolrunescape.wikia.com/wiki/The_Green_Ghost).',
		rewards: [
			'2 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'7,000 [Crafting](http://oldschoolrunescape.wikia.com/wiki/Crafting) XP',
			'7,000 [Smithing](http://oldschoolrunescape.wikia.com/wiki/Smithing) XP',
			'7,000 [Agility](http://oldschoolrunescape.wikia.com/wiki/Agility) XP',
			'10,000 GP',
			"Access to [Mos Le'Harmless](http://oldschoolrunescape.wikia.com/wiki/Mos_Le%27Harmless)",
			'Access to kill [cave horrors](http://oldschoolrunescape.wikia.com/wiki/Cave_horror)',
			"The [Book o' piracy](http://oldschoolrunescape.wikia.com/wiki/Book_o%27_piracy)",
			'[Charter ship](http://oldschoolrunescape.wikia.com/wiki/Charter_ship) prices halved'
		],
		requirements: [
			"[Pirate's Treasure](http://oldschoolrunescape.wikia.com/wiki/Pirate%27s_Treasure)",
			'[Rum Deal](http://oldschoolrunescape.wikia.com/wiki/Rum_Deal)',
			'[Priest In Peril](http://oldschoolrunescape.wikia.com/wiki/Priest_In_Peril)',
			'42 [Agility](http://oldschoolrunescape.wikia.com/wiki/Agility)',
			'45 [Crafting](http://oldschoolrunescape.wikia.com/wiki/Crafting)',
			'50 [Smithing](http://oldschoolrunescape.wikia.com/wiki/Smithing)',
			'40 [Ranged](http://oldschoolrunescape.wikia.com/wiki/Ranged)'
		],
		trivia: [
			"During the [Ranged](http://oldschoolrunescape.wikia.com/wiki/Ranged) level check for the quest, [Bill Teach](http://oldschoolrunescape.wikia.com/wiki/Bill_Teach) asks the player about shooting an albatross. This is a reference to [Samuel Coleridge's](http://en.wikipedia.org/wiki/Samuel_Taylor_Coleridge) poem [The Rime of the Ancient Mariner](http://en.wikipedia.org/wiki/The_Rime_of_the_Ancient_Mariner) (1798) where the ghost of a sailor tells a tale of killing an albatross with a cross bow while out at sea, leading to the death of his crew and himself."
		],
		freeToPlay: !1
	},
	CORSAIRCURSE = {
		thumbnail: 'https://vignette.wikia.nocookie.net/2007scape/images/2/2b/The_Corsair_Curse.png/revision/latest/scale-to-width-down/300?cb=20171208001354',
		url: 'http://oldschoolrunescape.wikia.com/wiki/The_Corsair_Curse',
		name: 'The Corsair Curse',
		questType: 'Normal',
		length: 'Short',
		difficulty: 'Novice',
		description:
      'From the newly revealed town of Corsair Cove, deep in the south of Feldip Hills, the captain of the Corsairs has sailed to Port Sarim seeking help. His crew is sick, and he suspects that a curse has been laid upon them. If you can unravel the fearful and conflicting tales of ogre relics, vengeful mermaids and demonic possession, maybe you can help his ailing crew overcome The Corsair Curse.',
		startPoint: 'Speak to Captain Tock at the crossroads north of Port Sarim.',
		rewards: ['2 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)', "Access to [Yusuf](http://oldschoolrunescape.wikia.com/wiki/Yusuf)'s bank"],
		requirements: ['None'],
		trivia: [
			`During the cutscene of Gnocci the Cook fishing for lobsters, he chants "Obby-lobby Obby-lobby oi oi oi". This is a reference to “Zicke Zacke Zicke Zacke, Oi, Oi, Oi!”, which is the ending to a song called “Ein Prost," a traditional German toast to health and well-being. This chant is also used frequently on "The Man Show" before the hosts toast and drink their beer.`,
			`When returning to Captain Tock after speaking to the crew and debunking their theories. Captain Tock says, "Arr, any sufficiently advanced technology be indistinguishable from demonic possession, that it be." This is a reference to Clarke's three laws in which the 3rd law states "Any sufficiently advanced technology is indistinguishable from magic."`
		],
		freeToPlay: !1
	},
	BLACKKNIGHTSFORTRESS = {
		thumbnail: 'https://vignette1.wikia.nocookie.net/2007scape/images/8/84/Black_Knights%27_Fortress_%28quest%29.png/revision/latest/scale-to-width-down/300?cb=20151115103818',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Black_Knights%27_Fortress',
		name: "Black Knights' Fortress",
		questType: 'Normal',
		length: 'Short',
		difficulty: 'Novice',
		description: 'The Black Knights are up to no good. You are hired by the white knights to spy on them and destroy their secret weapon.',
		startPoint:
      "Talk to [Sir Amik Varze](http://oldschoolrunescape.wikia.com/wiki/Sir_Amik_Varze), located on the 2nd3rd floor[U.K. floor] of the western tower of the [White Knights' Castle](http://oldschoolrunescape.wikia.com/wiki/White_Knights%27_Castle) in [Falador](http://oldschoolrunescape.wikia.com/wiki/Falador).",
		rewards: ['3 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)', '2,500 [GP](http://oldschoolrunescape.wikia.com/wiki/Coins)'],
		requirements: ['12 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)', 'Evade level 33 [Black Knights](http://oldschoolrunescape.wikia.com/wiki/Black_Knight)'],
		trivia: [
			'The [Quest point](http://oldschoolrunescape.wikia.com/wiki/Quest_points) requirement was added to discourage players from creating new accounts to do the quest and transfer the 2,500 GP to their main characters.',
			'If you try to throw a [Draynor Manor](http://oldschoolrunescape.wikia.com/wiki/Draynor_Manor) cabbage down into the cauldron it will say the following: "This is the wrong sort of cabbage!" with your character stating: "I\'m not supposed to be HELPING the witch you know..."',
			'When talking to [Sir Amik Varze](http://oldschoolrunescape.wikia.com/wiki/Sir_Amik_Varze) to start the quest, he says "Your mission, should you decide to accept it". This is a reference to [Mission Impossible](http://en.wikipedia.org/wiki/Mission:_Impossible_(film_series)).',
			'Reading the Dossier given to you by [Sir Amik Varze](http://oldschoolrunescape.wikia.com/wiki/Sir_Amik_Varze) it reads "Infiltrate fortress… sabotage secret weapon… self destruct in 3…2…ARG!" another reference to Mission Impossible',
			'This quest was named Spy Quest before membership was released.',
			'At first, the quest gave around 250 [Thieving](http://oldschoolrunescape.wikia.com/wiki/Thieving) experience as a reward. Thieving was in the skill menu at the time, but had not been programmed yet. The skill was later removed and added back in 2002, but the quest no longer gave Thieving experience.',
			'When talking to Sir Amik Varze to start the quest, you can choose to say "I laugh in the face of danger!". This is most likely a reference to Simba in [The Lion King](http://en.wikipedia.org/wiki/The_Lion_King).'
		],
		freeToPlay: !0
	},
	CLOCKTOWER = {
		thumbnail: 'https://vignette4.wikia.nocookie.net/2007scape/images/6/6b/Clock_Tower.png/revision/latest/scale-to-width-down/300?cb=20161128043657',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Clock_Tower',
		name: 'Clock Tower',
		questType: 'Normal',
		length: 'Short',
		difficulty: 'Novice',
		description: 'Help the confused Brother Kojo find the missing cogs and fix his watch tower. Search the dungeon using brawn and brains to correctly place the four cogs.',
		startPoint: 'Talk to [Brother Kojo](http://oldschoolrunescape.wikia.com/wiki/Brother_Kojo) in the Clock Tower south of [East Ardougne](http://oldschoolrunescape.wikia.com/wiki/East_Ardougne).',
		rewards: ['1 [Quest point](http://oldschoolrunescape.wikia.com/wiki/Quest_points)', '500 [GP](http://oldschoolrunescape.wikia.com/wiki/Coins)'],
		requirements: ['ability to run past level 53 [Ogres](http://oldschoolrunescape.wikia.com/wiki/Ogre)'],
		trivia: ['None.'],
		freeToPlay: !1
	},
	CLIENTOFKOUREND = {
		thumbnail: 'https://vignette4.wikia.nocookie.net/2007scape/images/c/c0/Client_of_Kourend.png/revision/latest/scale-to-width-down/300?cb=20170420165542',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Client_of_Kourend',
		name: 'Client of Kourend',
		questType: 'Normal',
		length: 'Medium',
		difficulty: 'Novice',
		description: 'Will you help Veos handle a mysterious client?',
		startPoint: 'Speak to [Veos](http://oldschoolrunescape.wikia.com/wiki/Veos) at the [Piscarilius House](http://oldschoolrunescape.wikia.com/wiki/Piscarilius_House) port.',
		rewards: ['1 [Quest point](http://oldschoolrunescape.wikia.com/wiki/Quest_points)', '2x 500 XP [antique lamps](http://oldschoolrunescape.wikia.com/wiki/Antique_lamp_(Client_of_Kourend).', '20% favour increase in any house.', '2x rate of gaining favour in houses.'],
		requirements: ['None'],
		trivia: ['The quest cannot be completed by talking to [Veos](http://oldschoolrunescape.wikia.com/wiki/Veos) in [Port Sarim](http://oldschoolrunescape.wikia.com/wiki/Port_Sarim), the dialogue option is only available in [Great Kourend](http://oldschoolrunescape.wikia.com/wiki/Great_Kourend).'],
		freeToPlay: !1
	},
	CONTACT = {
		thumbnail: 'https://vignette3.wikia.nocookie.net/2007scape/images/e/e4/Contact%21.png/revision/latest/scale-to-width-down/300?cb=20170409174406',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Contact!',
		name: 'Contact!',
		questType: 'Normal',
		length: 'Medium',
		difficulty: 'Master',
		description:
      'The High Priest of Icthlarin has problems again - this time with the inhabitants of Menaphos. Sophanem is recovering from the plague, yet most of its citizens are still trapped on the other side of the river. Diplomacy has failed and subterfuge beckons. Clearly, this is the sort of job that a shifty adventurer could excel in.',
		startPoint: 'Speak to the [High Priest](http://oldschoolrunescape.wikia.com/wiki/High_Priest_(Sophanem)) of [Icthlarin](http://oldschoolrunescape.wikia.com/wiki/Icthlarin).',
		rewards: [
			'1 [Quest point](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'7,000 [Thieving](http://oldschoolrunescape.wikia.com/wiki/Thieving) XP',
			'[Combat lamp](http://oldschoolrunescape.wikia.com/wiki/Combat_lamp)',
			'The [Keris](http://oldschoolrunescape.wikia.com/wiki/Keris)',
			"Access to [Sophanem](http://oldschoolrunescape.wikia.com/wiki/Sophanem)'s [bank](http://oldschoolrunescape.wikia.com/wiki/Bank)"
		],
		requirements: ['[Prince Ali Rescue](http://oldschoolrunescape.wikia.com/wiki/Prince_Ali_Rescue)', "[Icthlarin's Little Helper](http://oldschoolrunescape.wikia.com/wiki/Icthlarin%27s_Little_Helper)", "[Gertrude's Cat](http://oldschoolrunescape.wikia.com/wiki/Gertrude%27s_Cat)"],
		trivia: ['None'],
		freeToPlay: !1
	},
	COLDWAR = {
		thumbnail: 'https://vignette2.wikia.nocookie.net/2007scape/images/5/54/Cold_War.png/revision/latest/scale-to-width-down/300?cb=20170210212144',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Cold_War',
		name: 'Cold War',
		questType: 'Normal',
		length: 'Medium/Long',
		difficulty: 'Intermediate',
		description:
      "At the Ardougne Zoo, one of the zookeepers has become a bit preoccupied by penguins. In fact he's downright paranoid about them. He needs your help to observe their habits on the iceberg in the Lunar Sea. What begins as a peaceful bird-watching expedition opens a new world of espionage and bad musicians.",
		startPoint: 'Speak to [Larry](http://oldschoolrunescape.wikia.com/wiki/Larry) at [Ardougne Zoo](http://oldschoolrunescape.wikia.com/wiki/Ardougne_Zoo).',
		rewards: [
			'1 [Quest point](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'2,000 [Crafting](http://oldschoolrunescape.wikia.com/wiki/Crafting) XP',
			'5,000 [Agility](http://oldschoolrunescape.wikia.com/wiki/Agility) XP',
			'1,500 [Construction](http://oldschoolrunescape.wikia.com/wiki/Construction) XP',
			'ability to make [penguin suit](http://oldschoolrunescape.wikia.com/wiki/Clockwork_suit).',
			'[Penguin agility course](http://oldschoolrunescape.wikia.com/wiki/Penguin_agility_course)'
		],
		requirements: [
			'10 [Hunter](http://oldschoolrunescape.wikia.com/wiki/Hunter)',
			'30 [Agility](http://oldschoolrunescape.wikia.com/wiki/Agility)',
			'30 [Crafting](http://oldschoolrunescape.wikia.com/wiki/Crafting)',
			'34 [Construction](http://oldschoolrunescape.wikia.com/wiki/Construction)',
			'15 [Thieving](http://oldschoolrunescape.wikia.com/wiki/Thieving)',
			'Access to a [crafting table 3](http://oldschoolrunescape.wikia.com/wiki/Crafting_table_3)'
		],
		trivia: [
			"The [penguin](http://en.wikipedia.org/wiki/penguin) is creator [Andrew Gower](http://en.wikipedia.org/wiki/Andrew_Gower)'s favourite animal.",
			'The [Cold War](http://en.wikipedia.org/wiki/Cold_War) was the period of conflict that emerged after [World War II](http://en.wikipedia.org/wiki/World_War_II) between [the West](http://en.wikipedia.org/wiki/Western_world) and the [Eastern Bloc](http://en.wikipedia.org/wiki/Eastern_Bloc).',
			'The [KGP](http://oldschoolrunescape.wikia.com/wiki/KGP) (Killer Gentoo Penguin) parallels the [KGB](http://en.wikipedia.org/wiki/KGB). ("Gentoo" is a type of penguin.)',
			'The term "[Motherland](http://en.wikipedia.org/wiki/Homeland#Motherland)" was historically sometimes used in reference to the [Soviet Union](http://en.wikipedia.org/wiki/Soviet_Union).',
			'The term "[Comrade](http://en.wikipedia.org/wiki/Comrade)" was often used in the [Soviet Union](http://en.wikipedia.org/wiki/Soviet_Union).',
			"[Palingrad](http://oldschoolrunescape.wikia.com/wiki/Palingrad) sounds similar to the Russian city [Stalingrad](http://en.wikipedia.org/wiki/Volgograd). Michael Palin played Dr. Peaches Bartkowicz in a sketch about penguins on [Monty Python's Flying Circus](http://en.wikipedia.org/wiki/Monty_Python%27s_Flying_Circus) - [A Book at Bedtime](http://www.imdb.com/title/tt0786514/) episode 38. Peaches is seen looking up at a 66-tall high penguin similar to the final [cutscene](http://oldschoolrunescape.wikia.com/wiki/Cutscene) in the quest.",
			"Michael Palin played Dr. Peaches Bartkowicz in a sketch about penguins on [Monty Python's Flying Circus](http://en.wikipedia.org/wiki/Monty_Python%27s_Flying_Circus) - [A Book at Bedtime](http://www.imdb.com/title/tt0786514/) episode 38. Peaches is seen looking up at a 66-tall high penguin similar to the final [cutscene](http://oldschoolrunescape.wikia.com/wiki/Cutscene) in the quest.",
			'Throughout the quest, the player will lie to the penguins by saying that he or she flew by flapping his or her wings really fast. In addition, if you have completed [Enlightened Journey](http://oldschoolrunescape.wikia.com/wiki/Enlightened_Journey), he or she will tell the truth saying that they flew in a hot-air balloon. If you have completed [Between a Rock...](http://oldschoolrunescape.wikia.com/wiki/Between_a_Rock...), he or she will say they were fired out of a cannon.',
			'The secret phrase, do not trust the walrus, might be a reference to Lewis Carroll\'s [The Walrus and the Carpenter](http://en.wikipedia.org/wiki/The_Walrus_and_the_Carpenter). The walrus invites some oysters to join them in a walk along the beach, the two titular characters get hungry and eat all of the oysters. John Lennon wrote a song [I Am the Walrus](http://en.wikipedia.org/wiki/I_Am_the_Walrus) and commented "It never dawned on me that Lewis Carroll was commenting on the capitalist and social system. ... the walrus was the bad guy in the story..."',
			"The [Lumbridge](http://oldschoolrunescape.wikia.com/wiki/Lumbridge) penguins in sheep's costume are similar to [Wolf in sheep's clothing](http://en.wikipedia.org/wiki/Wolf_in_sheep%27s_clothing).",
			'"Curiouser and curiouser", said by the player just before talking to [Fred the Farmer](http://oldschoolrunescape.wikia.com/wiki/Fred_the_Farmer), is a well known line from [Alice\'s Adventures in Wonderland](http://en.wikipedia.org/wiki/Alice%27s_Adventures_in_Wonderland).',
			'[Ping](http://oldschoolrunescape.wikia.com/wiki/Ping) and [Pong](http://oldschoolrunescape.wikia.com/wiki/Pong) talk like [Beatniks](http://en.wikipedia.org/wiki/Beatnik) who played [Bongo drums](http://en.wikipedia.org/wiki/Bongo_drum). [Cheech & Chong](http://en.wikipedia.org/wiki/Cheech_%26_Chong) were a comedy duo who played stoned hippies. [Oingo Boingo](http://en.wikipedia.org/wiki/Oingo_Boingo) is the name of a music band.',
			'[Cheech & Chong](http://en.wikipedia.org/wiki/Cheech_%26_Chong) were a comedy duo who played stoned hippies.',
			'[Oingo Boingo](http://en.wikipedia.org/wiki/Oingo_Boingo) is the name of a music band.',
			'Ping says "We need more cowbell", a reference to the [More cowbell](http://en.wikipedia.org/wiki/More_cowbell) skit on NBC\'s popular late night show [Saturday Night Live](http://en.wikipedia.org/wiki/Saturday_Night_Live).',
			'Russian [cosmonauts](http://en.wikipedia.org/wiki/Astronaut) wore [penguin (space) suits](http://www.astronautix.com/craft/penguin.htm).',
			'Noodles is a name sometimes given to a [Macaroni penguin](http://en.wikipedia.org/wiki/Macaroni_penguin).',
			'The posters in the penguin outpost are a reference to patriotic murals in communist countries.',
			"Cold War was the 100th [members](http://oldschoolrunescape.wikia.com/wiki/Members)' [quest](http://oldschoolrunescape.wikia.com/wiki/Quests).",
			'When this update was released, penguins and [Ardougne Zoo](http://oldschoolrunescape.wikia.com/wiki/Ardougne_Zoo) had their graphics changed. This bit was unannounced.',
			'The song "Have an ice day" is a pun on "have a nice day".',
			'Examining the trumpet in Ping and Pong\'s room will give the description "[Miles Davis](http://en.wikipedia.org/wiki/Miles_Davis) is looking for this..."',
			'When talking to Larry and first putting on the penguin suit, he tells of how he learned the shrinking spell by a man after getting stuck in an avalanche. The player responds with "Seems like a pretty wise old man". This is pretty clearly a reference to the [Wise Old Man](http://oldschoolrunescape.wikia.com/wiki/Wise_Old_Man).'
		],
		freeToPlay: !1
	},
	SHEEPSHEARER = {
		thumbnail: 'https://vignette.wikia.nocookie.net/2007scape/images/5/58/Sheep_Shearer.png/revision/latest/scale-to-width-down/300?cb=20161017061302',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Sheep_Shearer',
		name: 'Sheep Shearer',
		questType: 'Normal',
		length: 'Short',
		difficulty: 'Novice',
		description: "Fred the Farmer's sheep are getting mighty woolly. He will pay you to shear them.",
		startPoint: 'Speak to [Larry](http://oldschoolrunescape.wikia.com/wiki/Larry) at [Ardougne Zoo](http://oldschoolrunescape.wikia.com/wiki/Ardougne_Zoo).',
		rewards: ['1 [Quest point](http://oldschoolrunescape.wikia.com/wiki/Quest_points)', '150 [Crafting](http://oldschoolrunescape.wikia.com/wiki/Crafting) XP', '60 GP'],
		requirements: ['None'],
		trivia: [
			"This quest, along with Cook's Assistant, Doric's Quest and Imp Catcher, is among the fastest possible quests to complete, providing you are carrying the required items in your inventory at the start of the quests. All of these can be completed in no more than 20 seconds including dialogue.",
			"Sheep Shearer was one of the 6 quests available during RuneScape's launch.",
			'Sheep Shearer is the oldest quest in RuneScape, having existed (albeit in incomplete form) in DeviousMUD.'
		],
		freeToPlay: !1
	},
	CURSEOFTHEEMPTYLORD = {
		thumbnail: 'https://vignette2.wikia.nocookie.net/2007scape/images/c/c0/Quest.png/revision/latest/scale-to-width-down/17?cb=20130219195019',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Curse_of_the_Empty_Lord',
		name: 'Curse of the Empty Lord',
		questType: 'Miniquests',
		length: 'Medium-Long',
		difficulty: 'Easy',
		description: 'None',
		startPoint: "Talk to the Mysterious ghost ([Valdez](http://oldschoolrunescape.wikia.com/wiki/Valdez)) near [Glarial's Tomb](http://oldschoolrunescape.wikia.com/wiki/Glarial%27s_Tomb).",
		rewards: ['Ghostly Robes'],
		requirements: ['Started [Desert Treasure](http://oldschoolrunescape.wikia.com/wiki/Desert_Treasure)', 'Started [The Restless Ghost](http://oldschoolrunescape.wikia.com/wiki/The_Restless_Ghost)'],
		trivia: [
			'If you speak to any of the ghosts without a [ghostspeak amulet](http://oldschoolrunescape.wikia.com/wiki/Ghostspeak_amulet), your character may say "All your base are belong to us", as well as some other quotes. These are references to famous translation errors in the game [Zero Wing](http://en.wikipedia.org/wiki/Zero_Wing).',
			'When speaking to [Rennard](http://oldschoolrunescape.wikia.com/wiki/Rennard), your player says "I ain\'t scared of no ghost," a reference to "I ain\'t afraid of no ghost" from the [Ghostbusters](http://en.wikipedia.org/wiki/Ghostbusters) theme song.',
			'If you are level 99 [Magic](http://oldschoolrunescape.wikia.com/wiki/Magic) while talking to [Dhalak](http://oldschoolrunescape.wikia.com/wiki/Dhalak), he will ask if you are the "mighty sorcerer that binds him". Your character will respond by bragging about said [skill mastery](http://oldschoolrunescape.wikia.com/wiki/Skill_mastery).',
			'[Morytania legs 2](http://oldschoolrunescape.wikia.com/wiki/Morytania_legs_2) or higher acts as a ghostspeak amulet when worn; with a later update, these items now work during this miniquest. Note that you cannot take these to [Entrana](http://oldschoolrunescape.wikia.com/wiki/Entrana).'
		],
		freeToPlay: !1
	},
	DARKNESSOFHALLOWVALE = {
		thumbnail: 'https://vignette1.wikia.nocookie.net/2007scape/images/9/93/Darkness_of_Hallowvale.png/revision/latest/scale-to-width-down/300',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Darkness_of_Hallowvale',
		name: 'Darkness of Hallowvale',
		questType: 'Normal',
		length: 'Very Long',
		difficulty: 'Intermediate',
		description:
      'Fighting tooth and nail against the vampyre overlord, Drakan, the Myreque have moved their secret base camp to Burgh de Rott. Now the fight starts in earnest! Veliaf needs someone to make their way into the Sanguinesti region, the eastern side of Morytania cut off from the west behind an impenetrably huge wall.',
		startPoint: 'Go to [Burgh de Rott](http://oldschoolrunescape.wikia.com/wiki/Burgh_de_Rott) and into the basement of the pub there and speak to [Veliaf Hurtz](http://oldschoolrunescape.wikia.com/wiki/Veliaf_Hurtz).',
		rewards: [
			'2 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'7,000 [Agility](http://oldschoolrunescape.wikia.com/wiki/Agility) XP',
			'6,000 [Thieving](http://oldschoolrunescape.wikia.com/wiki/Thieving) XP',
			'2,000 [Construction](http://oldschoolrunescape.wikia.com/wiki/Construction) XP',
			'[Tome of experience](http://oldschoolrunescape.wikia.com/wiki/Tome_of_xp)',
			'[Shortcut key](http://oldschoolrunescape.wikia.com/wiki/Shortcut_key)'
		],
		requirements: [
			'[In Aid of the Myreque](http://oldschoolrunescape.wikia.com/wiki/In_Aid_of_the_Myreque)',
			'5 [Construction](http://oldschoolrunescape.wikia.com/wiki/Construction)',
			'20 [Mining](http://oldschoolrunescape.wikia.com/wiki/Mining)',
			'22 [Thieving](http://oldschoolrunescape.wikia.com/wiki/Thieving)',
			'26 [Agility](http://oldschoolrunescape.wikia.com/wiki/Agility)',
			'32 [Crafting](http://oldschoolrunescape.wikia.com/wiki/Crafting)',
			'33 [Magic](http://oldschoolrunescape.wikia.com/wiki/Magic)',
			'40 [Strength](http://oldschoolrunescape.wikia.com/wiki/Strength)'
		],
		trivia: [
			'While speaking with Drezel, the player will comment that they can "talk to kings without losing their common touch," which is a line from the 1910 Rudyard Kipling poem If—.',
			'During the short cutscene of Vanstrom Klause talking to Vanescula Drakan and Ranis Drakan, they drink some fresh blood, and Vanescula Drakan says "Why, with these blood tithes you\'re really spoiling us!" This could be a reference to a 1993 advert for Ferrero Rocher chocolates where the guest at an ambassadors party says "Monsieur, with these Rocher you\'re really spoiling us."'
		],
		freeToPlay: !1
	},
	CREATUREOFFENKENSTRAIN = {
		thumbnail: 'https://vignette3.wikia.nocookie.net/2007scape/images/f/f7/Creature_of_Fenkenstrain.png/revision/latest/scale-to-width-down/300?cb=20161128043330',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Creature_of_Fenkenstrain',
		name: 'Creature of Fenkenstrain',
		questType: 'Normal',
		length: 'Medium',
		difficulty: 'Intermediate',
		description:
      '[Dr Fenkenstrain](http://oldschoolrunescape.wikia.com/wiki/Dr_Fenkenstrain), master and sole occupant of the castle to the north east of [Canifis](http://oldschoolrunescape.wikia.com/wiki/Canifis), needs a new servant to go on a dark errand for him. Do you have the stomach to help Fenkenstrain complete his twisted purpose?',
		startPoint: 'Read the sign in the middle of [Canifis](http://oldschoolrunescape.wikia.com/wiki/Canifis).',
		rewards: ['2 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)', '1,000 [Thieving](http://oldschoolrunescape.wikia.com/wiki/Thieving) XP', 'The [Ring of charos](http://oldschoolrunescape.wikia.com/wiki/Ring_of_charos)'],
		requirements: [
			'20 [Crafting](http://oldschoolrunescape.wikia.com/wiki/Crafting)',
			'25 [Thieving](http://oldschoolrunescape.wikia.com/wiki/Thieving)',
			'[Priest in Peril](http://oldschoolrunescape.wikia.com/wiki/Priest_in_Peril)',
			'[The Restless Ghost](http://oldschoolrunescape.wikia.com/wiki/The_Restless_Ghost)',
			'Ability to defeat a level 51 monster'
		],
		trivia: [
			"Although not necessary for the completion of this quest, you can find a [letter](http://oldschoolrunescape.wikia.com/wiki/Letter_(Creature_of_Fenkenstrain)) when winding the clock upstairs in [Fenkenstrain's Castle](http://oldschoolrunescape.wikia.com/wiki/Fenkenstrain%27s_Castle). This letter, written by [Lord Rologarth](http://oldschoolrunescape.wikia.com/wiki/Lord_Rologarth) (the true owner of the castle), reveals the dark story of [Dr Fenkenstrain](http://oldschoolrunescape.wikia.com/wiki/Dr_Fenkenstrain)'s past.",
			'The grave examine reveals a bit of funny wordplay regarding the unlucky gardener\'s name, "Here lies Ed Lestwit". Roughly pronounced Headless Twit.',
			'The quest is based heavily on the concept of the story of [Frankenstein](http://en.wikipedia.org/wiki/Frankenstein) by [Mary Shelley](http://en.wikipedia.org/wiki/Mary_Shelley).',
			'Charos is probably a reference to [Charon](http://en.wikipedia.org/wiki/Charon) the ferryman over the river Styx in Greek mythology.',
			"Dr Fenkenstrain's examine text Dr Fenkenstrain, I presume is likely a reference to the famous quote Dr Livingstone I presume."
		],
		freeToPlay: !1
	},
	DEATHPLATEAU = {
		thumbnail: 'https://vignette3.wikia.nocookie.net/2007scape/images/c/c2/Death_Plateau.png/revision/latest/scale-to-width-down/300?cb=20150304010042',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Death_Plateau',
		name: 'Death Plateau',
		questType: 'Normal',
		length: 'Medium',
		difficulty: 'Novice',
		description: 'None',
		startPoint: 'Go to [Burthorpe](http://oldschoolrunescape.wikia.com/wiki/Burthorpe), the town north of [Taverley](http://oldschoolrunescape.wikia.com/wiki/Taverley). Talk to [Denulth](http://oldschoolrunescape.wikia.com/wiki/Denulth) in his tent. Tell him you will discover the path for him.',
		rewards: [
			'1 [Quest point](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'3,000 [Attack](http://oldschoolrunescape.wikia.com/wiki/Attack) XP',
			'[Steel claws](http://oldschoolrunescape.wikia.com/wiki/Steel_claws)',
			'Ability to make [claws](http://oldschoolrunescape.wikia.com/wiki/Claws)',
			'Ability to purchase/wear [climbing boots](http://oldschoolrunescape.wikia.com/wiki/Climbing_boots)'
		],
		requirements: ['None'],
		trivia: [
			'[Tenzing](http://oldschoolrunescape.wikia.com/wiki/Tenzing) is an allusion to the Sherpa [Tenzing Norgay](http://en.wikipedia.org/wiki/Tenzing_Norgay), who, along with the New Zealander [Sir Edmund Hillary](http://en.wikipedia.org/wiki/Edmund_Hillary), was the first to climb [Mount Everest](http://en.wikipedia.org/wiki/Mount_Everest).',
			"When you open the door to Tenzing's house for the first time, he exclaims 'No milk today! Thank you!' This is probably a reference to the song 'No Milk Today', by the 1960s band, [Herman's Hermits](http://en.wikipedia.org/wiki/Herman%27s_Hermits). Coincidentally, the song 'Hermit' is unlocked during the quest.",
			'The idea of a secret path round the back of an invincible army comes from the battle of Thermopylae on which the film [300](http://en.wikipedia.org/wiki/300_(film)) was based.',
			'The 3000 [Attack](http://oldschoolrunescape.wikia.com/wiki/Attack) XP gained is enough to bring a player from 1 to 16 Attack, which is more than adequate to wield the [Steel claws](http://oldschoolrunescape.wikia.com/wiki/Steel_claws) you receive.'
		],
		freeToPlay: !1
	},
	DEPTHSOFDESPAIR = {
		thumbnail: 'https://vignette.wikia.nocookie.net/2007scape/images/f/fc/The_Depths_of_Despair.png/revision/latest/scale-to-width-down/300?cb=20171109183347',
		url: 'http://oldschoolrunescape.wikia.com/wiki/The_Depths_of_Despair',
		name: 'The Depths of Despair',
		questType: 'Normal',
		length: 'Short',
		difficulty: 'Novice',
		description: 'Artur Hosidius has gone missing, and Lord Kandur Hosidius needs your help to find his son and bring him home.',
		startPoint: 'Go to [Burthorpe](http://oldschoolrunescape.wikia.com/wiki/Burthorpe), the town north of [Taverley](http://oldschoolrunescape.wikia.com/wiki/Taverley). Talk to [Denulth](http://oldschoolrunescape.wikia.com/wiki/Denulth) in his tent. Tell him you will discover the path for him.',
		rewards: ['1 [Quest point](http://oldschoolrunescape.wikia.com/wiki/Quest_points)', '1,500 [Attack](http://oldschoolrunescape.wikia.com/wiki/Agility) XP', '4000 GP'],
		requirements: ['18 Agility', '[Client of Kourend](http://oldschoolrunescape.wikia.com/wiki/Client_of_Kourend)', '20% Hosidius Favour'],
		trivia: ['None'],
		freeToPlay: !1
	},
	DEATHTOTHEDORGESHUUN = {
		thumbnail: 'https://vignette4.wikia.nocookie.net/2007scape/images/3/3a/Death_to_the_dorgeshuun_11.png/revision/latest/scale-to-width-down/250?cb=20170210221255',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Death_to_the_Dorgeshuun',
		name: 'Death to the Dorgeshuun',
		questType: 'Normal',
		length: 'Medium',
		difficulty: 'Intermediate',
		description:
      'Humans have been visiting the Dorgeshuun mines for some time now, but no Dorgeshuun has visited the surface since the signing of the Lumbridge-Dorgeshuun treaty. The Dorgeshuun Council fears that the [H.A.M](http://oldschoolrunescape.wikia.com/wiki/H.A.M) group may be planning another attack, and want to send an agent to the surface to investigate. But they do not want to send someone to the surface without a guide...',
		startPoint: '[Mistag](http://oldschoolrunescape.wikia.com/wiki/Mistag) in [Lumbridge Caves](http://oldschoolrunescape.wikia.com/wiki/Lumbridge_Caves) beneath the [castle](http://oldschoolrunescape.wikia.com/wiki/Lumbridge_Castle).',
		rewards: [
			'1 [Quest point](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'2,000 [Thieving](http://oldschoolrunescape.wikia.com/wiki/Thieving) XP',
			'2,000 [Ranged](http://oldschoolrunescape.wikia.com/wiki/Ranged) XP',
			'Access to [HAM storerooms](http://oldschoolrunescape.wikia.com/wiki/H.A.M._Hideout#Store_rooms).',
			'Access to water wheel tunnel.',
			'Access to [Dorgesh-Kaan](http://oldschoolrunescape.wikia.com/wiki/Dorgesh-Kaan)'
		],
		requirements: ['Completion of [The Lost Tribe](http://oldschoolrunescape.wikia.com/wiki/The_Lost_Tribe)', '23 [Agility](http://oldschoolrunescape.wikia.com/wiki/Agility)', '23 [Thieving](http://oldschoolrunescape.wikia.com/wiki/Thieving)', 'Ability to defeat level 50 enemy'],
		trivia: [
			"When introducing Zanik to the cook, the cook says it is the Dukes birthday and he needs the basic ingredients to bake a cake. This is in reference to the Cook's Assistant quest.",
			'When examining [Zanik](http://oldschoolrunescape.wikia.com/wiki/Zanik) at certain points later in the quest, the info "She\'s kicking HAM ass" is given. This caused some anger among players who thought it offensive.',
			'When examining [Zanik](http://oldschoolrunescape.wikia.com/wiki/Zanik)\'s dead body while at [Juna](http://oldschoolrunescape.wikia.com/wiki/Juna), it says "Alas, poor Zanik." referring to a line from Shakespeare\'s Hamlet: "Alas, poor Yorick."',
			'The quest was disabled for a month starting at the launch of the Old School RuneScape servers. It is most likely because the quest is involved in a famous graphical glitch, know as "The box glitch" in which a player could carry the crate with Zanik in it anywhere. The glitch would be fixed much later in Runescape\'s history of development.'
		],
		freeToPlay: !1
	},
	DEMONSLAYER = {
		thumbnail: 'https://vignette2.wikia.nocookie.net/2007scape/images/a/ac/Demon_Slayer.png/revision/latest/scale-to-width-down/300?cb=20161128043509',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Demon_Slayer',
		name: 'Demon Slayer',
		questType: 'Normal',
		length: 'Medium',
		difficulty: 'Novice',
		description: 'A mighty demon is being summoned to destroy the city of Varrock. You find out you are the one destined to stop him (or at least try).',
		startPoint: "Talk to the [Gypsy](http://oldschoolrunescape.wikia.com/wiki/Gypsy_Aris) located in a tent around [Varrock](http://oldschoolrunescape.wikia.com/wiki/Varrock)'s centre.",
		rewards: ['3 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)', '[Silverlight](http://oldschoolrunescape.wikia.com/wiki/Silverlight)'],
		requirements: ['Ability to defeat a level 27 [demon](http://oldschoolrunescape.wikia.com/wiki/Delrith)'],
		trivia: ['[Sir Prysin](http://oldschoolrunescape.wikia.com/wiki/Sir_Prysin)\'s name is a play on the word "surprising".', 'Demon Slayer is one of 6 quests released on the launch day of [RuneScape](http://oldschoolrunescape.wikia.com/wiki/RuneScape).'],
		freeToPlay: !0
	},
	DEVIOUSMINDS = {
		thumbnail: 'https://vignette1.wikia.nocookie.net/2007scape/images/9/96/Devious_Minds.png/revision/latest/scale-to-width-down/300?cb=20161012040120',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Devious_Minds',
		name: 'Devious Minds',
		questType: 'Normal',
		length: 'Short',
		difficulty: 'Experienced',
		description: 'No-one likes to miss a good ceremony, least of all a poor lowly monk who needs your assistance! Will you be able to aid him and make his dreams come true?',
		startPoint: 'Talk to the Monk in [Paterdomus](http://oldschoolrunescape.wikia.com/wiki/Paterdomus), next to the temple on the [River Salve](http://oldschoolrunescape.wikia.com/wiki/River_Salve) (near [Morytania](http://oldschoolrunescape.wikia.com/wiki/Morytania)).',
		rewards: [
			'1 [Quest point](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'5,000 [Fletching](http://oldschoolrunescape.wikia.com/wiki/Fletching) XP',
			'5,000 [Runecrafting](http://oldschoolrunescape.wikia.com/wiki/Runecrafting) XP',
			'6,500 [Smithing](http://oldschoolrunescape.wikia.com/wiki/Smithing) XP'
		],
		requirements: [
			'65 [Smithing](http://oldschoolrunescape.wikia.com/wiki/Smithing)',
			'50 [Runecrafting](http://oldschoolrunescape.wikia.com/wiki/Runecrafting)',
			'50 [Fletching](http://oldschoolrunescape.wikia.com/wiki/Fletching)',
			'[Wanted!](http://oldschoolrunescape.wikia.com/wiki/Wanted!)',
			'[Troll Stronghold](http://oldschoolrunescape.wikia.com/wiki/Troll_Stronghold)',
			"[Doric's Quest](http://oldschoolrunescape.wikia.com/wiki/Doric%27s_Quest)",
			'[Enter the Abyss](http://oldschoolrunescape.wikia.com/wiki/Enter_the_Abyss)',
			'[Recruitment Drive](http://oldschoolrunescape.wikia.com/wiki/Recruitment_Drive)'
		],
		trivia: [
			'After delivering the [bow-sword](http://oldschoolrunescape.wikia.com/wiki/Bow-sword), the monk will ask you for one more small favour. Your character may respond thinking that this is familiar, which is probably a reference to the [One Small Favour](http://oldschoolrunescape.wikia.com/wiki/One_Small_Favour) quest even though you get the same dialogue without having the quest done or started.'
		],
		freeToPlay: !1
	},
	COOKSASSISTANT = {
		thumbnail: 'https://vignette3.wikia.nocookie.net/2007scape/images/c/cd/Cook%27s_Assistant.png/revision/latest/scale-to-width-down/300?cb=20151115101929',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Cook%27s_Assistant',
		name: "Cook's Assistant",
		questType: 'Normal',
		length: 'Short',
		difficulty: 'Novice',
		description: "The Lumbridge Castle cook is in a mess. It is the Duke of Lumbridge's birthday and the cook is making the cake. He needs a lot of ingredients and doesn't have much time.",
		startPoint: 'Speak to the [Cook](http://oldschoolrunescape.wikia.com/wiki/Cook_(Lumbridge)) in the kitchen of [Lumbridge Castle](http://oldschoolrunescape.wikia.com/wiki/Lumbridge_Castle).',
		rewards: ['1 [Quest point](http://oldschoolrunescape.wikia.com/wiki/Quest_points)', '300 [Cooking](http://oldschoolrunescape.wikia.com/wiki/Cooking) XP', 'Permission to use the [Cook-o-matic 100](http://oldschoolrunescape.wikia.com/wiki/Cook-o-matic_100)'],
		requirements: ['None'],
		trivia: [
			"Cook's Assistant is one of 6 [quests](http://oldschoolrunescape.wikia.com/wiki/Quests) released on the launch day of RuneScape.",
			'There is an easter egg in the Death to the Dorgeshuun quest, when you introduce Zanik to the Lumbridge Cook, he tries to offer the quest to her. "In fact, it\'s a good thing I met you. It\'s the Duke\'s birthday today, and I should be making him a lovely big birthday cake. I need eggs, flour and milk..." You then tell the cook she does not have time for that, to which he responds "It was worth a try." This insinuates that the cook tries to trick newcomers into bringing him supplies.'
		],
		freeToPlay: !0
	},
	DORICSQUEST = {
		thumbnail: 'https://vignette3.wikia.nocookie.net/2007scape/images/f/ff/Doric%27s_Quest.png/revision/latest/scale-to-width-down/300?cb=20160725125653',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Doric%27s_Quest',
		name: "Doric's Quest",
		questType: 'Normal',
		length: 'Short',
		difficulty: 'Novice',
		description: 'Doric the dwarf is happy to let you use his anvils but first he would like you to run an errand for him.',
		startPoint: 'The small house north of [Falador](http://oldschoolrunescape.wikia.com/wiki/Falador) with anvils inside, outside the east gate of [Taverley](http://oldschoolrunescape.wikia.com/wiki/Taverley). Once inside, talk with [Doric](http://oldschoolrunescape.wikia.com/wiki/Doric).',
		rewards: [
			'1 [Quest point](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'1,300 [Mining](http://oldschoolrunescape.wikia.com/wiki/Mining) XP',
			'180 [GP](http://oldschoolrunescape.wikia.com/wiki/Coins)',
			"Ability to use [Doric](http://oldschoolrunescape.wikia.com/wiki/Doric)'s [anvils](http://oldschoolrunescape.wikia.com/wiki/Anvil)"
		],
		requirements: ['15 [Mining](http://oldschoolrunescape.wikia.com/wiki/Mining)'],
		trivia: ['If you were to do the quest with 1 [Mining](http://oldschoolrunescape.wikia.com/wiki/Mining), the 1,300 Mining XP reward from the quest is enough to get you straight to 10 Mining.'],
		freeToPlay: !0
	},
	DESERTTREASURE = {
		thumbnail: 'https://vignette1.wikia.nocookie.net/2007scape/images/b/b5/Desert_Treasure.png/revision/latest/scale-to-width-down/300?cb=20170210214601',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Desert_Treasure',
		name: 'Desert Treasure',
		questType: 'Normal',
		length: 'Long',
		difficulty: 'Master',
		description:
      'Rumours abound throughout Varrock and Al-Kharid that an archaeologist has discovered clues to a hoard of treasure hidden deep in the desert, south of Al-Kharid. Anybody prepared to offer him assistance in his treasure hunting could well find themselves benefitting from a very large reward indeed...',
		startPoint: 'Speak to the archaeologist at the [Bedabin Camp](http://oldschoolrunescape.wikia.com/wiki/Bedabin_Camp).',
		rewards: [
			'3 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'20,000 [Magic](http://oldschoolrunescape.wikia.com/wiki/Magic) XP',
			'Ability to use [Ancient Magicks](http://oldschoolrunescape.wikia.com/wiki/Ancient_Magicks)',
			'[Ring of visibility](http://oldschoolrunescape.wikia.com/wiki/Ring_of_visibility).',
			'Access to [C.O.T.E.L](http://oldschoolrunescape.wikia.com/wiki/Curse_of_the_Empty_Lord) [miniquest](http://oldschoolrunescape.wikia.com/wiki/Miniquests)',
			'Access to [Ancient staff](http://oldschoolrunescape.wikia.com/wiki/Ancient_staff)',
			'Access to the [Smoke Dungeon](http://oldschoolrunescape.wikia.com/wiki/Smoke_Dungeon).'
		],
		requirements: [
			'53 [Thieving](http://oldschoolrunescape.wikia.com/wiki/Thieving)',
			'50 [Firemaking](http://oldschoolrunescape.wikia.com/wiki/Firemaking)',
			'10 [Slayer](http://oldschoolrunescape.wikia.com/wiki/Slayer)',
			'50 [Magic](http://oldschoolrunescape.wikia.com/wiki/Magic)',
			'[The Digsite](http://oldschoolrunescape.wikia.com/wiki/The_Digsite)',
			'[Temple of Ikov](http://oldschoolrunescape.wikia.com/wiki/Temple_of_Ikov)',
			'[The Tourist Trap](http://oldschoolrunescape.wikia.com/wiki/The_Tourist_Trap)',
			'[Troll Stronghold](http://oldschoolrunescape.wikia.com/wiki/Troll_Stronghold)',
			'[Priest in Peril](http://oldschoolrunescape.wikia.com/wiki/Priest_in_Peril)',
			'[Waterfall Quest](http://oldschoolrunescape.wikia.com/wiki/Waterfall_Quest)'
		],
		trivia: [
			"If a player talks to the Archaeologist after the quest, he will tell a story very similar to 'Indiana Jones: Raiders of the Lost Ark'.",
			'In the Ice Diamond part, when the player speaks to the baby troll he asks "Why so sad, little troll?" and the troll replies "It was the bad man", this is probably a reference to Batman and the Joker.'
		],
		freeToPlay: !1
	},
	DRAGONSLAYER = {
		thumbnail: 'https://vignette.wikia.nocookie.net/2007scape/images/0/0e/Dragon_Slayer.png/revision/latest/scale-to-width-down/300?cb=20130815015029',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Dragon_Slayer',
		name: 'Dragon Slayer',
		questType: 'Normal',
		length: 'Long',
		difficulty: 'Experienced',
		description: 'Prove yourself a true champion. Kill the mighty dragon Elvarg of Crandor and earn the right to buy and wear the Rune platebody.',
		startPoint: "Talk to the [Guildmaster](http://oldschoolrunescape.wikia.com/wiki/Guildmaster), located inside the [Champions' Guild](http://oldschoolrunescape.wikia.com/wiki/Champions%27_Guild).",
		rewards: [
			'2 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'18,650 [Strength](http://oldschoolrunescape.wikia.com/wiki/Strength) XP',
			'18,650 [Defence](http://oldschoolrunescape.wikia.com/wiki/Defence) XP',
			'Ability to wear [rune platebody](http://oldschoolrunescape.wikia.com/wiki/Rune_platebody)',
			"Ability to wear [green d'hide body](http://oldschoolrunescape.wikia.com/wiki/Green_d%27hide_body)",
			'Access to [Crandor](http://oldschoolrunescape.wikia.com/wiki/Crandor)'
		],
		requirements: [
			'32 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			"8 [Crafting](http://oldschoolrunescape.wikia.com/wiki/Crafting) if you're an iron man",
			'Ability to defeat a level 83 [dragon](http://oldschoolrunescape.wikia.com/wiki/Elvarg)',
			'33 [Magic](http://oldschoolrunescape.wikia.com/wiki/Magic) or 10,000 GP'
		],
		trivia: [
			"When speaking to Oziach at the start of the quest he asks you how you found out he sells the rune platebody. If you reply 'I am a master detective', and having completed the Murder Mystery quest, your character will exclaim that they even solved the Sinclair murder mystery all by themself.",
			"When speaking to Duke Horacio during 'The Lost Tribe' quest Sigmund mentions to him that you are the same adventurer who defeated Elvarg."
		],
		freeToPlay: !0
	},
	DREAMMENTOR = {
		thumbnail: 'https://vignette3.wikia.nocookie.net/2007scape/images/2/29/Lunar_Isle.png/revision/latest/scale-to-width-down/250?cb=20160614142204',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Dream_Mentor',
		name: 'Dream Mentor',
		questType: 'Normal',
		length: 'Short',
		difficulty: 'Master',
		description: "RuneScape is not the safest place to live - dragons, trolls, demons... dangerous and despicable monsters of all sorts roam free. In this quest, you must help a fellow adventurer that doesn't do so well against these threats.",
		startPoint: 'Talk to the [fallen man](http://oldschoolrunescape.wikia.com/wiki/Cyrisus) in the small cave in the [Lunar Isle mine](http://oldschoolrunescape.wikia.com/wiki/Lunar_Isle_mine).',
		rewards: [
			'2 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'15,000 [Hitpoints](http://oldschoolrunescape.wikia.com/wiki/Hitpoints) XP',
			'10,000 [Magic](http://oldschoolrunescape.wikia.com/wiki/Magic) XP',
			'7 new [Lunar spells](http://oldschoolrunescape.wikia.com/wiki/Lunar_spells)',
			'A [dreamy lamp](http://oldschoolrunescape.wikia.com/wiki/Dreamy_lamp)'
		],
		requirements: ['85 [Combat](http://oldschoolrunescape.wikia.com/wiki/Combat)', '[Lunar Diplomacy](http://oldschoolrunescape.wikia.com/wiki/Lunar_Diplomacy)', "[Eadgar's Ruse](http://oldschoolrunescape.wikia.com/wiki/Eadgar%27s_Ruse)"],
		trivia: [
			"On the day of release, if you clicked to see the rewards of the quest, it said \"Spoilers? On the day of release? Tell him he's dreaming!\", an allusion to the Australian movie 'The Castle', instead of the usual message.",
			'Surprisingly, [Cyrisus](http://oldschoolrunescape.wikia.com/wiki/Cyrisus) seems to be extremely rich, having the normal armour collection of the many high levelled players in RuneScape.',
			'Cyrisus explains that he can make [rune platebodies](http://oldschoolrunescape.wikia.com/wiki/Rune_platebody), grow [spirit trees](http://oldschoolrunescape.wikia.com/wiki/Spirit_tree) and make [summer pies](http://oldschoolrunescape.wikia.com/wiki/Summer_pie)—another reference to a high level player in RuneScape.',
			'Dream Mentor is the first quest with a combat level requirement. Earlier quests only have single skill level requirements.',
			'When you use a [purple sweet](http://oldschoolrunescape.wikia.com/wiki/Purple_sweets) on Cyrisus, he will say, "Sweets? You do know they rot your teeth?"',
			'After the quest, you can contact Cyrisus via the [NPC Contact](http://oldschoolrunescape.wikia.com/wiki/NPC_Contact) lunar spell. He cycles between four tasks: Killing [TzTok-Jad](http://oldschoolrunescape.wikia.com/wiki/TzTok-Jad) Killing the [Kalphite Queen](http://oldschoolrunescape.wikia.com/wiki/Kalphite_Queen), joined by some of the [Slayer masters](http://oldschoolrunescape.wikia.com/wiki/Slayer_master). A top secret meeting between the rulers of RuneScape (possible reference to [Recipe for Disaster](http://oldschoolrunescape.wikia.com/wiki/Recipe_for_Disaster)). [Player killing](http://oldschoolrunescape.wikia.com/wiki/Player_killing) in the [Wilderness](http://oldschoolrunescape.wikia.com/wiki/Wilderness).',
			'Killing [TzTok-Jad](http://oldschoolrunescape.wikia.com/wiki/TzTok-Jad)',
			'Killing the [Kalphite Queen](http://oldschoolrunescape.wikia.com/wiki/Kalphite_Queen), joined by some of the [Slayer masters](http://oldschoolrunescape.wikia.com/wiki/Slayer_master).',
			'A top secret meeting between the rulers of RuneScape (possible reference to [Recipe for Disaster](http://oldschoolrunescape.wikia.com/wiki/Recipe_for_Disaster)).',
			'[Player killing](http://oldschoolrunescape.wikia.com/wiki/Player_killing) in the [Wilderness](http://oldschoolrunescape.wikia.com/wiki/Wilderness).',
			'Both of the Lunar quests have had their official difficulty level increased shortly after release. [Lunar Diplomacy](http://oldschoolrunescape.wikia.com/wiki/Lunar_Diplomacy) was released as an intermediate quest, and was changed to an experienced quest. Dream Mentor was released as an experienced quest, and was changed to a master quest.'
		],
		freeToPlay: !1
	},
	DWARFCANNON = {
		thumbnail: 'https://vignette2.wikia.nocookie.net/2007scape/images/2/2a/Dwarf_Cannon.png/revision/latest/scale-to-width-down/300?cb=20170328150453',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Dwarf_Cannon',
		name: 'Dwarf Cannon',
		questType: 'Normal',
		length: 'Short',
		difficulty: 'Novice',
		description: 'Run errands for the dwarf commander to repair his base and build his defences',
		startPoint: 'Talk to [Captain Lawgof](http://oldschoolrunescape.wikia.com/wiki/Captain_Lawgof), south of the [Coal Trucks](http://oldschoolrunescape.wikia.com/wiki/Coal_Trucks), northwest of the [Fishing Guild](http://oldschoolrunescape.wikia.com/wiki/Fishing_Guild).',
		rewards: [
			'1 [Quest point](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'750 [Crafting](http://oldschoolrunescape.wikia.com/wiki/Crafting) XP',
			'Ability to use [dwarf multicannon](http://oldschoolrunescape.wikia.com/wiki/Dwarf_multicannon)',
			'Ability to make [cannonballs](http://oldschoolrunescape.wikia.com/wiki/Cannonball)'
		],
		requirements: ['20 [Agility](http://oldschoolrunescape.wikia.com/wiki/Agility)'],
		trivia: [
			'The [dwarf multicannon](http://oldschoolrunescape.wikia.com/wiki/Dwarf_multicannon) can be purchased from [Nulodion](http://oldschoolrunescape.wikia.com/wiki/Nulodion) for 750,000 through his chat dialog, or in excess of 800,000 in parts through his trade window. Alternatively the dwarf multicannon can be purchased from the Grand Exchange for approximately 757,366 GP.'
		],
		freeToPlay: !1
	},
	DRUIDICRITUAL = {
		thumbnail: 'https://vignette2.wikia.nocookie.net/2007scape/images/d/d2/Druidic_Ritual.png/revision/latest/scale-to-width-down/300?cb=20170328150402',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Druidic_Ritual',
		name: 'Druidic Ritual',
		questType: 'Normal',
		length: 'Very Short',
		difficulty: 'Novice',
		description: 'The Druids north of Taverley need help making a potion to reclaim the stone circle south of Varrock.',
		startPoint: 'Speak to [Kaqemeex](http://oldschoolrunescape.wikia.com/wiki/Kaqemeex) in the stone circle north of [Taverley](http://oldschoolrunescape.wikia.com/wiki/Taverley).',
		rewards: ['4 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)', '250 [Herblore](http://oldschoolrunescape.wikia.com/wiki/Herblore) XP', 'Ability to use [Herblore](http://oldschoolrunescape.wikia.com/wiki/Herblore) [skill](http://oldschoolrunescape.wikia.com/wiki/Skills)'],
		requirements: ['None'],
		trivia: ['None'],
		freeToPlay: !1
	},
	EADGARSRUSE = {
		thumbnail: 'https://vignette3.wikia.nocookie.net/2007scape/images/4/42/Eadgar%27s_Ruse.png/revision/latest/scale-to-width-down/300?cb=20170211005824',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Eadgar%27s_Ruse',
		name: "Eadgar's Ruse",
		questType: 'Normal',
		length: 'Medium',
		difficulty: 'Experienced',
		description: 'Sanfew requires a rare herb for the next part of the purifying ritual. Travel back to the Troll Stronghold to find this herb that the trolls use as an ingredient for their favourite dish.',
		startPoint: 'Talk to [Sanfew](http://oldschoolrunescape.wikia.com/wiki/Sanfew) in [Taverley](http://oldschoolrunescape.wikia.com/wiki/Taverley)',
		rewards: [
			'1 [Quest point](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'11,000 [Herblore](http://oldschoolrunescape.wikia.com/wiki/Herblore) XP',
			'Ability to grow/steal [Goutweed](http://oldschoolrunescape.wikia.com/wiki/Goutweed).',
			'Ability to use [Trollheim Teleport](http://oldschoolrunescape.wikia.com/wiki/Trollheim_Teleport) spell',
			'Ability to make Trollheim teletabs'
		],
		requirements: ['[Druidic Ritual](http://oldschoolrunescape.wikia.com/wiki/Druidic_Ritual)', '[Troll Stronghold](http://oldschoolrunescape.wikia.com/wiki/Troll_Stronghold)', '31 [Herblore](http://oldschoolrunescape.wikia.com/wiki/Herblore)'],
		trivia: ['None'],
		freeToPlay: !1
	},
	EAGLESPEAK = {
		thumbnail: 'https://vignette2.wikia.nocookie.net/2007scape/images/d/d1/Eagles%27_peak.png/revision/latest/scale-to-width-down/300?cb=20170409091135',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Eagles%27_Peak',
		name: "Eagles' Peak",
		questType: 'Normal',
		length: 'Medium',
		difficulty: 'Novice',
		description:
      "The Ardougne Zoo is always looking for new specimens, but one of their anticipated new attractions - a ferret from the north - has been proving elusive. One of the Zoo's more eccentric freelance specimen hunters is reported to be on the case, but after setting out for the far western reaches, somewhere between the Piscatoris Fishing Colony and the Tree Gnome Stronghold, nothing more has been heard from him. Will you be able to use your skills as a Hunter to track him down? What else will you discover at the mountain known as Eagles' Peak?",
		startPoint: 'Speak to [Charlie](http://oldschoolrunescape.wikia.com/wiki/Charlie), one of the keepers at [Ardougne Zoo](http://oldschoolrunescape.wikia.com/wiki/Ardougne_Zoo).',
		rewards: [
			'2 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'2,500 [Hunter](http://oldschoolrunescape.wikia.com/wiki/Hunter) XP',
			'Ability to capture [ferrets](http://oldschoolrunescape.wikia.com/wiki/Ferret) using [box traps](http://oldschoolrunescape.wikia.com/wiki/Box_trap)',
			'Access to the [Eagle transport system](http://oldschoolrunescape.wikia.com/wiki/Eagle_transport_system)',
			'Box Trap'
		],
		requirements: ['27 [Hunter](http://oldschoolrunescape.wikia.com/wiki/Hunter)'],
		trivia: ['The giant [Kebbit](http://oldschoolrunescape.wikia.com/wiki/Kebbit) that jumps out of the cave with the [silver feather](http://oldschoolrunescape.wikia.com/wiki/Silver_feather) is likely a reference to the killer rabbit in the Monty Python and the Holy Grail film.'],
		freeToPlay: !1
	},
	ELEMENTALWORKSHOPI = {
		thumbnail: 'https://vignette2.wikia.nocookie.net/2007scape/images/e/e2/Elemental_Workshop_I.png/revision/latest/scale-to-width-down/300?cb=20170211011245',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Elemental_Workshop_I',
		name: 'Elemental Workshop I',
		questType: 'Normal',
		length: 'Short',
		difficulty: 'Novice',
		description: 'Hundreds of years ago, a mineral was found that had the ability to change the property of Magic. The magicians, fearing the effect this may have on their profession, sealed this Workshop forever; or so they had hoped. See if you can rediscover the lost knowledge of elemental ore.',
		startPoint: "[Seers' Village](http://oldschoolrunescape.wikia.com/wiki/Seers%27_Village), the house southwest of the bank.",
		rewards: [
			'1 [Quest point](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'5,000 [Crafting](http://oldschoolrunescape.wikia.com/wiki/Crafting) XP',
			'5,000 [Smithing](http://oldschoolrunescape.wikia.com/wiki/Smithing) XP',
			'Access to [Elemental workshop](http://oldschoolrunescape.wikia.com/wiki/Elemental_workshop)',
			'An [elemental shield](http://oldschoolrunescape.wikia.com/wiki/Elemental_shield)'
		],
		requirements: ['20 [Mining](http://oldschoolrunescape.wikia.com/wiki/Mining)', '20 [Smithing](http://oldschoolrunescape.wikia.com/wiki/Smithing)', '20 [Crafting](http://oldschoolrunescape.wikia.com/wiki/Crafting)'],
		trivia: ['None'],
		freeToPlay: !1
	},
	ENLIGHTENEDJOURNEY = {
		thumbnail: 'https://vignette3.wikia.nocookie.net/2007scape/images/4/42/Enlightened_Journey.png/revision/latest/scale-to-width-down/300?cb=20170328234752',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Enlightened_Journey',
		name: 'Enlightened Journey',
		questType: 'Normal',
		length: 'Short',
		difficulty: 'Intermediate',
		description: 'On the peaceful island of Entrana, a lone monk has tired of his life of simplicity and quiet reflection.',
		startPoint: 'Speak to [Auguste](http://oldschoolrunescape.wikia.com/wiki/Auguste) on the island of [Entrana](http://oldschoolrunescape.wikia.com/wiki/Entrana).',
		rewards: [
			'1 [Quest point](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'2,000 [Crafting](http://oldschoolrunescape.wikia.com/wiki/Crafting) XP',
			'3,000 [Farming](http://oldschoolrunescape.wikia.com/wiki/Farming) XP',
			'1,500 [Woodcutting](http://oldschoolrunescape.wikia.com/wiki/Woodcutting) XP',
			'4,000 [Firemaking](http://oldschoolrunescape.wikia.com/wiki/Firemaking) XP',
			'The [Bomber jacket](http://oldschoolrunescape.wikia.com/wiki/Bomber_jacket)',
			'Bomber [Cap](http://oldschoolrunescape.wikia.com/wiki/Bomber_cap)',
			'Access to [balloon transport](http://oldschoolrunescape.wikia.com/wiki/Balloon_transport_system)'
		],
		requirements: [
			'20 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'20 [Firemaking](http://oldschoolrunescape.wikia.com/wiki/Firemaking)',
			'30 [Farming](http://oldschoolrunescape.wikia.com/wiki/Farming)',
			'36 [Crafting](http://oldschoolrunescape.wikia.com/wiki/Crafting)'
		],
		trivia: ['None'],
		freeToPlay: !1
	},
	LAMENT = {
		thumbnail: 'https://vignette4.wikia.nocookie.net/2007scape/images/f/fe/Enakhra%27s_Lament.png/revision/latest?cb=20170211012138',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Enakhra%27s_Lament',
		name: "Enakhra's Lament",
		questType: 'Normal',
		length: 'Medium',
		difficulty: 'Experienced',
		description:
      "Lazim the sculptor has a sad tale to tell - his days of making art are over, and now all he can do is carp at adventurers as they make a statue for him in the desert. Although, isn't just south of the Bandit Camp an odd place to be putting up a statue? Help Lazim out with his artistic endeavours, and learn more as this quest goes deeper into the history of RuneScape than you might expect...",
		startPoint: 'Talk to [Lazim](http://oldschoolrunescape.wikia.com/wiki/Lazim) south of the desert [Bandit Camp](http://oldschoolrunescape.wikia.com/wiki/Bandit_Camp_(Kharidian_Desert)).',
		rewards: [
			'2 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'7,000 [Crafting](http://oldschoolrunescape.wikia.com/wiki/Crafting) XP',
			'7,000 [Mining](http://oldschoolrunescape.wikia.com/wiki/Mining) XP',
			'7,000 [Firemaking](http://oldschoolrunescape.wikia.com/wiki/Firemaking) XP',
			'7,000 [Magic](http://oldschoolrunescape.wikia.com/wiki/Magic) XP',
			'[Camulet](http://oldschoolrunescape.wikia.com/wiki/Camulet)',
			'[Camel mask](http://oldschoolrunescape.wikia.com/wiki/Camel_mask)'
		],
		requirements: [
			'50 [Crafting](http://oldschoolrunescape.wikia.com/wiki/Crafting)',
			'45 [Firemaking](http://oldschoolrunescape.wikia.com/wiki/Firemaking)',
			'43 [Prayer](http://oldschoolrunescape.wikia.com/wiki/Prayer)',
			'39 [Magic](http://oldschoolrunescape.wikia.com/wiki/Magic)',
			'45 [Mining](http://oldschoolrunescape.wikia.com/wiki/Mining)'
		],
		trivia: ['In Turkish, Lazim means "it is needed."'],
		freeToPlay: !1
	},
	ELEMENTALWORKSHOPII = {
		thumbnail: 'https://vignette3.wikia.nocookie.net/2007scape/images/a/ac/Elemental_Workshop_II.png/revision/latest/scale-to-width-down/300?cb=20170113120500',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Elemental_Workshop_II',
		name: 'Elemental Workshop II',
		questType: 'Normal',
		length: 'Medium',
		difficulty: 'Intermediate',
		description:
      "Among the ancient scrolls and papers held at the Dig Site's Examination Centre, scholars have discovered more references to the mysterious elemental ore. Recently they have uncovered a beaten book detailing long-lost uses for this odd material. Can you decrypt the code that will lead you to the deeper depths of the Elemental Workshop? Can you get your head around fixing the mind-bending machinery, or will you fry your brain in the attempt?",
		startPoint: "Search the bookcases in the [Exam Centre](http://oldschoolrunescape.wikia.com/wiki/Exam_Centre)'s library and read a [Beaten book](http://oldschoolrunescape.wikia.com/wiki/Beaten_book)",
		rewards: ['1 [Quest point](http://oldschoolrunescape.wikia.com/wiki/Quest_points)', '7,500 [Smithing](http://oldschoolrunescape.wikia.com/wiki/Smithing) XP', '7,500 [Crafting](http://oldschoolrunescape.wikia.com/wiki/Crafting) XP', 'Ability to use elemental mind equipment. '],
		requirements: ['20 [Magic](http://oldschoolrunescape.wikia.com/wiki/Magic)', '30 [Smithing](http://oldschoolrunescape.wikia.com/wiki/Smithing)', '[Elemental Workshop I](http://oldschoolrunescape.wikia.com/wiki/Elemental_Workshop_I)'],
		trivia: [
			'When you are downstairs in the corridor that has the mind door, a body door can be seen further down. This is a hint towards the [Elemental Workshop III](http://community.wikia.com/wiki/runescape:Elemental_Workshop_III) quest, which was released in the modern game. The armour reward from it was the [Body body](http://community.wikia.com/wiki/runescape:Body_body).'
		],
		freeToPlay: !1
	},
	ERNESTTHECHICKEN = {
		thumbnail: 'https://vignette1.wikia.nocookie.net/2007scape/images/d/db/Ernest_the_Chicken.png/revision/latest/scale-to-width-down/300?cb=20160208033701',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Ernest_the_Chicken',
		name: 'Ernest the Chicken',
		questType: 'Normal',
		length: 'Short',
		difficulty: 'Novice',
		description: "Veronica is very worried. Her fiancé went into the big spooky manor house to ask for directions. An hour later and he's still not out yet.",
		startPoint:
      '[Veronica](http://oldschoolrunescape.wikia.com/wiki/Veronica), north of [Draynor Village](http://oldschoolrunescape.wikia.com/wiki/Draynor_Village) and south of [Draynor Manor](http://oldschoolrunescape.wikia.com/wiki/Draynor_Manor) (usually right around the gate to Draynor Manor).',
		rewards: ['4 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)', '300 GP', 'Access to the [killerwatt plane](http://oldschoolrunescape.wikia.com/wiki/Killerwatt_plane)'],
		requirements: ['None.'],
		trivia: ['None'],
		freeToPlay: !0
	},
	THEEYESOFGLOUPHRIE = {
		thumbnail: 'https://vignette2.wikia.nocookie.net/2007scape/images/6/64/The_Eyes_of_Glouphrie.png/revision/latest/scale-to-width-down/300?cb=20170211012842',
		url: 'http://oldschoolrunescape.wikia.com/wiki/The_Eyes_of_Glouphrie',
		name: 'The Eyes of Glouphrie',
		questType: 'Normal',
		length: 'Medium',
		difficulty: 'Intermediate',
		description:
      "After you foiled a plan to destroy the Grand Tree things have been quiet in the gnome world. Brimstail has found a strange machine, though, built by [Oaknock](http://oldschoolrunescape.wikia.com/wiki/Oaknock) the Engineer during the Gnomes' Golden Age. What does the weird device do? Why on RuneScape was it built? If you agree to help this bookworm gnome get this confusing device working, you will learn a little about gnome magicks, gnome history, and you will start to uncover a new threat (or is it an old one?) to gnome security - a threat that is a lot harder to see ...",
		startPoint:
      '[Brimstail](http://oldschoolrunescape.wikia.com/wiki/Brimstail) in a cave to the south-west side of the [Tree Gnome Stronghold](http://oldschoolrunescape.wikia.com/wiki/Tree_Gnome_Stronghold), directly west of the bank near the [Stronghold Slayer Cave](http://oldschoolrunescape.wikia.com/wiki/Stronghold_Slayer_Cave).',
		rewards: [
			'2 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'12,000 [Magic](http://oldschoolrunescape.wikia.com/wiki/Magic) XP',
			'2,500 [Woodcutting](http://oldschoolrunescape.wikia.com/wiki/Woodcutting) XP',
			'6,000 [Runecrafting](http://oldschoolrunescape.wikia.com/wiki/Runecrafting) XP',
			'250 [Construction](http://oldschoolrunescape.wikia.com/wiki/Construction) XP',
			'A [small crystal seed](http://oldschoolrunescape.wikia.com/wiki/Small_crystal_seed)'
		],
		requirements: [
			'5 [Construction](http://oldschoolrunescape.wikia.com/wiki/Construction)',
			'46 [Magic](http://oldschoolrunescape.wikia.com/wiki/Magic)',
			'45 [Woodcutting](http://oldschoolrunescape.wikia.com/wiki/Woodcutting)',
			'[The Grand Tree](http://oldschoolrunescape.wikia.com/wiki/The_Grand_Tree)'
		],
		trivia: ['None'],
		freeToPlay: !1
	},
	ENTERTHEABYSS = {
		thumbnail: 'https://vignette2.wikia.nocookie.net/2007scape/images/c/c0/Quest.png/revision/latest/scale-to-width-down/17?cb=20130219195019',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Enter_the_Abyss',
		name: 'Enter the Abyss',
		questType: 'Miniquests',
		length: 'Short',
		difficulty: 'Easy',
		description:
      "In the Abyss miniquest, the player helps the [Zamorakians](http://oldschoolrunescape.wikia.com/wiki/Zamorak) access the [rune essence mines](http://oldschoolrunescape.wikia.com/wiki/Rune_essence_mine) so that they can craft their own runes. Previously, it had been a [Saradominist](http://oldschoolrunescape.wikia.com/wiki/Saradomin) secret, but the [Mage of Zamorak](http://oldschoolrunescape.wikia.com/wiki/Mage_of_Zamorak) asks for the player's help in learning it.",
		startPoint: 'The [Mage of Zamorak](http://oldschoolrunescape.wikia.com/wiki/Mage_of_Zamorak) at the end of the [River Lum](http://oldschoolrunescape.wikia.com/wiki/River_Lum) in the [Wilderness](http://oldschoolrunescape.wikia.com/wiki/Wilderness) (Roams levels 4-7).',
		rewards: ['None.'],
		requirements: ['[Rune Mysteries](http://oldschoolrunescape.wikia.com/wiki/Rune_Mysteries)'],
		trivia: ['None'],
		freeToPlay: !1
	},
	RUNEMYSTERIES = {
		thumbnail: 'https://vignette.wikia.nocookie.net/2007scape/images/5/56/Rune_Mysteries.png/revision/latest/scale-to-width-down/300?cb=20130324195841',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Rune_Mysteries',
		name: 'Rune Mysteries',
		questType: 'Miniquests',
		length: 'Short',
		difficulty: 'Novice',
		description: "Recent research at the Wizards' Tower has found a way to create Runes for the first time in centuries. Assist the head wizard Sedridor in his research and he too may teach you these secrets!",
		startPoint: 'The [Mage of Zamorak](http://oldschoolrunescape.wikia.com/wiki/Mage_of_Zamorak) at the end of the [River Lum](http://oldschoolrunescape.wikia.com/wiki/River_Lum) in the [Wilderness](http://oldschoolrunescape.wikia.com/wiki/Wilderness) (Roams levels 4-7).',
		rewards: ['1 Quest Point', 'Runecrafting skill', 'Air talisman'],
		requirements: ['None'],
		trivia: ['None'],
		freeToPlay: !1
	},
	FAIRYTALEIICUREAQUEEN = {
		thumbnail: 'https://vignette3.wikia.nocookie.net/2007scape/images/8/88/Fairytale_II_-_Cure_a_Queen.png/revision/latest/scale-to-width-down/300?cb=20170211014633',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Fairytale_II_-_Cure_a_Queen',
		name: 'Fairytale II - Cure a Queen',
		questType: 'Normal',
		length: 'Medium',
		difficulty: 'Experienced',
		description:
      "The Fairy Queen should be awake and back in charge of the Lost City by now, but what is happening in Zanaris? Why hasn't the Fairy Godfather abdicated the throne? What is happening to all the fairy inhabitants and where has Fairy Nuff gone? Can you rise to the challenge of using the fairy rings to search the other planes and Cure a Queen, in the second part of the Fairy Tale trilogy?",
		startPoint: 'Talk to [Martin the Master Gardener](http://oldschoolrunescape.wikia.com/wiki/Martin_the_Master_Gardener) in [Draynor Village](http://oldschoolrunescape.wikia.com/wiki/Draynor_Village).',
		rewards: [
			'2 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_point)',
			'3,500 [Herblore](http://oldschoolrunescape.wikia.com/wiki/Herblore) XP',
			'2,500 [Thieving](http://oldschoolrunescape.wikia.com/wiki/Thieving) XP',
			'2,500 XP lamp',
			'Access to the [Fairy rings](http://oldschoolrunescape.wikia.com/wiki/Fairy_rings) network'
		],
		requirements: [
			'[Fairytale I - Growing Pains](http://oldschoolrunescape.wikia.com/wiki/Fairytale_I_-_Growing_Pains)',
			'[Lost City](http://oldschoolrunescape.wikia.com/wiki/Lost_City)',
			'[Nature Spirit](http://oldschoolrunescape.wikia.com/wiki/Nature_Spirit)',
			'40 [Thieving](http://oldschoolrunescape.wikia.com/wiki/Thieving)',
			'49 [Farming](http://oldschoolrunescape.wikia.com/wiki/Farming)',
			'57 [Herblore](http://oldschoolrunescape.wikia.com/wiki/Herblore)'
		],
		trivia: [
			"This quest goes by a few similar names in RuneScape: 'Fairy Tale II - Cure a Queen' in the game window, when you click on the Quest Journal entry, and in the Quest Journal control panel. 'A Fairy Tale Part II - Cure a Queen' in the [Knowledge Base](http://community.wikia.com/wiki/runescape:Knowledge_Base).",
			"'Fairy Tale II - Cure a Queen' in the game window, when you click on the Quest Journal entry, and in the Quest Journal control panel.",
			"'A Fairy Tale Part II - Cure a Queen' in the [Knowledge Base](http://community.wikia.com/wiki/runescape:Knowledge_Base).",
			"If you use [Nuff's certificate](http://oldschoolrunescape.wikia.com/wiki/Nuff%27s_certificate) on one of the sheep in [Zanaris](http://oldschoolrunescape.wikia.com/wiki/Zanaris), your character will ask the sheep if it knows what the strange markings mean, to which the sheep will say: \"The human's found some symbols and doesn't know what they mean so now it's cross-examining me and spoiling my routine!\" This is possibly a reference to the TV show Lamb Chop's Play Along, as it can be sang in the same manner as the show's ending theme, \"The Song That Never Ends\", which is sang by a sheep puppet.",
			"If you use [Nuff's certificate](http://oldschoolrunescape.wikia.com/wiki/Nuff%27s_certificate) on one of the cows in [Zanaris](http://oldschoolrunescape.wikia.com/wiki/Zanaris), your character will ask the cow if it knows what the strange markings mean, to which the cow will say: \"Can't the human take a hint? I've been ignoring you! Do you think I would ignore you if I wanted to discuss your Rorschach ink-blots?\" in reference to the famous [Rorschach psychological test](http://en.wikipedia.org/wiki/Rorschach_test).",
			'The [Fairy Godfather](http://oldschoolrunescape.wikia.com/wiki/Fairy_Godfather) has a right click option of "Pick-pocket" rather than "Pickpocket" like most other npcs.'
		],
		freeToPlay: !1
	},
	FAMILYCREST = {
		thumbnail: 'https://vignette2.wikia.nocookie.net/2007scape/images/0/0a/Family_Crest.png/revision/latest/scale-to-width-down/300?cb=20170211023305',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Family_Crest',
		name: 'Family Crest',
		questType: 'Normal',
		length: 'Medium',
		difficulty: 'Experienced',
		description:
      "There is a man in [Varrock](http://oldschoolrunescape.wikia.com/wiki/Varrock) who needs a bit of help. He is of noble heritage, but without his family's crest, he can't prove it. Unfortunately, his three sons took the crest with them when they left, scattering all across RuneScape.",
		startPoint: 'Talk to [Dimintheis](http://oldschoolrunescape.wikia.com/wiki/Dimintheis) in south-east [Varrock](http://oldschoolrunescape.wikia.com/wiki/Varrock).',
		rewards: ['1 [Quest point](http://oldschoolrunescape.wikia.com/wiki/Quest_points)', '[Steel gauntlets](http://oldschoolrunescape.wikia.com/wiki/Steel_gauntlets)'],
		requirements: [
			'40 [Mining](http://oldschoolrunescape.wikia.com/wiki/Mining)',
			'40 [Smithing](http://oldschoolrunescape.wikia.com/wiki/Smithing)',
			'59 [Magic](http://oldschoolrunescape.wikia.com/wiki/Magic)',
			'40 [Crafting](http://oldschoolrunescape.wikia.com/wiki/Crafting)',
			'Ability to defeat a level 170 [demon](http://oldschoolrunescape.wikia.com/wiki/Demons)'
		],
		trivia: ['None'],
		freeToPlay: !1
	},
	FAIRYTALEIGROWINGPAINS = {
		thumbnail: 'https://vignette3.wikia.nocookie.net/2007scape/images/3/31/Fairytale_I_-_Growing_Pains.png/revision/latest/scale-to-width-down/300?cb=20170211014109',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Fairytale_I_-_Growing_Pains',
		name: 'Fairytale I - Growing Pains',
		questType: 'Normal',
		length: 'Long',
		difficulty: 'Experienced',
		description: "Recently, farmers around RuneScape have been noticing some trouble with their farming patches. They just don't seem to have the same yields as before. What could be the source of this malady?",
		startPoint: '[Martin the Master Gardener](http://oldschoolrunescape.wikia.com/wiki/Martin_the_Master_Gardener) in [Draynor Village](http://oldschoolrunescape.wikia.com/wiki/Draynor_Village).',
		rewards: [
			'2 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'[Magic secateurs](http://oldschoolrunescape.wikia.com/wiki/Magic_secateurs)',
			'3,500 [Farming](http://oldschoolrunescape.wikia.com/wiki/Farming) XP',
			'2,000 [Attack](http://oldschoolrunescape.wikia.com/wiki/Attack) XP',
			'1,000 [Magic](http://oldschoolrunescape.wikia.com/wiki/Magic) XP'
		],
		requirements: [
			'[Lost City](http://oldschoolrunescape.wikia.com/wiki/Lost_City)',
			'[Nature Spirit](http://oldschoolrunescape.wikia.com/wiki/Nature_Spirit)',
			'[The Restless Ghost](http://oldschoolrunescape.wikia.com/wiki/The_Restless_Ghost)',
			'[Priest in Peril](http://oldschoolrunescape.wikia.com/wiki/Priest_in_Peril)',
			'Ability to kill [Tanglefoot](http://oldschoolrunescape.wikia.com/wiki/Tanglefoot)'
		],
		trivia: [
			'Upon clicking "Examine" on the [Draynor skull](http://oldschoolrunescape.wikia.com/wiki/Draynor_Skull), the pun "I shouldn\'t joke, this is a grave matter." appears in the chatbox.',
			'If completing this quest at level 1 Farming, the experience reward is enough to get you to level 17.',
			'"Fairy Nuff", when read out loud, can be heard as "Fair enough".',
			'You cannot kill Tanglefoot with Rings of Recoil.',
			'You must have a strength level greater than 6 to kill Tanglefoot, no matter your farming level.'
		],
		freeToPlay: !1
	},
	FIGHTARENA = {
		thumbnail: 'https://vignette2.wikia.nocookie.net/2007scape/images/c/c0/Quest.png/revision/latest/scale-to-width-down/17?cb=20130219195019',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Fight_Arena',
		name: 'Fight Arena',
		questType: 'Normal',
		length: 'Short',
		difficulty: 'Experienced',
		description: 'None',
		startPoint: 'Talk to [Lady Servil](http://oldschoolrunescape.wikia.com/wiki/Lady_Servil). She is just southwest of the [Monastery](http://oldschoolrunescape.wikia.com/wiki/Ardougne_Monastery) that is south of [Ardougne](http://oldschoolrunescape.wikia.com/wiki/Ardougne).',
		rewards: [
			'2 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'12,175 [Attack](http://oldschoolrunescape.wikia.com/wiki/Attack) XP',
			'2,175 [Thieving](http://oldschoolrunescape.wikia.com/wiki/Thieving) XP',
			'1,000 GP',
			'The [Khazard armour](http://oldschoolrunescape.wikia.com/wiki/Khazard_armour)'
		],
		requirements: ['Ability to kill a level 44/63/137'],
		trivia: [
			'You can see the monsters you fight in the arena on the north side of it, even after finishing the quest.',
			'Players can avoid fighting the next creature between battles by moving around instead of continuing to the next battle, allowing players to rest before entering the next. Talking to any NPC will continue the series of battles.',
			'Khazard would formerly refer to the player as male regardless of gender. This has since been remedied in an [update](http://oldschoolrunescape.wikia.com/wiki/Update:Grapes_%26_PvP_poll_features).',
			'When walking through the prison after killing the general, you can still see Jeremy in his cell even though he has been freed.'
		],
		freeToPlay: !1
	},
	FISHINGCONTEST = {
		thumbnail: 'https://vignette3.wikia.nocookie.net/2007scape/images/e/e9/Fishing_Contest.png/revision/latest/scale-to-width-down/300?cb=20170211040127',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Fishing_Contest',
		name: 'Fishing Contest',
		questType: 'Normal',
		length: 'Short',
		difficulty: 'Novice',
		description: "The mountain Dwarves' home would be an ideal way to get across White Wolf Mountain safely. However, the Dwarves aren't too fond of strangers. They will let you through if you can bring them a trophy. The trophy is the prize for the annual Hemenster fishing competition.",
		startPoint: 'Dwarves at the entrances to the tunnel that goes under [White Wolf Mountain](http://oldschoolrunescape.wikia.com/wiki/White_Wolf_Mountain).',
		rewards: [
			'1 [Quest point](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'2,437 [Fishing](http://oldschoolrunescape.wikia.com/wiki/Fishing) XP',
			'[White Wolf Mountain](http://oldschoolrunescape.wikia.com/wiki/White_Wolf_Mountain) [passage](http://oldschoolrunescape.wikia.com/wiki/White_Wolf_Mountain#White_Wolf_Tunnel)'
		],
		requirements: ['10 [Fishing](http://oldschoolrunescape.wikia.com/wiki/Fishing)'],
		trivia: ['None'],
		freeToPlay: !1
	},
	FAMILYPEST = {
		thumbnail: 'https://vignette2.wikia.nocookie.net/2007scape/images/c/c0/Quest.png/revision/latest/scale-to-width-down/17?cb=20130219195019',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Family_Pest',
		name: 'Family Pest',
		questType: 'Miniquests',
		length: 'Very short',
		difficulty: '',
		description: 'None',
		startPoint: 'Speak to [Dimintheis](http://oldschoolrunescape.wikia.com/wiki/Dimintheis) in southeast Varrock.',
		rewards: ['None.'],
		requirements: ['[Family Crest](http://oldschoolrunescape.wikia.com/wiki/Family_Crest)'],
		trivia: ['Speaking to Dimintheis after completing the miniquest reveals that he has many steel gauntlets in his basement, despite no visible entrances in his house.'],
		freeToPlay: !1
	},
	FORGETTABLETALE = {
		thumbnail: 'https://vignette1.wikia.nocookie.net/2007scape/images/3/32/Forgettable_Tale....png/revision/latest/scale-to-width-down/300?cb=20160823014956',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Forgettable_Tale...',
		name: 'Forgettable Tale of a Drunken Dwarf',
		questType: 'Normal',
		length: 'Long',
		difficulty: 'Intermediate',
		description:
      "Forgettable Tale of a Drunken Dwarf is part 2 in the [Rise of the Red Axe](http://oldschoolrunescape.wikia.com/wiki/Rise_of_the_Red_Axe) series, focusing on the dwarves and their capital city of [Keldagrim](http://oldschoolrunescape.wikia.com/wiki/Keldagrim). After the events in [The Giant Dwarf](http://oldschoolrunescape.wikia.com/wiki/The_Giant_Dwarf), the [Red Axe](http://oldschoolrunescape.wikia.com/wiki/Red_Axe) mining company has departed the city and set up a new headquarters in a remote underground location. [Veldaban](http://oldschoolrunescape.wikia.com/wiki/Veldaban), the Commander of the [Dwarven Black Guard](http://oldschoolrunescape.wikia.com/wiki/Dwarven_Black_Guard) in [Keldagrim](http://oldschoolrunescape.wikia.com/wiki/Keldagrim), wants you to investigate the case and find out if the [Red Axe](http://oldschoolrunescape.wikia.com/wiki/Red_Axe) is planning anything nefarious. The problem is, the only lead he's got is an extremely drunken and kebab obsessed dwarf. Use your farming and brewing abilities to your advantage, then prepare to be perplexed by puzzles as you follow the trail to the [Red Axe](http://oldschoolrunescape.wikia.com/wiki/Red_Axe)...",
		startPoint: 'Talk to Commander [Veldaban](http://oldschoolrunescape.wikia.com/wiki/Veldaban) in the [Dwarven Black Guard](http://oldschoolrunescape.wikia.com/wiki/Dwarven_Black_Guard) headquarters in [Keldagrim](http://oldschoolrunescape.wikia.com/wiki/Keldagrim).',
		rewards: [
			'2 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'5,000 [Cooking](http://oldschoolrunescape.wikia.com/wiki/Cooking) XP',
			'5,000 [Farming](http://oldschoolrunescape.wikia.com/wiki/Farming) XP',
			'2 [Dwarven stout (m)](http://oldschoolrunescape.wikia.com/wiki/Dwarven_stout_(m))'
		],
		requirements: [
			'22 [Cooking](http://oldschoolrunescape.wikia.com/wiki/Cooking)',
			'17 [Farming](http://oldschoolrunescape.wikia.com/wiki/Farming)',
			'[The Giant Dwarf](http://oldschoolrunescape.wikia.com/wiki/The_Giant_Dwarf)',
			'[Fishing Contest](http://oldschoolrunescape.wikia.com/wiki/Fishing_Contest)'
		],
		trivia: [
			'Your quest journal will have revisions once an [ogre shaman](http://oldschoolrunescape.wikia.com/wiki/Grunsh) alters your memory.',
			'In regard to the failed plan to destroy the statue, the Red Axe Director exclaims "And we would have gotten away with it too, if it weren\'t for that pesky human!". This is a reference to the catch phrase used by every villain in the TV show, [Scooby Doo](http://en.wikipedia.org/wiki/Scooby-Doo).',
			'The [Drunken Dwarf](http://oldschoolrunescape.wikia.com/wiki/Drunken_Dwarf_(Keldagrim)) appears to become totally sober in his speech after he has been given [Kelda stout](http://oldschoolrunescape.wikia.com/wiki/Kelda_stout) by the player.',
			'If the player attempts to drink the [Kelda stout](http://oldschoolrunescape.wikia.com/wiki/Kelda_stout), they will remark how vile it is and suggest they take it back to their "drunken, kebab-obsessed friend."'
		],
		freeToPlay: !1
	},
	GERTRUDESCAT = {
		thumbnail: 'https://vignette2.wikia.nocookie.net/2007scape/images/0/04/Gertrude%27s_Cat.png/revision/latest/scale-to-width-down/300?cb=20160213172947',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Gertrude%27s_Cat',
		name: "Gertrude's Cat",
		questType: 'Normal',
		length: 'Short',
		difficulty: 'Novice',
		description: 'Gertrude has lost her cat Fluffs and desperately wants to find her. Can you help bring her home?',
		startPoint: "Go to [Gertrude](http://oldschoolrunescape.wikia.com/wiki/Gertrude)'s house which is just west of [Varrock](http://oldschoolrunescape.wikia.com/wiki/Varrock).",
		rewards: [
			'1 [Quest point](http://oldschoolrunescape.wikia.com/wiki/Quest_point)',
			'1,525 [Cooking](http://oldschoolrunescape.wikia.com/wiki/Cooking) XP',
			'[Chocolate cake](http://oldschoolrunescape.wikia.com/wiki/Chocolate_cake)',
			'[Stew](http://oldschoolrunescape.wikia.com/wiki/Stew)',
			'Your very own [kitten](http://oldschoolrunescape.wikia.com/wiki/Cat)'
		],
		requirements: ['None'],
		trivia: ['None'],
		freeToPlay: !1
	},
	GARDENOFTRANQ = {
		thumbnail: 'https://vignette2.wikia.nocookie.net/2007scape/images/b/b3/Garden_of_Tranquillity_trolley.png/revision/latest/scale-to-width-down/300?cb=20140425184830',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Garden_of_Tranquillity',
		name: 'Garden of Tranquillity',
		questType: 'Normal',
		length: 'Long',
		difficulty: 'Intermediate',
		description:
      "'Queen of Varrock seeks experienced gardener to help construct a garden of peace and serenity as surprise for husband. Only serious Farmers need apply. Peasants welcome (although not that welcome). Tools not supplied. Please note: under no circumstances are the contents of this message to be disclosed to Rollie – um, one means King Roald.'",
		startPoint: 'Speak to [Ellamaria](http://oldschoolrunescape.wikia.com/wiki/Ellamaria) in the garden of [Varrock Palace](http://oldschoolrunescape.wikia.com/wiki/Varrock_Palace).',
		rewards: [
			'2 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'5,000 [Farming](http://oldschoolrunescape.wikia.com/wiki/Farming) XP',
			'An activated [ring of charos](http://oldschoolrunescape.wikia.com/wiki/Ring_of_charos)',
			'An [apple tree seed](http://oldschoolrunescape.wikia.com/wiki/Apple_tree_seed)',
			'An [acorn](http://oldschoolrunescape.wikia.com/wiki/Acorn)',
			'5 [guam seeds](http://oldschoolrunescape.wikia.com/wiki/Guam_seed)',
			'4-dose [compost potion](http://oldschoolrunescape.wikia.com/wiki/Compost_potion)'
		],
		requirements: ['25 [Farming](http://oldschoolrunescape.wikia.com/wiki/Farming)', '[Creature of Fenkenstrain](http://oldschoolrunescape.wikia.com/wiki/Creature_of_Fenkenstrain)'],
		trivia: [
			"The player spoof that comes and attacks the two guards while you're taking the [Falador](http://oldschoolrunescape.wikia.com/wiki/Falador) statue has the same name as the [PKer](http://oldschoolrunescape.wikia.com/wiki/Player_killing) that the [Wise Old Man](http://oldschoolrunescape.wikia.com/wiki/Wise_Old_Man) asks you about.",
			'Since the seventh question has two correct answers, it is possible that just getting six out of seven correct is all that is needed. Upon trying, any answer to the seventh question will work so long as the previous six were answered correctly.',
			'Despite the fact that [Queen Ellamaria](http://oldschoolrunescape.wikia.com/wiki/Queen_Ellamaria) refers to the patches as "they have been filled with extremely fertile soil that was very expensive to import", you still use regular compost on the plant pots to plant the orchids, although supercompost is also adequate.',
			"When Queen Ellamaria slaps [King Roald](http://oldschoolrunescape.wikia.com/wiki/King_Roald) at the end of the last cutscene, a health bar shows up above the King's head."
		],
		freeToPlay: !1
	},
	GOBLINDIPLOMACY = {
		thumbnail: 'https://vignette2.wikia.nocookie.net/2007scape/images/1/1b/Goblin_Diplomacy.png/revision/latest/scale-to-width-down/300?cb=20150316125928',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Goblin_Diplomacy',
		name: 'Goblin Diplomacy',
		questType: 'Normal',
		length: 'Short',
		difficulty: 'Novice',
		description: "There's a disturbance in the Goblin Village. Help the goblins solve their dispute so the world doesn't have to worry about rioting goblins.",
		startPoint: 'Go to [Goblin Village](http://oldschoolrunescape.wikia.com/wiki/Goblin_Village), and talk to [General Bentnoze](http://oldschoolrunescape.wikia.com/wiki/General_Bentnoze) or [General Wartface](http://oldschoolrunescape.wikia.com/wiki/General_Wartface).',
		rewards: ['5 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)', '200 [Crafting](http://oldschoolrunescape.wikia.com/wiki/Crafting) XP', 'A [gold bar](http://oldschoolrunescape.wikia.com/wiki/Gold_bar)'],
		requirements: ['None'],
		trivia: ['None'],
		freeToPlay: !0
	},
	GHOSTSAHOY = {
		thumbnail: 'https://vignette4.wikia.nocookie.net/2007scape/images/c/ca/Ghosts_Ahoy.png/revision/latest/scale-to-width-down/300?cb=20130826224210',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Ghosts_Ahoy',
		name: 'Ghosts Ahoy',
		questType: 'Normal',
		length: 'Long',
		difficulty: 'Intermediate',
		description: "East of [Canifis](http://oldschoolrunescape.wikia.com/wiki/Canifis) is a ghost port. Not meaning that it's deserted. It's full of ghosts! For some reason, they're stuck in RuneScape, but some aren't happy with that. Can you help?",
		startPoint: 'Talk to [Velorina](http://oldschoolrunescape.wikia.com/wiki/Velorina) in [Port Phasmatys](http://oldschoolrunescape.wikia.com/wiki/Port_Phasmatys).',
		rewards: [
			'2 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'2,400 [Prayer](http://oldschoolrunescape.wikia.com/wiki/Prayer) XP',
			'Free passage to [Port Phasmatys](http://oldschoolrunescape.wikia.com/wiki/Port_Phasmatys)',
			'The [Ectophial](http://oldschoolrunescape.wikia.com/wiki/Ectophial)'
		],
		requirements: [
			'Level 25 [Agility](http://oldschoolrunescape.wikia.com/wiki/Agility)',
			'Level 20 [Cooking](http://oldschoolrunescape.wikia.com/wiki/Cooking)',
			'[The Restless Ghost](http://oldschoolrunescape.wikia.com/wiki/The_Restless_Ghost)',
			'[Priest in Peril](http://oldschoolrunescape.wikia.com/wiki/Priest_in_Peril).'
		],
		trivia: ['None'],
		freeToPlay: !1
	},
	THEGRANDTREE = {
		thumbnail: 'https://vignette1.wikia.nocookie.net/2007scape/images/f/f6/The_Grand_Tree.png/revision/latest/scale-to-width-down/300?cb=20170328150539',
		url: 'http://oldschoolrunescape.wikia.com/wiki/The_Grand_Tree',
		name: 'The Grand Tree',
		questType: 'Normal',
		length: 'Long',
		difficulty: 'Experienced',
		description:
      'The [Grand Tree](http://oldschoolrunescape.wikia.com/wiki/Grand_Tree), which shelters the majority of the small gnome population of RuneScape, is dying. Is it human sabotage or an inside job? Help [King Shareen](http://oldschoolrunescape.wikia.com/wiki/King_Shareen) to find the true cause and save the tree gnomes from an uncertain fate.',
		startPoint: 'Talk to [King Narnode Shareen](http://oldschoolrunescape.wikia.com/wiki/King_Narnode_Shareen) in The [Grand Tree](http://oldschoolrunescape.wikia.com/wiki/Grand_Tree).',
		rewards: [
			'5 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'18,400 [Attack](http://oldschoolrunescape.wikia.com/wiki/Attack) XP',
			'7,900 [Agility](http://oldschoolrunescape.wikia.com/wiki/Agility) XP',
			'2,150 [Magic](http://oldschoolrunescape.wikia.com/wiki/Magic) XP',
			'Access to [Gnome gliders](http://oldschoolrunescape.wikia.com/wiki/Gnome_glider)',
			'Grand Tree/Barb Outpost [Agility shortcut](http://oldschoolrunescape.wikia.com/wiki/Agility_shortcut)',
			'Ability to use Spirit Tree in the Stronghold'
		],
		requirements: ['Level 25 [Agility](http://oldschoolrunescape.wikia.com/wiki/Agility)', 'Ability to kill level 172 [Black demon](http://oldschoolrunescape.wikia.com/wiki/Black_demon)'],
		trivia: ['None'],
		freeToPlay: !1
	},
	HAUNTEDMINE = {
		thumbnail: 'https://vignette1.wikia.nocookie.net/2007scape/images/9/94/Haunted_Mine.png/revision/latest/scale-to-width-down/300?cb=20170211054056',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Haunted_Mine',
		name: 'Haunted Mine',
		questType: 'Normal',
		length: 'Short',
		difficulty: 'Experienced',
		description:
      "Recent forays into Morytania by some of Saradomin's more fanatical supporters have unearthed murky rumours concerning an abandoned mine in the south. Legend speaks of an unusual material, hidden in the depths of the mines, that is somehow linked to the desolation and fear that now surrounds the place. Do you have the nerve to find out more, and enter the haunted mines of Morytania?",
		startPoint: "Speak to the [Zealot](http://oldschoolrunescape.wikia.com/wiki/Zealot) at the mines in [Morytania](http://oldschoolrunescape.wikia.com/wiki/Morytania) on the path to Mort'ton.",
		rewards: [
			'2 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'22,000 [Strength](http://oldschoolrunescape.wikia.com/wiki/Strength) XP',
			'Ability to make [salve amulets](http://oldschoolrunescape.wikia.com/wiki/Salve_amulet)',
			"Access to [Tarn's Lair](http://oldschoolrunescape.wikia.com/wiki/Tarn%27s_Lair)"
		],
		requirements: [
			'15 [Agility](http://oldschoolrunescape.wikia.com/wiki/Agility)',
			'35 [Crafting](http://oldschoolrunescape.wikia.com/wiki/Crafting)',
			'[Priest in Peril](http://oldschoolrunescape.wikia.com/wiki/Priest_in_Peril)',
			'Ability to defeat a level 95',
			'40 [Prayer](http://oldschoolrunescape.wikia.com/wiki/Prayer)',
			'60+ in a selected combat style'
		],
		trivia: ['The Mischievous ghost who attempts to shut the water valve and stop the lift will wail "wooo ooo oooo", even when wearing a [ghostspeak amulet](http://oldschoolrunescape.wikia.com/wiki/Ghostspeak_amulet).'],
		freeToPlay: !1
	},
	GRIMTALES = {
		thumbnail: 'https://vignette3.wikia.nocookie.net/2007scape/images/7/70/Grim_Tales.png/revision/latest/scale-to-width-down/300?cb=20160802074812',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Grim_Tales',
		name: 'Grim Tales',
		questType: 'Normal',
		length: 'Medium',
		difficulty: 'Master',
		description:
      '"Once upon a time in a land far, far away..." Sylas, a collector of items both wondrous and unusual seeks out the latest additions to his trove with a somewhat unusual prize for the finder. Terrors and towers await; fierce battles with giant beasts; striding boldly to rescue a dwarf in distress! Not a quest for the meek or faint-hearted, prepare yourself for a feast of fairy-tale fun with rewards a-plenty! The Brothers Grimm could never have foretold a tale such as this...',
		startPoint: 'Talk to [Sylas](http://oldschoolrunescape.wikia.com/wiki/Sylas) in [Taverley](http://oldschoolrunescape.wikia.com/wiki/Taverley).',
		rewards: [
			'1 [Quest point](http://oldschoolrunescape.wikia.com/wiki/Quest_point)',
			'4,000 [Farming](http://oldschoolrunescape.wikia.com/wiki/Farming) XP',
			'5,000 [Herblore](http://oldschoolrunescape.wikia.com/wiki/Herblore) XP',
			'5,000 [Hitpoints](http://oldschoolrunescape.wikia.com/wiki/Hitpoints) XP',
			'14,000 [Woodcutting](http://oldschoolrunescape.wikia.com/wiki/Woodcutting) XP',
			'6,000 [Agility](http://oldschoolrunescape.wikia.com/wiki/Agility) XP',
			'6,000 [Thieving](http://oldschoolrunescape.wikia.com/wiki/Thieving) XP',
			'[Dwarven helmet](http://oldschoolrunescape.wikia.com/wiki/Dwarven_helmet)'
		],
		requirements: [
			'45 [Farming](http://oldschoolrunescape.wikia.com/wiki/Farming)',
			'52 [Herblore](http://oldschoolrunescape.wikia.com/wiki/Herblore)',
			'58 [Thieving](http://oldschoolrunescape.wikia.com/wiki/Thieving)',
			'59 [Agility](http://oldschoolrunescape.wikia.com/wiki/Agility)',
			'71 [Woodcutting](http://oldschoolrunescape.wikia.com/wiki/Woodcutting)',
			"[Witch's House](http://oldschoolrunescape.wikia.com/wiki/Witch%27s_House)",
			'Ability to defeat [Glod](http://oldschoolrunescape.wikia.com/wiki/Glod)'
		],
		trivia: [
			"This quest parodies and references several fairy tales: Many parts of the quest, including the name, are references to the well-known fairy tale collection [Grimm's Fairy Tales](http://en.wikipedia.org/wiki/Grimm%27s_Fairy_Tales). A few tales from the collection that are referenced: The Griffin (getting a feather from a griffin by telling it stories) Rapunzel (climbing Rupert's beard) Jack and the Beanstalk (climbing a magic beanstalk for a golden reward). The [Shrinking potion](http://oldschoolrunescape.wikia.com/wiki/Shrinking_potion) is a reference to [Alice in Wonderland](http://en.wikipedia.org/wiki/Alice_in_Wonderland).",
			"Many parts of the quest, including the name, are references to the well-known fairy tale collection [Grimm's Fairy Tales](http://en.wikipedia.org/wiki/Grimm%27s_Fairy_Tales). A few tales from the collection that are referenced: The Griffin (getting a feather from a griffin by telling it stories) Rapunzel (climbing Rupert's beard) Jack and the Beanstalk (climbing a magic beanstalk for a golden reward).",
			'The Griffin (getting a feather from a griffin by telling it stories)',
			"Rapunzel (climbing Rupert's beard)",
			'Jack and the Beanstalk (climbing a magic beanstalk for a golden reward).',
			'The [Shrinking potion](http://oldschoolrunescape.wikia.com/wiki/Shrinking_potion) is a reference to [Alice in Wonderland](http://en.wikipedia.org/wiki/Alice_in_Wonderland).',
			'On the first day of release when you clicked to see the rewards you got the message "Spoilers are only given on the day of release in fairy tales."',
			'After the player names the gnome in the story with Grimgnash, Grimgnash gets upset. He claims "You shouldn\'t name food! If Human had a carrot, would Human call it Jasper?" This is a reference to the British Comedian Jasper Carrot.',
			"The silent 'q' in the princess' name is a reference to the book shop sketch by Monty Python.",
			"When trying to pronounce the princess' name, your character says \"...Marzipan?\" - a reference to either a character in the online comic [Homestar Runner](http://en.wikipedia.org/wiki/Homestar_Runner) or the [sugar and almond confection](http://en.wikipedia.org/wiki/Marzipan) that she's named after.",
			'[Glod](http://oldschoolrunescape.wikia.com/wiki/Glod), the quest\'s final boss, resembles [The Hulk](http://en.wikipedia.org/wiki/Hulk_(comics)) in many ways. Both are bare-chested, have discoloured skin, and have a similar face and hairstyle. Glod even yells "GLOD SMASH!", just like the Hulk.',
			'Glod may possibly be named after characters in Norse mythology, Glut, who was a particularly evil giant, and Hod, the god who guarded the Bifrost Bridge, who is similar in build to Glod.',
			"If you take the 'd' off the end of [Rupert the Beard](http://oldschoolrunescape.wikia.com/wiki/Rupert_the_Beard), you're left with Rupert The Bear, a once popular fictional character.",
			'This quest has the highest skill level requirement of any other quest, with [Woodcutting](http://oldschoolrunescape.wikia.com/wiki/Woodcutting) at level 71.'
		],
		freeToPlay: !1
	},
	THEGOLEM = {
		thumbnail: 'https://vignette3.wikia.nocookie.net/2007scape/images/e/e2/Uzer.png/revision/latest/scale-to-width-down/250?cb=20160914142350',
		url: 'http://oldschoolrunescape.wikia.com/wiki/The_Golem',
		name: 'The Golem',
		questType: 'Normal',
		length: 'Medium',
		difficulty: 'Intermediate',
		description:
      'Deep in the desert stand the ruins of the once great city of Uzer, where a lone survivor, an ancient clay golem, forever paces back and forth. It is badly damaged, and its mind cannot rest until it has completed the task for which it was created. It is up to you to uncover the secret of the lost city, and add the final chapter to a story started in the violence of the Third Age.',
		startPoint:
      'Talk to the [clay golem](http://oldschoolrunescape.wikia.com/wiki/Clay_golem) in the ruins of [Uzer](http://oldschoolrunescape.wikia.com/wiki/Uzer), east of the [Shantay Pass](http://oldschoolrunescape.wikia.com/wiki/Shantay_Pass) in the [Kharidian Desert](http://oldschoolrunescape.wikia.com/wiki/Kharidian_Desert).',
		rewards: [
			'1 [Quest point](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'1,000 [Thieving](http://oldschoolrunescape.wikia.com/wiki/Thieving) XP',
			'1,000 [Crafting](http://oldschoolrunescape.wikia.com/wiki/Crafting) XP',
			'2 cut [rubies](http://oldschoolrunescape.wikia.com/wiki/Ruby)/[emeralds](http://oldschoolrunescape.wikia.com/wiki/Emerald)/[sapphires](http://oldschoolrunescape.wikia.com/wiki/Sapphire)',
			'Carpet ride from [Shantay Pass](http://oldschoolrunescape.wikia.com/wiki/Shantay_Pass) to [Uzer](http://oldschoolrunescape.wikia.com/wiki/Uzer)'
		],
		requirements: ['20 [Crafting](http://oldschoolrunescape.wikia.com/wiki/Crafting)', '25 [Thieving](http://oldschoolrunescape.wikia.com/wiki/Thieving)'],
		trivia: ['None'],
		freeToPlay: !1
	},
	FREMISLES = {
		thumbnail: 'https://vignette.wikia.nocookie.net/2007scape/images/e/e0/The_Fremennik_Isles.png/revision/latest/scale-to-width-down/300?cb=20170211043654',
		url: 'http://oldschoolrunescape.wikia.com/wiki/The_Fremennik_Isles',
		name: 'The Fremennik Isles',
		questType: 'Normal',
		length: 'Long',
		difficulty: 'Experienced',
		description:
      'Sibling rivalry can get messy - more so when the siblings are Fremennik princes with a point to prove. The islands of Jatizso and Neitiznot were set up by two brothers who hated each other, and they have been at loggerheads ever since. But now there is a new threat from trolls in the north... Can you prove your loyalty to both brothers and save the islanders from a fate as troll food? Your skills as a Fremennik warrior, a bridge builder and... a jester will be tested on the islands.',
		startPoint:
      'Talk to the [clay golem](http://oldschoolrunescape.wikia.com/wiki/Clay_golem) in the ruins of [Uzer](http://oldschoolrunescape.wikia.com/wiki/Uzer), east of the [Shantay Pass](http://oldschoolrunescape.wikia.com/wiki/Shantay_Pass) in the [Kharidian Desert](http://oldschoolrunescape.wikia.com/wiki/Kharidian_Desert).',
		rewards: ['1 [Quest point](http://oldschoolrunescape.wikia.com/wiki/Quest_points)', '5,000 Construction XP', '5,000 Crafting XP', '10,000 Woodcutting XP', '20,000 Combat XP'],
		requirements: ['[The Fremennik Trials](http://oldschoolrunescape.wikia.com/wiki/The_Fremennik_Trials)', '20 Construction', '40 Agility', '56 Woodcutting', '46 Crafting'],
		trivia: [
			'The exchange with Slug regarding your codename is a reference to the film Reservoir Dogs',
			'The window tax may sound somewhat ridiculous, but it is the origin of the real-life phrase "daylight robbery"; people claimed that to tax windows would be equivalent to stealing daylight from people\'s homes.',
			'The beard tax of 1698 is the best known of a series of measures enacted by Tsar Peter the Great to transform and regulate the appearance of his subjects.',
			'Neitiznot is a Icelandic/English/Dutch mixture for "No it\'s not", while Jatizso is an Icelandic/English/Dutch mixture for "It is so".',
			'If a catspeak amulet is worn, the player is able to understand what HRH Hrafn is saying during an early cutscene.',
			'The name of the cook on Jatizso is named Vanligga Gastfrihet, which is Swedish and could be roughly translated to "Kind Hospitality".',
			'When the quest was first released, one of the NPCs used the word damn, which was originally a censored word when used by players. It was later changed to blasted.',
			"Neitiznot is ruled by a Burgher, while Jatizso is ruled by a King. Together, these make a Burgher King, a pun about Burger King, a fast food chain in the United States. This could also be a reference the English King Henry VII, who's nickname was the Burgher King."
		],
		freeToPlay: !1
	},
	HAZEELCULT = {
		thumbnail: 'https://vignette1.wikia.nocookie.net/2007scape/images/2/20/Hazeel_revived.png/revision/latest/scale-to-width-down/250?cb=20130223130205',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Hazeel_Cult',
		name: 'Hazeel Cult',
		questType: 'Normal',
		length: 'Short',
		difficulty: 'Novice',
		description: 'Discover the truth behind the Carnillean family fortune. Decide for yourself whether to aid the Carnilleans in retrieving stolen goods, or join the Hazeel cult members in their mission to resurrect the infamous Lord Hazeel.',
		startPoint:
      "Central [Ardougne](http://oldschoolrunescape.wikia.com/wiki/Ardougne), south of [King Lathas](http://oldschoolrunescape.wikia.com/wiki/King_Lathas)' [castle](http://oldschoolrunescape.wikia.com/wiki/Ardougne_Castle). Talk to [Ceril Carnillean](http://oldschoolrunescape.wikia.com/wiki/Ceril_Carnillean).",
		rewards: ['1 [Quest Point](http://oldschoolrunescape.wikia.com/wiki/Quest_Points)', '1500 [Thieving](http://oldschoolrunescape.wikia.com/wiki/Thieving) XP', '2000 GP', '[Mark of Hazeel](http://oldschoolrunescape.wikia.com/wiki/Hazeel%27s_mark)'],
		requirements: ['Able to defeat a level 13'],
		trivia: ['None'],
		freeToPlay: !1
	},
	HEROESQUEST = {
		thumbnail: 'https://vignette3.wikia.nocookie.net/2007scape/images/8/84/Heroes%27_Guild.png/revision/latest/scale-to-width-down/300?cb=20170223141211',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Heroes%27_Quest',
		name: "Heroes' Quest",
		questType: 'Normal',
		length: 'Medium-Long (can be completed in less than 25 minutes if you already have a partner and all the required items)',
		difficulty: 'Experienced',
		description: "Prove you are worthy to enter the Heroes' Guild. To prove your status as a hero you will need to obtain a number of items. There are many challenges standing between you and these items.",
		startPoint: "Outside the [Heroes' Guild](http://oldschoolrunescape.wikia.com/wiki/Heroes%27_Guild)); north of [Taverley](http://oldschoolrunescape.wikia.com/wiki/Taverley). Speak with [Achietties](http://oldschoolrunescape.wikia.com/wiki/Achietties).",
		rewards: [
			'1 [Quest point](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'3,075 [Attack](http://oldschoolrunescape.wikia.com/wiki/Attack) XP',
			'3,075 [Defence](http://oldschoolrunescape.wikia.com/wiki/Defence) XP',
			'3,075 [Strength](http://oldschoolrunescape.wikia.com/wiki/Strength) XP',
			'3,075 [Hitpoints](http://oldschoolrunescape.wikia.com/wiki/Hitpoints) XP',
			'2,075 [Ranged](http://oldschoolrunescape.wikia.com/wiki/Ranged) XP',
			'2,725 [Fishing](http://oldschoolrunescape.wikia.com/wiki/Fishing) XP',
			'2,825 [Cooking](http://oldschoolrunescape.wikia.com/wiki/Cooking) XP',
			'1,575 [Woodcutting](http://oldschoolrunescape.wikia.com/wiki/Woodcutting) XP',
			'1,575 [Firemaking](http://oldschoolrunescape.wikia.com/wiki/Firemaking) XP',
			'2,257 [Smithing](http://oldschoolrunescape.wikia.com/wiki/Smithing) XP',
			'2,575 [Mining](http://oldschoolrunescape.wikia.com/wiki/Mining) XP',
			'1,325 [Herblore](http://oldschoolrunescape.wikia.com/wiki/Herblore) XP',
			"Access to the [Heroes' Guild](http://oldschoolrunescape.wikia.com/wiki/Heroes%27_Guild)",
			'Ability to purchase and wield [dragon battleaxes](http://oldschoolrunescape.wikia.com/wiki/Dragon_battleaxe) and [maces](http://oldschoolrunescape.wikia.com/wiki/Dragon_mace)',
			'Access to [Fountain of Heroes](http://oldschoolrunescape.wikia.com/wiki/Fountain_of_Heroes)'
		],
		requirements: [
			'55 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'53 [Cooking](http://oldschoolrunescape.wikia.com/wiki/Cooking)',
			'53 [Fishing](http://oldschoolrunescape.wikia.com/wiki/Fishing)',
			'25 [Herblore](http://oldschoolrunescape.wikia.com/wiki/Herblore)',
			'50 [Mining](http://oldschoolrunescape.wikia.com/wiki/Mining)',
			'[Shield of Arrav](http://oldschoolrunescape.wikia.com/wiki/Shield_of_Arrav)',
			'[Lost City](http://oldschoolrunescape.wikia.com/wiki/Lost_City)',
			"[Merlin's Crystal](http://oldschoolrunescape.wikia.com/wiki/Merlin%27s_Crystal)",
			'[Dragon Slayer](http://oldschoolrunescape.wikia.com/wiki/Dragon_Slayer)',
			'[Druidic Ritual](http://oldschoolrunescape.wikia.com/wiki/Druidic_Ritual)',
			'70 [Agility](http://oldschoolrunescape.wikia.com/wiki/Agility)'
		],
		trivia: [
			'If you have completed the quest and are a part of the [Black Arm Gang](http://oldschoolrunescape.wikia.com/wiki/Black_Arm_Gang), you have the ability to help others who have not completed the quest and are members of the [Phoenix Gang](http://oldschoolrunescape.wikia.com/wiki/Phoenix_Gang). First, you can enter the mansion without your full [black armour](http://oldschoolrunescape.wikia.com/wiki/Black_equipment#Armour) and ask [Grip](http://oldschoolrunescape.wikia.com/wiki/Grip) for another [miscellaneous key](http://oldschoolrunescape.wikia.com/wiki/Miscellaneous_key) for your partner - to get another key, first ask him what your duties involve before asking "what can I do now?". Open the cabinet and allow Grip to walk into the room. Shut the door and trap him and the Phoenix Gang member must kill Grip. This will update their quest journal for the Heroes\' Quest.',
			'Members of the Phoenix Gang who have already completed the quest also have the ability to help others who have not, and are members of the Black Arm Gang. Either use the miscellaneous key received while completing the quest initially, or get a new one from the Black Arm Gang member. Return through [The Shrimp and Parrot](http://oldschoolrunescape.wikia.com/wiki/The_Shrimp_and_Parrot) bar to the kitchen, and then through the secret panel. Head past the [guard dogs](http://oldschoolrunescape.wikia.com/wiki/Guard_dog) again and into mansion. Use the miscellaneous key on the door, and kill Grip once the Black Arm Gang member has lured him into position.'
		],
		freeToPlay: !1
	},
	HORRORFROMTHEDEEP = {
		thumbnail: 'https://vignette2.wikia.nocookie.net/2007scape/images/f/fe/Horror_from_the_Deep.png/revision/latest/scale-to-width-down/300?cb=20170321235215',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Horror_from_the_Deep',
		name: 'Horror from the Deep',
		questType: 'Normal',
		length: 'Short',
		difficulty: 'Experienced',
		description:
      "The lighthouse protecting Kandarin's northwestern coastline has mysteriously stopped operating, and contact with the lighthouse keeper Jossik has been lost. The Council would greatly appreciate it if somebody could discover for them what has happened to this most vital landscape feature.",
		startPoint: 'Speak with [Larrissa](http://oldschoolrunescape.wikia.com/wiki/Larrissa), who is outside the [Lighthouse](http://oldschoolrunescape.wikia.com/wiki/Lighthouse), north of [Barbarian Outpost](http://oldschoolrunescape.wikia.com/wiki/Barbarian_Outpost).',
		rewards: [
			'2 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'4662.5 [Magic](http://oldschoolrunescape.wikia.com/wiki/Magic) XP',
			'4662.5 [Strength](http://oldschoolrunescape.wikia.com/wiki/Strength) XP',
			'4662.5 [Ranged](http://oldschoolrunescape.wikia.com/wiki/Ranged) XP',
			'A damaged prayer book of your choice: a [Holy book](http://oldschoolrunescape.wikia.com/wiki/Holy_book) ([Saradomin](http://oldschoolrunescape.wikia.com/wiki/Saradomin)), an [Unholy book](http://oldschoolrunescape.wikia.com/wiki/Unholy_book) ([Zamorak](http://oldschoolrunescape.wikia.com/wiki/Zamorak)), or a [Book of balance](http://oldschoolrunescape.wikia.com/wiki/Book_of_balance) ([Guthix](http://oldschoolrunescape.wikia.com/wiki/Guthix)).',
			'Access to the [Lighthouse](http://oldschoolrunescape.wikia.com/wiki/Lighthouse) [general store](http://oldschoolrunescape.wikia.com/wiki/General_store) and the [Dagannoth](http://oldschoolrunescape.wikia.com/wiki/Dagannoth) caves underneath. (There are level 74 and 92 Dagannoth. Both use a [Ranged](http://oldschoolrunescape.wikia.com/wiki/Ranged) attack that has terrible accuracy, but the level 92 ones will try to use their much more effective [Melee](http://oldschoolrunescape.wikia.com/wiki/Melee) attack whenever they can.)'
		],
		requirements: [
			'35 [Agility](http://oldschoolrunescape.wikia.com/wiki/Agility)',
			"[Alfred Grimhand's Barcrawl](http://oldschoolrunescape.wikia.com/wiki/Alfred_Grimhand%27s_Barcrawl)",
			"40 [Prayer](http://oldschoolrunescape.wikia.com/wiki/Prayer) for [Protect from Missiles](http://oldschoolrunescape.wikia.com/wiki/Protect_from_Missiles) against the [Dagannoth Mother](http://oldschoolrunescape.wikia.com/wiki/Dagannoth_Mother)'s [Ranged](http://oldschoolrunescape.wikia.com/wiki/Ranged) attacks"
		],
		trivia: ["Unlike most quests, the reward screen for Horror from the Deep says 'You have survived the Horror from the Deep!' rather than 'You have completed Horror from the Deep!'"],
		freeToPlay: !1
	},
	HOLYGRAIL = {
		thumbnail: 'https://vignette2.wikia.nocookie.net/2007scape/images/5/56/Holy_Grail.png/revision/latest/scale-to-width-down/300?cb=20170212075400',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Holy_Grail',
		name: 'Holy Grail',
		questType: 'Normal',
		length: 'Medium',
		difficulty: 'Intermediate',
		description: 'King Arthur is sending out his knights on a quest for the famous Holy Grail. If you are a Knight of the Round Table go to King Arthur for further orders.',
		startPoint: 'Speak to [King Arthur](http://oldschoolrunescape.wikia.com/wiki/King_Arthur) in [Camelot](http://oldschoolrunescape.wikia.com/wiki/Camelot).',
		rewards: [
			'2 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'11,000 [Prayer](http://oldschoolrunescape.wikia.com/wiki/Prayer) experience',
			'15,300 [Defence](http://oldschoolrunescape.wikia.com/wiki/Defence) experience',
			'Access to [Fisher Realm](http://oldschoolrunescape.wikia.com/wiki/Fisher_Realm)'
		],
		requirements: ['30 [Attack](http://oldschoolrunescape.wikia.com/wiki/Attack)', "[Merlin's Crystal](http://oldschoolrunescape.wikia.com/wiki/Merlin%27s_Crystal)", 'Ability to kill [Black Knight Titan](http://oldschoolrunescape.wikia.com/wiki/Black_Knight_Titan)'],
		trivia: ["The [Black Knight Titan](http://oldschoolrunescape.wikia.com/wiki/Black_Knight_Titan) was based off the Black Knight in [Monty Python and the Holy Grail](http://en.wikipedia.org/wiki/Monty_Python_and_the_Holy_Grail). This is one of RuneScape's many references to Monty Python."],
		freeToPlay: !1
	},
	KNIGHTSSWORD = {
		thumbnail: 'https://vignette.wikia.nocookie.net/2007scape/images/2/2c/The_Knight%27s_Sword.png/revision/latest/scale-to-width-down/300?cb=20170212080123',
		url: 'http://oldschoolrunescape.wikia.com/wiki/The_Knight%27s_Sword',
		name: "The Knight's Sword",
		questType: 'Normal',
		length: 'Medium',
		difficulty: 'Intermediate',
		description: "	Sir Vyvin's squire is in trouble. He has accidentally lost Sir Vyvin's ceremonial sword. Help him find a replacement without Sir Vyvin finding out.",
		startPoint: 'Speak to [King Arthur](http://oldschoolrunescape.wikia.com/wiki/King_Arthur) in [Camelot](http://oldschoolrunescape.wikia.com/wiki/Camelot).',
		rewards: ['1 [Quest point](http://oldschoolrunescape.wikia.com/wiki/Quest_points)', '12,725 Smithing XP'],
		requirements: ['10 Mining'],
		trivia: ['When trying to complete the quest while having the blurite sword equipped, the Squire would say "So can you un-equip it and hand it over to me now please?', "If the player's smithing level is 1, they will have it leveled up to 29 after this quest."],
		freeToPlay: !1
	},
	IMPCATCHER = {
		thumbnail: 'https://vignette2.wikia.nocookie.net/2007scape/images/8/8f/Imp_Catcher.png/revision/latest/scale-to-width-down/300?cb=20160326032312',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Imp_Catcher',
		name: 'Imp Catcher',
		questType: 'Normal',
		length: 'Short',
		difficulty: 'Novice',
		description: 'The Wizard Grayzag has summoned hundreds of little imps. They have stolen a lot of things belonging to the Wizard Mizgog including his magic beads.',
		startPoint: "[Wizards' Tower](http://oldschoolrunescape.wikia.com/wiki/Wizards%27_Tower), on the top floor, talk to [Wizard Mizgog](http://oldschoolrunescape.wikia.com/wiki/Wizard_Mizgog).",
		rewards: ['1 [Quest point](http://oldschoolrunescape.wikia.com/wiki/Quest_points)', '875 [Magic](http://oldschoolrunescape.wikia.com/wiki/Magic) XP', 'The [amulet of accuracy](http://oldschoolrunescape.wikia.com/wiki/Amulet_of_accuracy)'],
		requirements: ['None'],
		trivia: ['None'],
		freeToPlay: !0
	},
	LITTLEHELPER = {
		thumbnail: 'https://vignette4.wikia.nocookie.net/2007scape/images/b/bc/Icthlarin%27s_Little_Helper_2.png/revision/latest/scale-to-width-down/300?cb=20170212220919',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Icthlarin%27s_Little_Helper',
		name: "Icthlarin's Little Helper",
		questType: 'Normal',
		length: 'Medium',
		difficulty: 'Intermediate',
		description:
      "In the deep south of the desert, unrest is brewing... The cities of the [Menaphites](http://oldschoolrunescape.wikia.com/wiki/Menaphites) have barred their gates to all. An unsettling desert wanderer may know of a secret entrance though, to [Sophanem](http://oldschoolrunescape.wikia.com/wiki/Sophanem) - the city of the dead. Will you become Icthlarin's Little Helper by entering? Enter into a titanic struggle for the soul of the high priest of Icthlarin in a land where the cat is top dog.",
		startPoint: 'North-east of the entrance to [Sophanem](http://oldschoolrunescape.wikia.com/wiki/Sophanem). Speak to the [Wanderer](http://oldschoolrunescape.wikia.com/wiki/Wanderer).',
		rewards: [
			'2 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'4,500 [Thieving](http://oldschoolrunescape.wikia.com/wiki/Thieving) XP',
			'4,000 [Agility](http://oldschoolrunescape.wikia.com/wiki/Agility) XP',
			'4,000 [Woodcutting](http://oldschoolrunescape.wikia.com/wiki/Woodcutting) XP',
			'[Catspeak amulet](http://oldschoolrunescape.wikia.com/wiki/Catspeak_amulet)',
			'Access to city of [Sophanem](http://oldschoolrunescape.wikia.com/wiki/Sophanem)',
			'Unlock carpet rides from [Pollnivneach](http://oldschoolrunescape.wikia.com/wiki/Pollnivneach) to [Sophanem](http://oldschoolrunescape.wikia.com/wiki/Sophanem) & [Menaphos](http://oldschoolrunescape.wikia.com/wiki/Menaphos)'
		],
		requirements: ["[Gertrude's Cat](http://oldschoolrunescape.wikia.com/wiki/Gertrude%27s_Cat)", 'Ability to defeat a level 91 monster.'],
		trivia: ['None'],
		freeToPlay: !1
	},
	JUNGLEPOTION = {
		thumbnail: 'https://vignette3.wikia.nocookie.net/2007scape/images/e/e7/Jungle_Potion.png/revision/latest/scale-to-width-down/300?cb=20160206163507',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Jungle_Potion',
		name: 'Jungle Potion',
		questType: 'Normal',
		length: 'Short',
		difficulty: 'Novice',
		description: 'Trufitus Shakaya of the Tai Bwo Wannai Village requires that you collect five special jungle herbs for a potion so he can commune with his Gods.',
		startPoint: 'Speak to [Trufitus](http://oldschoolrunescape.wikia.com/wiki/Trufitus) near [Tai Bwo Wannai](http://oldschoolrunescape.wikia.com/wiki/Tai_Bwo_Wannai).',
		rewards: ['1 [Quest point](http://oldschoolrunescape.wikia.com/wiki/Quest_points)', '775 [Herblore](http://oldschoolrunescape.wikia.com/wiki/Herblore) XP'],
		requirements: ['3 [Herblore](http://oldschoolrunescape.wikia.com/wiki/Herblore)'],
		trivia: ['None'],
		freeToPlay: !1
	},
	AIDOFMYREQUE = {
		thumbnail: 'https://vignette3.wikia.nocookie.net/2007scape/images/e/e6/In_Aid_of_the_Myreque.png/revision/latest/scale-to-width-down/300?cb=20160804220413',
		url: 'http://oldschoolrunescape.wikia.com/wiki/In_Aid_of_the_Myreque',
		name: 'In Aid of the Myreque',
		questType: 'Normal',
		length: 'Long',
		difficulty: 'Intermediate',
		description:
      "After the attack on the Myreque by Vanstrom Klause and with the deaths of both Sani and Harold, Veliaf is counting on you to help. Now that the Myreque freedom fighters' base camp has been revealed, they'll need to move on and set up base somewhere else. Veliaf has heard of a little known village south of Mort'ton, referred to as 'Burgh de Rott'. This could be just the place to set up operations to strike back against the evil of Lowerniel Vergidiyad Drakan and his Vampyric overlordship in Morytania. And who knows what other secrets about Morytania and its dark past will be revealed?",
		startPoint: 'Go to [Canifis](http://oldschoolrunescape.wikia.com/wiki/Canifis) and down the ladder behind the pub there, through the secret wall and squeeze past the stalagmite on the east side of the cave. Speak to [Veliaf](http://oldschoolrunescape.wikia.com/wiki/Veliaf_Hurtz).',
		rewards: [
			'2 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'2,000 [Attack](http://oldschoolrunescape.wikia.com/wiki/Attack) XP',
			'2,000 [Strength](http://oldschoolrunescape.wikia.com/wiki/Strength) XP',
			'2,000 [Crafting](http://oldschoolrunescape.wikia.com/wiki/Crafting) XP',
			'2,000 [Defence](http://oldschoolrunescape.wikia.com/wiki/Defence) XP',
			'[Temple Trekking](http://oldschoolrunescape.wikia.com/wiki/Temple_Trekking) [minigame](http://oldschoolrunescape.wikia.com/wiki/Minigames)'
		],
		requirements: [
			'25 [Crafting](http://oldschoolrunescape.wikia.com/wiki/Crafting)',
			'15 [Mining](http://oldschoolrunescape.wikia.com/wiki/Mining)',
			'7 [Magic](http://oldschoolrunescape.wikia.com/wiki/Magic)',
			'[In Search of the Myreque](http://oldschoolrunescape.wikia.com/wiki/In_Search_of_the_Myreque)',
			'[Nature Spirit](http://oldschoolrunescape.wikia.com/wiki/Nature_Spirit)',
			"[Shades of Mort'ton](http://oldschoolrunescape.wikia.com/wiki/Shades_of_Mort%27ton)"
		],
		trivia: ['None'],
		freeToPlay: !1
	},
	KINGSRANSOM = {
		thumbnail: 'https://vignette3.wikia.nocookie.net/2007scape/images/f/f6/King%27s_Ransom.png/revision/latest/scale-to-width-down/300?cb=20170601003704',
		url: 'http://oldschoolrunescape.wikia.com/wiki/King%27s_Ransom',
		name: "King's Ransom",
		questType: 'Normal',
		length: 'Medium',
		difficulty: 'Experienced',
		description:
      "Life has been quiet at the Sinclair Mansion since you discovered the murderer... too quiet. So quiet, in fact, that the family has gone! Suspicions are running high that the Sinclairs' recent departure is tied to the disappearance of King Arthur and his knights. But time is running short and clues are scarce, will you crack the case in time?",
		startPoint: 'Talk to the [Gossip](http://oldschoolrunescape.wikia.com/wiki/Gossip), outside [Sinclair Mansion](http://oldschoolrunescape.wikia.com/wiki/Sinclair_Mansion).',
		rewards: [
			'1 [Quest point](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'33,000 [Defence](http://oldschoolrunescape.wikia.com/wiki/Defence) XP',
			'5,000 [Magic](http://oldschoolrunescape.wikia.com/wiki/Magic) XP',
			'Antique [lamp](http://oldschoolrunescape.wikia.com/wiki/Lamp)',
			'Access to [Training Grounds](http://oldschoolrunescape.wikia.com/wiki/Knight_Waves_Training_Grounds)',
			'Ability to use [Chivalry](http://oldschoolrunescape.wikia.com/wiki/Chivalry)/[Piety](http://oldschoolrunescape.wikia.com/wiki/Piety) prayers'
		],
		requirements: [
			'45 [Magic](http://oldschoolrunescape.wikia.com/wiki/Magic)',
			'65 [Defence](http://oldschoolrunescape.wikia.com/wiki/Defence)',
			"[Black Knights' Fortress](http://oldschoolrunescape.wikia.com/wiki/Black_Knights%27_Fortress)",
			'[Holy Grail](http://oldschoolrunescape.wikia.com/wiki/Holy_Grail)',
			"[Merlin's Crystal](http://oldschoolrunescape.wikia.com/wiki/Merlin%27s_Crystal)",
			'[Murder Mystery](http://oldschoolrunescape.wikia.com/wiki/Murder_Mystery)',
			'[One Small Favour](http://oldschoolrunescape.wikia.com/wiki/One_Small_Favour)'
		],
		trivia: [
			"When the quest was introduced in [RuneScape 2](http://oldschoolrunescape.wikia.com/wiki/RuneScape_2), the [Party Room](http://oldschoolrunescape.wikia.com/wiki/Party_Room) was moved from [Seers' Village](http://oldschoolrunescape.wikia.com/wiki/Seers%27_Village) to [Falador](http://oldschoolrunescape.wikia.com/wiki/Falador) to make room for the [courthouse](http://oldschoolrunescape.wikia.com/wiki/Courthouse).",
			"When finding [Anna](http://oldschoolrunescape.wikia.com/wiki/Anna) not guilty, 'Party Balloons' fall down. This is because of the Party Room being here previously, as stated by the judge when talking to him after the acquittal.",
			'If you talk to [Merlin](http://oldschoolrunescape.wikia.com/wiki/Merlin) after the quest, he will give you a [hair clip](http://oldschoolrunescape.wikia.com/wiki/Hair_clip) as a memory of the adventure.',
			'When in jail, one of the knights is playing with a baseball; its a reference to the movie, [The Great Escape](http://en.wikipedia.org/wiki/The_Great_Escape) with [Steve McQueen](http://en.wikipedia.org/wiki/Steve_McQueen).',
			'When the Knights of the Round Table die in battle at [Keep Le Faye](http://oldschoolrunescape.wikia.com/wiki/Keep_Le_Faye), they simply respawn where they were killed.',
			"When discussing with Merlin how to escape, your character asks if he's going to turn everyone into fish and swim out. This is a reference to the 1963 Disney animated movie, [The Sword in the Stone](http://en.wikipedia.org/wiki/The_Sword_in_the_Stone_(film)).",
			'King\'s Ransom quest is the "newest" quest on [Old School RuneScape](http://oldschoolrunescape.wikia.com/wiki/Old_School_RuneScape), not counting quests exclusively released on Old School. It was the last quest released (at July 2007) before the back-up from which Old School RuneScape was built upon was taken (August 2007).',
			"Despite the 65 [Defence](http://oldschoolrunescape.wikia.com/wiki/Defence) requirement not being boostable, if the quest hasn't been started and the player boosts to 65 Defence, the quest log will show the requirement as being met."
		],
		freeToPlay: !1
	},
	SEARCHOFMYREQUE = {
		thumbnail: 'https://vignette3.wikia.nocookie.net/2007scape/images/3/35/In_Search_of_the_Myreque.png/revision/latest/scale-to-width-down/300?cb=20170409091645',
		url: 'http://oldschoolrunescape.wikia.com/wiki/In_Search_of_the_Myreque',
		name: 'In Search of the Myreque',
		questType: 'Normal',
		length: 'Short',
		difficulty: 'Intermediate',
		description:
      'Canifis is experiencing an upsurge in new faces and a new stranger has appeared with a job to track down some local heroes known only as "The Myreque". The Myreque are fighting a desperate battle against the darkness of Morytania and he wishes to take them weapons to aid in the battle. Can you help him out?',
		startPoint: '[Hair of the Dog](http://oldschoolrunescape.wikia.com/wiki/Hair_of_the_Dog) tavern in [Canifis](http://oldschoolrunescape.wikia.com/wiki/Canifis).',
		rewards: [
			'2 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'600 [Attack](http://oldschoolrunescape.wikia.com/wiki/Attack) XP',
			'600 [Defence](http://oldschoolrunescape.wikia.com/wiki/Defence) XP',
			'600 [Strength](http://oldschoolrunescape.wikia.com/wiki/Strength) XP',
			'600 [Hitpoints](http://oldschoolrunescape.wikia.com/wiki/Hitpoints) XP',
			'600 [Crafting](http://oldschoolrunescape.wikia.com/wiki/Crafting) XP',
			"Quick route to [Mort'ton](http://oldschoolrunescape.wikia.com/wiki/Mort%27ton)",
			'2 [uncut rubies](http://oldschoolrunescape.wikia.com/wiki/Uncut_ruby) & 4 [big bones](http://oldschoolrunescape.wikia.com/wiki/Big_bones)'
		],
		requirements: ['[Nature Spirit](http://oldschoolrunescape.wikia.com/wiki/Nature_Spirit)', '25 [Agility](http://oldschoolrunescape.wikia.com/wiki/Agility)', 'Ability to defeat a level 97', '43 [Prayer](http://oldschoolrunescape.wikia.com/wiki/Prayer)'],
		trivia: ['None'],
		freeToPlay: !1
	},
	LEGENDSQUEST = {
		thumbnail: 'https://vignette3.wikia.nocookie.net/2007scape/images/a/a2/Fighting_Nezikchened.png/revision/latest/scale-to-width-down/300?cb=20160712234202',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Legends%27_Quest',
		name: "Legends' Quest",
		questType: 'Normal',
		length: 'Very Long',
		difficulty: 'Master',
		description: 'Only the elite are allowed to call themselves a Legend of RuneScape. Do you have what it takes to make it into the guild?',
		startPoint: "Talk to the guards just outside of the [Legends' Guild](http://oldschoolrunescape.wikia.com/wiki/Legends%27_Guild).",
		rewards: [
			'4 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			"Access to the [Legends' Guild](http://oldschoolrunescape.wikia.com/wiki/Legends%27_Guild) (including shop to buy the [cape of legends](http://oldschoolrunescape.wikia.com/wiki/Cape_of_legends))",
			'Ability to wield the [dragon sq shield](http://oldschoolrunescape.wikia.com/wiki/Dragon_sq_shield)',
			'7,650 XP each in four skills of your choice (limited to [Attack](http://oldschoolrunescape.wikia.com/wiki/Attack), [Defence](http://oldschoolrunescape.wikia.com/wiki/Defence), [Strength](http://oldschoolrunescape.wikia.com/wiki/Strength), [Hitpoints](http://oldschoolrunescape.wikia.com/wiki/Hitpoints), [Prayer](http://oldschoolrunescape.wikia.com/wiki/Prayer), [Magic](http://oldschoolrunescape.wikia.com/wiki/Magic), [Woodcutting](http://oldschoolrunescape.wikia.com/wiki/Woodcutting), [Crafting](http://oldschoolrunescape.wikia.com/wiki/Crafting), [Smithing](http://oldschoolrunescape.wikia.com/wiki/Smithing), [Herblore](http://oldschoolrunescape.wikia.com/wiki/Herblore), [Agility](http://oldschoolrunescape.wikia.com/wiki/Agility), [Thieving](http://oldschoolrunescape.wikia.com/wiki/Thieving). It is possible to choose the same skill several times).',
			"Ability to charge your [Skills necklace](http://oldschoolrunescape.wikia.com/wiki/Skills_necklace) or [Combat bracelet](http://oldschoolrunescape.wikia.com/wiki/Combat_bracelet) at the [Legends' Guild](http://oldschoolrunescape.wikia.com/wiki/Legends%27_Guild) or the [Fountain of Rune](http://oldschoolrunescape.wikia.com/wiki/Fountain_of_Rune).",
			'Access to the [Kharazi Jungle](http://oldschoolrunescape.wikia.com/wiki/Kharazi_Jungle) and a vine shortcut into it, requiring 79 [Agility](http://oldschoolrunescape.wikia.com/wiki/Agility).'
		],
		requirements: [
			'107 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'50 [Agility](http://oldschoolrunescape.wikia.com/wiki/Agility)',
			'50 [Crafting](http://oldschoolrunescape.wikia.com/wiki/Crafting)',
			'45 [Herblore](http://oldschoolrunescape.wikia.com/wiki/Herblore)',
			'56 [Magic](http://oldschoolrunescape.wikia.com/wiki/Magic)',
			'52 [Mining](http://oldschoolrunescape.wikia.com/wiki/Mining)',
			'42 [Prayer](http://oldschoolrunescape.wikia.com/wiki/Prayer)',
			'50 [Smithing](http://oldschoolrunescape.wikia.com/wiki/Smithing)',
			'50 [Strength](http://oldschoolrunescape.wikia.com/wiki/Strength)',
			'50 [Thieving](http://oldschoolrunescape.wikia.com/wiki/Thieving)',
			'50 [Woodcutting](http://oldschoolrunescape.wikia.com/wiki/Woodcutting)',
			'[Family Crest](http://oldschoolrunescape.wikia.com/wiki/Family_Crest)',
			"[Heroes' Quest](http://oldschoolrunescape.wikia.com/wiki/Heroes%27_Quest)",
			'[Shilo Village](http://oldschoolrunescape.wikia.com/wiki/Shilo_Village_(quest))',
			'[Underground Pass](http://oldschoolrunescape.wikia.com/wiki/Underground_Pass)',
			'[Waterfall Quest](http://oldschoolrunescape.wikia.com/wiki/Waterfall_Quest)',
			'Ability to defeat a level 187 demon'
		],
		trivia: ['None'],
		freeToPlay: !1
	},
	TARN = {
		thumbnail: 'https://vignette2.wikia.nocookie.net/2007scape/images/c/c0/Quest.png/revision/latest/scale-to-width-down/17?cb=20130219195019',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Lair_of_Tarn_Razorlor',
		name: 'Lair of Tarn Razorlor',
		questType: 'Miniquests',
		length: 'Medium',
		difficulty: ' \n ',
		description: 'This miniquest is to kill [Tarn Razorlor](http://oldschoolrunescape.wikia.com/wiki/Tarn_Razorlor) and retrieve his diary. Using his diary on a [salve amulet](http://oldschoolrunescape.wikia.com/wiki/Salve_amulet) will enchant it increasing its attack and strength bonuses by 5%.',
		startPoint: 'Enter the Lair of Tarn Razorlor.',
		rewards: ['None.'],
		requirements: ['40 [Slayer](http://oldschoolrunescape.wikia.com/wiki/Slayer)', '[Haunted Mine](http://oldschoolrunescape.wikia.com/wiki/Haunted_Mine)'],
		trivia: ['None'],
		freeToPlay: !1
	},
	LOSTCITY = {
		thumbnail: 'https://vignette4.wikia.nocookie.net/2007scape/images/d/de/Lost_City.png/revision/latest/scale-to-width-down/300?cb=20160206161235',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Lost_City',
		name: 'Lost City',
		questType: 'Normal',
		length: 'Short',
		difficulty: 'Experienced',
		description: 'Can you find the legendary lost city of [Zanaris](http://oldschoolrunescape.wikia.com/wiki/Zanaris)?',
		startPoint: 'Go to [Lumbridge Swamp](http://oldschoolrunescape.wikia.com/wiki/Lumbridge_Swamp). Talk to the campers there.',
		rewards: [
			'3 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_point)',
			'Access to [Zanaris](http://oldschoolrunescape.wikia.com/wiki/Zanaris).',
			'Ability to wield [dragon longswords/daggers](http://oldschoolrunescape.wikia.com/wiki/Dragon_longsword)',
			'Ability to make [Cosmic runes](http://oldschoolrunescape.wikia.com/wiki/Cosmic_rune)'
		],
		requirements: [
			'31 [Crafting](http://oldschoolrunescape.wikia.com/wiki/Crafting)',
			'36 [Woodcutting](http://oldschoolrunescape.wikia.com/wiki/Woodcutting)',
			'Ability to kill a level 101 [Tree spirit](http://oldschoolrunescape.wikia.com/wiki/Tree_spirit_(Lost_City)) with limited [armour](http://oldschoolrunescape.wikia.com/wiki/Armour) and [weapons](http://oldschoolrunescape.wikia.com/wiki/Weapons).'
		],
		trivia: ['None'],
		freeToPlay: !1
	},
	LUNARDIPLOMACY = {
		thumbnail: 'https://vignette3.wikia.nocookie.net/2007scape/images/6/6e/Lunar_Diplomacy.png/revision/latest/scale-to-width-down/300?cb=20160207142903',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Lunar_Diplomacy',
		name: 'Lunar Diplomacy',
		questType: 'Normal',
		length: 'Long',
		difficulty: 'Experienced',
		description: 'Can you make it to Moonclan Island and make peace between the Moonclan and the Fremenniks?',
		startPoint: 'Go to the westernmost dock of [Rellekka](http://oldschoolrunescape.wikia.com/wiki/Rellekka), and talk to [Lokar](http://oldschoolrunescape.wikia.com/wiki/Lokar_Searunner).',
		rewards: [
			'2 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'5,000 [Magic](http://oldschoolrunescape.wikia.com/wiki/Magic) XP',
			'5,000 [Runecrafting](http://oldschoolrunescape.wikia.com/wiki/Runecrafting) XP',
			'A [seal of passage](http://oldschoolrunescape.wikia.com/wiki/Seal_of_passage)',
			'Access to [Lunar Isle](http://oldschoolrunescape.wikia.com/wiki/Lunar_Isle) and [Lunar equipment](http://oldschoolrunescape.wikia.com/wiki/Lunar_equipment)',
			'Access to the [Lunar Spellbook](http://oldschoolrunescape.wikia.com/wiki/Lunar_spells)',
			'Access to the [Astral altar](http://oldschoolrunescape.wikia.com/wiki/Astral_altar)',
			'50 [Astral runes](http://oldschoolrunescape.wikia.com/wiki/Astral_rune)'
		],
		requirements: [
			'61 [Crafting](http://oldschoolrunescape.wikia.com/wiki/Crafting)',
			'40 [Defence](http://oldschoolrunescape.wikia.com/wiki/Defence)',
			'49 [Firemaking](http://oldschoolrunescape.wikia.com/wiki/Firemaking)',
			'5 [Herblore](http://oldschoolrunescape.wikia.com/wiki/Herblore)',
			'65 [Magic](http://oldschoolrunescape.wikia.com/wiki/Magic)',
			'60 [Mining](http://oldschoolrunescape.wikia.com/wiki/Mining)',
			'55 [Woodcutting](http://oldschoolrunescape.wikia.com/wiki/Woodcutting)',
			'Ability to kill multiple level 111 monsters',
			'Ability to access the [Air](http://oldschoolrunescape.wikia.com/wiki/Air_altar), [Earth](http://oldschoolrunescape.wikia.com/wiki/Earth_altar), [Fire](http://oldschoolrunescape.wikia.com/wiki/Fire_altar) and [Water](http://oldschoolrunescape.wikia.com/wiki/Water_altar) [Runecrafting](http://oldschoolrunescape.wikia.com/wiki/Runecrafting) altars',
			'[The Fremennik Trials](http://oldschoolrunescape.wikia.com/wiki/The_Fremennik_Trials)',
			'[Lost City](http://oldschoolrunescape.wikia.com/wiki/Lost_City)',
			'[Rune Mysteries](http://oldschoolrunescape.wikia.com/wiki/Rune_Mysteries)',
			'[Shilo Village](http://oldschoolrunescape.wikia.com/wiki/Shilo_Village_(quest))'
		],
		trivia: [
			'After you give [Meteora](http://oldschoolrunescape.wikia.com/wiki/Meteora) her Special Tiara, she still seems to be wearing the [Lunar amulet](http://oldschoolrunescape.wikia.com/wiki/Lunar_amulet) on her head on her chathead and in-game.',
			'[Baba Yaga](http://oldschoolrunescape.wikia.com/wiki/Baba_Yaga) and her walking chicken house is a reference to [Quest for Glory I](http://en.wikipedia.org/wiki/Quest_for_Glory:_So_You_Want_to_Be_a_Hero) by [Sierra Entertainment](http://en.wikipedia.org/wiki/Sierra_Entertainment). In fact, the name Baba Yaga comes from a character in Russian folklore, who is an old witch that lives in a house with chicken legs.',
			'The player says, "Oh captain, my captain," on the third time speaking to [Captain Bentley](http://oldschoolrunescape.wikia.com/wiki/Captain_Bentley)); it\'s a reference to the poem by [Walt Whitman](http://en.wikipedia.org/wiki/Walt_Whitman), [O Captain! My Captain!](http://en.wikipedia.org/wiki/O_Captain!_My_Captain!). The poem pays tribute to Abraham Lincoln and was written in 1865. The phrase was also used in Dead Poets Society upon the dismissal of the English teacher, John Keating.',
			'During the dialogue between Captain Bentley and the player when the player asks the Captain Bentley about his ship named the "[Lady Zay](http://oldschoolrunescape.wikia.com/wiki/Lady_Zay)", the player mentions that they used to own a ship named the "[Lady Lumbridge](http://oldschoolrunescape.wikia.com/wiki/Lady_Lumbridge)", which is a reference to [Dragon Slayer](http://oldschoolrunescape.wikia.com/wiki/Dragon_Slayer).',
			"Captain Bentley also tells the player that he stole his ship from the Karamjan shipyards, and that he doesn't know who they were building that kind of warships, but whoever it was seemed to be a little on the short side. This is a reference to the quest, [The Grand Tree](http://oldschoolrunescape.wikia.com/wiki/The_Grand_Tree), in which the Karamjan warships were built for gnomes.",
			'Also while talking to Captain Bentley, at one part his parrot says, "I want guns, lots of guns!", which is a quote from the movie, [The Matrix](http://en.wikipedia.org/wiki/The_Matrix).',
			"'Birds-Eye' Jack is likely a reference to the popular british frozen food range Birds Eye. That features a pirate as it's mascot.",
			'Before you enter the dream, if you re-obtain the [kindling](http://oldschoolrunescape.wikia.com/wiki/Kindling) and [potion](http://oldschoolrunescape.wikia.com/wiki/Waking_sleep_vial) from the [Oneiromancer](http://oldschoolrunescape.wikia.com/wiki/Oneiromancer) and then soak the kindling and drop it, you are left with an [empty lunar vial](http://oldschoolrunescape.wikia.com/wiki/Empty_vial)); you can fill this up with water again and mix in a [guam leaf](http://oldschoolrunescape.wikia.com/wiki/Guam_leaf) and a [marrentill](http://oldschoolrunescape.wikia.com/wiki/Marrentill) once more for 84 [Herblore](http://oldschoolrunescape.wikia.com/wiki/Herblore) XP per herb, though you cannot empty out the [vials](http://oldschoolrunescape.wikia.com/wiki/Guam-marr_vial). Unfortunately, getting more vials requires passing through tedious dialogue. It is not known whether this is a bug.',
			'Examining the log piles in the [Dream World](http://oldschoolrunescape.wikia.com/wiki/Dream_World) [Woodcutting](http://oldschoolrunescape.wikia.com/wiki/Woodcutting) challenge yields the message "Like a pile of memes".',
			"On Captain Bentley's ship there is a crew member called [Tommy 2-times](http://oldschoolrunescape.wikia.com/wiki/Tommy_2-times). This could be a reference to the movie Goodfella's \"Jimmy Two-Times\".",
			"When speaking to Selene about her archaeologist grandfather's ring, she mentions 'dodging boulders and piles of snakes' to find his hidden treasures. This is a reference to the Indiana Jones movies."
		],
		freeToPlay: !1
	},
	MAKINGHISTORY = {
		thumbnail: 'https://vignette4.wikia.nocookie.net/2007scape/images/9/9c/Outpost.png/revision/latest/scale-to-width-down/300?cb=20160612233353',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Making_History',
		name: 'Making History',
		questType: 'Normal',
		length: 'Medium',
		difficulty: 'Intermediate',
		description: 'A secluded outpost has served the City of Ardougne for generations, playing stage to many exceptional events. Its current occupant wants to employ your skills to construct its true history before time runs out and history itself is wiped away!',
		startPoint: 'Talk to [Jorral](http://oldschoolrunescape.wikia.com/wiki/Jorral) in the [outpost](http://oldschoolrunescape.wikia.com/wiki/Outpost) north-west of [West](http://oldschoolrunescape.wikia.com/wiki/West_Ardougne) [Ardougne](http://oldschoolrunescape.wikia.com/wiki/Ardougne).',
		rewards: [
			'3 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'1,000 [Crafting](http://oldschoolrunescape.wikia.com/wiki/Crafting) XP',
			'1,000 [Prayer](http://oldschoolrunescape.wikia.com/wiki/Prayer) XP',
			'750 GP',
			'[Enchanted key](http://oldschoolrunescape.wikia.com/wiki/Enchanted_key)',
			'Access to museum in outpost',
			'Ability to do [hot/cold treasure trails](http://oldschoolrunescape.wikia.com/wiki/Treasure_Trails/Guide/Hot_Cold).'
		],
		requirements: ['[The Restless Ghost](http://oldschoolrunescape.wikia.com/wiki/The_Restless_Ghost)', '[Priest in Peril](http://oldschoolrunescape.wikia.com/wiki/Priest_in_Peril)'],
		trivia: [
			"If you visit [Droalak](http://oldschoolrunescape.wikia.com/wiki/Droalak) after the quest, the player's character will tell him that they have delivered the scroll and it was of good use. Droalak finally rests in peace.",
			"When the quest is completed, [Jorral](http://oldschoolrunescape.wikia.com/wiki/Jorral) will tell you there is something that may interest you in his museum. If you search the bookcase and choose the book titled 'The Mysterious Adventurer', it will be a book written about your character, telling you stories of some of your completed quests.",
			'Jorral\'s quote "Do you want to know more?" at the beginning of the quest is a reference to a repeated line in the 1997 film Starship Troopers.'
		],
		freeToPlay: !1
	},
	MERLINSCRYSTAL = {
		thumbnail: 'https://vignette2.wikia.nocookie.net/2007scape/images/9/9d/Merlin%27s_Crystal_Quest_Image.png/revision/latest/scale-to-width-down/300?cb=20160930203225',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Merlin%27s_Crystal',
		name: "Merlin's Crystal",
		questType: 'Normal',
		length: 'Medium',
		difficulty: 'Intermediate',
		description:
      "The wizard [Merlin](http://oldschoolrunescape.wikia.com/wiki/Merlin) has been trapped in a magical crystal by the witch [Morgan Le Faye](http://oldschoolrunescape.wikia.com/wiki/Morgan_Le_Faye). So far, King Arthur hasn't been able to figure out how to free his mentor from his crystal prison. Can you help?",
		startPoint: 'Talk to [King Arthur](http://oldschoolrunescape.wikia.com/wiki/King_Arthur) in [Camelot](http://oldschoolrunescape.wikia.com/wiki/Camelot).',
		rewards: ['6 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)', '[Excalibur](http://oldschoolrunescape.wikia.com/wiki/Excalibur)'],
		requirements: ['Ability to defeat a level 39 enemy.'],
		trivia: ["Merlin's Crystal gives six [quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points), the most of any single quest (other than the compound quest, [Recipe for Disaster](http://oldschoolrunescape.wikia.com/wiki/Recipe_for_Disaster)), despite being relatively easy."],
		freeToPlay: !1
	},
	MONKSFRIEND = {
		thumbnail: 'https://vignette2.wikia.nocookie.net/2007scape/images/9/97/Monk%27s_Friend.png/revision/latest/scale-to-width-down/300?cb=20140715200218',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Monk%27s_Friend',
		name: "Monk's Friend",
		questType: 'Normal',
		length: 'Short',
		difficulty: 'Novice',
		description: "A monk's child has had their blanket stolen. Find the thieves' den and return the blanket, then help Brother Omad organize the drinks for the child's birthday party.",
		startPoint: 'Speak to [Brother Omad](http://oldschoolrunescape.wikia.com/wiki/Brother_Omad) at the [monastery](http://oldschoolrunescape.wikia.com/wiki/Ardougne_Monastery) south of [Ardougne](http://oldschoolrunescape.wikia.com/wiki/Ardougne).',
		rewards: ['1 [Quest point](http://oldschoolrunescape.wikia.com/wiki/Quest_points)', '2,000 [Woodcutting](http://oldschoolrunescape.wikia.com/wiki/Woodcutting) XP', '8 [Law runes](http://oldschoolrunescape.wikia.com/wiki/Law_rune)'],
		requirements: ['None'],
		trivia: ['None'],
		freeToPlay: !1
	},
	MONKEYMADNESSII = {
		thumbnail: 'https://vignette2.wikia.nocookie.net/2007scape/images/7/71/Monkey_Madness_II_-_Fighting_Glough%27s_gorillas.png/revision/latest/scale-to-width-down/300?cb=20160508064118',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Monkey_Madness_II',
		name: 'Monkey Madness II',
		questType: 'Normal',
		length: 'Very Long',
		difficulty: 'Grandmaster',
		description: 'Glough, the war criminal set on eradicating humans and overthrowing Gielinor, has escaped the watch of the Grand Tree gnomes. With a history of leaving large-scale conflicts and warfare in his wake, Glough must be tracked down and stopped. King Narnode Shareen needs your help.',
		startPoint: 'Talk to [King Narnode Shareen](http://oldschoolrunescape.wikia.com/wiki/King_Narnode_Shareen) in the [Grand Tree](http://oldschoolrunescape.wikia.com/wiki/Grand_Tree).',
		rewards: [
			'4 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'25,000 [Slayer](http://oldschoolrunescape.wikia.com/wiki/Slayer) XP',
			'20,000 [Agility](http://oldschoolrunescape.wikia.com/wiki/Agility) XP',
			'15,000 [Thieving](http://oldschoolrunescape.wikia.com/wiki/Thieving) XP',
			'15,000 [Hunter](http://oldschoolrunescape.wikia.com/wiki/Hunter) XP',
			'Access to the [Crash Site Cavern](http://oldschoolrunescape.wikia.com/wiki/Crash_Site_Cavern)',
			"Ability to communicate with monkeys in [Ape Atoll](http://oldschoolrunescape.wikia.com/wiki/Ape_Atoll) without the [M'speak amulet](http://oldschoolrunescape.wikia.com/wiki/M%27speak_amulet).",
			'Access to [Ape Atoll](http://oldschoolrunescape.wikia.com/wiki/Ape_Atoll) without the use of [Monkey greegrees](http://oldschoolrunescape.wikia.com/wiki/Monkey_greegree).',
			"Access to [Ape Atoll](http://oldschoolrunescape.wikia.com/wiki/Ape_Atoll) bank and [Oobapohk's Javelin Store](http://oldschoolrunescape.wikia.com/wiki/Oobapohk%27s_Javelin_Store).",
			'Access to new glider spot directly to Ape Atoll.',
			'2x 50,000 XP rewards from [Duke](http://oldschoolrunescape.wikia.com/wiki/Duke) in your choice of [Magic](http://oldschoolrunescape.wikia.com/wiki/Magic), [Ranged](http://oldschoolrunescape.wikia.com/wiki/Ranged), [Attack](http://oldschoolrunescape.wikia.com/wiki/Attack), [Defence](http://oldschoolrunescape.wikia.com/wiki/Defence), [Strength](http://oldschoolrunescape.wikia.com/wiki/Strength) or [Hitpoints](http://oldschoolrunescape.wikia.com/wiki/Hitpoints). Found on the hill east of main gate of Ape Atoll. (Walk up west hill, and climb the ladder to reach the east hill.)',
			'Ability to wield the [Heavy Ballista](http://oldschoolrunescape.wikia.com/wiki/Heavy_Ballista).',
			'A [Royal seed pod](http://oldschoolrunescape.wikia.com/wiki/Royal_seed_pod), which provides unlimited teleports to the [Grand Tree](http://oldschoolrunescape.wikia.com/wiki/Grand_Tree) (Up to level 30 wilderness).',
			'A [Monkey](http://oldschoolrunescape.wikia.com/wiki/Monkey_(Monkey_Madness_II)) can be found in one of the crates at the Crash Site. It is purely cosmetic and can be equipped in the cape slot.',
			'Ability to re-fight [Glough](http://oldschoolrunescape.wikia.com/wiki/Glough) by gazing into the [Burning brazier](http://oldschoolrunescape.wikia.com/wiki/Burning_brazier) in [Zooknocks](http://oldschoolrunescape.wikia.com/wiki/Zooknock) house.',
			"Access to a new [maniacal monkey](http://oldschoolrunescape.wikia.com/wiki/Maniacal_monkey_(Hunter)) hunting area where Glough's laboratory used to be in [Kruk's Dungeon](http://oldschoolrunescape.wikia.com/wiki/Kruk%27s_Dungeon)."
		],
		requirements: [
			'[Enlightened Journey](http://oldschoolrunescape.wikia.com/wiki/Enlightened_Journey) (including unlocking the [Grand Tree](http://oldschoolrunescape.wikia.com/wiki/Grand_Tree) destination for the [Balloon transport system](http://oldschoolrunescape.wikia.com/wiki/Balloon_transport_system#Grand_Tree), requiring 60 [Firemaking](http://oldschoolrunescape.wikia.com/wiki/Firemaking))',
			'[The Eyes of Glouphrie](http://oldschoolrunescape.wikia.com/wiki/The_Eyes_of_Glouphrie)',
			'[Recipe for Disaster](http://oldschoolrunescape.wikia.com/wiki/Recipe_for_Disaster#Awowogei) (Freeing King [Awowogei](http://oldschoolrunescape.wikia.com/wiki/Awowogei))',
			'[Troll Stronghold](http://oldschoolrunescape.wikia.com/wiki/Troll_Stronghold)',
			'[Watchtower](http://oldschoolrunescape.wikia.com/wiki/Watchtower)',
			'[Monkey Madness](http://oldschoolrunescape.wikia.com/wiki/Monkey_Madness)',
			'69 [Slayer](http://oldschoolrunescape.wikia.com/wiki/Slayer)',
			'70 [Crafting](http://oldschoolrunescape.wikia.com/wiki/Crafting)',
			'60 [Hunter](http://oldschoolrunescape.wikia.com/wiki/Hunter)',
			'55 [Agility](http://oldschoolrunescape.wikia.com/wiki/Agility)',
			'55 [Thieving](http://oldschoolrunescape.wikia.com/wiki/Thieving)',
			'60 [Firemaking](http://oldschoolrunescape.wikia.com/wiki/Firemaking)'
		],
		trivia: ['None'],
		freeToPlay: !1
	},
	MONKEYMADNESS = {
		thumbnail: 'https://vignette2.wikia.nocookie.net/2007scape/images/0/08/Monkey_Madness.png/revision/latest/scale-to-width-down/300?cb=20170212081123',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Monkey_Madness',
		name: 'Monkey Madness',
		questType: 'Normal',
		length: 'Long',
		difficulty: 'Master',
		description:
      'The King of the northern Gnomes, Narnode Shareen, is once again in need of your help. He recently decided to send an envoy of his Royal Guard, the 10th squad, to oversee the decommissioning of the Gnome owned ship-building facilities on the eastern coast of [Karamja](http://oldschoolrunescape.wikia.com/wiki/Karamja). It has been quite some time since the 10th squad were dispatched and they have been deemed missing in action. It will be up to you, should you decide to help, to find out what fate befell the 10th squad and if possible, track them down. If only it were so simple. Sinister forces have begun to spread through the Gnome hierarchy and threaten to unleash an unknown terror upon the world. Far across the land, the fires of vengeance are being stoked once again. Can you unravel the mystery behind the deception? Can you separate the truth from the lies? Can you decide for yourself what is real and what is not?',
		startPoint: 'Talk to [King Narnode Shareen](http://oldschoolrunescape.wikia.com/wiki/King_Narnode_Shareen) in the [Grand Tree](http://oldschoolrunescape.wikia.com/wiki/Grand_Tree).',
		rewards: [
			'3 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'10,000 GP',
			'3 [Diamonds](http://oldschoolrunescape.wikia.com/wiki/Diamond)',
			'Gain 35,000 XP in [Attack](http://oldschoolrunescape.wikia.com/wiki/Attack) and [Defence](http://oldschoolrunescape.wikia.com/wiki/Defence), or [Strength](http://oldschoolrunescape.wikia.com/wiki/Strength) and [Hitpoints](http://oldschoolrunescape.wikia.com/wiki/Hitpoints), and then 20,000 experience in the other option, by speaking to [Daero](http://oldschoolrunescape.wikia.com/wiki/Daero). Note for 1-Defence pures: You cannot go back to the bunker (and thus back to [Ape Atoll](http://oldschoolrunescape.wikia.com/wiki/Ape_Atoll)) without speaking to Daero and gaining Defence XP. The only way to return to Ape Atoll as a pure is if you stop the quest after killing the Jungle Demon. Do not talk to Daero.',
			'Note for 1-Defence pures: You cannot go back to the bunker (and thus back to [Ape Atoll](http://oldschoolrunescape.wikia.com/wiki/Ape_Atoll)) without speaking to Daero and gaining Defence XP. The only way to return to Ape Atoll as a pure is if you stop the quest after killing the Jungle Demon. Do not talk to Daero.',
			'Ability to buy and wield the [Dragon scimitar](http://oldschoolrunescape.wikia.com/wiki/Dragon_scimitar).',
			'Ability to turn into a monkey, in Ape Atoll & [Ardougne Zoo](http://oldschoolrunescape.wikia.com/wiki/Ardougne_Zoo), using the [Monkey greegree](http://oldschoolrunescape.wikia.com/wiki/Monkey_greegree).',
			'Full access to Ape Atoll. (Bank is unlocked after [Monkey Madness II](http://oldschoolrunescape.wikia.com/wiki/Monkey_Madness_II).)'
		],
		requirements: [
			'[The Grand Tree](http://oldschoolrunescape.wikia.com/wiki/The_Grand_Tree) and [Tree Gnome Village](http://oldschoolrunescape.wikia.com/wiki/Tree_Gnome_Village_(quest))',
			'Ability to defeat a level 195 [Jungle Demon](http://oldschoolrunescape.wikia.com/wiki/Jungle_Demon)',
			'43+ [Prayer](http://oldschoolrunescape.wikia.com/wiki/Prayer) HIGHLY RECOMMENDED, as the player will be attacked by numerous hard-hitting melee enemies in multicombat'
		],
		trivia: [
			"If you talk to [Zeke](http://oldschoolrunescape.wikia.com/wiki/Zeke), the scimitar seller of [Al Kharid](http://oldschoolrunescape.wikia.com/wiki/Al_Kharid), and ask him for a [Dragon scimitar](http://oldschoolrunescape.wikia.com/wiki/Dragon_scimitar), he will respond, \"The banana-brained nitwits who make them would never sell any to me. Seriously, you'll be a monkey's uncle before you hold a Dragon Scimitar.\" Obviously, this is a reference to this quest.",
			"If you have started [Fairytale II - Cure a Queen](http://oldschoolrunescape.wikia.com/wiki/Fairytale_II_-_Cure_a_Queen), you can use a new [fairy ring](http://oldschoolrunescape.wikia.com/wiki/Fairy_ring) location on Ape Atoll. Using this fairy ring requires completion of Daero's training. In order to leave the small area where the fairy ring is located, you will need a [ninja greegree](http://oldschoolrunescape.wikia.com/wiki/Ninja_greegree) and 48 [Agility](http://oldschoolrunescape.wikia.com/wiki/Agility) to continue through the remainder of the agility course.",
			'If you tell [Zooknock](http://oldschoolrunescape.wikia.com/wiki/Zooknock) you lost the amulet, you will have to get the materials to create a new one.',
			"If you wear a [M'speak amulet](http://oldschoolrunescape.wikia.com/wiki/M%27speak_amulet) and listen to the [enchanted bar](http://oldschoolrunescape.wikia.com/wiki/Enchanted_bar), it says \"I'm stuck in this horrible gold bar!\"",
			'The chapter cards and cut scenes in this quest are references to the adventure game series Monkey Island.',
			'Upon first talking to [Awowogei](http://oldschoolrunescape.wikia.com/wiki/Awowogei), [Uwogo](http://oldschoolrunescape.wikia.com/wiki/Uwogo) says to "never trust a Northern monkey". This is in reference to the friendly rivalry between the North and the South within the UK (Northern Monkeys, Southern Fairies).'
		],
		freeToPlay: !1
	},
	MISTHALINMYSTERY = {
		thumbnail: 'https://vignette2.wikia.nocookie.net/2007scape/images/d/d3/Misthalin_Mystery.png/revision/latest/scale-to-width-down/300?cb=20161020204433',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Misthalin_Mystery',
		name: 'Misthalin Mystery',
		questType: 'Normal',
		length: 'Medium',
		difficulty: 'Novice',
		description: 'A woman cries as a man lays dying, desperately they beg you to stop a cryptic killer before their friends suffer a similar fate.',
		startPoint:
      '[Lumbridge Swamp](http://oldschoolrunescape.wikia.com/wiki/Lumbridge_Swamp), south-east near the [fishing spots](http://oldschoolrunescape.wikia.com/wiki/Fishing_spots), speak to [Abigale](http://oldschoolrunescape.wikia.com/wiki/Abigale) (or [Hewey](http://oldschoolrunescape.wikia.com/wiki/Hewey), who sits next to her).',
		rewards: [
			'1 [Quest point](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'[Uncut ruby](http://oldschoolrunescape.wikia.com/wiki/Uncut_ruby)',
			'[Uncut emerald](http://oldschoolrunescape.wikia.com/wiki/Uncut_emerald)',
			'[Uncut sapphire](http://oldschoolrunescape.wikia.com/wiki/Uncut_sapphire)',
			'600 [Crafting](http://oldschoolrunescape.wikia.com/wiki/Crafting) XP'
		],
		requirements: ['None'],
		trivia: [
			"This quest was originally released as the [2016 Hallowe'en event](http://oldschoolrunescape.wikia.com/wiki/2016_Hallowe%27en_event), but was later released as a permanent quest after passing a poll.",
			'Players initially did not receive 600 [Crafting](http://oldschoolrunescape.wikia.com/wiki/Crafting) XP upon completing the quest. Players who completed the quest before the reward was added were told to speak with [Mandy](http://oldschoolrunescape.wikia.com/wiki/Mandy) outside the Mansion to receive the additional reward.',
			'The mansion in this quest is based on [Draynor Manor](http://oldschoolrunescape.wikia.com/wiki/Draynor_Manor).',
			'No music plays at all during the quest. If you were to travel to the island and then log out and back in, you would find that your music player is playing nothing at all.',
			"This quest is based on the movie Scream, particularly when the Killer asks \"What is your favorite scary quest?\". 'Quest' is used instead of 'Movie'."
		],
		freeToPlay: !1
	},
	MOUNTAINDAUGHTER = {
		thumbnail: 'https://vignette2.wikia.nocookie.net/2007scape/images/8/82/Mountain_Daughter.png/revision/latest/scale-to-width-down/300?cb=20170212213800',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Mountain_Daughter',
		name: 'Mountain Daughter',
		questType: 'Normal',
		length: 'Medium',
		difficulty: 'Intermediate',
		description:
      'Ages ago, a small tribe of people split off from the Fremennik in Rellekka and decided to inhabit the mountains to the east of town. There they lived as nomads for many years, but now the chieftain of the camp has lost his daughter and will not move on before she has been found. Has she run away, has she been eaten by trolls, or is there something more sinister going on? Only you can find out.',
		startPoint:
      'Talk to [Hamal the Chieftain](http://oldschoolrunescape.wikia.com/wiki/Hamal_the_Chieftain) in the [Mountain Camp](http://oldschoolrunescape.wikia.com/wiki/Mountain_Camp) east of [Rellekka](http://oldschoolrunescape.wikia.com/wiki/Rellekka). To get in, take the path north of the [Golden Apple Tree](http://oldschoolrunescape.wikia.com/wiki/Golden_Apple_Tree) and use a [rope](http://oldschoolrunescape.wikia.com/wiki/Rope) on the rock behind the guard (see below for more details).',
		rewards: [
			'2 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'2,000 [Prayer](http://oldschoolrunescape.wikia.com/wiki/Prayer) XP',
			'1,000 [Attack](http://oldschoolrunescape.wikia.com/wiki/Attack) XP',
			'The [Bearhead](http://oldschoolrunescape.wikia.com/wiki/Bearhead)',
			'[Mountain Camp](http://oldschoolrunescape.wikia.com/wiki/Mountain_Camp) shortcut'
		],
		requirements: ['20 [Agility](http://oldschoolrunescape.wikia.com/wiki/Agility)', 'Ability to defeat [Kendal](http://oldschoolrunescape.wikia.com/wiki/The_Kendal).'],
		trivia: [
			"When you complete the quest, instead of hearing the normal quest complete music, the game plays Asleif's singing and you receive a message saying \"You think you can hear a soft 'thank you' as the singing quietens down.\"",
			'If you have completed the [Throne of Miscellania](http://oldschoolrunescape.wikia.com/wiki/Throne_of_Miscellania) quest and challenge [Ragnar](http://oldschoolrunescape.wikia.com/wiki/Ragnar), he will mention that perhaps you will understand why he has waited 14 years with the necklace when you find your love, and your character will reply "I already have a marriage lined up, thanks", rolling his/her eyes.',
			'The examine text for the guard in front of the ancient rock tent is "He seems to be guarding a single rock. Interesting job." while the text for the guard by the rockslide is "He seems to be guarding a pile of rocks. Interesting job."',
			'When you "pull on the rope and miraculously. it comes loose", it is likely a reference to when [Samwise Gamgee](http://en.wikipedia.org/wiki/Samwise_Gamgee) pulls elven rope loose from a knot with one small pull in [The Lord of the Rings](http://en.wikipedia.org/wiki/The_Lord_of_the_Rings).',
			'[The Kendal](http://oldschoolrunescape.wikia.com/wiki/The_Kendal) resembles, in both name and appearance, the monster [Grendel](http://en.wikipedia.org/wiki/Grendel) from the famous old English poem [Beowulf](http://en.wikipedia.org/wiki/Beowulf).',
			'When you first talk to The Kendal, he quotes the Cave of Wonders guardian from [Aladdin](http://en.wikipedia.org/wiki/Aladdin_(1992_Disney_film)), "Who dares disturb my slumber?"',
			'When talking to The Kendal, you can ask him what he is doing in "that stupid bear suit", to which he will respond with the question "What are you doing in that stupid set of armor?". This is a reference to the movie [Donnie Darko](http://en.wikipedia.org/wiki/Donnie_Darko).'
		],
		freeToPlay: !1
	},
	MOURNINGSENDPARTI = {
		thumbnail: 'https://vignette3.wikia.nocookie.net/2007scape/images/d/d3/Mourning%27s_Ends_Part_I.png/revision/latest/scale-to-width-down/300?cb=20170212215931',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Mourning%27s_Ends_Part_I',
		name: "Mourning's Ends Part I",
		questType: 'Normal',
		length: 'Long',
		difficulty: 'Master',
		description: "It seems at last Arianwyn has need of your skills. He believes there is more to the Mourners than meets the eye and he wishes for you to find out just what they're up to. Can you gain the trust of the Mourners?",
		startPoint: 'In the Isafdar Woods, where the Roving Elves are (outside Tyras Camp and in the southeast corner of the woods). Speak to Eluned.',
		rewards: [
			'2 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'25,000 [Thieving](http://oldschoolrunescape.wikia.com/wiki/Thieving) XP',
			'25,000 [Hitpoints](http://oldschoolrunescape.wikia.com/wiki/Hitpoints) XP',
			'Access to [Mourner HQ](http://oldschoolrunescape.wikia.com/wiki/Mourner_HQ) basement',
			'[Elf teleport crystal](http://oldschoolrunescape.wikia.com/wiki/Elf_teleport_crystal)',
			'[fixed device](http://oldschoolrunescape.wikia.com/wiki/Fixed_device)',
			'[Mourner clothing](http://oldschoolrunescape.wikia.com/wiki/Mourner_gear)'
		],
		requirements: [
			'60 [Ranged](http://oldschoolrunescape.wikia.com/wiki/Ranged)',
			'50 [Thieving](http://oldschoolrunescape.wikia.com/wiki/Thieving)',
			'[Roving Elves](http://oldschoolrunescape.wikia.com/wiki/Roving_Elves)',
			'[Big Chompy Bird Hunting](http://oldschoolrunescape.wikia.com/wiki/Big_Chompy_Bird_Hunting)',
			'[Sheep Herder](http://oldschoolrunescape.wikia.com/wiki/Sheep_Herder)'
		],
		trivia: ['None'],
		freeToPlay: !1
	},
	MURDERMYSTERY = {
		thumbnail: 'https://vignette4.wikia.nocookie.net/2007scape/images/d/da/Murder_Mystery.png/revision/latest/scale-to-width-down/300?cb=20170212204520',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Murder_Mystery',
		name: 'Murder Mystery',
		questType: 'Normal',
		length: 'Short',
		difficulty: 'Novice',
		description: "Old man Sinclair has been found dead in his mansion! Unfortunately, the local authorities are having some trouble figuring out who's the guilty party. Maybe the unbiased eye of a passing adventurer will be of help.",
		startPoint:
      "The [Sinclair Mansion](http://oldschoolrunescape.wikia.com/wiki/Sinclair_Mansion), north along the path between [Seers' Village](http://oldschoolrunescape.wikia.com/wiki/Seers%27_Village) and [Camelot](http://oldschoolrunescape.wikia.com/wiki/Camelot). Talk to one of the guards around the mansion.",
		rewards: ['3 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)', '1,406 [Crafting](http://oldschoolrunescape.wikia.com/wiki/Crafting) XP', '2,000 GP'],
		requirements: ['None'],
		trivia: ['None'],
		freeToPlay: !1
	},
	MOURNINGSENDPARTII = {
		thumbnail: 'https://vignette4.wikia.nocookie.net/2007scape/images/5/5a/Mourning%27s_Ends_Part_II.png/revision/latest/scale-to-width-down/300?cb=20170212220256',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Mourning%27s_Ends_Part_II',
		name: "Mourning's Ends Part II",
		questType: 'Normal',
		length: 'Long',
		difficulty: 'Master',
		description: 'This chapter of the quest takes our hero deep under the mountains of Arandar to put a stop to the evil plans of the mourners. If our hero is to succeed, they must solve one of the most complicated puzzles in all of Gielinor.',
		startPoint: 'Speak to [Arianwyn](http://oldschoolrunescape.wikia.com/wiki/Arianwyn) in [Lletya](http://oldschoolrunescape.wikia.com/wiki/Lletya).',
		rewards: [
			'2 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'20,000 [Agility](http://oldschoolrunescape.wikia.com/wiki/Agility) XP',
			'A [crystal trinket](http://oldschoolrunescape.wikia.com/wiki/Crystal_trinket) (allows you access to the [Temple of Light](http://oldschoolrunescape.wikia.com/wiki/Temple_of_Light))',
			"A [death talisman](http://oldschoolrunescape.wikia.com/wiki/Death_talisman), and the ability to craft [death runes](http://oldschoolrunescape.wikia.com/wiki/Death_runes) (you'll get full access to the abyssal rift as well)",
			'Access to [Dark Beasts](http://oldschoolrunescape.wikia.com/wiki/Dark_Beast)'
		],
		requirements: [
			"[Mourning's Ends Part I](http://oldschoolrunescape.wikia.com/wiki/Mourning%27s_Ends_Part_I)",
			'43+ [Prayer](http://oldschoolrunescape.wikia.com/wiki/Prayer) for [Protect from Melee](http://oldschoolrunescape.wikia.com/wiki/Protect_from_Melee) against the [Shadows](http://oldschoolrunescape.wikia.com/wiki/Shadow)',
			'60+ [Agility](http://oldschoolrunescape.wikia.com/wiki/Agility) for lesser chances of failing obstacles (91 to never fail [[1]](#cite_note-0))'
		],
		trivia: ['None'],
		freeToPlay: !1
	},
	NATURESPIRIT = {
		thumbnail: 'https://vignette2.wikia.nocookie.net/2007scape/images/5/5b/Nature_Spirit.png/revision/latest/scale-to-width-down/300?cb=20170212213249',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Nature_Spirit',
		name: 'Nature Spirit',
		questType: 'Normal',
		length: 'Medium',
		difficulty: 'Novice',
		description: "After saving the holy man Drezel, he's seeking some assistance again. This time he has a special request for any adventurous sorts to search for the Druid 'Filliman Tarlock' and brave the terrors that infest the swamp of Mort Myre.",
		startPoint: 'Speak to [Drezel](http://oldschoolrunescape.wikia.com/wiki/Drezel) under the Saradomin temple near the [River Salve](http://oldschoolrunescape.wikia.com/wiki/River_Salve).',
		rewards: [
			'2 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'3,000 [Crafting](http://oldschoolrunescape.wikia.com/wiki/Crafting) XP',
			'2,000 [Defence](http://oldschoolrunescape.wikia.com/wiki/Defence) XP',
			'2,000 [Hitpoints](http://oldschoolrunescape.wikia.com/wiki/Hitpoints) XP',
			'Access to [Mort Myre Swamp](http://oldschoolrunescape.wikia.com/wiki/Mort_Myre_Swamp)',
			'Ability to fight [ghasts](http://oldschoolrunescape.wikia.com/wiki/Ghast)'
		],
		requirements: ['18 [Crafting](http://oldschoolrunescape.wikia.com/wiki/Crafting)', '[Priest in Peril](http://oldschoolrunescape.wikia.com/wiki/Priest_in_Peril)', '[The Restless Ghost](http://oldschoolrunescape.wikia.com/wiki/The_Restless_Ghost)'],
		trivia: ['None'],
		freeToPlay: !1
	},
	MYARM = {
		thumbnail: 'https://vignette2.wikia.nocookie.net/2007scape/images/d/d9/My_Arm%27s_Big_Adventure.png/revision/latest/scale-to-width-down/300?cb=20170409090723',
		url: 'http://oldschoolrunescape.wikia.com/wiki/My_Arm%27s_Big_Adventure',
		name: "My Arm's Big Adventure",
		questType: 'Normal',
		length: 'Medium',
		difficulty: 'Intermediate',
		description:
      "Trolls love goutweed. They love it so much that they've picked it all, and now they can't get any more. However, in his smelly kitchen in the Troll Stronghold, Burntmeat the cook has heard a rumour that goutweed is growing once again, for anyone who's got the skill to farm it. Can you teach his young assistant - a simple troll known as My Arm - to grow the precious goutweed? Will you overcome My Arm's stubbornness and ignorance to earn yourself Burntmeat's reward? Dare you accompany My Arm on this uniquely trollish expedition?",
		startPoint: 'The kitchen, deep in the [Troll Stronghold](http://oldschoolrunescape.wikia.com/wiki/Troll_Stronghold_(area)). Talk to [Burntmeat](http://oldschoolrunescape.wikia.com/wiki/Burntmeat).',
		rewards: [
			'1 [Quest point](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'10,000 [Herblore](http://oldschoolrunescape.wikia.com/wiki/Herblore) XP',
			'5,000 [Farming](http://oldschoolrunescape.wikia.com/wiki/Farming) XP',
			'Access to a disease-free herb patch on top of the [Troll Stronghold](http://oldschoolrunescape.wikia.com/wiki/Troll_Stronghold_(area)).',
			'A full inventory of [burnt meat](http://oldschoolrunescape.wikia.com/wiki/Burnt_food)'
		],
		requirements: [
			'10 [Woodcutting](http://oldschoolrunescape.wikia.com/wiki/Woodcutting)',
			'29 [Farming](http://oldschoolrunescape.wikia.com/wiki/Farming)',
			"[Eadgar's Ruse](http://oldschoolrunescape.wikia.com/wiki/Eadgar%27s_Ruse)",
			'[The Feud](http://oldschoolrunescape.wikia.com/wiki/The_Feud)',
			'[Jungle Potion](http://oldschoolrunescape.wikia.com/wiki/Jungle_Potion)',
			'At least 60% favour in the [Tai Bwo Wannai Cleanup](http://oldschoolrunescape.wikia.com/wiki/Tai_Bwo_Wannai_Cleanup) [minigame](http://oldschoolrunescape.wikia.com/wiki/Minigames) - must be acquired BEFORE starting this quest (it will be subtracted from total).',
			'Ability to defeat level 172 [Giant Roc](http://oldschoolrunescape.wikia.com/wiki/Giant_Roc)',
			'43 [Prayer](http://oldschoolrunescape.wikia.com/wiki/Prayer) ([Protect from Melee](http://oldschoolrunescape.wikia.com/wiki/Protect_from_Melee) could negate damage from [mountain trolls](http://oldschoolrunescape.wikia.com/wiki/Mountain_troll) and [Protect from Missiles](http://oldschoolrunescape.wikia.com/wiki/Protect_from_Missiles) along the [Death Plateau](http://oldschoolrunescape.wikia.com/wiki/Death_Plateau_(location)) route.)',
			'61 [Magic](http://oldschoolrunescape.wikia.com/wiki/Magic) for [Trollheim Teleport](http://oldschoolrunescape.wikia.com/wiki/Trollheim_Teleport)'
		],
		trivia: [
			'If you have a [gout tuber](http://oldschoolrunescape.wikia.com/wiki/Gout_tuber) in your [bank](http://oldschoolrunescape.wikia.com/wiki/Bank) or [inventory](http://oldschoolrunescape.wikia.com/wiki/Inventory) when first talking to [My Arm](http://oldschoolrunescape.wikia.com/wiki/My_Arm), you will attempt to offer it instead of going to [Death Plateau](http://oldschoolrunescape.wikia.com/wiki/Death_Plateau_(location)). However, My Arm is very stubborn and refuses.',
			"Depending where your [house](http://oldschoolrunescape.wikia.com/wiki/Player-owned_house) is, your character will reference its location and tells My Arm that he's never coming over.",
			'If during the part of the quest where he shows you his farming patch you already have the [Ugthanki dung](http://oldschoolrunescape.wikia.com/wiki/Ugthanki_dung) in your inventory, he will point out that you stink.',
			'[Qutiedoll](http://oldschoolrunescape.wikia.com/wiki/Qutiedoll) made his second appearance after the [Draynor Bank Robbery](http://oldschoolrunescape.wikia.com/wiki/Draynor_Bank_Robbery) during the Rumble in the Jungle [cutscene](http://oldschoolrunescape.wikia.com/wiki/Cutscene) when he was attacked by My Arm.',
			"During a cutscene, My Arm throws the [Drunken Dwarf](http://oldschoolrunescape.wikia.com/wiki/Drunken_Dwarf) off the roof of the [Troll Stronghold](http://oldschoolrunescape.wikia.com/wiki/Troll_Stronghold_(area)) and an unnamed young troll comes up to him. After the quest, the troll's name has changed to [Drunken dwarf's leg](http://oldschoolrunescape.wikia.com/wiki/Drunken_dwarf%27s_leg).",
			'During the first cutscene, if you try to take any of the [items](http://oldschoolrunescape.wikia.com/wiki/Items) on the floor, the cutscene will stop and [Burntmeat](http://oldschoolrunescape.wikia.com/wiki/Burntmeat) will tell you to start paying attention.',
			'If you have completed the [Swan Song](http://oldschoolrunescape.wikia.com/wiki/Swan_Song) [quest](http://oldschoolrunescape.wikia.com/wiki/Quests) and ask for the [Dragon items](http://oldschoolrunescape.wikia.com/wiki/Dragon_(metal)) as your reward just after the first cutscene, you will complain that this is just like the [Wise Old Man](http://oldschoolrunescape.wikia.com/wiki/Wise_Old_Man) not giving you his [blue partyhat](http://oldschoolrunescape.wikia.com/wiki/Blue_partyhat) at the end of the quest.'
		],
		freeToPlay: !1
	},
	OBSERVATORYQUEST = {
		thumbnail: 'https://vignette1.wikia.nocookie.net/2007scape/images/b/bb/Observatory_Quest.png/revision/latest/scale-to-width-down/300?cb=20170212211940',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Observatory_Quest',
		name: 'Observatory Quest',
		questType: 'Normal',
		length: 'Short',
		difficulty: 'Novice',
		description: 'The Observatory in south-west Ardougne has been ransacked by a family of nearby goblins. Can you help the professor to rebuild it?',
		startPoint:
      'Talk to the [Observatory professor](http://oldschoolrunescape.wikia.com/wiki/Observatory_professor) in the [Observatory](http://oldschoolrunescape.wikia.com/wiki/Observatory) Reception Room south-west of [Ardougne](http://oldschoolrunescape.wikia.com/wiki/Ardougne), north of [Castle Wars](http://oldschoolrunescape.wikia.com/wiki/Castle_Wars).',
		rewards: [
			'2 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'2,250 [Crafting](http://oldschoolrunescape.wikia.com/wiki/Crafting) XP',
			'Your item reward depends on what astrological sign you see when you look through the Telescope. It is also different for each person. You will get one of these: A [maple longbow](http://oldschoolrunescape.wikia.com/wiki/Maple_longbow) [Weapon poison](http://oldschoolrunescape.wikia.com/wiki/Weapon_poison) 3 [Law runes](http://oldschoolrunescape.wikia.com/wiki/Law_rune) An [amulet of defence](http://oldschoolrunescape.wikia.com/wiki/Amulet_of_defence) A [black 2h sword](http://oldschoolrunescape.wikia.com/wiki/Black_2h_sword) A 1-dose [super strength](http://oldschoolrunescape.wikia.com/wiki/Super_strength) potion 25 [Water runes](http://oldschoolrunescape.wikia.com/wiki/Water_rune) 3 [Tuna](http://oldschoolrunescape.wikia.com/wiki/Tuna) An [uncut sapphire](http://oldschoolrunescape.wikia.com/wiki/Uncut_sapphire) 875 Experience in [Attack](http://oldschoolrunescape.wikia.com/wiki/Attack), [Defence](http://oldschoolrunescape.wikia.com/wiki/Defence), [Hitpoints](http://oldschoolrunescape.wikia.com/wiki/Hitpoints), or [Strength](http://oldschoolrunescape.wikia.com/wiki/Strength) (random)',
			'A [maple longbow](http://oldschoolrunescape.wikia.com/wiki/Maple_longbow)',
			'[Weapon poison](http://oldschoolrunescape.wikia.com/wiki/Weapon_poison)',
			'3 [Law runes](http://oldschoolrunescape.wikia.com/wiki/Law_rune)',
			'An [amulet of defence](http://oldschoolrunescape.wikia.com/wiki/Amulet_of_defence)',
			'A [black 2h sword](http://oldschoolrunescape.wikia.com/wiki/Black_2h_sword)',
			'A 1-dose [super strength](http://oldschoolrunescape.wikia.com/wiki/Super_strength) potion',
			'25 [Water runes](http://oldschoolrunescape.wikia.com/wiki/Water_rune)',
			'3 [Tuna](http://oldschoolrunescape.wikia.com/wiki/Tuna)',
			'An [uncut sapphire](http://oldschoolrunescape.wikia.com/wiki/Uncut_sapphire)',
			'875 Experience in [Attack](http://oldschoolrunescape.wikia.com/wiki/Attack), [Defence](http://oldschoolrunescape.wikia.com/wiki/Defence), [Hitpoints](http://oldschoolrunescape.wikia.com/wiki/Hitpoints), or [Strength](http://oldschoolrunescape.wikia.com/wiki/Strength) (random)',
			'The [Spirit of Scorpius](http://oldschoolrunescape.wikia.com/wiki/Spirit_of_Scorpius) will now give you a [mould](http://oldschoolrunescape.wikia.com/wiki/Unholy_mould) to make [Unholy symbols](http://oldschoolrunescape.wikia.com/wiki/Unholy_symbol), and he will bless them for you too. He can be found in the graveyard north of the [Observatory](http://oldschoolrunescape.wikia.com/wiki/Observatory).',
			"Talk to the [Observatory assistant](http://oldschoolrunescape.wikia.com/wiki/Observatory_assistant) after the [quest](http://oldschoolrunescape.wikia.com/wiki/Quests) and he will reward you with a [jug of wine](http://oldschoolrunescape.wikia.com/wiki/Jug_of_wine) as well as tell you his and the professor's real name."
		],
		requirements: ['10 [Crafting](http://oldschoolrunescape.wikia.com/wiki/Crafting)', 'Ability to defeat a level 42 monster.'],
		trivia: ['None'],
		freeToPlay: !1
	},
	OLAFSQUEST = {
		thumbnail: 'https://vignette4.wikia.nocookie.net/2007scape/images/7/7a/Olaf%27s_Quest.png/revision/latest/scale-to-width-down/300?cb=20170212212758',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Olaf%27s_Quest',
		name: "Olaf's Quest",
		questType: 'Normal',
		length: 'Short',
		difficulty: 'Intermediate',
		description:
      "Poor Olaf Hradson. He has to live up to such expectations. His ancestors sailed all over the world, and now he has to go out and prove himself their equal. If only he could read a map... If only he could sail... If only he hadn't crashed! Can you help a depressed and soggy Fremennik regain his pride, and possibly the lost treasure of his grandfather?",
		startPoint: 'The mouth of the [Fremennik](http://oldschoolrunescape.wikia.com/wiki/Fremennik) [hunting area](http://oldschoolrunescape.wikia.com/wiki/Rellekka_Hunter_area). Talk to [Olaf Hradson](http://oldschoolrunescape.wikia.com/wiki/Olaf_Hradson).',
		rewards: [
			'1 [Quest point](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'12,000 [Defence](http://oldschoolrunescape.wikia.com/wiki/Defence) XP',
			'20,000 GP',
			'4 Cut [rubies](http://oldschoolrunescape.wikia.com/wiki/Ruby)',
			'Access to a cave where you can fight [brine rats](http://oldschoolrunescape.wikia.com/wiki/Brine_rat).',
			'A piece of [parchment](http://oldschoolrunescape.wikia.com/wiki/Parchment_(Olaf%27s_Quest)) telling you of other shipwrecks with more treasure.'
		],
		requirements: [
			'[The Fremennik Trials](http://oldschoolrunescape.wikia.com/wiki/The_Fremennik_Trials)',
			'40 [Firemaking](http://oldschoolrunescape.wikia.com/wiki/Firemaking)',
			'50 [Woodcutting](http://oldschoolrunescape.wikia.com/wiki/Woodcutting)',
			'Ability to defeat a level 100 monster',
			'High level [Agility](http://oldschoolrunescape.wikia.com/wiki/Agility) is an advantage'
		],
		trivia: [
			'When the quest was first released, the slippery bridge towards the end of the quest was considered by many players to be too difficult, and [Jagex](http://oldschoolrunescape.wikia.com/wiki/Jagex) received many complaints. The next day, they issued a fix that made it slightly easier to cross the bridge after each failed attempt.',
			'When you examine the boulder that you can roll once in the [Brine Rat Cavern](http://oldschoolrunescape.wikia.com/wiki/Brine_Rat_Cavern), the text is a reference to the game show, [Family Feud](http://en.wikipedia.org/wiki/Family_Feud).'
		],
		freeToPlay: !1
	},
	ONESMALLFAVOUR = {
		thumbnail: 'https://vignette4.wikia.nocookie.net/2007scape/images/7/7a/Olaf%27s_Quest.png/revision/latest/scale-to-width-down/300?cb=20170212212758',
		url: 'http://oldschoolrunescape.wikia.com/wiki/One_Small_Favour',
		name: 'One Small Favour',
		questType: 'Normal',
		length: 'Very Long',
		difficulty: 'Experienced',
		description:
      "If you're fresh to [Shilo Village](http://oldschoolrunescape.wikia.com/wiki/Shilo_Village) after solving the mystery (or even if you did it some time ago), you may like to check out Yanni Salika's antiques shop. He's a busy chap revamping antique items, checking out new stock from potential adventurers and maybe he'll have a small1 favour to ask of you? Probably nothing particularly large, Yanni isn't a demanding2 person, should hardly take you any time3 at all really, something to do when you have a spare moment. That's assuming there aren't any complications. 1: - Perception of the word \"small\" may be open to interpretation. 2: - In a recent vote, Yanni Salika was only voted the second most demanding person in Shilo Village. 3: - As everyone knows, time is relative.",
		startPoint: 'Go to [Shilo Village](http://oldschoolrunescape.wikia.com/wiki/Shilo_Village) and talk to [Yanni Salika](http://oldschoolrunescape.wikia.com/wiki/Yanni_Salika).',
		rewards: [
			'2 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'Two experience lamps giving 10,000 XP to any skill of your choice. Skill must be at least level 30.',
			'A [steel key ring](http://oldschoolrunescape.wikia.com/wiki/Steel_key_ring)',
			'Ability to make [Guthix rest](http://oldschoolrunescape.wikia.com/wiki/Guthix_rest) tea',
			'Ability to craft [pot lids](http://oldschoolrunescape.wikia.com/wiki/Pot_lid)',
			'Access to the [gnome glider](http://oldschoolrunescape.wikia.com/wiki/Gnome_glider) route to the [Feldip Hills](http://oldschoolrunescape.wikia.com/wiki/Feldip_Hills)'
		],
		requirements: [
			'36 [Agility](http://oldschoolrunescape.wikia.com/wiki/Agility)',
			'25 [Crafting](http://oldschoolrunescape.wikia.com/wiki/Crafting)',
			'20 [Herblore](http://oldschoolrunescape.wikia.com/wiki/Herblore)',
			'30 [Smithing](http://oldschoolrunescape.wikia.com/wiki/Smithing)',
			'Completion of the following quests: [Rune Mysteries](http://oldschoolrunescape.wikia.com/wiki/Rune_Mysteries) [Shilo Village](http://oldschoolrunescape.wikia.com/wiki/Shilo_Village_(quest))',
			'[Rune Mysteries](http://oldschoolrunescape.wikia.com/wiki/Rune_Mysteries)',
			'[Shilo Village](http://oldschoolrunescape.wikia.com/wiki/Shilo_Village_(quest))'
		],
		trivia: ["Hammerspike Stoutbeard's desire to be a druid may stem from Pikel Bouldershoulder, a dwarf druid from several of R.A. Salvatore's books.[[3]](#cite_note-2)"],
		freeToPlay: !1
	},
	PIRATESTREASURE = {
		thumbnail: 'https://vignette2.wikia.nocookie.net/2007scape/images/0/0e/Pirate%27s_Treasure.png/revision/latest/scale-to-width-down/360?cb=20160326010109',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Pirate%27s_Treasure',
		name: "Pirate's Treasure",
		questType: 'Normal',
		length: 'Short',
		difficulty: 'Novice',
		description: "[Redbeard Frank](http://oldschoolrunescape.wikia.com/wiki/Redbeard_Frank) knows the location of pirate treasure, but he'll only part with the knowledge for a bottle of Karamja rum.",
		startPoint: 'The northernmost dock at [Port Sarim](http://oldschoolrunescape.wikia.com/wiki/Port_Sarim), just south of the [pub](http://oldschoolrunescape.wikia.com/wiki/The_Rusty_Anchor).',
		rewards: ['2 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)', 'Pay-fare option to/from [Karamja](http://oldschoolrunescape.wikia.com/wiki/Karamja).', 'Treasure Chest'],
		requirements: ['None'],
		trivia: [
			'When the quest was first released, the [Karamja rum](http://oldschoolrunescape.wikia.com/wiki/Karamja_rum) were tradeable and the bottles would not break if players tried to teleport. Some players simply bought a whole load of rum and sold it to players doing the quest, allowing them to skip a large part of it. When this was posted on fan forums, a Jagex developer saw it and the problem was soon corrected.'
		],
		freeToPlay: !0
	},
	PRIESTINPERIL = {
		thumbnail: 'https://vignette2.wikia.nocookie.net/2007scape/images/0/00/Priest_in_Peril.png/revision/latest/scale-to-width-down/300?cb=20170212200348',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Priest_in_Peril',
		name: 'Priest in Peril',
		questType: 'Normal',
		length: 'Medium',
		difficulty: 'Novice',
		description:
      "Recently contact has been lost with the temple to Saradomin on Misthalins' Eastern border. [King Roald](http://oldschoolrunescape.wikia.com/wiki/King_Roald) would be very interested to know what has caused this lack of communication, and seeks an adventurer willing to report back to him on the situation.",
		startPoint: 'Speak to [King Roald](http://oldschoolrunescape.wikia.com/wiki/King_Roald) in the [Varrock Palace](http://oldschoolrunescape.wikia.com/wiki/Varrock_Palace).',
		rewards: [
			'1 [Quest point](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'1,406 [Prayer](http://oldschoolrunescape.wikia.com/wiki/Prayer) XP',
			'Access to [Morytania](http://oldschoolrunescape.wikia.com/wiki/Morytania)',
			'[Wolfbane](http://oldschoolrunescape.wikia.com/wiki/Wolfbane) (when fighting [werewolves](http://oldschoolrunescape.wikia.com/wiki/Werewolf) in [Morytania](http://oldschoolrunescape.wikia.com/wiki/Morytania), this will stop them from changing into their more powerful werewolf form if the dagger is equipped).'
		],
		requirements: ['Ability to defeat a [combat level](http://oldschoolrunescape.wikia.com/wiki/Combat_level) 30 enemy without [Magic](http://oldschoolrunescape.wikia.com/wiki/Magic).'],
		trivia: [
			'Drezel will appear in the Mausoleum before he escapes his cell, but is unreachable until he is freed.',
			'If you have a clue scroll which requires speaking with Drezel before you have met him in the Mausoleum, talking to him in the Mausoleum will trigger the clue scroll prior to proceeding with the quest.'
		],
		freeToPlay: !1
	},
	PLAGUECITY = {
		thumbnail: 'https://vignette2.wikia.nocookie.net/2007scape/images/0/00/Plague_City.png/revision/latest/scale-to-width-down/300?cb=20161128043645',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Plague_City',
		name: 'Plague City',
		questType: 'Normal',
		length: 'Short',
		difficulty: 'Novice',
		description: 'The western part of Ardougne has been shut off as a deadly plague sweeps through the people. However, a young woman who went in to try to help those stricken by the illness has disappeared and her parents have become worried.',
		startPoint: 'Talk to [Edmond](http://oldschoolrunescape.wikia.com/wiki/Edmond), living next to the wall surrounding [East Ardougne](http://oldschoolrunescape.wikia.com/wiki/East_Ardougne), north of the [castle](http://oldschoolrunescape.wikia.com/wiki/Ardougne_Castle).',
		rewards: [
			'1 [Quest point](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'2,425 [Mining](http://oldschoolrunescape.wikia.com/wiki/Mining) XP',
			"[A magic scroll](http://oldschoolrunescape.wikia.com/wiki/A_magic_scroll), letting you use the [Ardougne Teleport](http://oldschoolrunescape.wikia.com/wiki/Ardougne_Teleport) if your [Magic](http://oldschoolrunescape.wikia.com/wiki/Magic) level is 51 or above. After you read it, you'll memorise the spell. Usage of an [Ardougne teletab](http://oldschoolrunescape.wikia.com/wiki/Ardougne_teleport) also requires the completion of this quest."
		],
		requirements: ['None'],
		trivia: ['None'],
		freeToPlay: !1
	},
	PRINCEALIRESCUE = {
		thumbnail: 'https://vignette2.wikia.nocookie.net/2007scape/images/2/22/Prince_Ali_Rescue.png/revision/latest/scale-to-width-down/300?cb=20170212201124',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Prince_Ali_Rescue',
		name: 'Prince Ali Rescue',
		questType: 'Normal',
		length: 'Short',
		difficulty: 'Novice',
		description: 'Prince Ali of Al Kharid has been kidnapped by the scheming Lady Keli. You are hired to stage a rescue mission.',
		startPoint: 'Speak to [Hassan](http://oldschoolrunescape.wikia.com/wiki/Hassan) in the palace at [Al Kharid](http://oldschoolrunescape.wikia.com/wiki/Al_Kharid).',
		rewards: ['3 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)', '700 GP', 'Free passage through the Al Kharid gate', "Access to the [Sorceress's Garden](http://oldschoolrunescape.wikia.com/wiki/Sorceress%27s_Garden)."],
		requirements: ['None'],
		trivia: ['None'],
		freeToPlay: !0
	},
	WISHLIST = {
		thumbnail: 'https://vignette2.wikia.nocookie.net/2007scape/images/c/c0/Quest.png/revision/latest/scale-to-width-down/17?cb=20130219195019',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Rag_%26_Bone_Wish_List',
		name: 'Rag & Bone Wish List',
		questType: 'Miniquests',
		length: 'Very Long',
		difficulty: 'Medium',
		description: 'None',
		startPoint: 'Talk to the [Odd Old Man](http://oldschoolrunescape.wikia.com/wiki/Odd_Old_Man) again.',
		rewards: ['None.'],
		requirements: [
			'40 [Slayer](http://oldschoolrunescape.wikia.com/wiki/Slayer)',
			'20 [Defence](http://oldschoolrunescape.wikia.com/wiki/Defence) Note: 20 [Defence](http://oldschoolrunescape.wikia.com/wiki/Defence) is required to wield the [mirror shield](http://oldschoolrunescape.wikia.com/wiki/Mirror_shield), which is needed to kill [Basilisks](http://oldschoolrunescape.wikia.com/wiki/Basilisk). HOWEVER, it is still possible to kill Basilisks with the use of [poison](http://oldschoolrunescape.wikia.com/wiki/Poison) and multiple [Rings of Recoil](http://oldschoolrunescape.wikia.com/wiki/Ring_of_recoil). There is also a [safe spot](http://oldschoolrunescape.wikia.com/wiki/Safe_spot) that a Basilisk can be ranged over across some rocks in the [Fremennik Slayer Dungeon](http://oldschoolrunescape.wikia.com/wiki/Fremennik_Slayer_Dungeon). An easy way to get the bone would require two accounts. One wears to wear recoil and the other to cast Vengeance Other spell. While waiting for the Vengeance Other spell, the account with recoils can equip a mirror shield and unequip shield for vengeance. Note: Dark Bow spec with dragon arrows is a guaranteed hit when basilisk is below 16 hp.',
			'Note: 20 [Defence](http://oldschoolrunescape.wikia.com/wiki/Defence) is required to wield the [mirror shield](http://oldschoolrunescape.wikia.com/wiki/Mirror_shield), which is needed to kill [Basilisks](http://oldschoolrunescape.wikia.com/wiki/Basilisk). HOWEVER, it is still possible to kill Basilisks with the use of [poison](http://oldschoolrunescape.wikia.com/wiki/Poison) and multiple [Rings of Recoil](http://oldschoolrunescape.wikia.com/wiki/Ring_of_recoil). There is also a [safe spot](http://oldschoolrunescape.wikia.com/wiki/Safe_spot) that a Basilisk can be ranged over across some rocks in the [Fremennik Slayer Dungeon](http://oldschoolrunescape.wikia.com/wiki/Fremennik_Slayer_Dungeon). An easy way to get the bone would require two accounts. One wears to wear recoil and the other to cast Vengeance Other spell. While waiting for the Vengeance Other spell, the account with recoils can equip a mirror shield and unequip shield for vengeance. Note: Dark Bow spec with dragon arrows is a guaranteed hit when basilisk is below 16 hp.',
			'Completed [Rag and Bone Man](http://oldschoolrunescape.wikia.com/wiki/Rag_and_Bone_Man)',
			'Started [Zogre Flesh Eaters](http://oldschoolrunescape.wikia.com/wiki/Zogre_Flesh_Eaters)',
			'Completed [The Fremennik Trials](http://oldschoolrunescape.wikia.com/wiki/The_Fremennik_Trials), [Horror from the Deep](http://oldschoolrunescape.wikia.com/wiki/Horror_from_the_Deep) and [Waterfall Quest](http://oldschoolrunescape.wikia.com/wiki/Waterfall_Quest) (Waterfall Quest and The Fremennik Trials being optional)',
			'Started [Creature of Fenkenstrain](http://oldschoolrunescape.wikia.com/wiki/Creature_of_Fenkenstrain)',
			'Completed [Skippy and the Mogres](http://oldschoolrunescape.wikia.com/wiki/Skippy_and_the_Mogres)',
			'Ability to kill several high-level monsters'
		],
		trivia: ['None'],
		freeToPlay: !1
	},
	RAGANDBONEMAN = {
		thumbnail: 'https://vignette4.wikia.nocookie.net/2007scape/images/1/1c/Rag_and_Bone_Man.png/revision/latest/scale-to-width-down/300?cb=20170212201605',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Rag_and_Bone_Man',
		name: 'Rag and Bone Man',
		questType: 'Normal',
		length: 'Medium',
		difficulty: 'Novice',
		description: 'Everybody needs some body, and the Odd Old Man knows exactly which bits of those bodies he needs. Can you help him finish his extensive and extremely creepy collection?',
		startPoint: 'Go east of [Varrock](http://oldschoolrunescape.wikia.com/wiki/Varrock), through the gate near the earth altar, to [Paterdomus](http://oldschoolrunescape.wikia.com/wiki/Paterdomus). The old man is in a little quarry just north of the path.',
		rewards: ['1 [Quest point](http://oldschoolrunescape.wikia.com/wiki/Quest_points)', '500 [Cooking](http://oldschoolrunescape.wikia.com/wiki/Cooking) XP', '500 [Prayer](http://oldschoolrunescape.wikia.com/wiki/Prayer) XP'],
		requirements: ['Ability to defeat a level 27 monster.'],
		trivia: [
			'Rag-and-bone man is a British phrase for a junk dealer. Historically, the phrase referred to an individual who would travel the streets of a city with a horsedrawn cart, and would collect old rags, (for converting into fabric and paper), bones for making glue, scrap iron and other items, often trading them for other items of limited value.'
		],
		freeToPlay: !1
	},
	RATCATCHERS = {
		thumbnail: 'https://vignette2.wikia.nocookie.net/2007scape/images/b/b0/Ratcatchers.png/revision/latest/scale-to-width-down/300?cb=20170324172835',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Ratcatchers',
		name: 'Ratcatchers',
		questType: 'Normal',
		length: 'Long - Very long (Preparing items and teleports ahead of time will save a significant amount of time. A [cat](http://oldschoolrunescape.wikia.com/wiki/Cat) saves you a lot of time too!)',
		difficulty: 'Intermediate',
		description: 'Gertrude knows of some ratcatchers in Varrock, pay her a visit and she may tell you of their whereabouts. Perhaps they could show you and your cat a few pointers about rat catching. Enter the subterranean world of the rat catchers and discover more of your cats true potential.',
		startPoint: 'Talk to [Gertrude](http://oldschoolrunescape.wikia.com/wiki/Gertrude) west of [Varrock](http://oldschoolrunescape.wikia.com/wiki/Varrock).',
		rewards: [
			'2 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'4,500 [Thieving](http://oldschoolrunescape.wikia.com/wiki/Thieving) XP',
			'A [rat pole](http://oldschoolrunescape.wikia.com/wiki/Rat_pole)',
			'Ability to train overgrown cats into [wily](http://oldschoolrunescape.wikia.com/wiki/Wily_cat) and lazy cats.',
			'Ability to name your wily or lazy [cat](http://oldschoolrunescape.wikia.com/wiki/Cat) (up to six letters long).',
			'Access to the [Rat Pits](http://oldschoolrunescape.wikia.com/wiki/Rat_Pits).',
			'Ability to use the [Minigame Teleport](http://oldschoolrunescape.wikia.com/wiki/Minigame_Group_Finder) to the rat pits in [Port Sarim](http://oldschoolrunescape.wikia.com/wiki/Port_Sarim), [Ardougne](http://oldschoolrunescape.wikia.com/wiki/Ardougne), [Varrock](http://oldschoolrunescape.wikia.com/wiki/Varrock), and [Keldagrim](http://oldschoolrunescape.wikia.com/wiki/Keldagrim).'
		],
		requirements: ["[Icthlarin's Little Helper](http://oldschoolrunescape.wikia.com/wiki/Icthlarin%27s_Little_Helper)", 'Access to [Keldagrim](http://oldschoolrunescape.wikia.com/wiki/Keldagrim)'],
		trivia: [
			'Just before your [cat](http://oldschoolrunescape.wikia.com/wiki/Cat) kills the smoked out mice in [Keldagrim](http://oldschoolrunescape.wikia.com/wiki/Keldagrim), it will say "Exterminate! Exterminate!", which is a reference to the [Daleks](http://en.wikipedia.org/wiki/Daleks) in the British science fiction show, [Doctor Who](http://en.wikipedia.org/wiki/Doctor_Who).',
			"Some [guards](http://oldschoolrunescape.wikia.com/wiki/Guard) in the garden will say I miss Billy and Bob *sigh*. This is a reference to the guards killed during the cutscene of the [Garden of Tranquillity](http://oldschoolrunescape.wikia.com/wiki/Garden_of_Tranquillity) quest, where you were stealing the statue of the king. It doesn't matter if you have started the quest or not."
		],
		freeToPlay: !1
	},
	REGICIDE = {
		thumbnail: 'https://vignette1.wikia.nocookie.net/2007scape/images/a/a4/Regicide.png/revision/latest/scale-to-width-down/300?cb=20170212203055',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Regicide',
		name: 'Regicide',
		questType: 'Normal',
		length: 'Long',
		difficulty: 'Master',
		description:
      "Continuing the Plague City series, the Regicide Quest takes you beyond the 'Well of Voyage' to a new realm. King Lathas will employ you once again, this time for the grim task of disposing of his brother. Upon travelling to the realm you will find yourself surrounded by new and strange plants, animals and even a new race. Once there, you will see that everything is not as serene as it first appears.",
		startPoint:
      '[King Lathas](http://oldschoolrunescape.wikia.com/wiki/King_Lathas) will send a messenger to you (similar to a [random event](http://oldschoolrunescape.wikia.com/wiki/Random_events), and typically occurs within 30 minutes of completing [Underground Pass](http://oldschoolrunescape.wikia.com/wiki/Underground_Pass), though some players have had to wait hours)',
		rewards: [
			'3 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'13,750 [Agility](http://oldschoolrunescape.wikia.com/wiki/Agility) XP',
			'15,000 GP',
			'Access to the elven kingdom of [Tirannwn](http://oldschoolrunescape.wikia.com/wiki/Tirannwn) and the overpass of [Arandar](http://oldschoolrunescape.wikia.com/wiki/Arandar)',
			'Access to the [dragon halberd](http://oldschoolrunescape.wikia.com/wiki/Dragon_halberd) (325,000 coins at the [Tyras Camp](http://oldschoolrunescape.wikia.com/wiki/Tyras_Camp))',
			'Ability to charter a [ship](http://oldschoolrunescape.wikia.com/wiki/Charter_ship) to [Port Tyras](http://oldschoolrunescape.wikia.com/wiki/Port_Tyras)',
			'Ability to use [Elf Camp teleport scrolls](http://oldschoolrunescape.wikia.com/wiki/Elf_camp_teleport)',
			'Ability to use [Zul-andra teleport scrolls](http://oldschoolrunescape.wikia.com/wiki/Zul-andra_teleport) and kill [Zulrah](http://oldschoolrunescape.wikia.com/wiki/Zulrah)'
		],
		requirements: [
			'56 [Agility](http://oldschoolrunescape.wikia.com/wiki/Agility)',
			"10 [Crafting](http://oldschoolrunescape.wikia.com/wiki/Crafting) (To make the strip of cloth. It is tradeable, but can't be traded on the [Grand Exchange](http://oldschoolrunescape.wikia.com/wiki/Grand_Exchange), so if you want it without 10 Crafting you have to ask a friend to make one for you.)",
			'[Underground Pass](http://oldschoolrunescape.wikia.com/wiki/Underground_Pass)',
			'Ability to defeat a level 110 [Tyras Guard](http://oldschoolrunescape.wikia.com/wiki/Tyras_Guard). ([Safespots](http://oldschoolrunescape.wikia.com/wiki/Safespots) are available.)'
		],
		trivia: ['None'],
		freeToPlay: !1
	},
	RESTLESSGHOST = {
		thumbnail: 'https://vignette1.wikia.nocookie.net/2007scape/images/7/75/The_Restless_Ghost.png/revision/latest?cb=20130324125933',
		url: 'http://oldschoolrunescape.wikia.com/wiki/The_Restless_Ghost',
		name: 'The Restless Ghost',
		questType: 'Normal',
		length: 'Short',
		difficulty: 'Novice',
		description:
      'A ghost is haunting [Lumbridge](http://oldschoolrunescape.wikia.com/wiki/Lumbridge) graveyard. The priest of the [Lumbridge](http://oldschoolrunescape.wikia.com/wiki/Lumbridge) church of [Saradomin](http://oldschoolrunescape.wikia.com/wiki/Saradomin) wants you to find out how to get rid of it.',
		startPoint: 'The church in [Lumbridge](http://oldschoolrunescape.wikia.com/wiki/Lumbridge), to the south-east of [Lumbridge Castle](http://oldschoolrunescape.wikia.com/wiki/Lumbridge_Castle). Inside, talk to the Father Aereck.',
		rewards: ['1 [Quest point](http://oldschoolrunescape.wikia.com/wiki/Quest_points)', '1,125 [Prayer](http://oldschoolrunescape.wikia.com/wiki/Prayer) XP', '[Ghostspeak amulet](http://oldschoolrunescape.wikia.com/wiki/Ghostspeak_amulet)'],
		requirements: ['None'],
		trivia: ['The Restless Ghost is one of 6 quests released on the launch day of RuneScape.', 'You can understand the ghost in the ending cutscene of the quest even without a ghostspeak amulet equipped.'],
		freeToPlay: !0
	},
	RECRUITMENTDRIVE = {
		thumbnail: 'https://vignette2.wikia.nocookie.net/2007scape/images/f/f0/Recruitment_Drive.png/revision/latest/scale-to-width-down/300?cb=20170409093557',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Recruitment_Drive',
		name: 'Recruitment Drive',
		questType: 'Normal',
		length: 'Short',
		difficulty: 'Novice',
		description:
      "The Temple Knights of Saradomin, a secret organisation founded many centuries ago by Saradomin himself, are currently looking to expand their ranks with some new blood. After the successful thwarting of the Black Knights' plans to take over Asgarnia, and with the personal recommendation of Sir Amik, you have now been offered the chance to apply for membership in this organization... but are you up to the challenge?",
		startPoint: "Talk to [Sir Amik Varze](http://oldschoolrunescape.wikia.com/wiki/Sir_Amik_Varze) in the [White Knights' Castle](http://oldschoolrunescape.wikia.com/wiki/White_Knights%27_Castle) in [Falador](http://oldschoolrunescape.wikia.com/wiki/Falador).",
		rewards: [
			'1 [Quest point](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'1,000 [Prayer](http://oldschoolrunescape.wikia.com/wiki/Prayer) XP',
			'1,000 [Agility](http://oldschoolrunescape.wikia.com/wiki/Agility) XP',
			'1,000 [Herblore](http://oldschoolrunescape.wikia.com/wiki/Herblore) XP',
			'Access to [initiate armour](http://oldschoolrunescape.wikia.com/wiki/Initiate_armour). You will be given a [sallet](http://oldschoolrunescape.wikia.com/wiki/Initiate_sallet) for free, and you can buy subsequent sallets for 6,000 GP, the [cuisse](http://oldschoolrunescape.wikia.com/wiki/Initiate_cuisse) for 8,000 coins, the [hauberk](http://oldschoolrunescape.wikia.com/wiki/Initiate_hauberk) for 10,000 coins, or the full set for 20,000 coins. It is aesthetically similar to [white armour](http://oldschoolrunescape.wikia.com/wiki/White_equipment#Armour), yet has a gold trim.',
			'The Gaze of Saradomin - When you die, you will have the option of returning to [Falador](http://oldschoolrunescape.wikia.com/wiki/Falador) instead of [Lumbridge](http://oldschoolrunescape.wikia.com/wiki/Lumbridge). Talk to [Sir Tiffy Cashien](http://oldschoolrunescape.wikia.com/wiki/Sir_Tiffy_Cashien) to change your spawn point at any time.',
			"If you were a male at the start of the quest, you'll be given your 3,000 coins back, as well as a free [Makeover voucher](http://oldschoolrunescape.wikia.com/wiki/Makeover_voucher) to change back."
		],
		requirements: [
			'12 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			"[Black Knights' Fortress](http://oldschoolrunescape.wikia.com/wiki/Black_Knights%27_Fortress) and [Druidic Ritual](http://oldschoolrunescape.wikia.com/wiki/Druidic_Ritual)",
			'Ability to defeat a level 20 monster without any items at all'
		],
		trivia: ['None'],
		freeToPlay: !1
	},
	ROMEOANDJULIET = {
		thumbnail: 'https://vignette1.wikia.nocookie.net/2007scape/images/9/94/Romeo_%26_Juliet.png/revision/latest/scale-to-width-down/300?cb=20130324194834',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Romeo_%26_Juliet',
		name: 'Romeo & Juliet',
		questType: 'Normal',
		length: 'Short',
		difficulty: 'Novice',
		description: "[Romeo](http://oldschoolrunescape.wikia.com/wiki/Romeo) and [Juliet](http://oldschoolrunescape.wikia.com/wiki/Juliet) are desperately in love, but Juliet's father doesn't approve. Help them to find a way to get married and live happily ever after.",
		startPoint: 'Speak to Romeo in [Varrock Square](http://oldschoolrunescape.wikia.com/wiki/Varrock_Square).',
		rewards: ['5 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)'],
		requirements: ['None'],
		trivia: [
			'Romeo & Juliet is one of 6 quests released on the launch day of RuneScape.',
			'If you talk to Juliet again she will seem fed up with Romeo. If you speak to Romeo he has mistaken Juliet\'s "death" and has fallen in love with Phillipa.',
			'The Cadava potion may be a pun on the word cadaver, which is a dead body or corpse.'
		],
		freeToPlay: !0
	},
	ROVINGELVES = {
		thumbnail: 'https://vignette4.wikia.nocookie.net/2007scape/images/c/c6/Roving_Elves.png/revision/latest/scale-to-width-down/300?cb=20151230125536',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Roving_Elves',
		name: 'Roving Elves',
		questType: 'Normal',
		length: 'Short',
		difficulty: 'Master',
		description:
      "Deep in the elven forests of Isafdar, live a duo of roving elves: Islwyn a grumpy, old elf who dislikes humans and his companion, [Eluned](http://oldschoolrunescape.wikia.com/wiki/Eluned), who is a beautiful, friendly, young female elf with a kind heart. In this quest, you are challenged to overcome Islwyn's prejudice against humans and alleviate the burdens of the past.",
		startPoint: 'Talk to [Islwyn](http://oldschoolrunescape.wikia.com/wiki/Islwyn) inside the elven woods.',
		rewards: [
			'1 [Quest point](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'10,000 [Strength](http://oldschoolrunescape.wikia.com/wiki/Strength) XP',
			'A used [crystal bow](http://oldschoolrunescape.wikia.com/wiki/Crystal_bow) or [crystal shield](http://oldschoolrunescape.wikia.com/wiki/Crystal_shield) (your choice, it will be 2/10 charged).'
		],
		requirements: [
			'[Regicide](http://oldschoolrunescape.wikia.com/wiki/Regicide) and the [Waterfall Quest](http://oldschoolrunescape.wikia.com/wiki/Waterfall_Quest)',
			'Ability to defeat a level 84 enemy without [runes](http://oldschoolrunescape.wikia.com/wiki/Runes), [weapons](http://oldschoolrunescape.wikia.com/wiki/Weapons), or [armour](http://oldschoolrunescape.wikia.com/wiki/Armour)',
			'56 [Agility](http://oldschoolrunescape.wikia.com/wiki/Agility)'
		],
		trivia: ['None'],
		freeToPlay: !1
	},
	ROYALTROUBLE = {
		thumbnail: 'https://vignette2.wikia.nocookie.net/2007scape/images/c/c0/Quest.png/revision/latest/scale-to-width-down/17?cb=20130219195019',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Royal_Trouble',
		name: 'Royal Trouble',
		questType: 'Normal',
		length: 'Medium',
		difficulty: 'Experienced',
		description:
      "It's tough being a regent of a small island kingdom, especially when the [king](http://oldschoolrunescape.wikia.com/wiki/King_Vargas) has declared war while you were adventuring. Something is up in [Miscellania](http://oldschoolrunescape.wikia.com/wiki/Miscellania) and [Etceteria](http://oldschoolrunescape.wikia.com/wiki/Etceteria), so you'd better find out what before both kingdoms end up in royal trouble.",
		startPoint: 'Go to [Miscellania](http://oldschoolrunescape.wikia.com/wiki/Miscellania) and speak to [Advisor Ghrim](http://oldschoolrunescape.wikia.com/wiki/Advisor_Ghrim) in the castle.',
		rewards: [
			'1 [Quest point](http://oldschoolrunescape.wikia.com/wiki/Quest_points)',
			'20,000 GP',
			'5,000 [Agility](http://oldschoolrunescape.wikia.com/wiki/Agility) XP',
			'5,000 [Slayer](http://oldschoolrunescape.wikia.com/wiki/Slayer) XP',
			'5,000 [Hitpoints](http://oldschoolrunescape.wikia.com/wiki/Hitpoints) XP',
			'Enhanced rewards from [Managing Miscellania](http://oldschoolrunescape.wikia.com/wiki/Managing_Miscellania)'
		],
		requirements: [
			'40 [Agility](http://oldschoolrunescape.wikia.com/wiki/Agility) (or 35 boosted with a [summer pie](http://oldschoolrunescape.wikia.com/wiki/Summer_pie). Note: You will have to pass 4 obstacles; if you are boosting with a summer pie, you will need multiple of them.)',
			'40 [Slayer](http://oldschoolrunescape.wikia.com/wiki/Slayer) ',
			'[Throne of Miscellania](http://oldschoolrunescape.wikia.com/wiki/Throne_of_Miscellania)'
		],
		trivia: [
			"If the player asks the guard in [Miscellania](http://oldschoolrunescape.wikia.com/wiki/Miscellania) if he or she can go down the dungeon before he or she gets permission to go down there, the guard will say \"You're the regent? Well I didn't vote for you!\" This is a reference to [Monty Python and the Holy Grail](http://en.wikipedia.org/wiki/Monty_Python_and_the_Holy_Grail).",
			"The examine text near the lumberjack is \"He's a lumberjack and he's okay.\", another reference to Monty Python.",
			'If the player switches his or her gender between [Throne of Miscellania](http://oldschoolrunescape.wikia.com/wiki/Throne_of_Miscellania) and this quest, various humorous lines such as "Weren\'t you a man when we last met?" are said throughout the quest.',
			'"Those Meddling Kids" may be a reference to [Scooby-Doo](http://en.wikipedia.org/wiki/Scooby-Doo), in which the antagonist would almost always say "I would\'ve gotten away with it too, if it weren\'t for those meddling kids."',
			'Another Scooby-Doo reference happens later on in the quest when one of the children say "And we would have gotten away with it too, if it wasn\'t for that giant snake."'
		],
		freeToPlay: !1
	},
	SHIELDOFARRAV = {
		thumbnail: 'https://vignette.wikia.nocookie.net/2007scape/images/0/06/Shield_of_Arrav.png/revision/latest/scale-to-width-down/300?cb=20170212061144',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Shield_of_Arrav',
		name: 'Shield of Arrav',
		questType: 'Normal',
		length: 'Medium',
		difficulty: 'Novice',
		description: 'Varrockian literature tells of a valuable shield, stolen long ago from the museum of Varrock, by a gang of professional thieves. See if you can track down this shield and return it to the museum. You will need a friend to help you complete this quest.',
		startPoint: 'Go to [Miscellania](http://oldschoolrunescape.wikia.com/wiki/Miscellania) and speak to [Advisor Ghrim](http://oldschoolrunescape.wikia.com/wiki/Advisor_Ghrim) in the castle.',
		rewards: ['1 [Quest point](http://oldschoolrunescape.wikia.com/wiki/Quest_points)', '600 GP'],
		requirements: ['20 GP'],
		trivia: [
			'If a player cannot find someone to trade the certificates with, they cannot finish the quest.',
			'If a Phoenix Gang member tries to talk to Katrine, she spits on them and does not allow them to join the gang.',
			'A Black Arm Gang member can enter the Phoenix Gang Weapon Storage with a key from a Phoenix Gang member.',
			'Phoenix crossbows can be obtained by Phoenix gang members by going into the weapon store and telekinetic grabbing them. However, the crossbows must be traded to a Black Arm gang member in order to gain trust to Katrine.'
		],
		freeToPlay: !1
	},
	VAMPIRESLAYER = {
		thumbnail: 'https://vignette.wikia.nocookie.net/2007scape/images/2/2f/Vampire_Slayer.png/revision/latest/scale-to-width-down/300?cb=20160613011855',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Vampire_Slayer',
		name: 'Vampire Slayer',
		questType: 'Normal',
		length: 'Short',
		difficulty: 'Novice',
		description: 'The people of Draynor Village live in constant terror. Their numbers are dwindling, all due to the foul creature lurking in the manor to the north known as a vampire.',
		startPoint: 'Go to [Miscellania](http://oldschoolrunescape.wikia.com/wiki/Miscellania) and speak to [Advisor Ghrim](http://oldschoolrunescape.wikia.com/wiki/Advisor_Ghrim) in the castle.',
		rewards: ['3 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)', '4825 Attack XP'],
		requirements: ['Hammer', 'Beer', 'Garlic'],
		trivia: ['None'],
		freeToPlay: !1
	},
	BONEVOYAGE = {
		thumbnail: 'https://vignette.wikia.nocookie.net/2007scape/images/2/25/Bone_Voyage.png/revision/latest/scale-to-width-down/300?cb=20170908030039',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Bone_Voyage',
		name: 'Bone Voyage',
		questType: 'Normal',
		length: 'Short',
		difficulty: 'Intermediate',
		description:
      'Curator Haig Halen needs your help to finish the construction of a barge fit to take the Varrock museum crew to an unexplored landmass to the east. There have been many attempts to reach the island, but none were successful. This quest will have you venturing across Gielinor, aiding the Varrock museum and making the success of the voyage a possibility.',
		startPoint: 'Go to [Miscellania](http://oldschoolrunescape.wikia.com/wiki/Miscellania) and speak to [Advisor Ghrim](http://oldschoolrunescape.wikia.com/wiki/Advisor_Ghrim) in the castle.',
		rewards: ['1 [Quest point](http://oldschoolrunescape.wikia.com/wiki/Quest_points)', 'Access to [Fossil Island](http://oldschoolrunescape.wikia.com/wiki/Fossil_Island)'],
		requirements: ['100 Kudos', '[The Dig Site](http://oldschoolrunescape.wikia.com/wiki/The_Dig_Site)', 'Visited Zeah before'],
		trivia: [
			'The name of the quest is a pun on the French bon voyage, used to wish others a safe journey, and bones, since the destination is Fossil Island. The pun made its first appearance in an update news post on 10 April 2006 with the release of Rag and Bone Man.',
			'The term "Feature Creep" used to describe the second flawed design, refers to a common anti-pattern in software design, where unnecessary features are added to the system. In real life this often results in the failure of the system.'
		],
		freeToPlay: !1
	},
	THEFEUD = {
		thumbnail: 'https://vignette.wikia.nocookie.net/2007scape/images/4/4e/The_Feud.png/revision/latest/scale-to-width-down/300?cb=20170211025903',
		url: 'http://oldschoolrunescape.wikia.com/wiki/The_Feud',
		name: 'The Feud',
		questType: 'Normal',
		length: 'Medium',
		difficulty: 'Intermediate',
		description:
      "Ali Morrisane - RuneScape's self proclaimed 'greatest merchant' - is having difficulties. He is selling things at such a rate that he cannot keep his market stall in stock. Word has it that he is on the lookout for someone; someone who can recruit some help from his home town Pollnivneach - a somewhat anarchic place, south of the Shantay pass.",
		startPoint: 'Go to [Miscellania](http://oldschoolrunescape.wikia.com/wiki/Miscellania) and speak to [Advisor Ghrim](http://oldschoolrunescape.wikia.com/wiki/Advisor_Ghrim) in the castle.',
		rewards: ['1 [Quest point](http://oldschoolrunescape.wikia.com/wiki/Quest_points)', '15,000 Thieving XP', '500 GP', '[Rogue Trader](http://oldschoolrunescape.wikia.com/wiki/Rogue_Trader) minigame'],
		requirements: ['30 Thieving'],
		trivia: [
			"The combination to the mayor's safe is the first 6 terms of the Fibonacci sequence.",
			'Even though the bandit champion wields a steel scimitar, he will drop an adamant scimitar.',
			'If you decide to go back to the urchin and pay him, you can ask him about various aspects of Pollnivneach, including the gangs, and the town itself.',
			'When you talk to Ali the Barman about Traitorous Ali, you discover there are no toilets in Gielinor.',
			'While completing the quest, your character will realise that the main reason Ali Morrisane sent you to Pollnivneach was so that you would buy a desert disguise from him as well as the camels and hot sauce, thus proving that Ali Morrisane is, in fact, the greatest merchant in all of RuneScape.',
			'Upon completion of the quest Ali Morrisane refers to his nephew as "Baba", making a reference to Ali Baba and the Forty Thieves.',
			'After talking to the Ali the mayor about the last events, if you go and talk to Ali the bar man, you can tell that the beer was poisoned and he will thank you for not ruining his reputation and give you a beer.'
		],
		freeToPlay: !1
	},
	WITCHSPOTION = {
		thumbnail: 'https://vignette.wikia.nocookie.net/2007scape/images/1/17/Witch%27s_Potion.png/revision/latest/scale-to-width-down/300',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Witch%27s_Potion',
		name: "Witch's Potion",
		questType: 'Normal',
		length: 'Short',
		difficulty: 'Novice',
		description: 'Become one with your darker side. Tap into your hidden depths of magical potential by making a potion with the help of Hetty the Rimmington witch.',
		startPoint: 'Go to [Miscellania](http://oldschoolrunescape.wikia.com/wiki/Miscellania) and speak to [Advisor Ghrim](http://oldschoolrunescape.wikia.com/wiki/Advisor_Ghrim) in the castle.',
		rewards: ['1 [Quest point](http://oldschoolrunescape.wikia.com/wiki/Quest_points)', '325 Magic XP'],
		requirements: ['Burnt meat', 'Eye of newt', 'Onion', "Rat's tail"],
		trivia: ['None'],
		freeToPlay: !1
	},
	DIGSITE = {
		thumbnail: 'https://vignette.wikia.nocookie.net/2007scape/images/9/96/The_Digsite.png/revision/latest/scale-to-width-down/300',
		url: 'http://oldschoolrunescape.wikia.com/wiki/The_Dig_Site',
		name: 'The Dig Site',
		questType: 'Normal',
		length: 'Medium',
		difficulty: 'Intermediate',
		description:
      "Feeling uneducated? Desperate for buried treasure? \"There's gold in them there hills\" (well stream actually) as well as many other items that can be found at the digsite. Join the students in their attempt to be a qualified archaeologist, and become experienced in making the earth move! Have you got what it takes to unearth the hidden altar to one of RuneScape's lesser-known Gods?",
		startPoint: 'Go to [Miscellania](http://oldschoolrunescape.wikia.com/wiki/Miscellania) and speak to [Advisor Ghrim](http://oldschoolrunescape.wikia.com/wiki/Advisor_Ghrim) in the castle.',
		rewards: ['2 [Quest points](http://oldschoolrunescape.wikia.com/wiki/Quest_points)', '15,300 Mining XP', '2,000 Herblore XP', '2 Gold Bars'],
		requirements: ['10 Agility', '10 Herblore', '25 Thieving'],
		trivia: ['The altar room under the digsite is the Altar of Zaros where, in RuneScape 3, you can switch to Ancient Curses after completing The Temple at Senntisten.'],
		freeToPlay: !1
	},
	RFD = {
		thumbnail: 'https://vignette4.wikia.nocookie.net/2007scape/images/7/7a/Olaf%27s_Quest.png/revision/latest/scale-to-width-down/300?cb=20170212212758',
		url: 'http://oldschoolrunescape.wikia.com/wiki/Recipe_for_Disaster',
		name: 'Recipe for Disaster',
		questType: 'Normal',
		length: 'Short',
		difficulty: 'Special',
		description:
      "You have protected all 8 members of the council, but your troubles with the Culinaromancer aren't over yet! He has teleported back to his own dimension, where he'll be ready to cause more trouble. You must defeat him for good! Please note that all prayer will not be allowed in the dimension. You also won't be able to go back and recover your items when you die. You can however teleport from the dimension using an ectophial should you run out of food.",
		startPoint: "After you finish the eight subquests, a white portal will appear in the dining room. Enter it when you're ready to fight.",
		rewards: ['1 Quest Point', '10,000 Cooking XP', '10,000 Agility XP', 'Culinaromancers Chest'],
		requirements: ['[Click here](http://oldschoolrunescape.wikia.com/wiki/Recipe_for_Disaster)'],
		trivia: [
			'When the player is informed of the universe, he exclaims, "Not the universe! That\'s where I keep all my stuff." This is a reference to the animated comedy series [Futurama](http://en.wikipedia.org/wiki/Futurama).',
			'Originally, there was yet another subquest to complete involving [Osman](http://oldschoolrunescape.wikia.com/wiki/Osman), however, due to delays in this subquest, it was not released.',
			"The three monkeys during [Awowogei](http://oldschoolrunescape.wikia.com/wiki/Awowogei)'s part is a reference to the [three wise monkeys](http://en.wikipedia.org/wiki/Three_wise_monkeys) (さんびきのさる sanbikinosaru), who see no evil, hear no evil, and speak no evil.",
			'Before the release of [Grim Tales](http://oldschoolrunescape.wikia.com/wiki/Grim_Tales), this quest had the highest requirement, with 70 [Cooking](http://oldschoolrunescape.wikia.com/wiki/Cooking).',
			"Culinomancer shouts \"I'LL BE BACK!\" after the player has set free all the guests. This is a reference to Arnold Schwarzenegger's famous catch phrase."
		],
		freeToPlay: !1
	};

function importAllImages(obj) {
	const images = {};
	obj.keys().forEach((item) => {
		images[item.replace('./', '')] = obj(item);
	});
	return images;
}

const images = importAllImages(
	require.context('./img/gear/', false, /\.(png|jpe?g)$/)
);

const products = [
	{
		category: 'guitar',
		id: 1,
		name: 'Fender Player Series Strat MN BCR',
		price: 689,
		availability: true,
		imgSmall: images['player-strat-small.jpeg'],
		imgLarge: images['player-strat-large.jpeg'],
		description:
			'The inspiring sound of a Stratocaster is one of the foundations of Fender.\n\nFeaturing this classic sound—bell-like high end, punchy mids and robust low end, combined with crystal-clear articulation—the Player Stratocaster is packed with authentic Fender feel and style. It’s ready to serve your musical vision, it’s versatile enough to handle any style of music and it’s the perfect platform for creating your own sound.',
	},
	{
		category: 'guitar',
		id: 2,
		name: "Fender Squier Paranormal Jazz Bass '54 MN White Blonde",
		price: 600,
		availability: false,
		imgSmall: images['paranormal-small.jpeg'],
		imgLarge: images['paranormal-large.jpg'],
		description:
			'The Paranormal Jazz Bass® ’54 turns fiction into reality, combining the easy playability and tonal versatility of the J Bass® with the classic looks of its older sibling, the Precision Bass® (around 1954, the P Bass® transitioned from a slab body to a contoured body).\n\nThis bass is easy to play thanks to its “C”-shaped neck profile and narrow 1.5” nut width and offers out-of-this-world tone courtesy of its dual Fender-Designed alnico single-coil pickups. Further refinements include a vintage-style bridge and tuning machines, dual concentric volume and tone controls, and a sprawling ’50s-style pickguard that transports the Jazz Bass back in time.',
	},
	{
		category: 'guitar',
		id: 3,
		name: 'Fender AM Pro II Strat MN OWT',
		price: 1769,
		availability: true,
		imgSmall: images['pro-strat-small.jpeg'],
		imgLarge: images['pro-strat-large.jpeg'],
		description:
			'The American Professional II Stratocaster® draws from more than sixty years of innovation, inspiration and evolution to meet the demands of today’s working player.\n\nOur popular Deep “C” neck now sports smooth rolled fingerboard edges, a “Super-Natural” satin finish and a newly sculpted neck heel for a supremely comfortable feel and easy access to the upper register. New V-Mod II Stratocaster single-coil pickups are more articulate than ever while retaining bell-like chime and warmth. An upgraded 2-point tremolo with a cold-rolled steel block increases sustain, clarity and high-end sparkle.<br><br>The American Pro II Stratocaster delivers instant familiarity and sonic versatility you’ll feel and hear right away, with broad ranging improvements that add up to nothing less than a new standard for professional instruments.',
	},
	{
		category: 'guitar',
		id: 4,
		name: 'Strandberg Sälen Jazz NX Burgundy',
		price: 2444,
		availability: false,
		imgSmall: images['strandberg-small.jpeg'],
		imgLarge: images['strandberg-large.jpeg'],
		description:
			'The Sälen NX Jazz takes a whole new direction – both visually and sonically – with chambered Mahogany body capped with solid Maple top and Mahogany veneer, Mahogany neck with Rosewood fretboard, F-hole, and a pair of the new .strandberg* MF Classic humbuckers.\n\nOne of the most versatile .strandberg* guitar models ever with its unmatched ability to explore various shades of clean and low-to-medium gain sounds, the Sälen NX Jazz can also bark and roar like a true rock-and-roll machine in high gain settings. Hyper responsive to your picking attack and touch, the Sälen NX Jazz covers a wide spectrum of classic and modern electric guitar sounds to suit a wealth of playing styles and musical genres.',
	},
	{
		category: 'guitar',
		id: 5,
		name: 'Gibson Les Paul Custom EB GH',
		price: 4177,
		availability: true,
		imgSmall: images['les-paul-small.jpeg'],
		imgLarge: images['les-paul-large.jpeg'],
		description:
			"As the flagship model from Gibson Custom Shop, the Les Paul Custom lives up to the high standards set by its 1950s archetype while evolving to a level of tone and performance more suited to today's musical demands.\n\nBeneath the layers of its 'tuxedo' appointments lies the crisp, edgy voice of a matched 490/498 humbucker set, a solid Ebony fingerboard, a long neck tenon for maximum sustain and a two-piece maple top over a solid mahogany body which adds the perfect amount of sonic bite to everything from jazz to hard rock. It sounds as good as it looks, and it looks as good as it sounds!",
	},
	{
		category: 'guitar',
		id: 6,
		name: 'Gibson SG Standard Reissue Cherry',
		price: 3499,
		availability: true,
		imgSmall: images['sg-small.jpeg'],
		imgLarge: images['sg-large.jpeg'],
		description:
			"A 1960s SG has been the favorite of some of the most iconic guitarists ever...Angus Young, Tony Iommi, Robby Krieger, George Harrison, Dickey Betts, Gary Rossington, and Eric Clapton, to name a few.\n\nThe SG's devilish points and curves, blistering humbucker tone and fast-playing neck help to make it one of the most coveted and revered 1960s Gibson models. This Custom Shop Historic Reissue SG continues the legendary magic of the originals with all solid woods, historic hide-glue construction methods, the finest vintage replica parts and materials available and the instantly-recognizable, powerful tone of pure rock 'n roll.",
	},
	{
		category: 'amplifier',
		id: 7,
		name: 'Fender 64 Custom Deluxe Reverb',
		price: 2699,
		availability: true,
		imgSmall: images['deluxe-reverb-small.jpeg'],
		imgLarge: images['deluxe-reverb-large.jpeg'],
		description:
			"Played on countless hit recordings, the mid-'60s Deluxe Reverb is a timeless Fender classic and one of the most indispensable workhorse guitar amps ever made.\n\nModerately powered and producing a full, snappy and crystalline tone, the pedal-friendly '64 Custom Deluxe Reverb carries on that legacy with incredible vintage-style tones, thanks to its modified all-tube hand-wired AB763 circuitry. Featuring Bright and Normal channels, tube-driven spring reverb and tremolo on both channels, and 20 watts of output power, this is the go-to amp for warm, clean tones and moderate breakup.",
	},
	{
		category: 'amplifier',
		id: 8,
		name: 'Fender Blues Junior Lacquered Tweed',
		price: 699,
		availability: false,
		imgSmall: images['blues-junior-small.jpeg'],
		imgLarge: images['blues-junior-large.jpeg'],
		description:
			"The Blues Jr. Lacquered Tweed takes Fender's 15W gem and gives it the true vintage treatment with a lacquered tweed covering and a vintage-voiced 12\" Jensen speaker.\n\nIts golden tones are generated by an all-tube signal path using a pair of EL84 output tubes and 3 - 12AX7 preamp tubes. Add renowned Fender reverb, flexible controls, FAT switch for mid boost, and you're in business. And just look at that chrome panel, that tweed finish with vintage-style brown and gold grille cloth, and those vintage pointer knobs!",
	},
	{
		category: 'amplifier',
		id: 9,
		name: 'Tone King Imperial Mk II BR',
		price: 3066,
		availability: true,
		imgSmall: images['tone-king-small.jpeg'],
		imgLarge: images['tone-king-large.jpeg'],
		description:
			'Tone King is proud to offer the Imperial MKII.\n\nFrom a spanky blackface-style voice to ‘50s-era tweed grit, you’ll find all of the most iconic American tube tones residing in this 1 x 12”, 20-watt combo. And with modern appointments, such as an onboard Ironman II power attenuator, and tube-driven effects, the Imperial MKII is the perfect old-school platform for modern players.',
	},
	{
		category: 'amplifier',
		id: 10,
		name: 'Orange Rocker 15',
		price: 789,
		availability: false,
		imgSmall: images['orange-small.jpeg'],
		imgLarge: images['orange-large.jpeg'],
		description:
			'Capable of 0.5, 1, 7 or 15 Watts of output, the Rocker 15 is an extremely portable combo that moves seamlessly from the home to the studio to the stage. Finally, a small, two channel, bedroom-friendly all-valve amp that you can legitimately gig!\n\nWith the Rocker 15 set wide open, smaller venues are comfortably taken care of despite the amp’s miniature footprint. Thanks to a custom Voice of the World Gold Label speaker and beefy transformers, the Rocker 15 has a remarkably potent delivery which takes full advantage of its EL84 output section. Even when scaling back the power, the amp’s tone stays fat and full, oozing warm valve compression and saturation without disturbing the neighbours.',
	},
	{
		category: 'amplifier',
		id: 11,
		name: 'Marshall 1959 HW',
		price: 1859,
		availability: true,
		imgSmall: images['marshall-small.jpeg'],
		imgLarge: images['marshall-large.jpeg'],
		description:
			"When guitarists talk about the sweet Plexi tones of '60s rock, they're talking about the same tones you'll get from the Marshall 1959HW tube guitar amplifier head.\n\nThe all-tube signal path of the 1959HW is ready to roar with a unique and responsive character that begs to be played. This 100-watt legend is handwired by the masters at Marshall, for optimum tone and incredibly reliable performance. So just plug in, hook up your big speaker stack, and start another rock revolution with the Marshall 1959HW tube guitar amplifier head!",
	},
	{
		category: 'amplifier',
		id: 12,
		name: 'Friedman Runt-20 Head',
		price: 1535,
		availability: false,
		imgSmall: images['friedman-small.jpeg'],
		imgLarge: images['friedman-large.jpeg'],
		description:
			'The Runt delivers the tight bottom end and midrange that is typically only found in much higher-wattage amps by utilizing custom transformers and the cleanest signal path possible.\n\nThe Runt is ideal for many styles of music from blues to classic rock and heavy metal by merely adjusting the gain and master controls.',
	},
	{
		category: 'effect',
		id: 13,
		name: 'Vemuram Jan Ray Overdrive',
		price: 399,
		availability: true,
		imgSmall: images['vemuram-small.jpeg'],
		imgLarge: images['vemuram-large.jpeg'],
		description:
			'The Jan Ray was designed to recreate the punchy clear tone of the Blackface Fender amps from the 60\'s.\n\nSo-called the "Fender Magic 6" sound. An easy to handle overdrive keeping the characteristics of the guitar with great sustain without any unnatural compression.',
	},
	{
		category: 'effect',
		id: 14,
		name: 'JHS Pedals The Bonsai',
		price: 277,
		availability: false,
		imgSmall: images['bonsai-small.jpeg'],
		imgLarge: images['bonsai-large.jpeg'],
		description:
			'Following in the steps of our Muffuletta (released 2015), the Bonsai utilizes a simple rotary knob to switch through nine classic, vintage, rare, or hard to find variations of the Screamer.\n\nCreating the Bonsai became an archeological dig of sorts that sent us deep into the history of this circuit by examining dozens of versions, variations and replications. At the end of it all, Josh chose nine of his personal and favorite units and we painstakingly replicated every nuance and aspect of each pedal.',
	},
	{
		category: 'effect',
		id: 15,
		name: 'Walrus Audio ACS 1 Amp+Cab Simulator',
		price: 409,
		availability: true,
		imgSmall: images['walrus-small.jpeg'],
		imgLarge: images['walrus-large.jpeg'],
		description:
			"The [ACS1]™ is an amplifier and speaker cab simulator delivering the sound and feel of world-class amplifiers, complimentary speaker cabinets, and controllable room size.\n\nWith the ACS1, players have expansive options to deliver their tone whether it's on stage, in the studio, or practicing at home. Simple controls, stereo in and out, onboard presets, and MIDI support make the ACS1 an immeasurable tool in a guitarist's arsenal.",
	},
	{
		category: 'effect',
		id: 16,
		name: 'Universal Audio UAFX Golden Reverberator',
		price: 368,
		availability: true,
		imgSmall: images['reverberator-small.jpeg'],
		imgLarge: images['reverberator-large.jpeg'],
		description:
			'Harnessing more than 20 years of reverb modeling expertise, UAFX Golden Reverberator puts a trio of iconic reverbs right at your feet.\n\nThe tube-driven spring reverb of classic ’60s guitar amps. The dense and haunting sound of ’50s studio plate reverbs. The endless algorithmic wonder of early digital reverb hardware. Built upon powerful UAFX dual‑engine processing and unprecedented levels of sonic authenticity, Golden Reverberator is a flagship, no‑compromise reverb unit, built to inspire you for decades.',
	},
	{
		category: 'effect',
		id: 17,
		name: 'Strymon Bluesky',
		price: 299,
		availability: true,
		imgSmall: images['strymon-bluesky-small.jpeg'],
		imgLarge: images['strymon-bluesky-large.jpeg'],
		description:
			"The Strymon blueSky Reverberator has nearly every reverb sound you'll ever need for the stage and studio in pedal form: lush studio plates, subtle room ambience, and spanky tube-amp springs, each with real-time controls for instant tweaks.\n\nStandard decay, damping, and mix controls will have you dialing in your favorite reverb sounds in no time. And for more advanced textures, Modulation mode lets you color your reverbs with subtle tonal movement, and Shimmer mode gives endless sustain to your chords and leads for big-time drama.",
	},
	{
		category: 'effect',
		id: 18,
		name: 'Dunlop Crybaby CB-535Q',
		price: 185,
		availability: false,
		imgSmall: images['crybaby-small.jpeg'],
		imgLarge: images['crybaby-large.jpeg'],
		description:
			"This is the Swiss Army knife of wah pedals.\n\nIts six-position Range Selector control allows you to choose from six different frequency ranges, each position based on the unique tonal characteristics of our most prized wah specimens. The Variable Q control allows you to take the 535Q's response from narrow and sharp to broad and subtle with the twist of a control. Once you've got your sound, make sure it gets heard with the switchable boost—adjustable up to +18dB—that can create endless sustain on any note.",
	},
];

export default products;

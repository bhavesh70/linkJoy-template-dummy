const path = require("path");
const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const passport = require("passport");

if (process.env.NODE_ENV !== "development") {
	dotenv.config({ path: "./config.env" });
}

const app = express();

app.set("view engine", "ejs");
app.set("views", "resources/views");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));

app.use(
	session({
		key: "user_id",
		secret: "keyboard cat",
		resave: false,
		saveUninitialized: true,
		cookie: { secure: false },
	})
);

app.use(passport.initialize());
app.use(passport.session());

//~ ////////////////////////////////////////////////////
//~ ROUTES
//~ ////////////////////////////////////////////////////

// app.use((req, res, next) => {
// 	console.log({ sesssion: req.session, cookie: req.cookies });
// 	if (req.session && req.session.user && req.cookies.user_id) {
// 		res.render("dashboard", { name: req.session.user.username });
// 		return next();
// 	}
// 	else {

// 	}
// });

const pagebuilderThemes = (key, name, opacity = null) => {
	const opacity_style = opacity !== 10 ? "opacity:." + opacity + ";" : "";

	if (name && name.startsWith("http")) {
		return `<style>.section-init:before { ${opacity_style} background-image: url(${name}); position: fixed; content: " "; display: block; top: 0px; left: 0px; right: 0px; bottom: 0px; z-index: -10; background-size: cover; overflow-y: auto; } </style>`;
	} else if (
		(name && name.substring(2, 3) === "jpg") ||
		(name &&
			name.substring(3, 3) === "jpg" &&
			name.substring(0, 4) === "http")
	) {
		return `<style>.section-init:before{ background-image:url(/themes/ ${name}); position: fixed; content: " ";display: block;top: 0px;left: 0px;right: 0px;bottom: 0px;z-index: -10;background-size: cover;overflow-y: auto;}</style>';`;
	} else {
		return `<style>.section-init{ background: ${name}}</style>`;
	}
};

app.get("/", (req, res) => {
	res.render("page-builder", {
		pageTitle: "Page Builder",
		path: "/page-builder",
		user: null,
		content_age_limit: 1,
		pagebuilderThemes,
		og_tags: null,
		favicon: null,
		site_title: "Dummy project",
		is_publish: true,
		branding: 1,
		facebook_pixel_tracking_id: "123",
		google_analytics_tracking_id: "UA-183639594-1",
		is_theme: false,
		is_font_family: null,
		is_background: false,
		theme_selected: null,
		is_publish: false,
		is_theme: false,
		is_font_family: null,
		is_background: false,
		button_style: {
			background: null,
			fontColor: null,
			class: "fillrounded",
		},
		opacity: 20,
		tracking_list: [
			{
				position: "Head",
				type: "Google Analytics",
				snippet_code: "UA-183639594-1",
			},
			{
				position: "Head",
				type: "Facebook Pixel",
				snippet_code: "123",
			},
		],
		button_style: {
			background: null,
			fontColor: null,
			class: "fillrounded",
		},
		profile: {
			position: 1,
			profile_pic:
				"https://linkjoy-dev.s3.ap-south-1.amazonaws.com/developement/publicpagebuilder/284c741e05d-7c39-499e-b092-1359321cdc42",
			module_type: "profile",
			layout_type: 2,
			is_hidden: false,
			is_scheduled: false,
			scheduled_start_date: null,
			scheduled_end_date: null,
			module_data: {
				brand_title:
					'<p class="ql-align-center" style="background-color:transparent!important"><strong style="color:rgb(92, 0, 0); background-color:transparent!important">#WeAreRare <span class="ql-cursor" style="background-color:transparent!important">\ufeff</span></strong></p> ',
				button_title: null,
				button_url: null,
			},
		},
		// pagebuilder_data: [
		// 	{
		// 		id: 0,
		// 		position: 1,
		// 		module_type: "subtitle_text",
		// 		name: "Subtitle & Text",
		// 		title: '<p style="background-color:transparent!important" class="ql-align-center"><strong style="color:rgb(92, 0, 0); background-color:transparent!important">“Being&nbsp;rare&nbsp;is about being comfortable with yourself.</strong></p><p style="background-color:transparent!important" class="ql-align-center"><strong style="color:rgb(92, 0, 0); background-color:transparent!important"> I’ve stopped trying to be perfect.</strong></p><p class="ql-align-center" style="background-color:transparent!important"><strong style="color:rgb(92, 0, 0); background-color:transparent!important"> I just want to be me.”</strong></p><p style="background-color:transparent!important" class="ql-align-center"><span style="color:rgb(92, 0, 0); background-color:transparent!important">💋</span></p><p class="ql-align-center" style="background-color:transparent!important"><strong style="color:rgb(92, 0, 0); background-color:transparent!important">SELENA GOMEZ</strong></p><p style="background-color:transparent!important"><br></p> ',
		// 		icon: "button-and-text-outline",
		// 		layout_type: null,
		// 		is_hidden: false,
		// 		is_scheduled: false,
		// 		scheduled_start_date: null,
		// 		scheduled_end_date: {
		// 			start: "3:31 PM",
		// 			end: "3:36 PM",
		// 			timezone: "Asia/Calcutta",
		// 		},
		// 		module_data: {
		// 			text: null,
		// 			subtitle:
		// 				'<p style="background-color:transparent!important" class="ql-align-center"><strong style="color:rgb(92, 0, 0); background-color:transparent!important">“Being&nbsp;rare&nbsp;is about being comfortable with yourself.</strong></p><p style="background-color:transparent!important" class="ql-align-center"><strong style="color:rgb(92, 0, 0); background-color:transparent!important"> I’ve stopped trying to be perfect.</strong></p><p class="ql-align-center" style="background-color:transparent!important"><strong style="color:rgb(92, 0, 0); background-color:transparent!important"> I just want to be me.”</strong></p><p style="background-color:transparent!important" class="ql-align-center"><span style="color:rgb(92, 0, 0); background-color:transparent!important">💋</span></p><p class="ql-align-center" style="background-color:transparent!important"><strong style="color:rgb(92, 0, 0); background-color:transparent!important">SELENA GOMEZ</strong></p><p style="background-color:transparent!important"><br></p> ',
		// 		},
		// 	},
		// 	{
		// 		id: 7,
		// 		position: 1,
		// 		module_type: "delimiter",
		// 		title: null,
		// 		name: "Delimiter",
		// 		icon: "code-slash-outline",
		// 		layout_type: "13",
		// 		is_hidden: false,
		// 		is_scheduled: false,
		// 		scheduled_start_date: null,
		// 		scheduled_end_date: {
		// 			start: "3:51 PM",
		// 			end: "3:56 PM",
		// 			timezone: "Asia/Calcutta",
		// 		},
		// 		module_data: {
		// 			is_type: false,
		// 			is_color: "#7F2649",
		// 			is_width: false,
		// 			is_edge: false,
		// 		},
		// 	},
		// 	{
		// 		id: 8,
		// 		position: 1,
		// 		module_type: "video_player",
		// 		title: '<p style="background-color:transparent!important"><strong style="background-color:transparent!important; color:rgb(127, 38, 73)">Rare Beauty is breaking down unrealistic standards of perfection. </strong></p><p style="background-color:transparent!important"><br></p><p style="background-color:transparent!important"><br></p>',
		// 		name: "Video",
		// 		icon: "you-tube-videos-outline",
		// 		is_hidden: false,
		// 		is_scheduled: false,
		// 		scheduled_start_date: null,
		// 		scheduled_end_date: {
		// 			start: "3:26 PM",
		// 			end: "3:31 PM",
		// 			timezone: "Asia/Calcutta",
		// 		},
		// 		module_data: {
		// 			title: '<p style="background-color:transparent!important"><strong style="background-color:transparent!important; color:rgb(127, 38, 73)">Rare Beauty is breaking down unrealistic standards of perfection. </strong></p><p style="background-color:transparent!important"><br></p><p style="background-color:transparent!important"><br></p>',
		// 			url: "https://www.youtube.com/watch?v=8vec_b2Bs2I",
		// 			embeddedUrl: "https://www.youtube.com/embed/8vec_b2Bs2I",
		// 			type: "youTube",
		// 			poster: null,
		// 			width: 100,
		// 			height: 315,
		// 			controls: false,
		// 			autoplay: false,
		// 		},
		// 	},
		// 	{
		// 		id: 6,
		// 		position: 5,
		// 		module_type: "social_links",
		// 		name: "Social Links",
		// 		icon: "social-links-outline",
		// 		title: null,
		// 		layout_type: 1,
		// 		is_hidden: false,
		// 		is_scheduled: false,
		// 		scheduled_start_date: null,
		// 		scheduled_end_date: {
		// 			start: "3:26 PM",
		// 			end: "3:31 PM",
		// 			timezone: "Asia/Calcutta",
		// 		},
		// 		module_data: {
		// 			0: {
		// 				name: "Instagram",
		// 				type: "instagram",
		// 				placeholder: "Instagram username",
		// 				link: "rarebeauty",
		// 				icon: "instagram-outline",
		// 			},
		// 			1: {
		// 				type: "facebook",
		// 				name: "Facebook",
		// 				placeholder: "Facebook username or page id",
		// 				link: "https://www.facebook.com/Rare-Beauty-102403614660064/?modal=admin_todo_tour",
		// 				icon: "facebook-outline",
		// 			},
		// 			2: {
		// 				name: "Twitter",
		// 				type: "twitter",
		// 				placeholder: "Twitter username",
		// 				link: "rarebeauty",
		// 				icon: "twitter-outline",
		// 			},
		// 			3: {
		// 				name: "Youtube",
		// 				type: "youtube",
		// 				placeholder: "Youtube channel url",
		// 				link: "https://www.youtube.com/channel/UCvOtsjwO04Seaep0J2clYEw",
		// 				icon: "youtube-outline",
		// 			},
		// 			4: {
		// 				name: "Linkedin",
		// 				type: "linkedin",
		// 				placeholder: "LinkedIn profile url",
		// 				link: null,
		// 				icon: "linkedin-outline",
		// 			},
		// 			5: {
		// 				name: "Pinterest",
		// 				type: "pinterest",
		// 				placeholder: "Pinterest username",
		// 				link: null,
		// 				icon: "pinterest-outline",
		// 			},
		// 			6: {
		// 				name: "Tumblr",
		// 				type: "tumblr",
		// 				placeholder: "Tumblr username",
		// 				link: null,
		// 				icon: "tumblr-outline",
		// 			},
		// 			7: {
		// 				name: "Patreon",
		// 				type: "patreon",
		// 				placeholder: "Patreon username",
		// 				link: null,
		// 				icon: "patreon-outline",
		// 			},
		// 			8: {
		// 				name: "VK",
		// 				type: "vk",
		// 				placeholder: "VK username or page id",
		// 				link: null,
		// 				icon: "vk-outline",
		// 			},
		// 			9: {
		// 				name: "Snapchat",
		// 				type: "snapchat",
		// 				placeholder: "Snapchat username",
		// 				link: null,
		// 				icon: "snapchat-outline",
		// 			},
		// 			10: {
		// 				name: "Telegram",
		// 				type: "telegram",
		// 				link: null,
		// 				icon: "telegram-outline",
		// 				placeholder: "Telegram username",
		// 			},
		// 			11: {
		// 				name: "Github",
		// 				type: "github",
		// 				placeholder: "Github username",
		// 				link: null,
		// 				icon: "github-outline",
		// 			},
		// 			12: {
		// 				name: "Whatsapp",
		// 				type: "whatsapp",
		// 				placeholder: "+1 6072068989",
		// 				textPlaceholder:
		// 					"Predefined text: e.g Give me further information about...",
		// 				link: null,
		// 				text: null,
		// 				icon: "whatsapp-outline",
		// 			},
		// 		},
		// 	},
		// ],
		pagebuilder: [
			{
				id: 0,
				position: 1,
				module_type: "subtitle_text",
				name: "Subtitle & Text",
				title: '<p style="background-color:transparent!important" class="ql-align-center"><strong style="color:rgb(92, 0, 0); background-color:transparent!important">“Being&nbsp;rare&nbsp;is about being comfortable with yourself.</strong></p><p style="background-color:transparent!important" class="ql-align-center"><strong style="color:rgb(92, 0, 0); background-color:transparent!important"> I’ve stopped trying to be perfect.</strong></p><p class="ql-align-center" style="background-color:transparent!important"><strong style="color:rgb(92, 0, 0); background-color:transparent!important"> I just want to be me.”</strong></p><p style="background-color:transparent!important" class="ql-align-center"><span style="color:rgb(92, 0, 0); background-color:transparent!important">💋</span></p><p class="ql-align-center" style="background-color:transparent!important"><strong style="color:rgb(92, 0, 0); background-color:transparent!important">SELENA GOMEZ</strong></p><p style="background-color:transparent!important"><br></p> ',
				icon: "button-and-text-outline",
				layout_type: null,
				is_hidden: false,
				is_scheduled: false,
				scheduled_start_date: null,
				scheduled_end_date: {
					start: "3:31 PM",
					end: "3:36 PM",
					timezone: "Asia/Calcutta",
				},
				module_data: {
					text: null,
					subtitle:
						'<p style="background-color:transparent!important" class="ql-align-center"><strong style="color:rgb(92, 0, 0); background-color:transparent!important">“Being&nbsp;rare&nbsp;is about being comfortable with yourself.</strong></p><p style="background-color:transparent!important" class="ql-align-center"><strong style="color:rgb(92, 0, 0); background-color:transparent!important"> I’ve stopped trying to be perfect.</strong></p><p class="ql-align-center" style="background-color:transparent!important"><strong style="color:rgb(92, 0, 0); background-color:transparent!important"> I just want to be me.”</strong></p><p style="background-color:transparent!important" class="ql-align-center"><span style="color:rgb(92, 0, 0); background-color:transparent!important">💋</span></p><p class="ql-align-center" style="background-color:transparent!important"><strong style="color:rgb(92, 0, 0); background-color:transparent!important">SELENA GOMEZ</strong></p><p style="background-color:transparent!important"><br></p> ',
				},
			},
			{
				id: 7,
				position: 1,
				module_type: "delimiter",
				title: null,
				name: "Delimiter",
				icon: "code-slash-outline",
				layout_type: "13",
				is_hidden: false,
				is_scheduled: false,
				scheduled_start_date: null,
				scheduled_end_date: {
					start: "3:51 PM",
					end: "3:56 PM",
					timezone: "Asia/Calcutta",
				},
				module_data: {
					is_type: false,
					is_color: "#7F2649",
					is_width: false,
					is_edge: false,
				},
			},
			{
				id: 8,
				position: 1,
				module_type: "video_player",
				title: '<p style="background-color:transparent!important"><strong style="background-color:transparent!important; color:rgb(127, 38, 73)">Rare Beauty is breaking down unrealistic standards of perfection. </strong></p><p style="background-color:transparent!important"><br></p><p style="background-color:transparent!important"><br></p>',
				name: "Video",
				icon: "you-tube-videos-outline",
				is_hidden: false,
				is_scheduled: false,
				scheduled_start_date: null,
				scheduled_end_date: {
					start: "3:26 PM",
					end: "3:31 PM",
					timezone: "Asia/Calcutta",
				},
				module_data: {
					title: '<p style="background-color:transparent!important"><strong style="background-color:transparent!important; color:rgb(127, 38, 73)">Rare Beauty is breaking down unrealistic standards of perfection. </strong></p><p style="background-color:transparent!important"><br></p><p style="background-color:transparent!important"><br></p>',
					url: "https://www.youtube.com/watch?v=8vec_b2Bs2I",
					embeddedUrl: "https://www.youtube.com/embed/8vec_b2Bs2I",
					type: "youTube",
					poster: null,
					width: 100,
					height: 315,
					controls: false,
					autoplay: false,
				},
			},
			{
				id: 6,
				position: 5,
				module_type: "social_links",
				name: "Social Links",
				icon: "social-links-outline",
				title: null,
				layout_type: 1,
				is_hidden: false,
				is_scheduled: false,
				scheduled_start_date: null,
				scheduled_end_date: {
					start: "3:26 PM",
					end: "3:31 PM",
					timezone: "Asia/Calcutta",
				},
				module_data: {
					0: {
						name: "Instagram",
						type: "instagram",
						placeholder: "Instagram username",
						link: "rarebeauty",
						icon: "instagram-outline",
					},
					1: {
						type: "facebook",
						name: "Facebook",
						placeholder: "Facebook username or page id",
						link: "https://www.facebook.com/Rare-Beauty-102403614660064/?modal=admin_todo_tour",
						icon: "facebook-outline",
					},
					2: {
						name: "Twitter",
						type: "twitter",
						placeholder: "Twitter username",
						link: "rarebeauty",
						icon: "twitter-outline",
					},
					3: {
						name: "Youtube",
						type: "youtube",
						placeholder: "Youtube channel url",
						link: "https://www.youtube.com/channel/UCvOtsjwO04Seaep0J2clYEw",
						icon: "youtube-outline",
					},
					4: {
						name: "Linkedin",
						type: "linkedin",
						placeholder: "LinkedIn profile url",
						link: null,
						icon: "linkedin-outline",
					},
					5: {
						name: "Pinterest",
						type: "pinterest",
						placeholder: "Pinterest username",
						link: null,
						icon: "pinterest-outline",
					},
					6: {
						name: "Tumblr",
						type: "tumblr",
						placeholder: "Tumblr username",
						link: null,
						icon: "tumblr-outline",
					},
					7: {
						name: "Patreon",
						type: "patreon",
						placeholder: "Patreon username",
						link: null,
						icon: "patreon-outline",
					},
					8: {
						name: "VK",
						type: "vk",
						placeholder: "VK username or page id",
						link: null,
						icon: "vk-outline",
					},
					9: {
						name: "Snapchat",
						type: "snapchat",
						placeholder: "Snapchat username",
						link: null,
						icon: "snapchat-outline",
					},
					10: {
						name: "Telegram",
						type: "telegram",
						link: null,
						icon: "telegram-outline",
						placeholder: "Telegram username",
					},
					11: {
						name: "Github",
						type: "github",
						placeholder: "Github username",
						link: null,
						icon: "github-outline",
					},
					12: {
						name: "Whatsapp",
						type: "whatsapp",
						placeholder: "+1 6072068989",
						textPlaceholder:
							"Predefined text: e.g Give me further information about...",
						link: null,
						text: null,
						icon: "whatsapp-outline",
					},
				},
			},
		],
	});
});

app.listen(5000, () => {
	console.log("App is running at port 5000");
});

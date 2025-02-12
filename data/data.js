const {
  pagebuilderThemes,
  blockHideOrShowWithSchedule,
  giveDeepLinkUrl,
  getValidUrl,
  stripTags,
  pagebuilderSocialLink,
} = require("../helperFile");

exports.data = {
  content_age_limit: 1,
  page_builder_id: 1234,
  getValidUrl,
  pagebuilderThemes,
  giveDeepLinkUrl,
  blockHideOrShowWithSchedule,
  stripTags,
  pagebuilderSocialLink,
  useragent: {
    isYaBrowser: false,
    isAuthoritative: true,
    isMobile: false,
    isMobileNative: false,
    isTablet: false,
    isiPad: false,
    isiPod: false,
    isiPhone: false,
    isiPhoneNative: false,
    isAndroid: false,
    isAndroidNative: false,
    isBlackberry: false,
    isOpera: false,
    isIE: false,
    isEdge: false,
    isIECompatibilityMode: false,
    isSafari: false,
    isFirefox: false,
    isWebkit: false,
    isChrome: true,
    isKonqueror: false,
    isOmniWeb: false,
    isSeaMonkey: false,
    isFlock: false,
    isAmaya: false,
    isPhantomJS: false,
    isEpiphany: false,
    isDesktop: true,
    isWindows: true,
    isLinux: false,
    isLinux64: false,
    isMac: false,
    isChromeOS: false,
    isBada: false,
    isSamsung: false,
    isRaspberry: false,
    isBot: false,
    isCurl: false,
    isAndroidTablet: false,
    isWinJs: false,
    isKindleFire: false,
    isSilk: false,
    isCaptive: false,
    isSmartTV: false,
    isUC: false,
    isFacebook: false,
    isAlamoFire: false,
    isElectron: false,
    silkAccelerated: false,
    browser: "Chrome",
    version: "122.0.0.0",
    os: "Windows 10.0",
    platform: "Microsoft Windows",
    geoIp: {},
    source:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
    isWechat: false,
  },

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
  is_background:
    "linear-gradient(0deg, #cecdc9ff 0%, #cecdc9ff 0%, #cecdc9ff 1%, #cecdc9ff 4%, #ffffffff 25%)",
  button_style: {
    background: "#000000",
    fontColor: "#eeeeee",
    class: "fillrounded",
  },
  opacity: 9,
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
  profile: {
    position: 1,
    profile_pic:
      "https://linkjoy-production.s3.us-west-2.amazonaws.com/developement/publicpagebuilder/132647984954c-1d39-4fe6-9031-5fd506f972cb",
    module_type: "profile",
    layout_type: 2,
    is_hidden: false,
    is_scheduled: false,
    scheduled_start_date: null,
    scheduled_end_date: null,
    module_data: {
      brand_title:
        '<p style="background-color:transparent!important"><strong style="background-color:transparent!important">Brave Church  </strong></p>',
      button_title:
        '<p style="background-color:transparent!important"><strong style="background-color:transparent!important">Welcome to Brave </strong></p>',
      button_url: "https://www.linkedin.com/in/jaimin-rathwa-b128bb241/",
    },
  },
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
      id: 8,
      position: 1,
      module_type: "video_player",
      title:
        '<p style="background-color:transparent!important"><strong style="background-color:transparent!important">THINK DIFFERENT (TALK ONLY<span class="ql-cursor" style="background-color:transparent!important">﻿﻿﻿﻿﻿﻿﻿﻿</span>) </strong></p><p style="background-color:transparent!important"><br></p>',
      name: "Video",
      icon: "you-tube-videos-outline",
      is_hidden: false,
      is_scheduled: false,
      scheduled_start_date: null,
      scheduled_end_date: {
        start: "5:41 PM",
        end: "5:46 PM",
        timezone: "Asia/Calcutta",
      },
      module_data: {
        title:
          '<p style="background-color:transparent!important"><strong style="background-color:transparent!important">THINK DIFFERENT (TALK ONLY<span class="ql-cursor" style="background-color:transparent!important">﻿﻿﻿﻿﻿﻿﻿﻿</span>) </strong></p><p style="background-color:transparent!important"><br></p>',
        url: "https://www.youtube.com/watch?v=HlGO4qY5bLo",
        embeddedUrl: "https://www.youtube.com/embed/HlGO4qY5bLo",
        type: "youTube",
        poster: null,
        width: 100,
        height: 315,
        controls: false,
        autoplay: false,
      },
      animate: "",
    },
    {
      id: 8,
      position: 1,
      module_type: "video_player",
      title:
        '<p style="background-color:transparent!important"><strong style="background-color:transparent!important">WORSHIP EXPERIENCE | FEBRUARY<span class="ql-cursor" style="background-color:transparent!important">﻿﻿﻿﻿﻿﻿﻿</span> 7 </strong></p>',
      name: "Video",
      icon: "you-tube-videos-outline",
      is_hidden: false,
      is_scheduled: false,
      scheduled_start_date: null,
      scheduled_end_date: {
        start: "5:50 PM",
        end: "5:55 PM",
        timezone: "Asia/Calcutta",
      },
      module_data: {
        title:
          '<p style="background-color:transparent!important"><strong style="background-color:transparent!important">WORSHIP EXPERIENCE | FEBRUARY<span class="ql-cursor" style="background-color:transparent!important">﻿﻿﻿﻿﻿﻿﻿</span> 7 </strong></p>',
        url: "https://www.youtube.com/watch?v=VYHBKCW-4do",
        embeddedUrl: "https://www.youtube.com/embed/VYHBKCW-4do",
        type: "youTube",
        poster: null,
        width: 100,
        height: 315,
        controls: false,
        autoplay: false,
      },
      animate: "",
    },
    {
      id: 8,
      position: 1,
      module_type: "video_player",
      title:
        '<p style="background-color:transparent!important"><strong style="background-color:transparent!important">FAMILY ROOM WORSHIP | SEEK WEEK EDITION<span class="ql-cursor" style="background-color:transparent!important">﻿﻿﻿﻿﻿﻿﻿﻿</span></strong></p>',
      name: "Video",
      icon: "you-tube-videos-outline",
      is_hidden: false,
      is_scheduled: false,
      scheduled_start_date: null,
      scheduled_end_date: {
        start: "6:15 PM",
        end: "6:20 PM",
        timezone: "Asia/Calcutta",
      },
      module_data: {
        title:
          '<p style="background-color:transparent!important"><strong style="background-color:transparent!important">FAMILY ROOM WORSHIP | SEEK WEEK EDITION<span class="ql-cursor" style="background-color:transparent!important">﻿﻿﻿﻿﻿﻿﻿﻿</span></strong></p>',
        url: "https://www.youtube.com/watch?v=xcV07M2rI_Q",
        embeddedUrl: "https://www.youtube.com/embed/xcV07M2rI_Q",
        type: "youTube",
        poster: null,
        width: 100,
        height: 315,
        controls: false,
        autoplay: false,
      },
      animate: "",
    },
    {
      id: 0,
      position: 1,
      module_type: "subtitle_text",
      name: "Subtitle & Text",
      title:
        '<h3 class="ql-align-center" style="background-color:transparent!important"><em style="background-color:transparent!important">Brave Groups are the heartbeat of our community</em></h3><p class="ql-align-center" style="background-color:transparent!important"><br></p>',
      icon: "button-and-text-outline",
      layout_type: null,
      is_hidden: false,
      is_scheduled: false,
      scheduled_start_date: null,
      scheduled_end_date: {
        start: "5:41 PM",
        end: "5:46 PM",
        timezone: "Asia/Calcutta",
      },
      module_data: {
        text: '<p class="ql-align-center" style="background-color:transparent!important">Brave Groups are a place to connect, grow and do life together in community. They are a place where friends become family.</p>',
        subtitle:
          '<h3 class="ql-align-center" style="background-color:transparent!important"><em style="background-color:transparent!important">Brave Groups are the heartbeat of our community</em></h3><p class="ql-align-center" style="background-color:transparent!important"><br></p>',
      },
    },
    {
      id: 1,
      position: 2,
      module_type: "button_text",
      name: "Button & Text",
      title:
        '<p style="background-color:transparent!important">👪 <strong style="background-color:transparent!important">Join A Brave  Group Today</strong></p>',
      btn_pic: null,
      layout_type: 1,
      icon: "button-and-text-outline",
      is_hidden: false,
      is_scheduled: false,
      scheduled_start_date: null,
      scheduled_end_date: {
        start: "5:41 PM",
        end: "5:46 PM",
        timezone: "Asia/Calcutta",
      },
      size: "w-80",
      module_data: {
        button_title:
          '<p style="background-color:transparent!important">👪 <strong style="background-color:transparent!important">Join A Brave  Group Today</strong></p>',
        button_link: "https://brave.church/groups",
      },
      animate: "",
    },
    {
      id: 7,
      position: 1,
      module_type: "delimiter",
      title: null,
      name: "Delimiter",
      icon: "code-slash-outline",
      layout_type: 12,
      is_hidden: false,
      is_scheduled: false,
      scheduled_start_date: null,
      scheduled_end_date: {
        start: "6:50 PM",
        end: "6:55 PM",
        timezone: "Asia/Calcutta",
      },
      module_data: {
        is_type: false,
        is_color: null,
        is_width: false,
        is_edge: false,
      },
    },
    {
      id: 0,
      position: 1,
      module_type: "subtitle_text",
      name: "Subtitle & Text",
      title:
        '<p style="background-color:transparent!important"><strong style="background-color:transparent!important">Meet Our Leadership: Daren and Samuel Law<span class="ql-cursor" style="background-color:transparent!important">﻿﻿﻿﻿﻿﻿</span></strong></p>',
      icon: "button-and-text-outline",
      layout_type: null,
      is_hidden: false,
      is_scheduled: false,
      scheduled_start_date: null,
      scheduled_end_date: {
        start: "6:47 PM",
        end: "6:52 PM",
        timezone: "Asia/Calcutta",
      },
      module_data: {
        text: '<p style="background-color:transparent!important">Daren and Samuel Laws<strong style="background-color:transparent!important"> </strong>are a father-son team that co-lead and share the teaching responsibilities. Their greatest passion is helping people find and follow Jesus.</p><p style="background-color:transparent!important"><br></p><p style="background-color:transparent!important">Daren and Samuel were both born and raised in California. Together they combine for over 50 years of pastoring experience and Samuel loves to point out that’s because his dad is so old. Daren actually isn’t that old, and is very young at heart.</p>',
        subtitle:
          '<p style="background-color:transparent!important"><strong style="background-color:transparent!important">Meet Our Leadership: Daren and Samuel Law<span class="ql-cursor" style="background-color:transparent!important">﻿﻿﻿﻿﻿﻿</span></strong></p>',
      },
    },
    {
      id: 1,
      position: 2,
      module_type: "button_text",
      name: "Button & Text",
      title:
        '<p style="background-color:transparent!important">LinkedIn Button</p>',
      btn_pic:
        "https://linkjoy.s3.us-west-2.amazonaws.com/developement/publicpagebuilder/766e6cb0039-93ad-48ba-bf17-8509a1794fa4",
      layout_type: 1,
      icon: "button-and-text-outline",
      is_hidden: false,
      is_scheduled: false,
      scheduled_start_date: null,
      scheduled_end_date: {
        start: "6:45 PM",
        end: "6:50 PM",
        timezone: "Asia/Calcutta",
      },
      size: "w-80",
      module_data: {
        button_title:
          '<p style="background-color:transparent!important">LinkedIn Button</p>',
        button_link: "https://www.linkedin.com/feed/",
      },
      animate: "",
    },
    {
      id: 1,
      position: 2,
      module_type: "button_text",
      name: "Button & Text",
      title:
        '<p style="background-color:transparent!important">Follow  Samuel on Instagram</p>',
      btn_pic: null,
      layout_type: 1,
      icon: "button-and-text-outline",
      is_hidden: false,
      is_scheduled: false,
      scheduled_start_date: null,
      scheduled_end_date: {
        start: "6:58 PM",
        end: "7:03 PM",
        timezone: "Asia/Calcutta",
      },
      size: "w-80",
      module_data: {
        button_title:
          '<p style="background-color:transparent!important">Follow  Samuel on Instagram</p>',
        button_link: "https://www.instagram.com/samuellaws/",
      },
      animate: "",
    },
    {
      id: 9,
      position: 1,
      module_type: "i_frame",
      name: "IFrame",
      title: "<p>MY Youtube Video</p>",
      icon: "code-working-outline",
      layout_type: null,
      is_hidden: false,
      is_scheduled: false,
      scheduled_start_date: null,
      scheduled_end_date: {
        start: "4:00 PM",
        end: "4:05 PM",
        timezone: "Asia/Calcutta",
      },
      size: "w-80",
      module_data: {
        iframe_link: "https://linkjoy.io",
        width: 100,
        height: 400,
      },
    },
    {
      id: 1,
      position: 2,
      module_type: "button_text",
      name: "Button & Text",
      title:
        '<p style="background-color:transparent!important">Follow Daren on Instagram </p>',
      btn_pic: null,
      layout_type: 1,
      icon: "button-and-text-outline",
      is_hidden: false,
      is_scheduled: false,
      scheduled_start_date: null,
      scheduled_end_date: {
        start: "7:00 PM",
        end: "7:05 PM",
        timezone: "Asia/Calcutta",
      },
      size: "w-80",
      module_data: {
        button_title:
          '<p style="background-color:transparent!important">Follow Daren on Instagram </p>',
        button_link: "https://www.instagram.com/darenlaws",
      },
      animate: "",
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
        start: "6:51 PM",
        end: "6:56 PM",
        timezone: "Asia/Calcutta",
      },
      module_data: [
        {
          name: "Instagram",
          type: "instagram",
          placeholder: "Instagram username",
          link: "bravechurch",
          icon: "instagram-outline",
        },
        {
          name: "Youtube",
          type: "youtube",
          placeholder: "Youtube channel url",
          link: "https://www.youtube.com/channel/UCOyie7ROAPsiB-NH8Se5OoA",
          icon: "youtube-outline",
        },
        {
          type: "facebook",
          name: "Facebook",
          placeholder: "Facebook username or page id",
          link: "http://facebook.com/bravechurch",
          icon: "facebook-outline",
        },
        {
          name: "Twitter",
          type: "twitter",
          placeholder: "Twitter username",
          link: null,
          icon: "twitter-outline",
        },
        {
          name: "Linkedin",
          type: "linkedin",
          placeholder: "LinkedIn profile url",
          link: null,
          icon: "linkedin-outline",
        },
        {
          name: "Pinterest",
          type: "pinterest",
          placeholder: "Pinterest username",
          link: null,
          icon: "pinterest-outline",
        },
        {
          name: "Tumblr",
          type: "tumblr",
          placeholder: "Tumblr username",
          link: null,
          icon: "tumblr-outline",
        },
        {
          name: "Patreon",
          type: "patreon",
          placeholder: "Patreon username",
          link: null,
          icon: "patreon-outline",
        },
        {
          name: "VK",
          type: "vk",
          placeholder: "VK username or page id",
          link: null,
          icon: "vk-outline",
        },
        {
          name: "Snapchat",
          type: "snapchat",
          placeholder: "Snapchat username",
          link: null,
          icon: "snapchat-outline",
        },
        {
          name: "Telegram",
          type: "telegram",
          link: null,
          icon: "telegram-outline",
          placeholder: "Telegram username",
        },
        {
          name: "Github",
          type: "github",
          placeholder: "Github username",
          link: null,
          icon: "github-outline",
        },
        {
          name: "Whatsapp",
          type: "whatsapp",
          placeholder: "+1 6072068989",
          textPlaceholder:
            "Predefined text: e.g Give me further information about...",
          link: null,
          text: null,
          icon: "whatsapp-outline",
        },
        {
          name: "TikTok",
          type: "tiktok",
          placeholder: "TikTok username",
          link: null,
          icon: "tiktok-outline",
        },
        {
          name: "Twitch.tv",
          type: "twitch",
          placeholder: "Twitch.tv username",
          link: null,
          icon: "twitch-outline",
        },
      ],
      animate: "",
    },
    {
      id: 5,
      position: 1,
      module_type: "instagram_feed",
      title: null,
      name: "Instagram Feed",
      icon: "instagram-feed-outline",
      layout_type: 1,
      insta_feed_load: [],
      insta_arr: [],
      is_hidden: false,
      is_scheduled: false,
      color: "#000",
      scheduled_start_date: null,
      scheduled_end_date: {
        start: "7:57 PM",
        end: "8:02 PM",
        timezone: "Asia/Calcutta",
      },
      module_data: {
        title: null,
        user_name: null,
      },
      is_instagram_biolink: false,
    },
    {
      id: 15,
      position: 1,
      module_type: "add_to_contacts",
      name: "Add to Contacts",
      icon: "add-to-contacts",
      title: "<p>the title</p>",
      is_hidden: true,
      is_scheduled: false,
      scheduled_start_date: {
        start: "04-03-2024",
        end: "04-03-2024",
      },
      scheduled_end_date: {
        start: "6:49 PM",
        end: "6:54 PM",
        timezone: "Asia/Calcutta",
      },
      module_data: {
        title: "<p>the title</p>",
        first_name: "Jaimin",
        last_name: "Rathwa",
        email: [
          {
            type: "work",
            address: "test@gmail.com",
          },
        ],
        phone: [
          {
            type: "mobile",
            number: "123456789",
          },
        ],
        organization: "momentum",
        position: "Intern",
        address: {
          street: "A-123",
          city: "fb",
          state: "trbtrb",
          country: "bb",
          zip: "brtb",
        },
        availability: null,
        font_color: "#323232",
        add_to_contacts_cta: "<p>Add to Contacts</p>",
      },
      animate: null,
    },
    {
      id: 15,
      position: 1,
      module_type: "add_to_contacts",
      name: "Add to Contacts",
      icon: "add-to-contacts",
      title: "<p>My Contact</p>",
      is_hidden: false,
      is_scheduled: false,
      scheduled_start_date: null,
      scheduled_end_date: {
        start: "5:20 PM",
        end: "5:25 PM",
        timezone: "Asia/Calcutta",
      },
      module_data: {
        title: "<p>My Contact</p>",
        first_name: "Jaimin",
        last_name: "Rathwa",
        email: [
          {
            type: "work",
            address: "jaimin@gmail.com",
          },
        ],
        phone: [
          {
            type: "mobile",
            number: "123456789",
          },
        ],
        organization: "momentum ventures",
        position: "Intern",
        address: {
          street: "A-122",
          city: "Ahmedbad",
          state: "Gujarat",
          country: "India",
          zip: "380060",
        },
        availability: "Monday-Saturday, 10:00 AM - 7:00 PM",
        font_color: "#323232",
        add_to_contacts_cta: "<p>Add to Contacts</p>",
      },
      animate: null,
    },
    {
      id: 8,
      position: 1,
      module_type: "video_player",
      title:
        '<p><strong style="color: rgb(230, 0, 0);">GARY VAYNERCHUK BUILDS BUSINESSES</strong></p>',
      name: "Video",
      icon: "you-tube-videos-outline",
      is_hidden: false,
      is_scheduled: false,
      scheduled_start_date: {
        start: "06-03-2024",
        end: "06-03-2024",
      },
      scheduled_end_date: {
        start: "11:52 AM",
        end: "11:57 AM",
        timezone: "Asia/Calcutta",
      },
      module_data: {
        title:
          '<p><strong style="color: rgb(230, 0, 0);">GARY VAYNERCHUK BUILDS BUSINESSES</strong></p>',
        url: "https://www.youtube.com/watch?v=5EC4N5V1Ntg",
        embeddedUrl: "https://www.youtube.com/embed/5EC4N5V1Ntg",
        type: "youTube",
        poster: null,
        width: 100,
        height: 315,
        controls: true,
        autoplay: true,
      },
      animate: "tada",
      layout_type: [],
    },
    {
      id: 6,
      position: 1,
      module_type: "youtube_video",
      title: "<p>Shark Tank</p>",
      name: "Youtube Video",
      icon: "you-tube-videos-outline",
      layout_type: 1,
      youtube_feed_load: [],
      is_hidden: false,
      is_scheduled: false,
      scheduled_start_date: null,
      scheduled_end_date: {
        start: "7:14 pm",
        end: "7:19 pm",
        timezone: "Asia/Calcutta",
      },
      module_data: {
        title: "<p>Shark Tank</p>",
        url: "https://youtu.be/c86-du7sxzQ?feature=shared",
      },
      animate: "shake",
    },
  ],
};

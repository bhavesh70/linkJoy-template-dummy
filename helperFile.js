const { URL } = require("url");

function processUrl(originalUrl, scheme) {
	const parsedUrl = new URL(originalUrl);

	// Check if the URL already has a scheme
	if (!parsedUrl.protocol) {
		// If it doesn't have a scheme, prepend the specified scheme
		parsedUrl.protocol = `${scheme}:`;
	}

	// Convert the URL object back to a string
	const modifiedUrl = parsedUrl.toString();

	return modifiedUrl;
}

const giveDeepLinkUrl = (useragent, url, scheme = "https://") => {
	// console.log({ url });
	// console.log({ useragent });
	const link = processUrl(url, scheme);

	const deepLink = null; // TEMP

	// const deepLink = deepLnkApEvntDb.findOne({
	// 	where: db.sequelize.literal("? LIKE CONCAT('%', `domain_url`, '%'))"),
	// 	replacements: [link],
	// 	include: {
	// 		model: db.deep_link_apps,
	// 		as: "App",
	// 	},
	// });

	if (deepLink) {
		const userName = link.replace(deepLink.domain_url, "");

		if (useragent.isAndroid) {
			if (deepLink.App.app_name === "WhatsApp") {
				const substr = link.replace(deepLink.domain_url, "");

				let androidLink = "";
				if (substr.includes("'?text='")) {
					let substrParts = substr.split("?text=");
					let number = substrParts[0];
					let textMsg = substrParts[1];

					// Splitting the deepLink.event_slug based on ','
					let slugParts = deepLink.event_slug.split(",");
					let slugNumber = slugParts[0];
					let slugMsg = slugParts[1];

					// Replacing values in the android link
					androidLink = deepLink.android_link.replace(
						slugNumber,
						number
					);
					androidLink = androidLink.replace(slugMsg, textMsg);
				} else {
					androidLink = deepLink.android_link.replace(
						"phone_number&text=text_message",
						substr
					);
				}
				return androidLink;
			} else if (deepLink.App.app_name === "Slack") {
				const substr = link.replace(deepLink.domain_url, "");
				const teamId = substr.split("/")[0];
				const channelId = substr.split("/")[1];

				const slugTeamSplit = deepLink.event_slug.split(",");
				const slugTeam = slugTeamSplit[0];
				const slugChannel = slugTeamSplit[1];

				let androidLink = deepLink.android_link.replace(
					slugTeam,
					teamId
				);
				androidLink = androidLink.replace(slugChannel, channelId);

				return androidLink;
			} else {
				let androidLink = deepLink.android_link.replace(
					deepLink.event_slug,
					userName
				);
				return androidLink;
			}
		} else if (useragent.isiPhone || useragent.isiPod || useragent.isiPad) {
			let iosLink = null;
			if (deepLink.App.app_name === "WhatsApp") {
				const substr = link.replace(deepLink.domain_url, "");
				if (substr.includes("?text=")) {
					const substrSplit = substr.split("?text=");
					const number = substrSplit[0];
					const textMsg = substrSplit[1];

					const slugSplit = deepLink.event_slug.split(",");
					const slugNumber = slugSplit[0];
					const slugMsg = slugSplit[1];

					iosLink = deepLink.ios_link.replace(slugNumber, number);
					iosLink = iosLink.replace(slugMsg, textMsg);
				} else {
					iosLink = deepLink.android_link.replace(
						"phone_number&text=text_message",
						substr
					);
				}
				return iosLink;
			} else if (deepLink.App.app_name === "Slack") {
				const substr = link.replace(deepLink.domain_url, "");
				const teamId = substr.split("/")[0];
				const channelId = substr.split("/")[1];

				const slugTeamSplit = deepLink.event_slug.split(",");
				const slugTeam = slugTeamSplit[0];
				const slugChannel = slugTeamSplit[1];

				iosLink = deepLink.iosLink.replace(slugTeam, teamId);
				iosLink = iosLink.replace(slugChannel, channelId);
				return iosLink;
			} else if (deepLink.App.app_name === "Airbnb") {
				const n = link.indexOf("/", 8);
				const userName = link.substring(n + 1);

				iosLink = deepLink.ios_link.replace(
					deepLink.event_slug,
					userName
				);
				return iosLink;
			}
		} else {
			return link;
		}
	} else {
		return link;
	}
};

const getValidUrl = (url) => {
	const scheme = "https://";
	const parsedUrl = new URL(url);

	if (!parsedUrl.protocol) {
		return scheme + url;
	} else {
		return url;
	}
};

const blockHideOrShowWithSchedule = (
	type,
	isHide,
	isSchedule,
	startEndDates,
	time = {}
) => {
	if (isHide === true) return false;

	if (isSchedule === true) {
		if (startEndDates.start && startEndDates.end) {
			const timeZone = time.timezone || "Asia/Calcutta";
			const startTime = time.start || "00:00:00";
			const endTime = time.end || "00:00:00";

			const todayDate = DateTime.now().setZone(timeZone);
			const startDate = DateTime.fromFormat(
				startEndDates.start + " " + startTime,
				"d.M.yyyy H:mm:ss",
				{ zone: timeZone }
			);
			const endDate = DateTime.fromFormat(
				startEndDates.end + " " + endTime,
				"d.M.yyyy H:mm:ss",
				{ zone: timeZone }
			);

			if (todayDate >= startDate && todayDate <= endDate) {
				return true;
			} else {
				return false;
			}
		} else {
			return true;
		}
	}
	return true;
};

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

module.exports = {
	pagebuilderThemes,
	blockHideOrShowWithSchedule,
	getValidUrl,
	giveDeepLinkUrl,
};

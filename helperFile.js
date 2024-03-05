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
};

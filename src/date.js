const date = {
	months: [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	],
	days: [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
	],
	timestamps() {
		let result = [];
		let minutes = ["00", "15", "30", "45"];
		let hour;
		let suffix;

		for (let i = 0; i < 24; i++) {
			i == 0 && (hour = 12) && (suffix = "am");
			i < 12 && i != 0 && (hour = i) && (suffix = "am");
			i == 12 && (hour = i) && (suffix = "pm");
			i > 12 && (hour = i - 12) && (suffix = "pm");

			for (let x in minutes) {
				result.push(`${hour}:${minutes[x]}${suffix}`);
			}
		}

		return result;
	},
	newDay() {
		return new Date().getDate();
	},
	newMonth() {
		return this.months[new Date().getMonth()];
	},
	newYear() {
		return new Date().getFullYear();
	}
};

export default date;

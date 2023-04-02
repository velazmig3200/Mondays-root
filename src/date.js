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

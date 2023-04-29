import React from "react";
import viewCss from "./view.module.css";
import Day from "./Day";
import user1 from "../data";

function Month({ currentMonth, name, date, year, calendars }) {
	//debug
	if (!!currentMonth) {
		console.log(name);
	}
	//debug

	async function getRef() {
		await new Promise(resolve => {
			resolve(currentMonth.current);
		});
	}
	currentMonth && getRef();

	const numberOfDays = new Date(
		year,
		date.months.indexOf(name) + 1,
		0
	).getDate();

	const firstDay = new Date(year, date.months.indexOf(name), 1).getDay();

	const days = () => {
		let result = [];
		let isToday = false;

		for (let i = 0; i < firstDay; i++) {
			result.push(<Day key={i} isEmpty={true} />);
		}

		const monthIndex = date.months.indexOf(name);
		function getCalendarData(calendarType) {
			if (
				calendars.includes(calendarType) &&
				user1[calendarType][year] &&
				user1[calendarType][year][monthIndex]
			) {
				return user1[calendarType][year][monthIndex];
			}
		}
		for (let i = 0; i < numberOfDays; i++) {
			if (
				date.newYear() == year &&
				date.newMonth() == name &&
				date.newDay() - 1 == i
			) {
				isToday = true;
			} else {
				isToday = false;
			}

			result.push(
				<Day
					key={Math.random()}
					number={i + 1}
					isToday={isToday}
					personalCalendar={getCalendarData("personal")}
					workCalendar={getCalendarData("work")}
				/>
			);
		}
		return result;
	};

	// let currentDay;
	// setInterval(() => {
	// 	if (currentDay != date.newDay()) {
	// 		currentDay = date.newDay();
	// 		console.log("! equal", currentDay, date.newDay());
	// 	} else {
	// 		console.log("equal");
	// 	}
	// }, 1000);

	return (
		<div ref={currentMonth} className={`${viewCss.month}`}>
			{days()}
		</div>
	);
}

export default Month;

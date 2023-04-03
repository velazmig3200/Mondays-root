import React from "react";
import viewCss from "./view.module.css";
import Day from "./Day";
import user1 from "../data";

function Month({ currentMonth, name, date, year }) {
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
		let personalCalendar;

		for (let i = 0; i < firstDay; i++) {
			result.push(<Day key={i} isEmpty={true} />);
		}

		const monthIndex = date.months.indexOf(name); //month index
		user1.personal[year][monthIndex] &&
			(personalCalendar = user1.personal[year][monthIndex]);
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
					key={i + 7}
					number={i + 1}
					isToday={isToday}
					personalCalendar={personalCalendar}
				/>
			);
		}
		return result;
	};

	return (
		<div ref={currentMonth} className={`${viewCss.month}`}>
			{days()}
		</div>
	);
}

export default Month;

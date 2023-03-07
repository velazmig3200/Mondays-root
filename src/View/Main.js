import React from "react";
import Month from "./Month";
import viewCss from "./view.module.css";
import WeekHeader from "./WeekHeader";

function Main({
	date,
	calendars,
	month,
	setMonth,
	year,
	setYear,
	mainView,
	navDate,
	setNavDate
}) {
	const currentIndex = date.months.indexOf(month);
	const numberDays = new Date(year, currentIndex + 1, 0).getDate();
	const firstDay = date.days[new Date(year, currentIndex, 1).getDay()];
	let scrollProp;

	return (
		<div className={`${viewCss.viewContainer}`}>
			<WeekHeader date={date} />
			<Month
				date={date}
				month={month}
				year={year}
				setYear={setYear}
				setMonth={setMonth}
				navDate={navDate}
				setNavDate={setNavDate}
			/>
			{/* <p>
				calendars:{" "}
				<span style={{ color: "var(--debug-color" }}>{calendars.join(", ")}</span>
			</p>
			<p>
				month: <span style={{ color: "var(--debug-color" }}>{month}</span>
			</p>
			<p>
				year: <span style={{ color: "var(--debug-color" }}>{year}</span>
			</p>
			<p>
				# days: <span style={{ color: "var(--debug-color" }}>{numberDays}</span>
			</p>
			<p>
				first day: <span style={{ color: "var(--debug-color" }}>{firstDay}</span>
			</p>
			<p>
				main view: <span style={{ color: "var(--debug-color" }}>{mainView}</span>
			</p> */}
		</div>
	);
}

export default Main;

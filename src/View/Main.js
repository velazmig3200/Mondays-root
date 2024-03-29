import React, { useEffect, useRef } from "react";
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
	const monthContainer = useRef(null);
	const currentMonth = useRef(null);
	const spacer = useRef(null);
	let visibleMonth;
	let smoothScrollID;
	let dxy = 25;

	useEffect(() => {
		clearInterval(smoothScrollID);
		smoothScrollID = setInterval(smoothScroll, 0);
	}, [navDate]);

	async function monthContainerHeight() {
		await new Promise(resolve => {
			resolve(monthContainer.current);
		});
		const monthContainerTop = monthContainer.current.getBoundingClientRect().top;
		monthContainer.current.style.height = `calc(100vh - ${monthContainerTop}px)`;
	}
	monthContainerHeight();

	function smoothScroll() {
		const container = monthContainer.current;
		const containerRect = container.getBoundingClientRect();
		const currentMonthRect = currentMonth.current.getBoundingClientRect();
		const position = currentMonthRect.y - containerRect.top;

		if (position > 1) {
			monthContainer.current.scrollTop += dxy;
			position / 40 < 1 && (dxy = position / 40 + 1);
		} else if (position < 0) {
			monthContainer.current.scrollTop -= dxy;
			position / 40 > -1 && (dxy = position / 40 + 1);
		} else {
			clearInterval(smoothScrollID);
			smoothScrollID = null;
		}
	}

	function mouseWheel() {
		const current = monthContainer.current;
		const currentRect = current.getBoundingClientRect();
		const scrollHeight = current.scrollHeight - currentRect.height;
		const buffer = 20;

		if (current.scrollTop < 1) {
			setYear(year - 1);
			setMonth(date.months[date.months.length - 1]);
			current.scrollTop = scrollHeight - buffer;
		} else if (current.scrollTop > scrollHeight - 1) {
			setYear(year + 1);
			setMonth(date.months[0]);
			current.scrollTop = buffer;
		}

		const subdivision = Math.floor((current.scrollTop / 7.4) * 0.01 - 0.5); //7.4: months + both spacers / 2; 0.01: covert to single digit; 0.5: y-offset;
		if (visibleMonth != subdivision) {
			visibleMonth = subdivision;
			visibleMonth < 0 && (visibleMonth = 0);
			visibleMonth > 11 && (visibleMonth = 11);
			setMonth(date.months[visibleMonth]);
		}
	}

	const months = () => {
		let result = [];
		for (let i in date.months) {
			result.push(
				<Month
					key={i}
					currentMonth={month == date.months[i] ? currentMonth : null}
					name={date.months[i]}
					date={date}
					year={year}
					calendars={calendars}
				/>
			);
		}
		return result;
	};

	return (
		<div className={`${viewCss.viewContainer}`}>
			<WeekHeader date={date} />
			<main
				ref={monthContainer}
				onWheel={mouseWheel}
				className={`${viewCss.monthContainer}`}>
				<div ref={spacer} className={`${viewCss.spacer}`}></div>
				{months()}
				<div className={`${viewCss.spacer}`}></div>
			</main>
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

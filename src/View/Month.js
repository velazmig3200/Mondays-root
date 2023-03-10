import React, { useEffect, useRef } from "react";
import viewCss from "./view.module.css";

function Month({ date, month, year, setYear, setMonth, navDate, setNavDate }) {
	let visibleMonth;
	let smoothScrollID;
	useEffect(() => {
		clearInterval(smoothScrollID);
		smoothScrollID = setInterval(smoothScroll, 1);
	}, [navDate]);

	const monthContainer = useRef(null);
	const currentMonth = useRef(null);
	let dxy = 25;

	function smoothScroll() {
		const monthRect = monthContainer.current.getBoundingClientRect();
		const currentRect = currentMonth.current.getBoundingClientRect();
		const position = currentRect.y - monthRect.top - 5;

		if (position > 1) {
			monthContainer.current.scrollTop += dxy;
			position / 40 < 1 && (dxy = position / 40 + 1);
		} else if (position < -1) {
			monthContainer.current.scrollTop -= dxy;
			position / 40 > -1 && (dxy = position / 40 + 1);
		} else {
			clearInterval(smoothScrollID);
			smoothScrollID = null;
		}
	}

	function mouseWheel() {
		const containerCurrent = monthContainer.current;
		const containerRect = containerCurrent.getBoundingClientRect();
		const containerScrollHeight =
			containerCurrent.scrollHeight - containerRect.height;

		if (containerCurrent.scrollTop < 1) {
			setYear(year - 1);
			setMonth(date.months[date.months.length - 1]);
			containerCurrent.scrollTop = containerScrollHeight - 220;
		} else if (containerCurrent.scrollTop > containerScrollHeight - 1) {
			setYear(year + 1);
			setMonth(date.months[0]);
			containerCurrent.scrollTop = 220;
		}

		if (visibleMonth != Math.ceil((containerCurrent.scrollTop - 450) / 290) - 1) {
			visibleMonth = Math.ceil((containerCurrent.scrollTop - 450) / 290) - 1;
			visibleMonth < 0 && (visibleMonth = 0);
			visibleMonth > 11 && (visibleMonth = 11);
			setMonth(date.months[visibleMonth]);
		}
	}

	const months = () => {
		let months = [];
		for (let i in date.months) {
			months.push(
				<div
					key={i}
					ref={month == date.months[i] ? currentMonth : null}
					className={`${viewCss.month}`}>
					{date.months[i]}
				</div>
			);
		}
		return months;
	};

	return (
		<div
			ref={monthContainer}
			onWheel={e => mouseWheel(e)}
			className={`${viewCss.monthContainer}`}>
			<div className={`${viewCss.spacer}`}>
				<div>
					<p>{year - 1}</p>
				</div>
				<p>{year}</p>
			</div>
			{months()}
			<div className={`${viewCss.spacer}`}>
				<div>
					<p>{year} </p>
				</div>
				<p>{year + 1} </p>
			</div>
		</div>
	);
}

export default Month;

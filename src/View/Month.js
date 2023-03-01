import React, { useEffect, useRef } from "react";
import viewCss from "./view.module.css";

function Month({ date, month, setMonth }) {
	let intervalID;
	useEffect(() => {
		intervalID = setInterval(smoothScroll, 1);
	}, [month]);

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
			clearInterval(intervalID);
		}
	}

	// function scrollHandle(e) {
	// 	let scrollTopProp;
	// monthContainer.current.addEventListener("scroll", e => {
	// if (scrollTopProp - e.target.scrollTop > 0) {
	// 	const currentIndex = date.months.indexOf(month);
	// 	if (currentIndex > 0) {
	// 		setMonth(date.months[currentIndex - 1]);
	// 	} else {
	// 		setMonth(date.months[date.months.length - 1]);
	// 	}
	// } else if (scrollTopProp - e.target.scrollTop < 0) {
	// 	console.log("-");
	// }
	// scrollTopProp = e.target.scrollTop;
	// });
	// }

	// function mouseWheel(e) {
	// 	if (intervalID) clearInterval(intervalID);
	// }

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
			// onWheel={e => scrollHandle(e)}
			className={`${viewCss.monthContainer}`}>
			{months()}
		</div>
	);
}

export default Month;

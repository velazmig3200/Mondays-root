import React from "react";
import headerCss from "./header.module.css";

function ScrollButtons({
	date,
	month,
	setMonth,
	year,
	setYear,
	navDate,
	setNavDate
}) {
	const currentIndex = date.months.indexOf(month);

	return (
		<div>
			<button
				onClick={() => {
					if (!(currentIndex - 1 < 0)) {
						setMonth(date.months[currentIndex - 1]);
					} else {
						setMonth(date.months[date.months.length - 1]);
						setYear(year - 1);
					}
					setNavDate(!navDate);
				}}
				className={`${headerCss.scrollButtons} ${headerCss.navBarAnime}`}
				style={{ marginRight: "10px" }}>
				«
			</button>
			<button
				onClick={() => {
					if (!(currentIndex + 1 > date.months.length - 1)) {
						setMonth(date.months[currentIndex + 1]);
					} else {
						setMonth(date.months[0]);
						setYear(year + 1);
					}
					setNavDate(!navDate);
				}}
				className={`${headerCss.scrollButtons} ${headerCss.navBarAnime}`}>
				»
			</button>
		</div>
	);
}

export default ScrollButtons;

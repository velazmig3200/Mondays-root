import React from "react";
import viewCss from "./view.module.css";

function WeekHeader({ date }) {
	const week = () => {
		let days = [];
		for (let i in date.days) {
			days.push(<p key={i}>{date.days[i].slice(0, 3)}</p>);
		}
		return days;
	};

	return <div className={`${viewCss.weekHeader}`}>{week()}</div>;
}

export default WeekHeader;

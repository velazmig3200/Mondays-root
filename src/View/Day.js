import React from "react";
import viewCss from "./view.module.css";

function Day({ isEmpty, number, isToday }) {
	return (
		<div
			className={`${viewCss.day} ${isEmpty && viewCss.emptyDay} ${
				isToday && viewCss.isToday
			}`}>
			{number}
		</div>
	);
}

export default Day;

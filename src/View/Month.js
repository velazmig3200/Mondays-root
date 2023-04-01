import React, { useref } from "react";
import viewCss from "./view.module.css";

function Month({ name, currentMonth }) {
	async function getRef() {
		await new Promise(resolve => {
			resolve(currentMonth.current);
		});
	}
	currentMonth && getRef();

	return (
		<div ref={currentMonth} className={`${viewCss.month}`}>
			{name}
		</div>
	);
}

export default Month;

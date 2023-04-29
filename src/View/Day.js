import React from "react";
import viewCss from "./view.module.css";
import PreviewCard from "./PreviewCard";

function Day({ isEmpty, number, isToday, personalCalendar, workCalendar }) {
	function getEvents(calendar) {
		let result = [];
		if (calendar && calendar[number]) {
			Object.keys(calendar[number]).forEach(e => {
				for (let i in calendar[number][e]) {
					if (result.length == 5) return;
					result.push(
						<PreviewCard
							key={result.length}
							data={calendar[number][e][i]}
							type={calendar[number][e][i].type}
						/>
					);
				}
			});
		}
		return result;
	}

	return (
		<div
			className={`${viewCss.day} ${isEmpty && viewCss.emptyDay} 
            ${isToday && viewCss.isToday}`}>
			{number} {personalCalendar && getEvents(personalCalendar)}
			{workCalendar && getEvents(workCalendar)}
		</div>
	);
}

export default Day;

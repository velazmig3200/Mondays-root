import React from "react";
import headerCss from "./header.module.css";
import Hamburger from "./Hamburger";
import CenterNav from "./CenterNav";
import Settings from "./Settings";

function Main({
	date,
	calendars,
	setCalendars,
	month,
	setMonth,
	year,
	setYear,
	mainView,
	setMainView
}) {
	return (
		<div className={`${headerCss.header}`}>
			<Hamburger calendars={calendars} setCalendars={setCalendars} />
			<h1 className={`${headerCss.logo}`}>
				<span style={{ color: "var(--main-color)" }}>Mondays</span>
			</h1>
			<CenterNav
				date={date}
				month={month}
				setMonth={setMonth}
				year={year}
				setYear={setYear}
				mainView={mainView}
				setMainView={setMainView}
			/>
			<Settings />
		</div>
	);
}

export default Main;

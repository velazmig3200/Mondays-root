import React, { useState } from "react";
import headerCss from "./header.module.css";
import MonthButton from "./MonthButton";
import ScrollButtons from "./ScrollButtons";
import ZoomButtons from "./ZoomButtons";

function CenterNav({
	date,
	month,
	setMonth,
	year,
	setYear,
	mainView,
	setMainView,
	navDate,
	setNavDate
}) {
	return (
		<div className={`${headerCss.centerNav}`}>
			<ScrollButtons
				date={date}
				month={month}
				setMonth={setMonth}
				year={year}
				setYear={setYear}
				navDate={navDate}
				setNavDate={setNavDate}
			/>
			<MonthButton
				date={date}
				month={month}
				setMonth={setMonth}
				year={year}
				setYear={setYear}
				navDate={navDate}
				setNavDate={setNavDate}
			/>
			{/* <ZoomButtons setMainView={setMainView} mainView={mainView} /> */}
		</div>
	);
}

export default CenterNav;

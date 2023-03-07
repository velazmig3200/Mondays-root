import React, { useState } from "react";

import Header from "./Header/Main";
import View from "./View/Main";
import date from "./date";

function App() {
	const [calendars, setCalendars] = useState(["personal", "work", "holiday"]);
	const [month, setMonth] = useState(null);
	const [year, setYear] = useState(null);
	const [mainView, setMainView] = useState(0);
	//when user navigates to new date this value changes (!)
	const [navDate, setNavDate] = useState(false);

	//on startup
	!month && setMonth(date.newMonth());
	!year && setYear(date.newYear());

	return (
		<div>
			<Header
				date={date}
				calendars={calendars}
				setCalendars={setCalendars}
				month={month}
				setMonth={setMonth}
				year={year}
				setYear={setYear}
				mainView={mainView}
				setMainView={setMainView}
				navDate={navDate}
				setNavDate={setNavDate}
			/>
			<View
				date={date}
				calendars={calendars}
				month={month}
				setMonth={setMonth}
				year={year}
				setYear={setYear}
				mainView={mainView}
				navDate={navDate}
				setNavDate={setNavDate}
			/>
		</div>
	);
}

export default App;

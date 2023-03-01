import React, { useState } from "react";

import Header from "./Header/Main";
import View from "./View/Main";
import date from "./date";

function App() {
	const [calendars, setCalendars] = useState(["personal", "work", "holiday"]);
	const [month, setMonth] = useState("");
	const [year, setYear] = useState("");
	const [mainView, setMainView] = useState(0);

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
			/>
			<View
				date={date}
				calendars={calendars}
				month={month}
				setMonth={setMonth}
				year={year}
				mainView={mainView}
			/>
		</div>
	);
}

export default App;

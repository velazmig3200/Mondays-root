import React from "react";
import headerCss from "./header.module.css";
import MonthButton from "./MonthButton";
import ScrollButtons from "./ScrollButtons";
import ZoomButtons from "./ZoomButtons";

function CenterNav() {
	return (
		<div className={`${headerCss.centerNav}`}>
			<ScrollButtons />
			<MonthButton />
			<ZoomButtons />
		</div>
	);
}

export default CenterNav;

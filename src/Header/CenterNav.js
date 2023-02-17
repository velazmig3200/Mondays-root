import React from "react";
import headerCss from "./header.module.css";
import Dropdown from "./Dropdown";
import ScrollButtons from "./ScrollButtons";
import ZoomButtons from "./ZoomButtons";

function CenterNav() {
	return (
		<div className={`${headerCss.centerNav}`}>
			<ScrollButtons />
			<Dropdown />
			<ZoomButtons />
		</div>
	);
}

export default CenterNav;

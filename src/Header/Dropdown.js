import React from "react";
import headerCss from "./header.module.css";

function Dropdown() {
	return (
		<button className={`${headerCss.dropdown} ${headerCss.navBarAnime}`}>
			February 2023
			<span
				style={{
					fontSize: "0.3em",
					color: "lightgray",
					backgroundColor: "transparent"
				}}>
				▼
			</span>
		</button>
	);
}

export default Dropdown;

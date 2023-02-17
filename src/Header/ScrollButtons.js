import React from "react";
import headerCss from "./header.module.css";

function ScrollButtons() {
	return (
		<div>
			<button
				className={`${headerCss.scrollButtons} ${headerCss.navBarAnime}`}
				style={{ marginRight: "10px" }}>
				«
			</button>
			<button className={`${headerCss.scrollButtons} ${headerCss.navBarAnime}`}>
				»
			</button>
		</div>
	);
}

export default ScrollButtons;

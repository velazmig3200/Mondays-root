import React from "react";
import headerCss from "./header.module.css";

function Hamburger() {
	return (
		<button className={`${headerCss.hamburger} ${headerCss.navBarAnime}`}>
			≡
		</button>
	);
}

export default Hamburger;

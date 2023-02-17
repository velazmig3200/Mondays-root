import React from "react";
import headerCss from "./header.module.css";
import Hamburger from "./Hamburger";
import CenterNav from "./CenterNav";
import Settings from "./Settings";

function Header() {
	return (
		<div className={`${headerCss.header}`}>
			<Hamburger />
			<CenterNav />
			<Settings />
		</div>
	);
}

export default Header;

import React from "react";
import headerCss from "./header.module.css";
import Hamburger from "./Hamburger";
import CenterNav from "./CenterNav";
import Settings from "./Settings";

function Header() {
	return (
		<div className={`${headerCss.header}`}>
			<Hamburger />
			<h1 className={`${headerCss.logo}`}>
				<span style={{ color: "var(--main-color)" }}>Mondays</span>
			</h1>
			<CenterNav />
			<Settings />
		</div>
	);
}

export default Header;

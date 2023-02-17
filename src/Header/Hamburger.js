import React, { useState } from "react";
import headerCss from "./header.module.css";

function Hamburger() {
	const [active, setActive] = useState("");
	const [dropdownActive, setDropdownActive] = useState("");
	const [navBarAnime, setNavBarAnime] = useState(headerCss.navBarAnime);
	function hamburgerClick() {
		if (active == "") {
			setActive(headerCss.active);
			setDropdownActive(headerCss.dropdownActive);
			setNavBarAnime("");
		} else {
			setActive("");
			setDropdownActive("");
			setNavBarAnime(headerCss.navBarAnime);
		}
	}

	return (
		<div>
			<button
				className={`${headerCss.hamburger} ${navBarAnime} ${headerCss.toggle} ${active}`}
				onClick={hamburgerClick}>
				≡
			</button>
			<div className={`${headerCss.dropdown} ${dropdownActive}`}>
				<label>calendars:</label>
				<label htmlFor="personal">
					<input type="checkbox" id="personal" /> personal
				</label>
				<label htmlFor="work">
					<input type="checkbox" id="work" /> work
				</label>
				<label htmlFor="holiday">
					<input type="checkbox" id="holiday" /> holiday
				</label>
			</div>
		</div>
	);
}

export default Hamburger;

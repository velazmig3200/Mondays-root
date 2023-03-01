import React, { useState } from "react";
import headerCss from "./header.module.css";

function Hamburger({ calendars, setCalendars }) {
	//for dropdown
	const [active, setActive] = useState("");
	const [dropdownActive, setDropdownActive] = useState("");
	const [navBarAnime, setNavBarAnime] = useState(headerCss.navBarAnime);

	//for dropdown
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

	//for dropdown
	window.addEventListener("mouseup", e => {
		if (e.target.id != "hamburger" && dropdownActive && !e.target.htmlFor) {
			hamburgerClick();
		}
	});

	return (
		<div className={`${headerCss.dropdownParent}`} style={{ marginLeft: "10px" }}>
			<button
				className={`${headerCss.hamburger} ${navBarAnime} ${headerCss.toggle} ${active}`}
				onClick={hamburgerClick}
				id="hamburger">
				≡
			</button>
			{/* _________________________dropdown____________________________ */}
			<div
				className={`${headerCss.dropdown} ${dropdownActive}`}
				style={{ borderTopLeftRadius: "0px" }}>
				<label htmlFor=".">calendars:</label>
				<label htmlFor="personal">
					<input
						defaultChecked
						type="checkbox"
						id="personal"
						onClick={e =>
							e.target.checked
								? setCalendars([...calendars, "personal"])
								: setCalendars(calendars.filter(item => item != "personal"))
						}
					/>{" "}
					personal
				</label>
				<label htmlFor="work">
					<input
						defaultChecked
						type="checkbox"
						id="work"
						onClick={e =>
							e.target.checked
								? setCalendars([...calendars, "work"])
								: setCalendars(calendars.filter(item => item != "work"))
						}
					/>{" "}
					work
				</label>
				<label htmlFor="holiday">
					<input
						defaultChecked
						type="checkbox"
						id="holiday"
						onClick={e =>
							e.target.checked
								? setCalendars([...calendars, "holiday"])
								: setCalendars(calendars.filter(item => item != "holiday"))
						}
					/>{" "}
					holiday
				</label>
			</div>
		</div>
	);
}

export default Hamburger;

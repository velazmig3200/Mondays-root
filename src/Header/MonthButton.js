import React, { useState } from "react";
import headerCss from "./header.module.css";

function MonthButton({
	date,
	month,
	setMonth,
	year,
	setYear,
	navDate,
	setNavDate
}) {
	const [active, setActive] = useState(null);
	const [dropdownActive, setDropdownActive] = useState("");
	const [navBarAnime, setNavBarAnime] = useState(headerCss.navBarAnime);
	const [scrollYear, setScrollYear] = useState(0);

	let labels = [];
	for (let i in date.months) {
		labels.push(
			<label
				key={i}
				htmlFor="."
				onClick={() => {
					setMonth(date.months[i]);
					setYear(year + scrollYear);
					setScrollYear(0);
					monthClick();
					setNavDate(!navDate);
				}}
				className={`${headerCss.dropdownButton}`}
				style={{ fontFamily: "Courier new" }}>
				{date.months[i].slice(0, 3)} {year + scrollYear}
			</label>
		);
	}

	function monthClick() {
		if (active) {
			setActive(null);
			setDropdownActive("");
			setNavBarAnime(headerCss.navBarAnime);
		} else {
			setActive(headerCss.active);
			setDropdownActive(headerCss.dropdownActive);
			setNavBarAnime("");
		}
	}

	window.addEventListener("mouseup", e => {
		if (e.target.id != "monthButton" && dropdownActive && !e.target.htmlFor) {
			monthClick();
			setScrollYear(0);
		}
	});

	return (
		<div
			className={`${headerCss.dropdownParent}`}
			style={{ margin: "0 20px", width: "205px" }}>
			<button
				className={`${headerCss.monthButton} ${navBarAnime} ${headerCss.toggle} ${active}`}
				onClick={monthClick}
				id="monthButton">
				{month} {year}
				<span
					style={{
						fontSize: "0.3em",
						color: "lightgray",
						backgroundColor: "transparent"
					}}>
					▼
				</span>
			</button>
			{/* _________________________dropdown____________________________ */}
			<div
				className={`${headerCss.dropdown} ${dropdownActive}`}
				style={{
					borderTopRightRadius: "0px",
					borderTopLeftRadius: "0px",
					marginTop: "-1px"
				}}>
				<label
					onClick={() => {
						setMonth(date.newMonth());
						setYear(date.newYear());
						setNavDate(!navDate);
					}}
					className={`${headerCss.dropdownButton}`}
					style={{
						textAlign: "center",
						fontFamily: "Courier new",
						color: "var(--accent-color)"
					}}>
					Today
				</label>
				<label
					htmlFor="."
					onClick={() => {
						setScrollYear(scrollYear - 1);
					}}
					className={`${headerCss.dropdownButton}`}
					style={{ textAlign: "center", fontSize: "0.4em", paddingTop: "4px" }}>
					▲
				</label>
				{labels}
				<label
					htmlFor="."
					onClick={() => {
						setScrollYear(scrollYear + 1);
					}}
					className={`${headerCss.dropdownButton}`}
					style={{ textAlign: "center", fontSize: "0.4em", paddingTop: "4px" }}>
					▼
				</label>
			</div>
		</div>
	);
}

export default MonthButton;

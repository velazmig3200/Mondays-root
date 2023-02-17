import React from "react";
import headerCss from "./header.module.css";

function ZoomButtons() {
	//button sizing
	let buttonWidth = 30; //30
	let buttonHeight = buttonWidth / 1.5;
	let strokeWidth = buttonWidth / 22; //svg line width //40
	let rx = buttonWidth / 30; //svg line border-radius
	//rect 1
	let rect1Width = buttonWidth / 2.1;
	let rect1Height = rect1Width / 1.5;
	//rect 2
	let rect2Width = buttonWidth / 1.2;
	let rect2Height = rect2Width / 1.5;
	//color
	let root = document.querySelector(":root");
	let rootStyles = getComputedStyle(root);
	let cssMainColor = rootStyles.getPropertyValue("--main-color");

	return (
		<div style={{ height: 0 }}>
			{/* ________________________________________________zoom In */}
			<button
				className={`${headerCss.zoomIn} ${headerCss.navBarAnime}`}
				style={{
					width: "fit-content",
					paddingRight: "3px",
					marginRight: "10px"
				}}>
				<svg
					style={{
						width: buttonWidth + "px",
						height: buttonHeight + "px",
						backgroundColor: "transparent"
					}}>
					{/* rect 2 */}
					<rect
						x={`${buttonWidth / 60}`}
						y={`${buttonHeight / 40}`}
						rx={`${rx}`}
						width={`${rect2Width}`}
						height={`${rect2Height}`}
						stroke="white"
						strokeWidth={`${strokeWidth}`}
						fill="transparent"
					/>
					{/* rect 1 */}
					<rect
						x={`${buttonWidth / 2}`}
						y={`${buttonHeight / 2}`}
						rx={`${rx}`}
						width={`${rect1Width}`}
						height={`${rect1Height}`}
						stroke={`${cssMainColor}`}
						strokeWidth={`${strokeWidth}`}
						fill={`${cssMainColor}`}
					/>
					Sorry, your browser does not support inline SVG.
				</svg>
			</button>

			{/* ___________________________________________________zoom Out */}

			<button
				className={`${headerCss.zoomOut} ${headerCss.navBarAnime}`}
				style={{ width: "fit-content", paddingRight: "3px" }}>
				<svg
					style={{
						width: buttonWidth + "px",
						height: buttonHeight + "px",
						backgroundColor: "transparent"
					}}>
					{/* rect 2 */}
					<rect
						x={`${buttonWidth / 60}`}
						y={`${buttonHeight / 40}`}
						rx={`${rx}`}
						width={`${rect2Width}`}
						height={`${rect2Height}`}
						stroke={`${cssMainColor}`}
						strokeWidth={`${strokeWidth}`}
						fill={`${cssMainColor}`}
					/>
					{/* rect 1 */}
					<rect
						x={`${buttonWidth / 2}`}
						y={`${buttonHeight / 2}`}
						rx={`${rx}`}
						width={`${rect1Width}`}
						height={`${rect1Height}`}
						stroke="white"
						strokeWidth={`${strokeWidth}`}
						fill="transparent"
					/>
					Sorry, your browser does not support inline SVG.
				</svg>
			</button>
		</div>
	);
}

export default ZoomButtons;

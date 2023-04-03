import React from "react";
import viewCss from "./view.module.css";
import date from "../date"; //debug

function PreviewCard({ data, type }) {
	return (
		<div
			className={`
            ${viewCss.previewCard} 
            ${type == "event" && viewCss.eventPreview} 
            ${type == "task" && viewCss.taskPreview}`}>
			{data.description}
		</div>
	);
}

export default PreviewCard;

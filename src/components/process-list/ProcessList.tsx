import React from "react";
import "./processList.css";
import { useChildrenProcessItems } from "./useChildrenProcessItems";

export const ProcessList = () => {
	const childList = useChildrenProcessItems(0);

	return <div class="processList">{childList}</div>;
};

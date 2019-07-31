import * as React from "react";
import * as s from "./closeButton.css";

export const CloseButton = props => {
	return <button {...props} className={s.closeButton} />;
};

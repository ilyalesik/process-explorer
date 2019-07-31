import React from "react";
import * as s from "./processItemTemplate.css";
import cc from "classcat";

export const ProcessItemTemplate = (props: {
	name: React.Node;
	cpu: React.Node;
	memory: React.Node;
	children?: React.Node;
	close: React.Node;
}) => {
	const { name, cpu, memory, children, close } = props;

	return (
		<>
			<div className={s.container}>
				<div className={cc([s.column, s.name])}>{name}</div>
				<div className={s.column}>
					<p class={s.label}>cpu</p>
					{cpu}
				</div>
				<div className={s.column}>
					<p class={s.label}>memory</p>
					{memory}
				</div>
				<div className={s.closeContainer}>{close}</div>
			</div>
			<div class={s.children}>{children}</div>
		</>
	);
};

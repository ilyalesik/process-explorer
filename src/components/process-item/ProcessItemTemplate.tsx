import React from "react";
import "./processItemTemplate.css";

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
			<div className="processItem">
				<div className="processItem__column processItem__name">{name}</div>
				<div className="processItem__column">
					<p class="processItem__label">cpu</p>
					{cpu}
				</div>
				<div className="processItem__column">
					<p class="processItem__label">memory</p>
					{memory}
				</div>
				<div className="processItem__closeContainer">{close}</div>
			</div>
			<div class="processItem__children">{children}</div>
		</>
	);
};

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
			<div className="processItemTemplate">
				<div className="processItemTemplate__column processItemTemplate__name">{name}</div>
				<div className="processItemTemplate__column">
					<p class="processItemTemplate__label">cpu</p>
					{cpu}
				</div>
				<div className="processItemTemplate__column">
					<p class="processItemTemplate__label">memory</p>
					{memory}
				</div>
				<div className="processItemTemplate__closeContainer">{close}</div>
			</div>
			<div class="processItemTemplate__children">{children}</div>
		</>
	);
};

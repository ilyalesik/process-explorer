import React from "react";
import "./processList.css";
import * as R from "ramda";
import { $parentMap, killProcessEvent } from "../../processListStore";
import { useList } from "effector-react";
import { PercentageIndicator } from "../percentage-indicator/PercentageIndicator";
import { ProcessItemTemplate } from "../process-item/ProcessItemTemplate";
import { CloseButton } from "../close-button/CloseButton";
import { FieldProvider } from "./FieldProvider";

export const useChildrenProcessItems = pid => {
	const store = React.useRef($parentMap.map(R.propOr([], pid)));

	return useList(store.current, (item: number) => <ProcessItem pid={item} />);
};

export const ProcessItem = (props: { pid: number }) => {
	const { pid } = props;
	const childList = useChildrenProcessItems(pid);

	const name = (
		<FieldProvider pid={pid} field="name">
			{name => <span className="processList__text processList__text--white">{name}</span>}
		</FieldProvider>
	);

	const cpu = (
		<FieldProvider pid={pid} field="cpu">
			{cpu => typeof cpu === "number" && <PercentageIndicator value={cpu} className="processList__text" />}
		</FieldProvider>
	);

	const memory = (
		<FieldProvider pid={pid} field="memory">
			{memory =>
				typeof memory === "number" && <PercentageIndicator value={memory} className="processList__text" />
			}
		</FieldProvider>
	);

	const close = <CloseButton onClick={() => killProcessEvent(pid)} />;

	return (
		<ProcessItemTemplate name={name} cpu={cpu} memory={memory} close={close}>
			{childList}
		</ProcessItemTemplate>
	);
};

export const ProcessList = () => {
	const childList = useChildrenProcessItems(0);

	return <div class="processList">{childList}</div>;
};

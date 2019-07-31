import * as React from "react";
import * as s from "./processList.css";
const cc = require("classcat");
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
			{name => <span className={cc([s.text, s["text--white"]])}>{name}</span>}
		</FieldProvider>
	);

	const cpu = (
		<FieldProvider pid={pid} field="cpu">
			{cpu => typeof cpu === "number" && <PercentageIndicator value={cpu} className={s.text} />}
		</FieldProvider>
	);

	const memory = (
		<FieldProvider pid={pid} field="memory">
			{memory => typeof memory === "number" && <PercentageIndicator value={memory} className={s.text} />}
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

	return <div class={s.container}>{childList}</div>;
};

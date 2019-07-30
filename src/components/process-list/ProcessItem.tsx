import React from "react";
import "./processItem.css";
import { useStoreMap } from "effector-react";
import { $processListMap, killProcessEvent } from "../../processListStore";
import { useChildrenProcessItems } from "./useChildrenProcessItems";
import * as R from "ramda";
import { PercentageIndicator } from "./PercentageIndicator";

const valueLens = (pid, field) => R.view(R.lensPath([pid, field]));

const FieldProvider = props => {
	const { children, pid, field } = props;
	const value = useStoreMap({
		store: $processListMap,
		keys: [pid],
		fn: (processListMap, [pid]) => valueLens(pid, field)(processListMap)
	});

	return <>{children(value)}</>;
};

export const ProcessItem = (props: { pid: number }) => {
	const { pid } = props;
	const childList = useChildrenProcessItems(pid);

	return (
		<>
			<div className="processItem">
				<div className="processItem__column processItem__name">
					<FieldProvider pid={pid} field="name">
						{name => <span className="processItem__text processItem__text--white">{name}</span>}
					</FieldProvider>
				</div>
				<FieldProvider pid={pid} field="cpu">
					{cpu =>
						typeof cpu === "number" && (
							<div className="processItem__column">
								<p class="processItem__label">cpu</p>
								<PercentageIndicator value={cpu} className="processItem__text" />
							</div>
						)
					}
				</FieldProvider>
				<FieldProvider pid={pid} field="memory">
					{memory =>
						typeof memory === "number" && (
							<div className="processItem__column">
								<p class="processItem__label">memory</p>
								<PercentageIndicator value={memory} className="processItem__text" />
							</div>
						)
					}
				</FieldProvider>
				<div className="processItem__closeContainer">
					<button class="processItem__close" onClick={() => killProcessEvent(pid)} />
				</div>
			</div>
			<div class="processItem__children">{childList}</div>
		</>
	);
};

import React from "react";
import "./processItem.css";
import { useStoreMap } from "effector-react";
import { $processListMap } from "../../processListStore";
import { useChildrenProcessItems } from "./useChildrenProcessItems";
import * as R from "ramda";
import * as d3 from "d3";

const percentageToColor = value => d3.interpolateSinebow(0.2 + value);

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

const toFixed2 = num => Math.round(num * 100) / 100;

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
								<p
									style={{ color: React.useMemo(() => percentageToColor(cpu), [cpu]) }}
									className="processItem__text">
									{toFixed2(cpu)}%
								</p>
							</div>
						)
					}
				</FieldProvider>
				<FieldProvider pid={pid} field="memory">
					{memory =>
						typeof memory === "number" && (
							<div className="processItem__column">
								<p class="processItem__label">memory</p>
								<p
									style={{ color: React.useMemo(() => percentageToColor(memory), [memory]) }}
									className="processItem__text">
									{toFixed2(memory)}%
								</p>
							</div>
						)
					}
				</FieldProvider>
				<div className="processItem__closeContainer">
					<button class="processItem__close" />
				</div>
			</div>
			<div class="processItem__children">{childList}</div>
		</>
	);
};

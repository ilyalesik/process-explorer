import React from "react";
import {ProcessDescriptor} from "ps-list";
import "./processItem.css"
import {useStoreMap} from "effector-react";
import { $processList} from "../../processListStore";

const toFixed2 = (num) => Math.round(num * 100) / 100;

export const ProcessItem = (props: ProcessDescriptor & {key: number}) => {
    const {name, cpu, memory, pid} = props;
    const childItems = useStoreMap({
        store: $processList,
        keys: [pid],
        fn: (processList, [pid]) => processList.filter(value => value.ppid === pid)
    });
    const cpuPercentageFixed2 = React.useMemo(() => cpu && toFixed2(cpu * 100), [cpu]);
    const memoryPercentageFixed2 = React.useMemo(() => memory && toFixed2(memory * 100), [memory]);

    return <>
        <div className="processItem">
            <div className="processItem__column processItem__name">
            <span className="processItem__text processItem__text--blue">
                {name}
            </span>
            </div>
            {typeof cpu === "number" && <div className="processItem__column">
                <p class="processItem__label">
                    cpu
                </p>
                <p className={`processItem__text ${(cpu * 100)< 50 ? 'processItem__text--green' : 'processItem__text--red'}`}>
                    {cpuPercentageFixed2}%
                </p>
            </div>}
            {typeof memory === "number" && <div className="processItem__column">
                <p class="processItem__label">
                    memory
                </p>
                <p className={`processItem__text ${(memory * 100) < 50 ? 'processItem__text--green' : 'processItem__text--red'}`}>
                    {memoryPercentageFixed2}%
                </p>
            </div>}
        </div>
        {childItems.length > 0 && <div class="processItem__children">
            {childItems.map((item) => <ProcessItem {...item} key={item.pid}  />)}
        </div>}
    </>
};

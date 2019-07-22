import React from "react";
import "./processItem.css"
import {useStoreMap} from "effector-react";
import {$processListMap} from "../../processListStore";
import {useChildrenProcessItems} from "./useChildrenProcessItems";

const FieldProvider = (props) => {
    const {children, pid, field} = props;
    const value = useStoreMap({
        store: $processListMap,
        keys: [pid],
        fn: (processListMap, [pid]) => processListMap[pid] && processListMap[pid][field]
    });

    return <>
        {children(value)}
    </>
};

const toFixed2 = (num) => Math.round(num * 100) / 100;

export const ProcessItem = (props: {pid: number}) => {
    const {pid} = props;
    const childList = useChildrenProcessItems(pid);

    return <>
        <div className="processItem">
            <div className="processItem__column processItem__name">
                <FieldProvider pid={pid} field="name">
                    {name => <span className="processItem__text processItem__text--blue">
                        {name}
                    </span>}
                </FieldProvider>
            </div>
            <FieldProvider pid={pid} field="cpu">
                {cpu => typeof cpu === "number" && <div className="processItem__column">
                    <p class="processItem__label">
                        cpu
                    </p>
                    <p className={`processItem__text ${(cpu * 100)< 50 ? 'processItem__text--green' : 'processItem__text--red'}`}>
                        {toFixed2(cpu)}%
                    </p>
                </div>}
            </FieldProvider>
            <FieldProvider pid={pid} field="memory">
                {memory => typeof memory === "number" && <div className="processItem__column">
                    <p class="processItem__label">
                        memory
                    </p>
                    <p className={`processItem__text ${(memory * 100) < 50 ? 'processItem__text--green' : 'processItem__text--red'}`}>
                        {toFixed2(memory)}%
                    </p>
                </div>}
            </FieldProvider>
        </div>
        <div class="processItem__children">
            {childList}
        </div>
    </>
};

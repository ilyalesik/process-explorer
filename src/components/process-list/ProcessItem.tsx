import React from "react";
import {ProcessDescriptor} from "ps-list";
import "./processItem.css"

const toFixed2 = (num) => Math.round(num * 100) / 100;

export const ProcessItem = (props: ProcessDescriptor & {key: number}) => {
    const {name, cpu, memory} = props;
    return <div className="processItem">
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
                {toFixed2(cpu * 100)}%
            </p>
        </div>}
        {typeof memory === "number" && <div className="processItem__column">
            <p class="processItem__label">
                memory
            </p>
            <p className={`processItem__text ${(memory * 100) < 50 ? 'processItem__text--green' : 'processItem__text--red'}`}>
                {toFixed2(memory * 100)}%
            </p>
        </div>}
    </div>
};

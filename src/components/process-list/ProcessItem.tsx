import React from "react";
import {ProcessDescriptor} from "ps-list";
import "./processItem.css"

const toFixed2 = (num) => Math.round(num * 100) / 100;

export const ProcessItem = (props: ProcessDescriptor & {key: number}) => {
    const {name, cpu, memory, pid, ppid} = props;
    return <div className="processItem">
        <div className="processItem__column processItem__name">
            <span className="processItem__text">
                {name}
            </span>
        </div>
        <div className="processItem__column">
            <span className="processItem__text">
                {pid}
            </span>
        </div>
        <div className="processItem__column">
            <span className="processItem__text">
                {ppid}
            </span>
        </div>
        <div className="processItem__column">
            <span className="processItem__text">
                {toFixed2(cpu && cpu * 100)}%
            </span>
        </div>
        <div className="processItem__column">
            <span className="processItem__text">
                {toFixed2(memory && memory * 100)}%
            </span>
        </div>
    </div>
};

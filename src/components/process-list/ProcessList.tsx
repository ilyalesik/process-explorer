import React from "react";
import {useStore} from "effector-react";
import {$childProcesses} from "../../processListStore";
import {ProcessItem} from "./ProcessItem";
import "./processList.css"

export const ProcessList = () => {
    const items = useStore($childProcesses(0));

    return <div class="processList">
        {items.map((item) => <ProcessItem {...item} key={item.pid}  />)}
    </div>
};

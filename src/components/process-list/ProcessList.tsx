import React from "react";
import {useStore} from "effector-react";
import {$rootProcesses} from "../../processListStore";
import {ProcessItem} from "./ProcessItem";
import "./processList.css"

export const ProcessList = () => {
    const items = useStore($rootProcesses);

    return <div class="processList">
        {items.map((item) => <ProcessItem {...item} key={item.pid}  />)}
    </div>
};

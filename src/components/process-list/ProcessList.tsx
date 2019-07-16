import React from "react";
import {useStore} from "effector-react";
import {processListStore} from "../../processListStore";
import {ProcessItem} from "../process-item/ProcessItem";
import "./processList.css"

export const ProcessList = () => {
    const items = useStore(processListStore);

    return <div class="processList">
        {items.map((item) => <ProcessItem {...item} key={item.pid}  />)}
    </div>
};

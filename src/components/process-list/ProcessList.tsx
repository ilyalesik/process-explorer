import React from "react";
import {useStore} from "effector-react";
import {$processList} from "../../processListStore";
import {ProcessItem} from "./ProcessItem";
import "./processList.css"

export const ProcessList = () => {
    const items = useStore($processList);

    return <div class="processList">
        {items.map((item) => <ProcessItem {...item} key={item.pid}  />)}
    </div>
};

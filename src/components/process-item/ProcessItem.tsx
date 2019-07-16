import React from "react";
import {ProcessDescriptor} from "ps-list";

export const ProcessItem = (props: ProcessDescriptor & {key: number}) => {
    const {name, cpu, memory} = props;
    return <div>
        {name} {cpu && cpu * 100} {memory && memory * 100}
    </div>
};

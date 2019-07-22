import React from "react";
import {$parentMap} from "../../processListStore";
import {useList} from "../../utils/useList";
import {ProcessItem} from "./ProcessItem";

export const useChildrenProcessItems = (pid) => {
    const store = React.useRef($parentMap.map(parentMap => parentMap[pid] || []));

    return useList(store.current, item => <ProcessItem pid={item}  />)
};

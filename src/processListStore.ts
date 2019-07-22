import {createEvent, restore} from "effector";
import {ProcessDescriptor} from "ps-list";
import * as R from "ramda"

export const updateListEvent = createEvent<Array<ProcessDescriptor>>("updateListEvent");

export const updateListEventMap = updateListEvent.map(R.indexBy(R.prop('pid')));
export const $processListMap = restore(updateListEventMap, {});


const updateListParentMap = updateListEvent.map(
    R.compose(
        R.mapObjIndexed(R.map(R.prop('pid'))),
        R.groupBy(R.prop('ppid'))
    )
);
export const $parentMap = restore(updateListParentMap, {});

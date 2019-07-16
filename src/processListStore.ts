import {createEvent, createStore} from "effector";
import {ProcessDescriptor} from "ps-list";

export const $processList = createStore<Array<ProcessDescriptor>>([]);

export const updateListEvent = createEvent<Array<ProcessDescriptor>>("updateListEvent");

$processList.on(updateListEvent, (_, newValue) => {
    return newValue;
});

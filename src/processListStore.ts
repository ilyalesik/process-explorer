import {createEvent, createStore} from "effector";
import {ProcessDescriptor} from "ps-list";

export const processListStore = createStore<Array<ProcessDescriptor>>([]);

export const updateListEvent = createEvent<Array<ProcessDescriptor>>("updateListEvent");

processListStore.on(updateListEvent, (_, newValue) => {
    return newValue;
});

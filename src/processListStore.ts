import {createEvent, restore} from "effector";
import {ProcessDescriptor} from "ps-list";

export const updateListEvent = createEvent<Array<ProcessDescriptor>>("updateListEvent");

export const $processList = restore(updateListEvent, []);

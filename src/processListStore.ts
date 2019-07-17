import {createEvent, restore} from "effector";
import {ProcessDescriptor} from "ps-list";

export const updateListEvent = createEvent<Array<ProcessDescriptor>>("updateListEvent");

export const $processList = restore(updateListEvent, []);

export const $childProcesses = (pid: number) => $processList.map(state => state.filter(value => value.ppid === pid));

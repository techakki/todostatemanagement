import {
    ADD_TASK,
    REMOVE_TASK,
    REMOVE_ALL
} from "../constants";

export const addTask = task => {
    return {
        type: ADD_TASK,
        payload: task
    };
};

export const removeTask = id => {
    return {
        type: REMOVE_TASK,
        payload: id
    };
};

export const removeAllTasks = () => {
    return {
        type: REMOVE_ALL
    }
};

export default {
    addTask,
    removeTask,
    removeAllTasks
};
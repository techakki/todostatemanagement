import {
    ADD_TASK,
    REMOVE_TASK,
    REMOVE_ALL
} from "../constants";

function addTask(task) {
    return {
        id: Math.random(),
        name: task
    };
}

function removeTaskById(state, id) {
    return state.filter(task => task.id !== id);
}

export default function reducer(state = [], action) {
    switch(action.type) {
        case ADD_TASK:
            return [
                ...state,
                addTask(action.payload)
            ];
        case REMOVE_TASK:
            return removeTaskById(state, action.payload);
        case REMOVE_ALL:
            return [];
        default:
            return state;
    };
};

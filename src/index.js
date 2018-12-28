import reducer from './state_management/reducers';
import {
    addTask,
    removeTask,
    removeAllTasks
} from "./state_management/actions";

const actions = {
    addTask,
    removeTask,
    removeAllTasks
};

export {
    reducer,
    actions
};

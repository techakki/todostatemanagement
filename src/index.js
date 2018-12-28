import reducer from './state_management/reducers';
import {
    addTask,
    removeTask,
    removeAllTasks
} from "./state_management/actions";

module.export = {
    reducer: reducer,
    actions: {
        addTask,
        removeTask,
        removeAllTasks
    }
};

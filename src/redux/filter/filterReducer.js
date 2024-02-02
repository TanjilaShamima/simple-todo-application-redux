import { STATUS_FILTER, COLOR_FILTER } from "./filterActionType";

const { initialFilterState } = require("./filterInitialState");

const filterReducer = (state = initialFilterState, action) => {
    switch (action.type) {
        case STATUS_FILTER:
            return {

            }
        case COLOR_FILTER: 
            return {

            }
        default:
            return state;
    }
}

export default filterReducer;
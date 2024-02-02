import { STATUS_FILTER, COLOR_FILTER } from "./filterActionType";

const { initialFilterState } = require("./filterInitialState");

const filterReducer = (state = initialFilterState, action) => {
    switch (action.type) {
        case STATUS_FILTER:
            return {
                ...state,
                status: action.payload
            }
        case COLOR_FILTER: 
            return {
                ...state,
                color: state.color.map(color => {
                    if (color === action.payload) {
                        return state.color.filter(color => color !== action.payload);
                    } else {
                        return [...state.color, action.payload];
                    }
                })
            }
        default:
            return state;
    }
}

export default filterReducer;
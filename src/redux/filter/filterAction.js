import { COLOR_FILTER, STATUS_FILTER } from "./filterActionType"

export const filterByStatus = (status) => {
    return {
        type: STATUS_FILTER,
        payload: status
    }
}

export const filterByColor = (color) => {
    return {
        type: COLOR_FILTER,
        payload: color
    }
}
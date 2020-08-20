import {FETCH_ITEM_REQUEST,FETCH_ITEM_SUCCESS,FETCH_ITEM_FAILURE} from './actionTypes'

const initialState = {
    error: false,
    items:[]
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case FETCH_ITEM_REQUEST:
            return { ...state, error: false }

            case FETCH_ITEM_SUCCESS:
                console.log(payload);
            return { ...state, items: payload }

            case FETCH_ITEM_FAILURE:
            return { ...state, error: true }

        default:
            return { ...state }
    }
}
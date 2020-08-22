import {FETCH_ITEM_REQUEST,FETCH_ITEM_SUCCESS,FETCH_ITEM_FAILURE,UPDATE_REQUEST,UPDATE_SUCCESS,UPDATE_FAILURE,DELETE_REQUEST,DELETE_SUCCESS,DELETE_FAILURE} from './actionTypes'

const initialState = {
    error: false,
    items:[],
    update:"",
    delete :""
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

            case UPDATE_REQUEST:
            return { ...state }

            case UPDATE_SUCCESS:
                console.log(payload);
            return { ...state,update:payload }

            case UPDATE_FAILURE:
            return { ...state}


            case DELETE_REQUEST:
            return { ...state}

            case DELETE_SUCCESS:
                console.log(payload);
            return { ...state}

            case DELETE_FAILURE:
            return { ...state }


        default:
            return { ...state }
    }
}
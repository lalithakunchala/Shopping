import axios from "axios";
import {FETCH_ITEM_REQUEST,FETCH_ITEM_SUCCESS,FETCH_ITEM_FAILURE} from './actionTypes'


const fetchItemRequest = () => {
  console.log("fetch post request action called");
  
  return {
    type: FETCH_ITEM_REQUEST,
    
  };
};

const fetchItemSuccess = (res) => {
  // console.log("fetch post success action called"+ res);
  return {
    type: FETCH_ITEM_SUCCESS,
    payload : res
  };
};

const fetchItemFailure = error => {
  // console.log("fetch post failure action called");
  return {
    type: FETCH_ITEM_FAILURE,
    payload:error
    // error: error
  };
};


const fetchItems= () => {
  // console.log("fetch Data called", data);
  return dispatch => {
      dispatch(fetchItemRequest())
      return  axios.get(
          "http://localhost:8000/items"
            ).then(res=>{
          console.log("response success", res.data);
          return dispatch(fetchItemSuccess(res.data));
        })
        .catch(error => fetchItemFailure(error))
  }
}

export {fetchItems}

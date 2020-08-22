import axios from "axios";
import {FETCH_ITEM_REQUEST,FETCH_ITEM_SUCCESS,FETCH_ITEM_FAILURE,UPDATE_REQUEST,UPDATE_SUCCESS,UPDATE_FAILURE,DELETE_REQUEST,DELETE_SUCCESS,DELETE_FAILURE} from './actionTypes'


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

const updateRequest = () => {
  console.log("fetch UPDATE request action called");
  
  return {
    type: UPDATE_REQUEST,
    
  };
};

const updateSuccess = (res) => {
  console.log("fetch post success action called"+ res);
  return {
    type: UPDATE_SUCCESS,
    payload : res
  };
};

const updateFailure = error => {
  console.log("fetch post failure action called");
  return {
    type: UPDATE_FAILURE,
    payload:error
    // error: error
  };
};


const updateItem = (n) => {
  console.log("fetch Data called", n.id +" "+n.price);
  return dispatch => {
      dispatch(updateRequest())
      return  axios.patch(
          `http://localhost:8000/items/${n.id}`,
          {
            price:n.price
          }
            ).then(res=>{
          console.log("response success", res.data);
          return dispatch(updateSuccess(res.data));
        })
        .catch(error => updateFailure(error))
  }
}

const deleteRequest = () => {
  console.log("fetch post request action called");
  
  return {
    type: DELETE_REQUEST,
    
  };
};

const deleteSuccess = (res) => {
  // console.log("fetch post success action called"+ res);
  return {
    type: DELETE_SUCCESS,
    payload : res
  };
};

const deleteFailure = error => {
  // console.log("fetch post failure action called");
  return {
    type: DELETE_FAILURE,
    payload:error
    // error: error
  };
};


const deleteItem= (id) => {
  // console.log("fetch Data called", data);
  return dispatch => {
      dispatch(deleteRequest())
      return  axios.delete(
          `http://localhost:8000/items/${id}`
            ).then(res=>{
          console.log("response success", res.data);
          return dispatch(deleteSuccess(res.data));
        })
        .catch(error => deleteFailure(error))
  }
}

export {fetchItems,updateItem,deleteItem}

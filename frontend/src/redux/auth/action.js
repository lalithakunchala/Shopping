import axios from "axios";

const LOGOUT = "LOGOUT";

const logout = ()=>{
  return {
    type: LOGOUT
  }
}

  

const FETCH_REGISTER_REQUEST = "FETCH_REGISTER_REQUEST";
const FETCH_REGISTER_SUCCESS = "FETCH_REGISTER_SUCCESS";
const FETCH_REGISTER_FAILURE = "FETCH_REGISTER_FAILURE";

const fetchRegisterRequest = () => {
  console.log("fetch post request action called");
  
  return {
    type: FETCH_REGISTER_REQUEST,
    
  };
};

const fetchRegisterSuccess = (res) => {
  // console.log("fetch post success action called"+ res);
  return {
    type: FETCH_REGISTER_SUCCESS,
    regSuccess : res
  };
};

const fetchRegisterFailure = error => {
  // console.log("fetch post failure action called");
  return {
    type: FETCH_REGISTER_FAILURE,
    error:error
    
    // error: error
  };
};


const fetchRegister = (data) => {
  // console.log("fetch Data called", data);
  return dispatch => {
      dispatch(fetchRegisterRequest())
      return  axios.post(
          "http://localhost:8080/auth/register",
            {
            "name": `${data.name}`,
            "email": `${data.email}`,
            "password": `${data.password}`,
            "username": `${data.username}`,
            "mobile": `${data.mobile}`,
            "description": `${data.description}`,
        }).then(res=>{
          // console.log("response success", res.data);
          return dispatch(fetchRegisterSuccess(res.data));
        })
        .catch(error => fetchRegisterFailure(error))
  }
}
const FETCH_LOGIN_REQUEST = "FETCH_LOGIN_REQUEST";
const FETCH_LOGIN_SUCCESS = "FETCH_LOGIN_SUCCESS";
const FETCH_LOGIN_FAILURE = "FETCH_LOGIN_FAILURE";

const fetchLoginRequest = (payload) => {
  // console.log("fetch post request action called"+payload);
  
  return {
    type: FETCH_LOGIN_REQUEST,
    logUser:payload
  };
};

const fetchLoginSuccess = (res) => {
  // console.log("fetch post success action called"+ res.token);
  return {
    type: FETCH_LOGIN_SUCCESS,
    logSuccess : res,
    
  };
};

const fetchLoginFailure = error => {
  // console.log("fetch post failure action called");
  return {
    type: FETCH_LOGIN_FAILURE,
    logError:error
    
    // error: error
  };
};


 const fetchLogin = (userdetails) => {
  // console.log("fetch Data called", userdetails);
  return dispatch => {
      dispatch(fetchLoginRequest(userdetails.username))
      return  axios.post(
          "http://localhost:8080/auth/login",
            {
            
            "password": `${userdetails.password}`,
            "username": `${userdetails.username}`
            
        }).then(res=>{
          // console.log("response success", res.data);
          return (dispatch(fetchLoginSuccess(res.data)),dispatch(fetchProfile({user:userdetails.username,token:res.data.token})));
        })
        .catch(error => fetchLoginFailure(error.data))
  }
}

const FETCH_PROFILE_REQUEST = "FETCH_PROFILE_REQUEST";
const FETCH_PROFILE_SUCCESS = "FETCH_PROFILE_SUCCESS";
const FETCH_PROFILE_FAILURE = "FETCH_PROFILE_FAILURE";

const fetchProfileRequest = () => {
  // console.log("fetch profile request action called");
  
  return {
    type: FETCH_PROFILE_REQUEST,
    
  };
};

const fetchProfileSuccess = (res) => {
  // console.log("fetch profile success action called"+ res.token);
  return {
    type: FETCH_PROFILE_SUCCESS,
    proSuccess : res
  };
};

const fetchProfileFailure = error => {
  // console.log("fetch profile failure action called");
  return {
    type: FETCH_PROFILE_FAILURE,
    proError:error
    
    // error: error
  };
};


 const fetchUserProfile = (data) => {
  // console.log("fetch Data called", data);
  return dispatch => {
      dispatch(fetchProfileRequest())
      return  axios.get(`http://localhost:8000/user/${data.user}`, {
        headers: {
          'Authorization': `Bearer ${data.token}`
        }
      })
      
        .then(res=>{
          // console.log("response success", res.data);
          return dispatch(fetchProfileSuccess(res.data));
        })
        .catch(error => fetchProfileFailure(error.data))
  }
}


export {
  
  fetchRegister,
  fetchRegisterFailure,
  fetchRegisterRequest,
  fetchRegisterSuccess,
  FETCH_REGISTER_FAILURE,
  FETCH_REGISTER_REQUEST,
  FETCH_REGISTER_SUCCESS,
  fetchLogin,
  fetchLoginFailure,
  fetchLoginRequest,
  fetchLoginSuccess,
  FETCH_LOGIN_FAILURE,
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  fetchUserProfile,
  fetchUserProfileFailure,
  fetchUserProfileRequest,
  fetchProfileSuccess,
  FETCH_PROFILE_FAILURE,
  FETCH_PROFILE_REQUEST,
  FETCH_PROFILE_SUCCESS,
  LOGOUT,
  logout
};
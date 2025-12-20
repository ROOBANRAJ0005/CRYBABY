import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
   initialState: {
  loading: false,
  isAuthenticated: false,
  user: null,
  error: null,
  isUpdated: false,
  message: null
},
    reducers:{
        loginRequest(state,action){
            return{
                ...state,
                loading:true
            }
        },
        loginSuccess(state,action){
            return{
                 ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload,
                error: null
            }
        },
        loginFailed(state,action){
            return{
                ...state,
                error:action.payload,
                loading: false,
                isAuthenticated: false
            }
        },
        clearAuthAction(state,action){
            return{
                 error: null,
            }
        },
        registerRequest(state,action){
            return{
                ...state,
                loading:true
            }
        },
        registerSuccess(state,action){
            return{
            ...state,
            loading: false,
            isAuthenticated: true,
            user: action.payload,
            error: null
            }
        },
        registerFailed(state,action){
            return{
                ...state,
                error: action.payload,
                user:null,
                isAuthenticated:false
            }
        },
        loadUserRequest(state,action){
            return{
                ...state,
                loading:true
            }
        },
        loadUserSuccess(state,action){
            return{
                ...state,
                loading:false,
                isAuthenticated:true,
                user:action.payload
                
            }
        },
        loadUserFailed(state,action){
            return{
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null
            }
        },
        logoutUserSuccess(state,action){
            return{
               ...state,
                loading: false,
                isAuthenticated: false,
                user: null
            }
        },
        logoutUserFailed(state,action){
            return{
                ...state,
                error:action.payload,
                loading:false
            }
        },
        updateProfileRequest(state,action){
            return{
                ...state,
                loading:true,
                isUpdated:false
            }
        },
        updateProfileSuccess(state,action){
            return{
                ...state,
                loading:false,
                isUpdated:true,
                user:action.payload
            }
        },
        updateProfileFailed(state,action){
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        },
        clearUpdateProfileAction(state, action){
            return {
                ...state,
                isUpdated: false
            }
        },
        updatePasswordRequest(state,action){
            return{
                ...state,
                loading:true
            }
        },
        updatePasswordSuccess(state,action){
            return{
                ...state,
                loading:false,
                isUpdated:true
            }
        },
        updatePasswordFail(state,action){
            return{
                ...state,
                loading:false,
                isUpdated:false,
                error: action.payload
            }
        },
        forgotPasswordRequest(state,action){
            return{
                ...state,
                loading:true,
                message: null
            }
        },
        forgotPasswordSuccess(state,action){
            return{
                ...state,
                loading:false,
                message:action.payload
            }
        },
        forgotPasswordFail(state,action){
            return{
                ...state,
                loading:false,
                error : action.payload
            }
        },
        resetPasswordRequest(state,action){
            return{
                ...state,
                loading: true,
            }
        },
        resetPasswordSuccess(state,action){
            return{
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload
            }
        },
        resetPasswordFail(state,action){
            return{
                ...state,
                loading: false,
                error: action.payload,
                isAuthenticated: false
            }
        }
    }
});

const {reducer,actions} = authSlice;
export const {
    loginRequest,
    loginSuccess,
    loginFailed,
    registerRequest,
    registerSuccess,
    registerFailed,
    clearAuthAction,
    loadUserRequest,
    loadUserSuccess,
    loadUserFailed,
    logoutUserSuccess,
    logoutUserFailed,
    updateProfileRequest,
    updateProfileSuccess,
    updateProfileFailed,
    clearUpdateProfileAction,
    updatePasswordRequest,
    updatePasswordSuccess,
    updatePasswordFail,
    forgotPasswordRequest,
    forgotPasswordSuccess,
    forgotPasswordFail,
    resetPasswordRequest,
    resetPasswordSuccess,
    resetPasswordFail
    } = actions;
    
export default reducer;
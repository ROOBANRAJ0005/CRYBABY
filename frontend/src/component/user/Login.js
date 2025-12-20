import React, { Fragment, useState,useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { login ,clearAuthError} from '../../actions/UserActions';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import { Loader } from '../layouts/Loader';

export const Login = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const {error,isAuthenticated} = useSelector((state)=>state.authState);
  const loading = false;

  const submitHandler = (e) =>{
    e.preventDefault();
    dispatch(login(email,password));
  }

      const redirect = location.search?'/'+location.search.split('=')[1]:'/';

  useEffect(() => {
    if (isAuthenticated) {
        navigate(redirect);
    }

    if (error) {
        toast(error, {
            position: "bottom-center", 
            type: 'error',
            onOpen: () => { dispatch(clearAuthError) } 
        });
    }
}, [error, isAuthenticated, dispatch, navigate,redirect]);


  return (
    <Fragment>
      {loading?<Loader/>:
      <Fragment>
      {/* <div className="row wrapper"> 
        <div className="col-10 col-lg-5">
            <form className="shadow-lg" onSubmit={submitHandler}>
                <h1 className="mb-3">Login</h1>
                <div className="form-group">
                  <label htmlFor="email_field">Email</label>
                  <input
                    type="email"
                    id="email_field"
                    className="form-control"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>
      
                <div className="form-group">
                  <label htmlFor="password_field">Password</label>
                  <input
                    type="password"
                    id="password_field"
                    className="form-control"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                </div>

                <Link to="/forgot/password" className="float-right mb-4">Forgot Password?</Link>
      
                <button
                  id="login_button"
                  type="submit"
                  className="btn btn-block py-3"
                >
                  LOGIN
                </button>

                <Link to ="/register" className="float-right mt-3">New User?</Link>
              </form>
        </div>
      </div> */}
      <div className="flex justify-center items-center min-h-screen px-4">
  <div className="w-full max-w-md">
    <form
      onSubmit={submitHandler}
      className="bg-white shadow-lg rounded-lg p-6"
    >
      <h1 className="text-2xl font-semibold mb-4 text-center">
        Login
      </h1>

      {/* Email */}
      <div className="mb-4">
        <label
          htmlFor="email_field"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email
        </label>
        <input
          type="email"
          id="email_field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Password */}
      <div className="mb-2">
        <label
          htmlFor="password_field"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Password
        </label>
        <input
          type="password"
          id="password_field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Forgot password */}
      <div className="text-right mb-4">
        <Link
          to="/forgot/password"
          className="text-sm text-blue-600 hover:underline"
        >
          Forgot Password?
        </Link>
      </div>

      {/* Login button */}
      <button
        id="login_button"
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
      >
        LOGIN
      </button>

      {/* Register */}
      <div className="text-right mt-4">
        <Link
          to="/register"
          className="text-sm text-gray-600 hover:text-blue-600"
        >
          New User?
        </Link>
      </div>
    </form>
  </div>
</div>

      </Fragment>
       }
     
    </Fragment>
   
  )
}

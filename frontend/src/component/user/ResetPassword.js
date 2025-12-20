import React, { useEffect, useState } from 'react'
import { resetPassword, clearAuthError } from '../../actions/UserActions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export const ResetPassword = () => {

    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const dispatch = useDispatch();
    const { token } = useParams();
    const navigate = useNavigate();
    const {error, isAuthenticated} = useSelector((state)=>state.authState);

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('password',password);
        formData.append('comfirmPassword',confirmPassword);
        dispatch(resetPassword(formData,token));
    }

     useEffect(()=> {
        if(isAuthenticated) {
            toast('Password Reset Success!', {
                type: 'success',
                position: 'bottom-center'
            })
            navigate('/')
            return;
        }
        if(error)  {
            toast(error, {
                position: 'bottom-center',
                type: 'error',
                onOpen: ()=> { dispatch(clearAuthError) }
            })
            return
        }
    },[isAuthenticated, error, dispatch, navigate])

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
  <div className="w-full max-w-md">
    <form
      onSubmit={onSubmitHandler}
      className="bg-white shadow-lg rounded-lg p-6"
    >
      <h1 className="text-2xl font-semibold mb-4 text-center">
        New Password
      </h1>

      {/* Password */}
      <div className="mb-4">
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

      {/* Confirm Password */}
      <div className="mb-6">
        <label
          htmlFor="confirm_password_field"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Confirm Password
        </label>
        <input
          type="password"
          id="confirm_password_field"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Submit Button */}
      <button
        id="new_password_button"
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
      >
        Set Password
      </button>
    </form>
  </div>
</div>

  )
}

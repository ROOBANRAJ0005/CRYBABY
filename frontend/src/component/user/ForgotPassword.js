import React, { useEffect, useState } from 'react'
import { clearAuthError, forgotPassword } from '../../actions/UserActions';
import {useDispatch, useSelector} from 'react-redux'
import { toast } from "react-toastify";

export const ForgotPassword = () => {
    const [email,setEmail] = useState("");
    const dispatch = useDispatch();
    const {message, error} = useSelector((state)=>state.authState);

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('email',email);
        dispatch(forgotPassword(formData));
    }
       useEffect(()=>{
        if(message) {
            toast(message, {
                type: 'success',
                position: 'bottom-center'
            })
            setEmail("");
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
    }, [message, error, dispatch])

  return (
   <div className="flex justify-center items-center min-h-screen px-4">
  <div className="w-full max-w-md">
    <form
      onSubmit={onSubmitHandler}
      className="bg-white shadow-lg rounded-lg p-6"
    >
      <h1 className="text-2xl font-semibold mb-4 text-center">
        Forgot Password
      </h1>

      {/* Email */}
      <div className="mb-6">
        <label
          htmlFor="email_field"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Enter Email
        </label>
        <input
          type="email"
          id="email_field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Submit Button */}
      <button
        id="forgot_password_button"
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
      >
        Send Email
      </button>
    </form>
  </div>
</div>


  )
}

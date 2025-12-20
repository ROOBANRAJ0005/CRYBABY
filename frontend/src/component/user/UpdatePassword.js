import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearAuthError, updatePassword } from '../../actions/UserActions';
import { toast } from 'react-toastify';

export const UpdatePassword = () => {
    const [oldPassword,setOldPassword] = useState("");
    const [newPassword,setNewPassword] = useState("");
    const dispatch = useDispatch();
    const {isUpdated, error} = useSelector((state)=>state.authState);

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('oldPassword',oldPassword);
        formData.append('newPassword',newPassword);
        dispatch(updatePassword(formData));
    } 
    
    useEffect(() => {
        if(isUpdated) {
            toast('Password updated successfully',{
                type: 'success',
                position: "bottom-center"
            })
            setOldPassword("");
            setNewPassword("")
            return;
        }
        if(error)  {
            toast(error, {
                position: "bottom-center",
                type: 'error',
                onOpen: ()=> { dispatch(clearAuthError) }
            })
            return
        }
    },[isUpdated, error, dispatch])
  return (
    <div className="flex justify-center items-center min-h-screen px-4">
  <div className="w-full max-w-md">
    <form
      onSubmit={onSubmitHandler}
      className="bg-white shadow-lg rounded-lg p-6"
    >
      <h1 className="text-2xl font-semibold mt-2 mb-6 text-center">
        Update Password
      </h1>

      {/* Old Password */}
      <div className="mb-4">
        <label
          htmlFor="old_password_field"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Old Password
        </label>
        <input
          type="password"
          id="old_password_field"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* New Password */}
      <div className="mb-6">
        <label
          htmlFor="new_password_field"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          New Password
        </label>
        <input
          type="password"
          id="new_password_field"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Update Button */}
      <button
        type="submit"
        id="update_password"
        className="w-full bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-700 transition mt-4"
      >
        Update Password
      </button>
    </form>
  </div>
</div>

  )
}

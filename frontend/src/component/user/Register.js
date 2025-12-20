import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register,clearAuthError } from '../../actions/UserActions';

export const Register = () => {
    const {error,isAuthenticated} = useSelector((state)=>state.authState);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [userData,setUserData] = useState({
        name:"",
        email:"",
        password:""
    });
    const [avatar,setAvatar] = useState("");
    const [avatarPreview,setAvatarPreview] = useState('/images/avatar.jpg') 

    const changeHandler = (e)=>{
        if(e.target.name === 'avatar'){
            const reader = new FileReader();
            reader.onload = () =>{
                if(reader.readyState === 2){
                    setAvatarPreview(reader.result);
                    setAvatar(e.target.files[0]);
                }
            }
            reader.readAsDataURL(e.target.files[0]);
        }
        else{
             setUserData({...userData,[e.target.name]:e.target.value});

        }
    }

      useEffect(() => {
        if (isAuthenticated) {
            navigate('/')
        }
    
        if (error) {
            toast(error, {
                position: "bottom-center", 
                type: 'error',
                onOpen: () => { dispatch(clearAuthError()) } 
            });
        }
    }, [error, isAuthenticated, dispatch, navigate]);

    const submitHandler = (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('name',userData.name);
        formData.append('email',userData.email);
        formData.append('password',userData.password);
        formData.append('avatar',avatar);
        dispatch(register(formData));
    }

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
  <div className="w-full max-w-md">
    <form
      className="bg-white shadow-lg rounded-lg p-6"
      encType="multipart/form-data"
      onSubmit={submitHandler}
    >
      <h1 className="text-2xl font-semibold mb-4 text-center">
        Register
      </h1>

      {/* Name */}
      <div className="mb-4">
        <label
          htmlFor="name_field"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Name
        </label>
        <input
          type="text"
          id="name_field"
          name="name"
          onChange={changeHandler}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

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
          name="email"
          onChange={changeHandler}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

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
          name="password"
          onChange={changeHandler}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Avatar Upload */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Avatar
        </label>

        <div className="flex items-center gap-4">
          {/* Avatar Preview */}
          <div className="w-14 h-14 rounded-full overflow-hidden border">
            <img
              src={avatarPreview}
              alt="avatar"
              className="w-full h-full object-cover"
            />
          </div>

          {/* File Input */}
          <label className="cursor-pointer">
            <span className="px-4 py-2 bg-gray-100 border rounded-md text-sm hover:bg-gray-200 transition">
              Choose Avatar
            </span>
            <input
              type="file"
              name="avatar"
              onChange={changeHandler}
              className="hidden"
            />
          </label>
        </div>
      </div>

      {/* Register Button */}
      <button
        id="register_button"
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
      >
        REGISTER
      </button>
    </form>
  </div>
</div>

  )
}


import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { toast } from "react-toastify";
import { updateProfile,clearAuthError, clearUpdateProfile } from '../../actions/UserActions';
import { useNavigate } from 'react-router-dom';

export const UpdateProfile = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [avatar,setAvatar] = useState("");
    const [avatarPreview,setAvatarPreview] = useState("/images/avatar.jpg");
    const {user, isUpdated, error} = useSelector((state)=>state.authState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onChangeAvatar = (e)=>{
        const reader = new FileReader();
        reader.onload = ()=>{
            if(reader.readyState === 2){
                setAvatarPreview(reader.result);
                setAvatar(e.target.files[0]);
            }
        }
        
        reader.readAsDataURL(e.target.files[0]);
    }

    useEffect(()=>{
        if(user){
            setName(user.name);
            setEmail(user.email);

            if(user.avatar){
                setAvatarPreview(user.avatar);
            }
        }
        if(isUpdated) {
            toast('Profile updated successfully',{
                type: 'success',
                position: "bottom-center", 
                onOpen: () => dispatch(clearUpdateProfile())
            })
            return;
        }

        if (error) {
            toast(error, {
                position: "bottom-center", 
                type: 'error',
                onOpen: () => { dispatch(clearAuthError()) } 
            });

            return
        }
        
    },[dispatch,isUpdated,error,user])

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('name',name);
        formData.append('email',email);
        formData.append('avatar',avatar);
        dispatch(updateProfile(formData));
        navigate('/myprofile');
    }


  return (
    <div className="flex justify-center items-center min-h-screen px-4">
  <div className="w-full max-w-md">
    <form
      className="bg-white shadow-lg rounded-lg p-6"
      encType="multipart/form-data"
      onSubmit={onSubmitHandler}
    >
      <h1 className="text-2xl font-semibold mt-2 mb-6 text-center">
        Update Profile
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
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Avatar */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Avatar
        </label>

        <div className="flex items-center gap-4">
          {/* Avatar Preview */}
          <div className="w-14 h-14 rounded-full overflow-hidden border">
            <img
              src={avatarPreview}
              alt="Avatar Preview"
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
              onChange={onChangeAvatar}
              className="hidden"
            />
          </label>
        </div>
      </div>

      {/* Update Button */}
      <button
        type="submit"
        id="update_profile"
        className="w-full bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-700 transition mt-4"
      >
        Update
      </button>
    </form>
  </div>
</div>

        
  )
}

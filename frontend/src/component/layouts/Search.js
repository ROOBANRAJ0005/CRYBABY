import React, { useEffect, useState } from 'react'
import { BsCart, BsSearch } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Search = () => {
  const [keyword,setKeyword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { items:cartItems } = useSelector(state => state.cartState)

  const searchHandler = (e) =>{
    e.preventDefault();
    navigate(`/search/${keyword}`);
  }

  const clearKeyword = () =>{
    setKeyword("");
  }

  useEffect(()=>{
    if(location.pathname === '/'){
      clearKeyword();
    }
  },[location]);
  return (
    <>
        <div className="flex flex-grow-1 items-center pl-[70px]">
            <form   onSubmit={searchHandler} className="ml-[-80px] w-[300px] h-[30px] md:ml-0 md:w-[400px] md:h-[40px] lg:w-[800px] lg:h-[60px] border rounded-md  flex items-center" id="search_form">
                {/* Dropdown (desktop only) */}
                <div className="hidden md:block">
                <select
                    className="
                        block 
                        w-[90px] md:w-[90px] lg:w-[100px] 
                        h-[40px] sm:h-[50px] md:h-[40px] lg:h-[60px]
                        bg-[#d99250] 
                        text-black 
                        text-sm md:text-base 
                        bg-[rgba(177,172,168,1)]
                        rounded-lg
                        text-center 
                        px-2 
                        focus:outline-none 
                        transition-all duration-200
                        "              >
                    <option>All</option>
                </select>
                </div>

                {/* Input */}
                <input
                type="search"
                placeholder="Search products..."
                className="flex-1 ml-[0px] h-[20px] sm:h-[20px] md:h-[30px] lg:h-[50px] px-2 py-1 text-sm md:text-base lg:text-lg border-0 outline-none ml-[0px]"
                onChange={(e)=>setKeyword(e.target.value)}
                value={keyword}

                />

                {/* Search Button */}
                <button
                type="submit"
                id="search_submit"
                className=" h-full h-[600px] w-[50px] bg-[rgba(177,172,168,1)]  rounded-sm font-bold text-[14px] flex items-center text-black justify-center rounded-none border-0"
                >
                <BsSearch className="text-lg " id="bsSearch" />
                </button>
            </form>

            {/* Cart (mobile) */}
            <div className="flex md:hidden ms-2 mr-[200px] rounded-xl">
                <Link to="/cart" className="flex items-center">
                <span className="text-[15px] font-light text-[rgb(102,170,114)]">{cartItems.length}</span>
                <BsCart size={25} className="text-[rgb(217,146,80)]" />
                </Link>
            </div>
        </div>
    </>
  )
}

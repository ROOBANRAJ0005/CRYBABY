import React from 'react'
import { Search } from './Search'
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {Dropdown,Image} from 'react-bootstrap';
import { logoutUser } from '../../actions/UserActions';
import { BsCart, BsFacebook, BsInstagram, BsPinterest, BsYoutube } from 'react-icons/bs';
import { Category } from './Category';

export const Header = () => {

      const socialLinks = [
      { to: "/facebook", icon: <BsFacebook className="text-white text-lg" /> },
      { to: "/instagram", icon: <BsInstagram className="text-white text-lg" /> },
      { to: "/youtube", icon: <BsYoutube className="text-white text-lg" /> },
      { to: "/pinterest", icon: <BsPinterest className="text-white text-lg" /> },
      ];
  
      const fontButtons = ["A-", "A", "A+"];
  const {isAuthenticated,user} = useSelector((state)=>state.authState);
  const { items:cartItems } = useSelector(state => state.cartState)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async() =>{
    try {
    await dispatch(logoutUser());
    navigate('/');
  } catch (error) {
    console.error("Logout failed:", error); // <-- should print the error message string now
    alert(error); // optional UI feedback
  }
  }
  return (
    <nav className="navbar row t-[1000px]">
       <div id="top_bar" className="h-[35px] md:h-[50px] lg:h-[60px] mt-[-100px] flex justify-between items-center px-3 bg-[rgba(15, 11, 8, 1)]"    >
                {/* Left Section */}
                <div className="flex items-center">
                    {socialLinks.map(({ to, icon }, index) => (
                        <Link key={index} to={to} className="mr-2">
                            {icon}
                        </Link>
                        ))}
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-1">
                    {fontButtons.map((label, index) => (
                    <button
                        key={index}
                        className="hidden md:inline px-2 py-1 text-sm  bg-[rgba(177,172,168,1)] border border-black rounded hover:bg-gray-100"
                    >
                        {label}
                    </button>
                    ))}

                    <select
                    className="ml-2 px-2 py-1 text-sm border rounded"
                    style={{ width: "90px" }}
                    >
                    <option>ENG</option>
                    <option>TA</option>
                    </select>
                </div>
       </div>
       <hr className='text-white'></hr>
      <div className="col-12 col-md-3">
              <div className="px-3 mt-2">
                <div className="flex flex-col md:flex-row items-start md:items-center w-full">
                    {/* Logo */}
                    <Link to="/" className="mb-2 mb-md-0 flex no-underline text-white">
                    <img src="/images/kitsune.jpg" alt="Logo" className="h-[50px] rounded-circle mt-[-5px]"/>  <span className='mt-[1px] text-[20px] no-underline'>Cry Baby</span>
                    </Link>
                </div>
            </div>
      </div>

      <div className="col-12 col-md-6 mt-2 mt-md-0">
        <Search/>
      </div>


         <div className="col-12 col-md-3 mt-4 mt-md-0 text-center d-flex align-items-center">
          { isAuthenticated ? 
            (
              <Dropdown className='d-inline' >
                  <Dropdown.Toggle variant='default text-white pr-5' id='dropdown-basic'>
                    <figure className='avatar avatar-nav'>
                         <Image width="50px"  src={user.avatar ?? '/images/avatar.jpg'}   />
                    </figure>
                    <span className="ml-[10px] mt-[100px]">{user?.name || 'User'}</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                       { user.role === 'admin' && <Dropdown.Item onClick={() => {navigate('admin/dashboard')}} className='text-dark'>Dashboard</Dropdown.Item> }
                      <Dropdown.Item onClick={() => {navigate('/myprofile')}} className='text-dark'>Profile</Dropdown.Item>
                      <Dropdown.Item onClick={logoutHandler} className='text-danger'>Logout</Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>
            )
          
          :
            <Link to="/login"  className="btn" id="login_btn">Login</Link>
          }
          <div className="hidden md:flex ms-md-3 mr-[200px]">
              <Link to="/cart" className="fw-bold flex items-center">
                  <span className="text-[15px] font-light text-[rgb(102,170,114)]">{cartItems.length}</span>
                  <BsCart size={25} className="text-[rgb(217,146,80)]" />
              </Link> </div>

              
         
        </div>
        <Category/>
    </nav>
  )
}

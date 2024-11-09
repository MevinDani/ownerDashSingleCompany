import React from 'react'
import './NavBar.css'
import logo from "../../images/cubix-logo.png";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { GoMail } from "react-icons/go";
import { IoReorderThree } from "react-icons/io5";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { TbSquareArrowDownFilled } from "react-icons/tb";


const NavBar = () => {
    const navigate = useNavigate()

    const handleHomePage = () => {
        window.scrollTo(0, 0);
        navigate('/admin/home')
    }
    return (
        <div className='NavWrapper'>

            <div className='NavCont'>

                <div className='NavLeft'>
                    <div onClick={() => handleHomePage()}>
                        <img src={logo} alt="" className='LogoImg' />
                    </div>
                    <div className='NavLeftTwo'>
                        {/* <div className='NTwoIcons'><IoReorderThree /></div>
                        <div className='NTwoIcons'><FaExpandArrowsAlt /></div> */}
                        <div className='nav-search'>
                            <input type="text" className='form-control' placeholder='Search' id='nav-srch' />
                            <label className='nav-srch-lens' htmlFor='nav-srch'><IoIosSearch /></label>
                        </div>
                    </div>
                    {/* <span>HR Admin</span> */}
                </div>

                <div className='NavRight'>
                    <div className='nav-bell'>
                        <IoMdNotificationsOutline />
                        <span className='nav-bell-count'>3</span>
                    </div>
                    <div className='nav-bell'>
                        <GoMail />
                        <span className='nav-bell-count'>5</span>
                    </div>
                    <div className='DashNavUser'>
                        <div><FaUserCircle style={{ width: "30px", height: "30px" }} /></div>
                    </div>
                </div>

                {/* <div className='NavDownArrow'>
                    <TbSquareArrowDownFilled style={{ height: "100%", width: "100%", color: "blue" }} />
                </div> */}
            </div>
        </div>
    )
}

export default NavBar
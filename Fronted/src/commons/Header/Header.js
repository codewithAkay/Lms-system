import React, { useEffect } from 'react';
import './Header.css'
import { IoNotificationsSharp } from 'react-icons/io5'
import { FaRegEdit } from 'react-icons/fa'
import { BiLogIn, BiLogOut } from 'react-icons/bi'
import profileImg from '../../resources/profileImg'
import fakeImg from '../../resources/fakeImg'
import { Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaUserAlt, FaShoppingCart, FaBookmark } from 'react-icons/fa'
import {CiTimer} from 'react-icons/ci'
import { useDispatch, useSelector } from 'react-redux';
import { getUser, logout, redirectCoupon } from '../../features/Users/userSlice';
import { store } from '../../features/store';
const Header = () => {
    const user1 = JSON.parse(localStorage.getItem("user"))
    // const user = store.getState().user.user?.data
    const user = useSelector(getUser).data;
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleRemove = () => {
        localStorage.removeItem("user")
        dispatch(logout())
        dispatch(redirectCoupon(''))
        navigate('/')
    }
    
    // useEffect(()=>{
    //     if(!user1){
    //         navigate('/')
    //     }
    // },[navigate, user1])
    console.log(user1,"header")
    return (
        <div className='header-style'>

            <div className='header-icon-container'>
                <IoNotificationsSharp className='notification-icon me-3' />
                <div className='header-badge-style'>4</div>
            </div>
            <div>
                <Dropdown>
                    <Dropdown.Toggle className='dropdown-main' id="dropdown-basic">
                        <img className='header-img' src={ user?.path_profile_picture ? user?.path_profile_picture : fakeImg} alt="" />
                        <span className='ms-3'>{user ? user?.name : 'Usuario Invitado'}</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='pt-0 pb-0'>
                        {
                            user ?
                                <>
                                    <Dropdown.Item onClick={() => navigate('/')} className="dropdown-item-style" >
                                        <div className='sidebar-link-user ps-0 pe-2'>
                                            <p className='mb-0'><FaHome className='side-bar-edit-icon' /></p>
                                            <p className='sidebar-user mb-0'>Inicio</p>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Divider className='mt-0 mb-0' />
                                    <Dropdown.Item onClick={() => navigate('/my-profile')} className="dropdown-item-style" >
                                        <div className='sidebar-link-user ps-0 pe-2'>
                                            <p className='mb-0'><FaUserAlt className='side-bar-edit-icon-header' /></p>
                                            <p className='sidebar-user mb-0'>Mi perfil</p>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Divider className='mt-0 mb-0' />
                                    <Dropdown.Item onClick={() => navigate('/next-sessions')} className="dropdown-item-style" >
                                        <div className='sidebar-link-user ps-0 pe-2'>
                                            <p className='mb-0'><CiTimer className='side-bar-edit-icon' /></p>
                                            <p className='sidebar-user mb-0'>Próximas sesiones</p>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Divider className='mt-0 mb-0' />
                                    <Dropdown.Item onClick={() => navigate('/my-products')} className="dropdown-item-style" >
                                        <div className='sidebar-link-user ps-0 pe-2'>
                                            <p className='mb-0'><FaShoppingCart className='side-bar-edit-icon-header' /></p>
                                            <p className='sidebar-user mb-0'>Mis compras</p>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Divider className='mt-0 mb-0' />
                                    <Dropdown.Item onClick={() => navigate('/favorites')} className="dropdown-item-style" >
                                        <div className='sidebar-link-user ps-0 pe-2'>
                                            <p className='mb-0'><FaBookmark className='side-bar-edit-icon-header' /></p>
                                            <p className='sidebar-user mb-0'>Favoritos</p>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Divider className='mt-0 mb-0' />
                                    <Dropdown.Item onClick={handleRemove} className="dropdown-item-style" >
                                    <div className='sidebar-link-user ps-0 pe-2'>
                                            <p className='mb-0'><BiLogOut className='side-bar-edit-icon' /></p>
                                            <p className='sidebar-user mb-0'>Logout</p>
                                        </div>
                                    </Dropdown.Item>
                                </>
                                :
                                <>
                                    <Dropdown.Item onClick={() => navigate('/login')} className="dropdown-item-style">
                                        <div className='sidebar-link-user ps-0 pe-2'>
                                            <p className='mb-0'><BiLogIn className='side-bar-edit-icon' /></p>
                                            <p className='sidebar-user mb-0'>Iniciar sesión</p>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={() => navigate('/register')} className="dropdown-item-style" >
                                        <div className='sidebar-link-user ps-2 pe-2'>
                                            <p className='mb-0'><FaRegEdit className='side-bar-edit-icon' /></p>
                                            <p className='sidebar-user mb-0'>Registrarse</p>
                                        </div>
                                    </Dropdown.Item>
                                </>
                        }
                    </Dropdown.Menu>
                </Dropdown>
            </div>

        </div>
    );
};

export default Header;
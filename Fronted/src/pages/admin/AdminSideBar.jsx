import React, { useContext, useEffect, useState } from "react";
import {
  CDBSidebar,
  CDBSidebarHeader,
  CDBSidebarMenuItem,
  CDBSidebarContent,
  CDBSidebarMenu,
} from "cdbreact";
import { FaRegEdit } from "react-icons/fa";
import "./Sidebar.css";
import profileImg from "../../resources/profileImg";
import fakeImg from "../../resources/fakeImg";
import { useLocation, useNavigate } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";
import { store } from "../../features/store";
import { getUser } from "../../features/Users/userSlice";
import { useSelector } from "react-redux";
import { Store } from "../../components/Store";


const TeachSideBar = () => {
  const {state,dispatch}=useContext(Store)
  const {UserInfo}=state
  const navigate = useNavigate();
  const location = useLocation();
  const [toggled, setToggled] = useState(false);
  const [active, setActive] = useState(location.pathname);
  // const user = JSON.parse(localStorage.getItem("user"));
  // const user = store.getState().user.user?.data
  const user = useSelector(getUser).data;

  const handleNavigate = (path) => {
    navigate(path);
  };
  console.log(toggled);
  useEffect(() => {
    setActive(location.pathname);
  }, [location]);
  const logouthandle = () => {
    localStorage.removeItem("UserInfo");
    dispatch({ type: "ClearUserInfo" }); // Assuming you have a dispatch function from the store
    navigate('/'); // Navigate to the desired page after logout
  };
  return (
    <CDBSidebar
      className="sidebar-style"
      textColor="black"
      backgroundColor="#ffffff"
    >
      <CDBSidebarHeader
        className="sidebar-head"
        prefix={
          <i onClick={() => setToggled(!toggled)} className="fa fa-bars" />
        }
      >
        <h5 className="sidebar-name">ADMIN</h5>
          <img
            src={ fakeImg}
            className="profileImg-style"
            alt="profile-img"
          />
        <div className="d-flex flex-column ">
        

        
        </div>
      </CDBSidebarHeader>

      <CDBSidebarContent>
        <CDBSidebarMenu className="sidebar-links">
        <CDBSidebarMenuItem
                    className="sidebar-link logout-sidebar"
                    onClick={logouthandle}
                  >
                    <div className="sidebar-link-user">
                      <p className="mb-0">
                        <BiLogIn className="side-bar-icon" />
                      </p>
                      <p className="sidebar-user mb-0">Log out</p>
                    </div>
                  </CDBSidebarMenuItem>
        </CDBSidebarMenu>
      </CDBSidebarContent>
    </CDBSidebar>
  );
};

export default TeachSideBar;

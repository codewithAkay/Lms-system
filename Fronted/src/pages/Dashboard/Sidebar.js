import React, { useEffect, useState } from "react";
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
const Sidebar = () => {
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
  const logouthandle=()=>{
    localStorage.removeItem("UserInfo")
    navigate('/')
    window.location.reload()
  }
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
        <div className="d-flex flex-column align-items-center">
          <h3 className="company-name-style">MIISTICO</h3>
          <img
            src={ user?.path_profile_picture ? user?.path_profile_picture : fakeImg}
            className="profileImg-style"
            alt="profile-img"
          />

          <h5 className="sidebar-name">{user ? user?.name : "Invitado"} </h5>
          <p className="sidebar-user-type">
            {user?.type_user === 0 && 'Usuario'}
            {user?.type_user === 1 && 'Profesional'} 
            {user?.type_user === 2 && 'Admin'} 
          </p>
        </div>
      </CDBSidebarHeader>

      <CDBSidebarContent>
        <CDBSidebarMenu className="sidebar-links">
          {user?.email ? (
            <>
              {toggled && (
                <img
                  src={user ? profileImg : fakeImg}
                  className="profileImg-style-toggled"
                  alt="profile-img"
                />
              )}
              {/* normal user */}
              {user?.type_user === 0 && (
                <>
                  <CDBSidebarMenuItem
                    className={
                      active === "/" ? "active sidebar-link" : "sidebar-link"
                    }
                    onClick={() => handleNavigate("/")}
                    icon="home"
                    iconSize="lg"
                  >
                    Inicio
                  </CDBSidebarMenuItem>
                  <CDBSidebarMenuItem
                    className={
                      active === "/my-profile"
                        ? "active sidebar-link"
                        : "sidebar-link"
                    }
                    onClick={() => handleNavigate("/my-profile")}
                    icon="user"
                    iconSize="lg"
                  >
                    Mi perfil
                  </CDBSidebarMenuItem>
                  <CDBSidebarMenuItem
                    className={
                      active === "/next-sessions"
                        ? "active sidebar-link"
                        : "sidebar-link"
                    }
                    onClick={() => handleNavigate("/next-sessions")}
                    icon="history"
                    iconSize="lg"
                  >
                    Próximas sesiones
                  </CDBSidebarMenuItem>
                  <CDBSidebarMenuItem
                    className={
                      active === "/my-products"
                        ? "active sidebar-link"
                        : "sidebar-link"
                    }
                    onClick={() => handleNavigate("/my-products")}
                    icon="shopping-cart"
                    iconSize="lg"
                  >
                    Mis compras
                  </CDBSidebarMenuItem>
                  <CDBSidebarMenuItem
                    className={
                      active === "/favorites"
                        ? "active sidebar-link"
                        : "sidebar-link"
                    }
                    onClick={() => handleNavigate("/favorites")}
                    icon="bookmark"
                    iconSize="lg"
                  >
                    Favoritos
                  </CDBSidebarMenuItem>
                </>
              )}

              {/* professional user */}
              {/* normal user */}
              {user?.type_user === 1 && (
                <>
                  <CDBSidebarMenuItem
                    className={
                      active === "/"
                        ? "active sidebar-link"
                        : "sidebar-link"
                    }
                    onClick={() => handleNavigate("/")}
                    icon="home"
                    iconSize="lg"
                  >
                    Inicio
                  </CDBSidebarMenuItem>
                  <CDBSidebarMenuItem
                    className={
                      active === "/my-profile"
                        ? "active sidebar-link"
                        : "sidebar-link"
                    }
                    onClick={() => handleNavigate("/my-profile")}
                    icon="user"
                    iconSize="lg"
                  >
                    Mi perfil
                  </CDBSidebarMenuItem>
                  <CDBSidebarMenuItem
                    className={
                      active === "/set-sessions"
                        ? "active sidebar-link"
                        : "sidebar-link"
                    }
                    onClick={() => handleNavigate("/set-sessions")}
                    icon="history"
                    iconSize="lg"
                  >
                    Mis horarios
                  </CDBSidebarMenuItem>
                  <CDBSidebarMenuItem
                    className={
                      active === "/professional-services"
                        ? "active sidebar-link"
                        : "sidebar-link"
                    }
                    onClick={() => handleNavigate("/professional-services")}
                    icon="shopping-cart"
                    iconSize="lg"
                  >
                    Mis servicios
                  </CDBSidebarMenuItem>
                  <CDBSidebarMenuItem
                    className={
                      active === "/professional-calanders"
                        ? "active sidebar-link"
                        : "sidebar-link"
                    }
                    onClick={() => handleNavigate("/professional-calanders")}
                    icon="bookmark"
                    iconSize="lg"
                  >
                    Mi calendario
                  </CDBSidebarMenuItem>
                </>
              )}

              {/* admin */}
              {user?.type_user === 2 && (
                <>
                  <CDBSidebarMenuItem
                    className={
                      active === "/"
                        ? "active sidebar-link"
                        : "sidebar-link"
                    }
                    onClick={() => handleNavigate("/")}
                    icon="home"
                    iconSize="lg"
                  >
                    Inicio
                  </CDBSidebarMenuItem>
                  <CDBSidebarMenuItem
                    className={
                      active === "/admin-users"
                        ? "active sidebar-link"
                        : "sidebar-link"
                    }
                    onClick={() => handleNavigate("/admin-users")}
                    icon="user"
                    iconSize="lg"
                  >
                    Usuarios
                  </CDBSidebarMenuItem>
                  <CDBSidebarMenuItem
                    className={
                      active === "/admin-professionals"
                        ? "active sidebar-link"
                        : "sidebar-link"
                    }
                    onClick={() => handleNavigate("/admin-professionals")}
                    icon="history"
                    iconSize="lg"
                  >
                    Profesionales
                  </CDBSidebarMenuItem>
                  <CDBSidebarMenuItem
                    className={
                      active === "/admin-services"
                        ? "active sidebar-link"
                        : "sidebar-link"
                    }
                    onClick={() => handleNavigate("/admin-services")}
                    icon="shopping-cart"
                    iconSize="lg"
                  >
                    Servicios
                  </CDBSidebarMenuItem>
                  <CDBSidebarMenuItem
                    className={
                      active === "/admin-calender"
                        ? "active sidebar-link"
                        : "sidebar-link"
                    }
                    onClick={() => handleNavigate("/admin-calender")}
                    icon="bookmark"
                    iconSize="lg"
                  >
                    Calendario
                  </CDBSidebarMenuItem>
                  <CDBSidebarMenuItem
                    className={
                      active === "/admin-coupons"
                        ? "active sidebar-link"
                        : "sidebar-link"
                    }
                    onClick={() => handleNavigate("/admin-coupons")}
                    icon="bookmark"
                    iconSize="lg"
                  >
                    Cupones
                  </CDBSidebarMenuItem>
                  <CDBSidebarMenuItem
                    className={
                      active === "/admin-configure"
                        ? "active sidebar-link"
                        : "sidebar-link"
                    }
                    onClick={() => handleNavigate("/admin-configure")}
                    icon="bookmark"
                    iconSize="lg"
                  >
                    Conﬁguración
                  </CDBSidebarMenuItem>
                </>
              )}
            </>
          ) : (
            <>
              {!toggled && (
                <div className="sidebar-items-not-login">
                  <CDBSidebarMenuItem
                    className="sidebar-link logout-sidebar"
                    onClick={() => navigate("/login")}
                  >
                    <div className="sidebar-link-user">
                      <p className="mb-0">
                        <BiLogIn className="side-bar-icon" />
                      </p>
                      <p className="sidebar-user mb-0">Iniciar sesión</p>
                    </div>
                  </CDBSidebarMenuItem>
                  <CDBSidebarMenuItem
                    className="sidebar-link logout-sidebar"
                    onClick={() => navigate("/register")}
                  >
                    <div className="sidebar-link-user">
                      <p className="mb-0">
                        <FaRegEdit className="side-bar-edit-icon" />
                      </p>
                      <p className="sidebar-user mb-0">Registrarse</p>
                    </div>
                  </CDBSidebarMenuItem>
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
                </div>
              )}
              {toggled && (
                <>
                  <div className="sidebar-link-user-toggled">
                    <p onClick={() => navigate("/login")} className="mb-2 mt-3">
                      <BiLogIn className="side-bar-icon " />
                    </p>
                  </div>
                  <div className="sidebar-link-user-toggled">
                    <p
                      onClick={() => navigate("/register")}
                      className="mb-2 mt-3"
                    >
                      <FaRegEdit className="side-bar-edit-icon" />
                    </p>
                  </div>
                </>
              )}
            </>
          )}
        </CDBSidebarMenu>
      </CDBSidebarContent>
    </CDBSidebar>
  );
};

export default Sidebar;

import {Link} from 'react-router-dom'
import headerLogo from './header-logo.png'
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
function Navbar() {
  return (
    <>
   
     <header className="header-nav home2 style_one navbar-scrolltofixed main-menu" style={{zIndex:"99",position:"relative",top: "0px"}}>
          <div className="container">
            <nav>
              <div className="menu-toggle">
                <button type="button" id="menu-btn">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
              <ul id="respMenu" className="ace-responsive-menu" data-menu-style="horizontal">
                <li>
    <Link to="/">
        Home</Link>
</li><li>
    <Link to="/courses">
        Courses
    </Link>
   
</li>
              </ul>
              <ul className="sign_up_btn pull-right dn-smd mt20">
                  <li className="list-inline-item list_s"><Link to="/login" className="btn " data-toggle="modal" data-target="#exampleModalCenter"> <span className="dn-lg"><Person2OutlinedIcon/>Login</span></Link></li>
                  <li className="list-inline-item list_s"><Link to="/registration" className="btn " data-toggle="modal" data-target="#exampleModalCenter"> <span className="dn-lg"><Person2OutlinedIcon/>Registration</span></Link></li>
              </ul>
            </nav>
          </div>
        </header>
        <div id="page" className="stylehome1 h0">
          <div className="mobile-menu">
            <div className="header stylehome1">
              <div className="main_logo_home2">
                <img className="nav_logo_img img-fluid float-left mt20" src={headerLogo        } alt="Edumy"/>
                <span>ExarthDumy</span>
              </div>
              <ul className="menu_bar_home2">
                <li className="list-inline-item">
                  <div className="search_overlay">
                    <a id="search-button-listener2" className="mk-search-trigger mk-fullscreen-trigger" href="#">
                      <div id="search-button2"><i className="flaticon-magnifying-glass"></i></div>
                    </a>
                  </div>
                </li>
                <li className="list-inline-item"><a href="#menu"><span></span></a></li>
              </ul>
            </div>
          </div>
          <nav id="menu" className="stylehome1">
            <ul>
              <li>
    <Link  to="/">
        Home
    </Link>
   
</li>
<li>
    <Link  to="/courses">
        Courses
    </Link>
</li>
            </ul>
          </nav>
        </div>
    </>
  )
}

export default Navbar

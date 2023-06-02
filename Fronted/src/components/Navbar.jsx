import {Link} from 'react-router-dom'
import headerLogo from './header-logo.png'

function Navbar() {
  return (
    <>
   
     <header class="header-nav home2 style_one navbar-scrolltofixed main-menu" style={{zIndex:"99",position:"relative",top: "0px"}}>
          <div class="container">
            <nav>
              <div class="menu-toggle">
                <button type="button" id="menu-btn">
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
              </div>
              <ul id="respMenu" class="ace-responsive-menu" data-menu-style="horizontal">
                <li>
    <Link to="/">
        Home</Link>
</li><li>
    <Link to="/courses">
        Courses
    </Link>
   
</li><li>
    <Link to="/events">
        Events
    </Link>
   
</li><li>
    <Link to="/pages">
        Pages
    </Link>
  
</li><li>
    <Link to="/blog">
        Blog
    </Link>
   
</li><li>
    <Link to="/contact">Contact</Link>
</li>
              </ul>
              <ul class="sign_up_btn pull-right dn-smd mt20">
                <li class="list-inline-item"><Link to="#" class="btn btn-md"><i class="flaticon-megaphone"></i><span class="dn-md">Become an Instructor</span></Link></li>
                  <li class="list-inline-item list_s"><Link to="/login" class="btn flaticon-user" data-toggle="modal" data-target="#exampleModalCenter"> <span class="dn-lg">Login</span></Link></li>
                  <li class="list-inline-item list_s"><Link to="/registration" class="btn flaticon-user" data-toggle="modal" data-target="#exampleModalCenter"> <span class="dn-lg">Registration</span></Link></li>
              </ul>
            </nav>
          </div>
        </header>
        <div id="page" class="stylehome1 h0">
          <div class="mobile-menu">
            <div class="header stylehome1">
              <div class="main_logo_home2">
                <img class="nav_logo_img img-fluid float-left mt20" src={headerLogo        } alt="Edumy"/>
                <span>ExarthDumy</span>
              </div>
              <ul class="menu_bar_home2">
                <li class="list-inline-item">
                  <div class="search_overlay">
                    <a id="search-button-listener2" class="mk-search-trigger mk-fullscreen-trigger" href="#">
                      <div id="search-button2"><i class="flaticon-magnifying-glass"></i></div>
                    </a>
                  </div>
                </li>
                <li class="list-inline-item"><a href="#menu"><span></span></a></li>
              </ul>
            </div>
          </div>
          <nav id="menu" class="stylehome1">
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
<li>
    <Link  to="/events">
        Events
    </Link>
</li>
<li>
    <Link  to="/blog">
        Blog
    </Link>
</li>
<li>
    <Link  to="/contact">
        Contact
    </Link>
</li>
<li>
    <Link  to="/pages">
        Pages
    </Link>
</li>
            </ul>
          </nav>
        </div>
    </>
  )
}

export default Navbar

import {Link} from 'react-router-dom'
import headerLogo from './header-logo.png'

function Navbar() {
  return (
    <>
    <div class="header_top home2">
          <div class="container">
            <div class="row">
              <div class="col-xl-12">
                <div class="ht_left_widget home2 float-left">
                  <ul>
                    <li class="list-inline-item">
                      <div class="logo-widget">
                        <img class="img-fluid" src={headerLogo} alt="Edumy"/>
                        <span>ExarthDumy</span>
                      </div>
                    </li>
                      <li class="list-inline-item">
                        <div class="header_top_lang_widget">
                          <div class="ht-widget-container">
                            <div class="vertical-wrapper">
                              <h2 class="title-vertical">
                                <span class="text-title">Library</span> <i class="fa fa-angle-down show-down" aria-hidden="true"></i>
                              </h2>
                              <div class="content-vertical">
                                <aside id="block-region-library-list" class="block-region" data-blockregion="library-list" data-droptarget="1"><div id="inst166" class=" block_cocoon_library_list block list_block " role="navigation" data-block="cocoon_library_list">
    <a href="#sb-11" class="sr-only sr-only-focusable">Skip [Cocoon] Library List</a>





  <div class="">
    
    


          <ul id="vertical-menu" class="mega-vertical-menu nav navbar-nav">
                      <li><a href="http://demo.createdbycocoon.com/moodle/edumy/2/course/index.php?categoryid=3">Design</a></li>
                      <li><a href="http://demo.createdbycocoon.com/moodle/edumy/2/course/index.php?categoryid=4">Business</a></li>
                      <li><a href="http://demo.createdbycocoon.com/moodle/edumy/2/course/index.php?categoryid=5">Software Development</a></li>
                      <li><a href="http://demo.createdbycocoon.com/moodle/edumy/2/course/index.php?categoryid=6">Web Development</a></li>
                      <li><a href="http://demo.createdbycocoon.com/moodle/edumy/2/course/index.php?categoryid=7">Photography</a></li>
                      <li><a href="http://demo.createdbycocoon.com/moodle/edumy/2/course/index.php?categoryid=8">Audio + Music</a></li>
                      <li><a href="http://demo.createdbycocoon.com/moodle/edumy/2/course/index.php?categoryid=9">Marketing</a></li>
                      <li><a href="http://demo.createdbycocoon.com/moodle/edumy/2/course/index.php?categoryid=10">3D + Animation</a></li>
</ul>

    
  </div>

    <span id="sb-11"></span>

</div></aside>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="list-inline-item">
                        <div class="ht_search_widget">
                          <div class="header_search_widget home2">
                            <aside id="block-region-navbar" class="block-region" data-blockregion="navbar" data-droptarget="1"><div id="inst210" class="block_cocoon_globalsearch_n block ccn-alt-blk-actm" role="complementary" data-block="cocoon_globalsearch_n" aria-label="[Cocoon] Global search (navbar)">





  <div class="">
    <form class="form-inline mailchimp_form" action="http://demo.createdbycocoon.com/moodle/edumy/2/search/index.php">
      <fieldset>
        <input id="searchform_search" name="q" class="form-control mb-2 mr-sm-2" placeholder="Search for the software or skills you want to learn" type="text" size="15"/><input type="hidden" name="context" value="2"/>
          <button type="submit" class="btn btn-primary mb-2"><span class="flaticon-magnifying-glass"></span></button>
    </fieldset>
    </form>
    
    
  </div>


</div></aside>
                          </div>
                        </div>
                      </li>
                  </ul>
                </div>
                <div class="ht_right_widget float-right">
                  <ul class="text-right">
                    <li class="list-inline-item"><a href="tel:(56) 123 456 789">(56) 123 456 789</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
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

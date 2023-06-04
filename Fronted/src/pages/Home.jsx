import { useReducer } from 'react'
import './home.css'
import {Link} from 'react-router-dom'


const reducer=(state,action)=>{
	switch(action.type){
	  case "FETCH_REQUEST":
		return {...state,loading:true}
	  case "FETCH_SUCCESS":
		return {...state,loading:false,product:action.payload}
	  case "FETCH_FAILURE":
		return{...state,loading:false,product:action.payload}  
	  default :
	  return " "  
	}
	}
	const initialtState={
		product:[],
		loading:true,
		error:''
	  }
function Home() {
	const [{loading,error,product},dispatch]=useReducer(reducer,initialtState)
	useEffect(()=>{
		const fetchData=async()=>{
		 dispatch({type:"FETCH_REQUEST"})
		 try {
		   const result=await axios.get('http://localhost:4000/fetchAll')
		   dispatch({type:"FETCH_SUCCESS",payload:result.data})
		 } catch (error) {
		   dispatch({type:"FETCH_FAILURE",payload:error.message})
		 }
		}
		fetchData()
	   },[])
    return (
        <>
       <div id="inst204" className="block_cocoon_slider_2 block" role="complementary" data-block="cocoon_slider_2">
  <Link to="#sb-7" className="sr-only sr-only-focusable">Skip [Cocoon] Slider style 2</Link>
  <div className="">
    <div className="home2-slider">
      <div className="container-fluid p0">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-banner-wrapper">
              <div className="banner-style-one owl-theme owl-carousel banner-style-one--multiple owl-loaded">
                <div className="owl-stage-outer">
                  <div className="owl-stage">
                    <div className="owl-item active">
                      <div className="slide slide-one sh2" style={{
                        backgroundImage: 'url(http://demo.createdbycocoon.com/moodle/edumy/2/pluginfile.php/371/block_cocoon_slider_2/slides/2/5.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        width: '100vw', // Set the width to cover the full viewport width
                        height: '100vh', // Set the height to cover the full viewport height
                      }}>
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-12 text-center">
                              <h3 className="banner-title ">Start Investing in You</h3>
                              <p className='animated-text'>Technology is bringing a massive wave of evolution in learning things in different ways.</p>
                              <div className="btn-block animated-text">
                                <Link to="/registration" className="banner-btn">Ready to Get Started?</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-nav disabled">
                  <div className="owl-prev">
                    <i className="fa fa-angle-left"></i>
                  </div>
                  <div className="owl-next">
                    <i className="fa fa-angle-right"></i>
                  </div>
                </div>
                <div className="owl-dots">
                  <div className="owl-dot active">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <span id="sb-7"></span>
</div>

<section id="our-top-courses" class="our-courses">
  <div class="container">
    <div class="row">
      <div class="col-lg-6 offset-lg-3">
        <div class="main-title text-center">
          <h3 class="mt0">Our Top Courses</h3>
        </div>
      </div>
    </div>
    <div class="row">


            <div class="col-md-6 col-lg-4 col-xl-3">
							<div class="top_courses">
              <Link to="http://demo.createdbycocoon.com/moodle/edumy/2/course/view.php?id=11">
								<div class="thumb">

									<img class="img-whp" src="http://demo.createdbycocoon.com/moodle/edumy/2/pluginfile.php/156/course/overviewfiles/t8.jpg" alt="Fashion Photography From Professional"/>
									<div class="overlay">
										<div class="tag">Top Seller</div>
										<span class="tc_preview_course">Preview Course</span>
									</div>
								</div>
								<div class="details">
									<div class="tc_content">
                  <p>Updated 21/12/19</p>
										<h5>Fashion Photography From Professional</h5>
										<ul class="tc_review">
											<li class="list-inline-item"><i class="fa fa-star"></i></li>
											<li class="list-inline-item"><i class="fa fa-star"></i></li>
											<li class="list-inline-item"><i class="fa fa-star"></i></li>
											<li class="list-inline-item"><i class="fa fa-star"></i></li>
											<li class="list-inline-item"><i class="fa fa-star"></i></li>
										</ul>
									</div>
									<div class="tc_footer">
										<ul class="tc_meta float-left">
											<li class="list-inline-item"><i class="flaticon-profile"></i></li>
											<li class="list-inline-item">2</li>
											<li class="list-inline-item"><i class="flaticon-comment"></i></li>
											<li class="list-inline-item">5</li>
										</ul>
									</div>
								</div></Link>
							</div>
						</div>


            

            <div class="col-md-6 col-lg-4 col-xl-3">
							<div class="top_courses">
              <Link to="http://demo.createdbycocoon.com/moodle/edumy/2/course/view.php?id=4">
								<div class="thumb">

									<img class="img-whp" src="http://demo.createdbycocoon.com/moodle/edumy/2/pluginfile.php/146/course/overviewfiles/t1.jpg" alt="Introduction Web Design &amp; HTML"/>
									<div class="overlay">
										<div class="tag">Top Seller</div>
										<span class="tc_preview_course">Preview Course</span>
									</div>
								</div>
								<div class="details">
									<div class="tc_content">
                  <p>Updated 21/12/19</p>
										<h5>Introduction Web Design &amp; HTML</h5>
										<ul class="tc_review">
											<li class="list-inline-item"><i class="fa fa-star"></i></li>
											<li class="list-inline-item"><i class="fa fa-star"></i></li>
											<li class="list-inline-item"><i class="fa fa-star"></i></li>
											<li class="list-inline-item"><i class="fa fa-star"></i></li>
											<li class="list-inline-item"><i class="fa fa-star"></i></li>
										</ul>
									</div>
									<div class="tc_footer">
										<ul class="tc_meta float-left">
											<li class="list-inline-item"><i class="flaticon-profile"></i></li>
											<li class="list-inline-item">0</li>
											<li class="list-inline-item"><i class="flaticon-comment"></i></li>
											<li class="list-inline-item">5</li>
										</ul>
									</div>
								</div></Link>
							</div>
						</div>


            

            <div class="col-md-6 col-lg-4 col-xl-3">
							<div class="top_courses">
              <Link to="http://demo.createdbycocoon.com/moodle/edumy/2/course/view.php?id=10">
								<div class="thumb">

									<img class="img-whp" src="http://demo.createdbycocoon.com/moodle/edumy/2/pluginfile.php/155/course/overviewfiles/t7.jpg" alt="How to Make Beautiful Landscape Photos?"/>
									<div class="overlay">
										<div class="tag">Top Seller</div>
										<span class="tc_preview_course">Preview Course</span>
									</div>
								</div>
								<div class="details">
									<div class="tc_content">
                  <p>Updated 28/12/19</p>
										<h5>How to Make Beautiful Landscape Photos?</h5>
										<ul class="tc_review">
											<li class="list-inline-item"><i class="fa fa-star"></i></li>
											<li class="list-inline-item"><i class="fa fa-star"></i></li>
											<li class="list-inline-item"><i class="fa fa-star"></i></li>
											<li class="list-inline-item"><i class="fa fa-star"></i></li>
											<li class="list-inline-item"><i class="fa fa-star"></i></li>
										</ul>
									</div>
									<div class="tc_footer">
										<ul class="tc_meta float-left">
											<li class="list-inline-item"><i class="flaticon-profile"></i></li>
											<li class="list-inline-item">0</li>
											<li class="list-inline-item"><i class="flaticon-comment"></i></li>
											<li class="list-inline-item">0</li>
										</ul>
									</div>
								</div></Link>
							</div>
						</div>


            

            <div class="col-md-6 col-lg-4 col-xl-3">
							<div class="top_courses">
              <Link to="http://demo.createdbycocoon.com/moodle/edumy/2/course/view.php?id=8">
								<div class="thumb">

									<img class="img-whp" src="http://demo.createdbycocoon.com/moodle/edumy/2/pluginfile.php/153/course/overviewfiles/t5.jpg" alt="Design Instruments for Communication"/>
									<div class="overlay">
										<div class="tag">Top Seller</div>
										<span class="tc_preview_course">Preview Course</span>
									</div>
								</div>
								<div class="details">
									<div class="tc_content">
                  <p>Updated 29/12/19</p>
										<h5>Design Instruments for Communication</h5>
										<ul class="tc_review">
											<li class="list-inline-item"><i class="fa fa-star"></i></li>
											<li class="list-inline-item"><i class="fa fa-star"></i></li>
											<li class="list-inline-item"><i class="fa fa-star"></i></li>
											<li class="list-inline-item"><i class="fa fa-star"></i></li>
											<li class="list-inline-item"><i class="fa fa-star"></i></li>
										</ul>
									</div>
									<div class="tc_footer">
										<ul class="tc_meta float-left">
											<li class="list-inline-item"><i class="flaticon-profile"></i></li>
											<li class="list-inline-item">1</li>
											<li class="list-inline-item"><i class="flaticon-comment"></i></li>
											<li class="list-inline-item">0</li>
										</ul>
									</div>
								</div></Link>
							</div>
						</div>


            

            <div class="col-md-6 col-lg-4 col-xl-3">
							<div class="top_courses">
              <Link to="http://demo.createdbycocoon.com/moodle/edumy/2/course/view.php?id=9">
								<div class="thumb">

									<img class="img-whp" src="http://demo.createdbycocoon.com/moodle/edumy/2/pluginfile.php/154/course/overviewfiles/t6.jpg" alt="How to be a DJ? Make Electronic Music"/>
									<div class="overlay">
										<div class="tag">Top Seller</div>
										<span class="tc_preview_course">Preview Course</span>
									</div>
								</div>
								<div class="details">
									<div class="tc_content">
                  <p>Updated 28/12/19</p>
										<h5>How to be a DJ? Make Electronic Music</h5>
										<ul class="tc_review">
											<li class="list-inline-item"><i class="fa fa-star"></i></li>
											<li class="list-inline-item"><i class="fa fa-star"></i></li>
											<li class="list-inline-item"><i class="fa fa-star"></i></li>
											<li class="list-inline-item"><i class="fa fa-star"></i></li>
											<li class="list-inline-item"><i class="fa fa-star"></i></li>
										</ul>
									</div>
									<div class="tc_footer">
										<ul class="tc_meta float-left">
											<li class="list-inline-item"><i class="flaticon-profile"></i></li>
											<li class="list-inline-item">0</li>
											<li class="list-inline-item"><i class="flaticon-comment"></i></li>
											<li class="list-inline-item">0</li>
										</ul>
									</div>
								</div></Link>
							</div>
						</div>


            

            <div class="col-md-6 col-lg-4 col-xl-3">
							<div class="top_courses">
              <Link to="http://demo.createdbycocoon.com/moodle/edumy/2/course/view.php?id=5">
								<div class="thumb">

									<img class="img-whp" src="http://demo.createdbycocoon.com/moodle/edumy/2/pluginfile.php/148/course/overviewfiles/t2.jpg" alt="Designing a Responsive Mobile Website using Muse"/>
									<div class="overlay">
										<div class="tag">Top Seller</div>
										<span class="tc_preview_course">Preview Course</span>
									</div>
								</div>
								<div class="details">
									<div class="tc_content">
                  <p>Updated 21/12/19</p>
										<h5>Designing a Responsive Mobile Website using Muse</h5>
										<ul class="tc_review">
											<li class="list-inline-item"><i class="fa fa-star"></i></li>
											<li class="list-inline-item"><i class="fa fa-star"></i></li>
											<li class="list-inline-item"><i class="fa fa-star"></i></li>
											<li class="list-inline-item"><i class="fa fa-star"></i></li>
											<li class="list-inline-item"><i class="fa fa-star"></i></li>
										</ul>
									</div>
									<div class="tc_footer">
										<ul class="tc_meta float-left">
											<li class="list-inline-item"><i class="flaticon-profile"></i></li>
											<li class="list-inline-item">0</li>
											<li class="list-inline-item"><i class="flaticon-comment"></i></li>
											<li class="list-inline-item">5</li>
										</ul>
									</div>
								</div></Link>
							</div>
						</div>


            

            <div class="col-md-6 col-lg-4 col-xl-3">
							<div class="top_courses">
              <Link to="http://demo.createdbycocoon.com/moodle/edumy/2/course/view.php?id=6">
								<div class="thumb">

									<img class="img-whp" src="http://demo.createdbycocoon.com/moodle/edumy/2/pluginfile.php/150/course/overviewfiles/t3.jpg" alt="Adobe XD: Prototyping Tips and Tricks"/>
									<div class="overlay">
										<div class="tag">Top Seller</div>
										<span class="tc_preview_course">Preview Course</span>
									</div>
								</div>
								<div class="details">
									<div class="tc_content">
                  <p>Updated 21/12/19</p>
										<h5>Adobe XD: Prototyping Tips and Tricks</h5>
										<ul class="tc_review">
											<li class="list-inline-item"><i class="fa fa-star"></i></li>
											<li class="list-inline-item"><i class="fa fa-star"></i></li>
											<li class="list-inline-item"><i class="fa fa-star"></i></li>
											<li class="list-inline-item"><i class="fa fa-star"></i></li>
											<li class="list-inline-item"><i class="fa fa-star"></i></li>
										</ul>
									</div>
									<div class="tc_footer">
										<ul class="tc_meta float-left">
											<li class="list-inline-item"><i class="flaticon-profile"></i></li>
											<li class="list-inline-item">0</li>
											<li class="list-inline-item"><i class="flaticon-comment"></i></li>
											<li class="list-inline-item">5</li>
										</ul>
									</div>
								</div></Link>
							</div>
						</div>


            

            <div class="col-md-6 col-lg-4 col-xl-3">
							<div class="top_courses">
              <Link to="http://demo.createdbycocoon.com/moodle/edumy/2/course/view.php?id=7">
								<div class="thumb">

									<img class="img-whp" src="http://demo.createdbycocoon.com/moodle/edumy/2/pluginfile.php/152/course/overviewfiles/t4.jpg" alt="Sketch: Creating Responsive SVG"/>
									<div class="overlay">
										<div class="tag">Top Seller</div>
										<span class="tc_preview_course">Preview Course</span>
									</div>
								</div>
								<div class="details">
									<div class="tc_content">
                  <p>Updated 21/12/19</p>
										<h5>Sketch: Creating Responsive SVG</h5>
										<ul class="tc_review">
											<li class="list-inline-item"><i class="fa fa-star"></i></li>
											<li class="list-inline-item"><i class="fa fa-star"></i></li>
											<li class="list-inline-item"><i class="fa fa-star"></i></li>
											<li class="list-inline-item"><i class="fa fa-star"></i></li>
											<li class="list-inline-item"><i class="fa fa-star"></i></li>
										</ul>
									</div>
									<div class="tc_footer">
										<ul class="tc_meta float-left">
											<li class="list-inline-item"><i class="flaticon-profile"></i></li>
											<li class="list-inline-item">1</li>
											<li class="list-inline-item"><i class="flaticon-comment"></i></li>
											<li class="list-inline-item">5</li>
										</ul>
									</div>
								</div></Link>
							</div>
						</div>


                    <div class="col-lg-6 offset-lg-3">
					<div class="courses_all_btn text-center">
						<Link class="btn btn-transparent" to="/courses">View all courses</Link>
					</div>
				</div>
 			</div>
		</div>
	</section>





        </>
    )
}

export default Home

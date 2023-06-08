import { useEffect, useReducer } from 'react'
import './home.css'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

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
  const navigate=useNavigate()
  const handleClick=(item)=>{
    // Navigate to the new path and pass the data as state
    navigate('/courseview', { state: { data: item } });
     }
	useEffect(()=>{
		const fetchData=async()=>{
		 dispatch({type:"FETCH_REQUEST"})
		 try {
		   const result=await axios.get('http://localhost:5000/fetchcourse')
		   dispatch({type:"FETCH_SUCCESS",payload:result.data})
		 } catch (error) {
		   dispatch({type:"FETCH_FAILURE",payload:error.message})
		 }
		}
		fetchData()
	   },[dispatch])

	   
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

        {product.map((item)=>(

			<div class="col-md-6 col-lg-4 col-xl-3">
							<div class="top_courses">
              {/* <Link to={handleClick}> */}
								<div class="thumb" onClick={()=>{handleClick(item)}}>
									<img class="img-whp" height='130px' src={item.thumbnail_image} alt="Fashion Photography From Professional"/>
									<div class="overlay">
										<div class="tag">Top Seller</div>
										<span class="tc_preview_course">Preview Course</span>
									</div>
								</div>
								<div class="details">
									<div class="tc_content">
                  <p>Updated {item.createdAt}</p>
										<h5>{item.name}</h5>
										
									</div>
									
								</div>
                {/* </Link> */}
							</div>
						</div>
				))}



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

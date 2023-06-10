import { Button } from '@mui/material';
import axios from 'axios';
import React, { useContext, useEffect, useReducer, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Store } from '../components/Store';
import StripeCheckout from 'react-stripe-checkout'
function CoursesView() {
  const {state,dispatch}=useContext(Store)
  const {UserInfo}=state
  const location = useLocation();
  const { data } = location.state;
  const [lesson,setLesson]=useState([])
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

const handleViews =async(productId) => {
  setIsDropdownOpen(!isDropdownOpen); // Toggle the dropdown state
  // Additional logic if needed
  const course={id:productId}
  try {
    const {data}=await axios.post("http://localhost:5000/fetchOnlylesson",course)
    setLesson(data)
   } catch (error) {
    toast.error(error.message)
   }
};

const handletoken=async(token,address)=>{
  try {
    const resule=await axios.post('http://localhost:5000/checkout',{token,data,id:UserInfo._id})
    
    if(resule.status===200){
      toast("Success payment is Completed",{type:"success"})
    }else{
      toast("Failure payment is not Completed",{type:"error"})
    } 
  } catch (error) {
    toast.error(error.message)
  }
}
  return (
    <>
   <div id="ccn-main-region">
          <div class="container">
            <div class="row">
                <div class="col-md-12 col-lg-8 col-xl-9">
              <div class="has-blocks" aria-label="Content">
                  <aside id="block-region-above-content" class="block-region" data-blockregion="above-content" data-droptarget="1"><div id="inst107" class=" block_cocoon_course_intro block " role="complementary" data-block="cocoon_course_intro" aria-label="[Cocoon] Course Intro">
  <div class="">
        <div class="cs_row_one ">
  <div class="cs_ins_container">
  <div class="ccn-identify-course-intro">
    <div class="cs_instructor">
      <ul class="cs_instrct_list float-left mb0">
        <li class="list-inline-item"><strong>{data.createdAt.split('T')[0]} </strong></li>
      </ul>
    </div>
    <h3 class="cs_title ">{data.name}</h3>
    <ul class="cs_review_enroll">
      <li class="list-inline-item" style={{color:'grey',fontSize:'30px'}}>Purchased to Start Course</li>
    </ul>
    </div>
    <div class="courses_big_thumb">
      <div class="thumb">
        <img style={{maxHeight:"300px",width:"600px"}} src={data.thumbnail_image} alt="Course Image" />
      </div>
    </div>
  </div>
</div>
    
    
  </div>


</div><div id="inst108" class=" block_cocoon_course_overview block " role="complementary" data-block="cocoon_course_overview">

    <a href="#sb-7" class="sr-only sr-only-focusable">Skip Course Overview</a>





  <div class="">
    
        <div class="cs_row_two">
          <div class="cs_overview">
            <h4 class="title">Course Overview</h4>
            <h4 class="subtitle">Course Description</h4>
<p class="mb30">{data.description} </p>
<h4 class="subtitle">Detail Description</h4>
<ul class="cs_course_syslebus">
    <li>
        <p>{data.detail_description}</p>
    </li>
   
</ul>

<h4 class="subtitle">Requirements</h4>
<ul class="list_requiremetn">
    <li><i class="fa fa-circle"></i>
        <p>If you dont know the code its Fine</p>
    </li>
    <li><i class="fa fa-circle"></i>
        <p>You will Learn The Course from Scratch. </p>
    </li>
    <li><i class="fa fa-circle"></i>
        <p>Here we provide quality Course with Easy Methods and Practise</p>
    </li>
    
</ul>
          </div>
        </div>
    
    
  </div>

    <span id="sb-7"></span>

</div></aside>
                <div id="ccn-main">
                    <div class="cs_row_three">
                      <div class="course_content">
                        <div class="cc_headers">
                          <h4 class="title">Course Content</h4>
                          <ul class="course_schdule float-right">
                            <li class="list-inline-item"><a href="#">Start Date: 22/12/19 </a></li>
                          </ul>
                        </div>
                        <br/>
                  <span class="notifications" id="user-notifications"></span>
                  <span id="maincontent"></span>
                  <form action="." method="get"><div><input type="hidden" id="completion_dynamic_change" name="completion_dynamic_change" value="0"/></div></form><div class="course-content"><h2 class="accesshide">Course Lessons</h2><div class="ccn_course_content topics"><div id="section-0" class="section main clearfix details" role="region" aria-label="General"><div id="accordion" class="panel-group cc_tab">
              <div class="panel">
              <Button onClick={() => handleViews(data._id)}>
      {isDropdownOpen ? 'Close' : 'View'}
    </Button>
    {
      isDropdownOpen && 
               <div class="panel-heading">
                {lesson.map((item)=>(
                <h4 class="panel-title">
                  <a href="#" class="accordion-toggle link" data-toggle="collapse" data-parent="#accordion">{item.name}</a>
                </h4>
                  )) 
                }
                </div>
              }
                </div>
               

                </div></div></div></div>
                  
                  
                      </div>
                    </div>
                </div>
                  <aside id="block-region-below-content" class="block-region" data-blockregion="below-content" data-droptarget="1"><div id="inst109" class=" block_cocoon_course_instructor block " role="complementary" data-block="cocoon_course_instructor">

    <a href="#sb-8" class="sr-only sr-only-focusable">Skip About the instructor</a>





  <div class="">
    


      
    
    
  </div>

    <span id="sb-8"></span>

</div><div id="inst110" class=" block_comments block " role="complementary" data-block="comments">

    <a href="#sb-9" class="sr-only sr-only-focusable">Skip Comments</a>





    {/* <span id="sb-9"></span> */}

</div><div id="inst147" class=" block_cocoon_more_courses block " role="complementary" data-block="cocoon_more_courses">

    <a href="#sb-10" class="sr-only sr-only-focusable">Skip [Cocoon] Related courses</a>


    <span id="sb-10"></span>

</div></aside>
              </div>
              </div>
              <div class="col-lg-4 col-xl-3">
                <div class="d-print-none" aria-label="Blocks">
                  <aside id="block-region-side-pre" class="block-region" data-blockregion="side-pre" data-droptarget="1"><div id="inst111" class=" block_cocoon_course_details block " role="complementary" data-block="cocoon_course_details" aria-label="[Cocoon] Course Enrolment">





                  <div className="">
  <div className="instructor_pricing_widget">
    <div className="price">
      <span>Price</span> ${data.price} <small>USD</small>
    </div>
    {UserInfo ? (
      <StripeCheckout 
      stripeKey='pk_test_51NGxZtJqBgewUbeBi5Kbi9ba2INMfEqsDWR0uXfWE71XeUaazaNlOypIHHbiDfqEPH45vIfJ6sthQW5uMfxKSFvQ009OIQIfzL'
      token={handletoken}
      amount={data.price*100}
      name={data.name}
      billingAddress
      />
    ) : (
      <Link to="/choice" className="cart_btnss">
        Log in to Buy &amp; Enrol Now
      </Link>
    )}
    <div className="ccn-buy-access">Paid course entry</div>
    <ul className="price_quere_list text-left">
      <li>
        <div className="ccn-course-details-item">
          <span className="flaticon-play-button-1"></span>Video of Course
        </div>
      </li>
      <li>
        <div className="ccn-course-details-item">
          <span className="flaticon-download"></span>Many Download Resourses
        </div>
      </li>
      <li>
        <div className="ccn-course-details-item">
          <span className="flaticon-key-1"></span>Full lifetime access
        </div>
      </li>
      <li>
        <div className="ccn-course-details-item">
          <span className="flaticon-responsive"></span>Access on mobile and TV
        </div>
      </li>
      <li>
        <div className="ccn-course-details-item">
          <span className="flaticon-award"></span>Exercise
        </div>
      </li>
    </ul>
  </div>
</div>



</div><div id="inst112" class=" block_cocoon_course_features block " role="complementary" data-block="cocoon_course_features">

    <a href="#sb-2" class="sr-only sr-only-focusable">Skip Course Features</a>





  <div class="">
    
        <div class="feature_course_widget">
          <ul class="list-group">
            <h4 class="title">Course Features</h4>
            <li class="d-flex justify-content-between align-items-center">
                Lectures <span class="float-right">6</span>
            </li>
            
            <li class="d-flex justify-content-between align-items-center">
                Duration <span class="float-right">3 hours</span>
            </li>
            <li class="d-flex justify-content-between align-items-center">
                Skill level <span class="float-right">All level</span>
            </li>
            <li class="d-flex justify-content-between align-items-center">
                Language <span class="float-right">English</span>
            </li>
            <li class="d-flex justify-content-between align-items-center">
                Assessments <span class="float-right">Yes</span>
            </li>
          </ul>
        </div>
    
    
  </div>

    <span id="sb-2"></span>

</div><div id="inst113" class=" block_tags block " role="complementary" data-block="tags">

    <a href="#sb-3" class="sr-only sr-only-focusable">Skip Tags</a>

    <span id="sb-3"></span>

</div><div id="inst114" class=" block_cocoon_course_info block " role="complementary" data-block="cocoon_course_info">

    <a href="#sb-4" class="sr-only sr-only-focusable">Skip Not sure?</a>





  <div class="">
    
        <div class="selected_filter_widget style2">
          <span class="float-left"><img class="mr20" src="http://demo.createdbycocoon.com/moodle/edumy/2/pluginfile.php/169/block_cocoon_course_info/content/2.png" alt="2.png"/></span>
          <h4 class="mt15 fz20 fw500">Not sure?</h4>
          <br/>
          <p>Every course comes with a 30-day money-back guarantee</p>
        </div>
    
    
  </div>

    <span id="sb-4"></span>

</div></aside>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}


export default CoursesView

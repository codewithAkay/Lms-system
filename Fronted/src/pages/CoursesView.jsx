import React from 'react'
import { useLocation } from 'react-router-dom';
function CoursesView() {
    const location = useLocation();
  const { data } = location.state;
   console.log(data)
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
      <li class="list-inline-item" style={{color:'grey',fontSize:'30px'}}>Purchased to Watch Video</li>
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
                            <li class="list-inline-item"><a href="#">Category: Design</a></li>
                          </ul>
                        </div>
                        <br/>
                  <span class="notifications" id="user-notifications"></span>
                  <span id="maincontent"></span><form action="." method="get"><div><input type="hidden" id="completion_dynamic_change" name="completion_dynamic_change" value="0"/></div></form><div class="course-content"><h2 class="accesshide">Course outline</h2><div class="ccn_course_content topics"><div id="section-0" class="section main clearfix details" role="region" aria-label="General"><div id="accordion" class="panel-group cc_tab">
              <div class="panel">
                <div class="panel-heading"><h4 class="panel-title">
                  <a href="#panel-0" class="accordion-toggle link" data-toggle="collapse" data-parent="#accordion">General</a>
                </h4></div><div id="panel-0" class="panel-collapse collapse"><div class="panel-body"><span class="hidden sectionname">General</span><div class="left side"></div><div class="right side"><img class="icon spacer" width="1" height="1" alt="" aria-hidden="true" src="http://demo.createdbycocoon.com/moodle/edumy/2/theme/image.php/edumy/core/1583196004/spacer"/></div><div class="content"><h3 class="sectionname accesshide"><span><a href="http://demo.createdbycocoon.com/moodle/edumy/2/course/view.php?id=11#section-0">General</a></span></h3><div class="section_availability"></div><div class="summary" styles = {{zIndex: 999}}></div><div></div><ul class="section img-text cs_list mb0"><li class="activity forum modtype_forum " id="module-30"><div><div class="mod-indent-outer"><div class="mod-indent"></div><div><div class="activityinstance"><a class="" onclick="" href="http://demo.createdbycocoon.com/moodle/edumy/2/mod/forum/view.php?id=30"><img src="http://demo.createdbycocoon.com/moodle/edumy/2/theme/image.php/edumy/forum/1583196004/icon" class="iconlarge activityicon" alt="" role="presentation" aria-hidden="true"/><span class="instancename">Announcements<span class="accesshide "> Forum</span></span></a></div></div></div></div></li></ul></div></div></div></div></div></div><div id="section-1" class="section main clearfix details" role="region" aria-label="Topic 1"><div id="accordion" class="panel-group cc_tab">
              <div class="panel">
                <div class="panel-heading"><h4 class="panel-title">
                  <a href="#panel-1" class="accordion-toggle link" data-toggle="collapse" data-parent="#accordion">Topic 1</a>
                </h4></div><div id="panel-1" class="panel-collapse collapse"><div class="panel-body"><span class="hidden sectionname">Topic 1</span><div class="left side"></div><div class="right side"><img class="icon spacer" width="1" height="1" alt="" aria-hidden="true" src="http://demo.createdbycocoon.com/moodle/edumy/2/theme/image.php/edumy/core/1583196004/spacer"/></div><div class="content"><h3 class="sectionname"><span><a href="http://demo.createdbycocoon.com/moodle/edumy/2/course/view.php?id=11#section-1">Topic 1</a></span></h3><div class="section_availability"></div><div class="summary" styles = {{zIndex: 999}}></div><div></div><ul class="section img-text cs_list mb0"></ul></div></div></div></div></div></div><div id="section-2" class="section main clearfix details" role="region" aria-label="Topic 2"><div id="accordion" class="panel-group cc_tab">
              <div class="panel">
                <div class="panel-heading"><h4 class="panel-title">
                  <a href="#panel-2" class="accordion-toggle link" data-toggle="collapse" data-parent="#accordion">Topic 2</a>
                </h4></div><div id="panel-2" class="panel-collapse collapse"><div class="panel-body"><span class="hidden sectionname">Topic 2</span><div class="left side"></div><div class="right side"><img class="icon spacer" width="1" height="1" alt="" aria-hidden="true" src="http://demo.createdbycocoon.com/moodle/edumy/2/theme/image.php/edumy/core/1583196004/spacer"/></div><div class="content"><h3 class="sectionname"><span><a href="http://demo.createdbycocoon.com/moodle/edumy/2/course/view.php?id=11#section-2">Topic 2</a></span></h3><div class="section_availability"></div><div class="summary" styles = {{zIndex: 999}}></div><div></div><ul class="section img-text cs_list mb0"></ul></div></div></div></div></div></div><div id="section-3" class="section main clearfix details" role="region" aria-label="Topic 3"><div id="accordion" class="panel-group cc_tab">
              <div class="panel">
                <div class="panel-heading"><h4 class="panel-title">
                  <a href="#panel-3" class="accordion-toggle link" data-toggle="collapse" data-parent="#accordion">Topic 3</a>
                </h4></div><div id="panel-3" class="panel-collapse collapse"><div class="panel-body"><span class="hidden sectionname">Topic 3</span><div class="left side"></div><div class="right side"><img class="icon spacer" width="1" height="1" alt="" aria-hidden="true" src="http://demo.createdbycocoon.com/moodle/edumy/2/theme/image.php/edumy/core/1583196004/spacer"/></div><div class="content"><h3 class="sectionname"><span><a href="http://demo.createdbycocoon.com/moodle/edumy/2/course/view.php?id=11#section-3">Topic 3</a></span></h3><div class="section_availability"></div><div class="summary" styles = {{zIndex: 999}}></div><div></div><ul class="section img-text cs_list mb0"></ul></div></div></div></div></div></div><div id="section-4" class="section main clearfix details" role="region" aria-label="Topic 4"><div id="accordion" class="panel-group cc_tab">
              <div class="panel">
                <div class="panel-heading"><h4 class="panel-title">
                  <a href="#panel-4" class="accordion-toggle link" data-toggle="collapse" data-parent="#accordion">Topic 4</a>
                </h4></div><div id="panel-4" class="panel-collapse collapse"><div class="panel-body"><span class="hidden sectionname">Topic 4</span><div class="left side"></div><div class="right side"><img class="icon spacer" width="1" height="1" alt="" aria-hidden="true" src="http://demo.createdbycocoon.com/moodle/edumy/2/theme/image.php/edumy/core/1583196004/spacer"/></div><div class="content"><h3 class="sectionname"><span><a href="http://demo.createdbycocoon.com/moodle/edumy/2/course/view.php?id=11#section-4">Topic 4</a></span></h3><div class="section_availability"></div><div class="summary" styles = {{zIndex: 999}}></div><div></div><ul class="section img-text cs_list mb0"></ul></div></div></div></div></div></div></div></div>
                  
                  
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





  <div class="">
    



        <div class="row">
    <div class="col-lg-12">
      <h3 class="r_course_title">Related Courses</h3>
    </div>



            <div class="col-lg-6 col-xl-4">
							<div class="top_courses">
              <a href="http://demo.createdbycocoon.com/moodle/edumy/2/course/view.php?id=11">
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
								</div></a>
							</div>
						</div>


            

            <div class="col-lg-6 col-xl-4">
							<div class="top_courses">
              <a href="http://demo.createdbycocoon.com/moodle/edumy/2/course/view.php?id=10">
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
								</div></a>
							</div>
						</div>


            

            <div class="col-lg-6 col-xl-4">
							<div class="top_courses">
              <a href="http://demo.createdbycocoon.com/moodle/edumy/2/course/view.php?id=9">
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
								</div></a>
							</div>
						</div>


            
		</div>


    
    
  </div>

    <span id="sb-10"></span>

</div></aside>
              </div>
              </div>
              <div class="col-lg-4 col-xl-3">
                <div class="d-print-none" aria-label="Blocks">
                  <aside id="block-region-side-pre" class="block-region" data-blockregion="side-pre" data-droptarget="1"><div id="inst111" class=" block_cocoon_course_details block " role="complementary" data-block="cocoon_course_details" aria-label="[Cocoon] Course Enrolment">





  <div class="">
      <div class="instructor_pricing_widget">
                                      <div class="price">
                                        <span>Price</span> ${data.price} <small>USD</small>
                                      </div>
                                      <a href="http://demo.createdbycocoon.com/moodle/edumy/2/enrol/index.php?id=11" class="cart_btnss">Buy &amp; Enrol Now</a>
                                      <div class="ccn-buy-access">Paid course entry</div><ul class="price_quere_list text-left">
                                        <li><div class="ccn-course-details-item"><span class="flaticon-play-button-1"></span>Video of Course</div></li>
                                        <li><div class="ccn-course-details-item"><span class="flaticon-download"></span>Many Download Resourses</div></li>
                                        <li><div class="ccn-course-details-item"><span class="flaticon-key-1"></span> Full lifetime access</div></li>
                                        <li><div class="ccn-course-details-item"><span class="flaticon-responsive"></span> Access on mobile and TV</div></li>
                                        <li><div class="ccn-course-details-item"><span class="flaticon-award"></span>Excersie</div></li></ul>
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

import { useEffect, useReducer } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
const reducer=(state,action)=>{
	switch(action.type){
	  case "FETCH_REQUEST":
		return {...state,loading:true}
	  case "FETCH_SUCCESS":
		return {...state,loading:false,product:action.payload}
	  case "FETCH_FAILURE":
		return{...state,loading:false,error:action.payload}  
	  default :
	  return " "  
	}
	}
	const initialtState={
		product:[],
		loading:true,
		error:''
	  }
function Courses() {
	const [{loading,error,product},dispatch]=useReducer(reducer,initialtState)
	const navigate=useNavigate()
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
	   },[])
	   const handleClick=(item)=>{
		// Navigate to the new path and pass the data as state
		navigate('/courseview', { state: { data: item } });
		 }
  return (
    <>
     <div id="ccn-main-region" class="courses-list">
          <div class="container">
            <div class="row">
                <div class="col-md-12 col-lg-8 col-xl-9">
              <div class="has-blocks" aria-label="Content">
                  <aside id="block-region-above-content" class="block-region" data-blockregion="above-content" data-droptarget="1"></aside>
                <div id="ccn-main">
                  <span class="notifications" id="user-notifications"></span>
                  <span id="maincontent"></span><span></span><div class="row"><div class="col-md-12 col-lg-12 col-xl-12 shadow_box"><div class="row courses_list_heading">
    						<div class="col-xl-4 p0">
    							<div class="instructor_search_result style2">
    								<p class="mt10 fz15"><span class="color-dark pr5">{product.length}</span> Courses</p>
    							</div>
    						</div>
    						
    					</div>
						<div class="courses row courses_container category-browse-3">
							
						{product.map((item)=>(
							<div class="col-lg-12 p0"><div class="courses_list_content">
								<div class="top_courses list">
									<div class="thumb"  onClick={()=>{handleClick(item)}}>
										<img class="img-whp" src={item.thumbnail_image} height='170px' alt="How to Make Beautiful Landscape Photos?"/>
										<div class="overlay">
                      <div class="tag">{item.name}</div>
					  <span class="tc_preview_course">Preview Course</span>
										</div>
									</div>
									<div class="details">
										<div class="tc_content">
											<p>{item.name}</p>
											<h5>{item.description}</h5>
											<p>{item.detail_description}</p>
                      <div class="info"><div class="moreinfo"></div><div class="enrolmenticons"><i class="icon fa fa-unlock-alt fa-fw " title="Guest access" aria-label="Guest access"></i><img class="icon " alt="PayPal" title="PayPal" src="http://demo.createdbycocoon.com/moodle/edumy/2/theme/image.php/edumy/enrol_paypal/1583196004/icon"/></div></div>
										</div>
										
									</div>
								</div>
							</div></div>
											))}
							</div>
            </div>
          </div>
                  
                  
                </div>
                  <aside id="block-region-below-content" class="block-region" data-blockregion="below-content" data-droptarget="1"></aside>
              </div>
              </div>
              <div class="col-lg-4 col-xl-3">
                <div class="d-print-none" aria-label="Blocks">
                  <aside id="block-region-side-pre" class="block-region" data-blockregion="side-pre" data-droptarget="1"><div id="inst104" class=" block_cocoon_course_list block list_block " role="navigation" data-block="cocoon_course_list">

    <a href="#sb-1" class="sr-only sr-only-focusable">Skip [Cocoon] Courses List</a>





  <div class="">
    
    
        <div class="selected_filter_widget mb30 style3">
          <div id="accordion" class="panel-group">
            <div class="panel">
              <div class="panel-heading">
                <h4 class="panel-title">
                 Category Filter
                </h4>
              </div>
              <div id="panelBodySoftware" class="panel-collapse collapse show">
                <div class="panel-body">
                  <div class="category_sidebar_widget">
                    <ul class="category_list">
					{product.map((item)=>(
              <li>{item.name} <span class="float-right">(8)</span></li>
			  ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
  </div>

    <span id="sb-1"></span>

</div>

</aside>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Courses

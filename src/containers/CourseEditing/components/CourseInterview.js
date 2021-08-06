import React,{useContext,useRef,useState} from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap';
import CourseEditingContext from '../courseEditingContext';
import {updateCourseBasicInfo} from '../../../services/course.service'
import Swal from 'sweetalert2'
export default function CourseInterview(){
    const {store, dispatch } = useContext(CourseEditingContext)
    const courseNameEle = useRef("");
    const courseShortDescriptionEle  =useRef("");
    const coursePriceEle = useRef("");
    const courseSaleoffEle = useRef("");
    const courseCategoryIdEle = useRef("");
    const courseSectionCountEle  = useRef("");
    const courseStatusEle = useRef("");
    
    const changeBasicInfo_Clicked = async () =>{
        console.log(store);
        const updatedCourse={
            courseName: courseNameEle.current.value,
            shortDescription: courseShortDescriptionEle.current.value,
            price: coursePriceEle.current.value,
            saleoff: courseSaleoffEle.current.value,
            categoryId: courseCategoryIdEle.current.value,
            sectionCount: courseSectionCountEle.current.value,
            courseStatus: courseStatusEle.current.value
        }
        console.log(updatedCourse);
        const res = await updateCourseBasicInfo(store.course.course_id,updatedCourse);
        if(res.status ===200){
            dispatch({
                type: "update-course-basic-info",
                payload: {
                    updatedCourse:updatedCourse
                }
            })
            Swal.fire({
                title:"Update course basic info success",
                icon:"success"
            })
        }else{
            Swal.fire({
                title:"Update course basic info success",
                icon:"fail"
            })
        }
    }
    return (
        <div>
            <Form>
                  

                <Form.Group className="mb-3" controlId="courseName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref={courseNameEle} defaultValue={store.course.course_name} placeholder="abc course" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="shortDescription">
                    <Form.Label>Short Description</Form.Label>
                    <Form.Control ref={courseShortDescriptionEle} defaultValue={store.course.course_shortdescription} placeholder="learning abc" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control ref={coursePriceEle} defaultValue={store.course.price}  type="number" min="0" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="saleoff">
                        <Form.Label>Sale off</Form.Label>
                        <Form.Control ref={courseSaleoffEle}  defaultValue={store.course.saleoff} type="number" min="0" max = "1"/>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group  as={Col} controlId="sectionCount">
                        <Form.Label>Sections</Form.Label>
                        <Form.Control ref={courseSectionCountEle}  defaultValue={store.course.section_count} type="number" min="0"/>
                    </Form.Group>
                    <Form.Group  as={Col} controlId="categoryId">
                        <Form.Label>Category</Form.Label>
                        <div>
                            <Form.Select style={{width:"100%",height:"33px"}} ref={courseCategoryIdEle}  defaultValue={store.course.category_id}>
                            {store.categories?store.categories.map((c)=><option value={c.category_id}>{c.category_name}</option>):""}
                            </Form.Select>
                        </div>
                    </Form.Group>
                </Row>
                <Form.Group  className="mb-3" controlId="courseStatus">
                    <Form.Label>Course Status</Form.Label>
                    <Form.Select  ref={courseStatusEle}  defaultValue={store.course.course_status}>
                        <option value={0}>Chưa hoàn thành</option>
                        <option value={1}>Đã hoàn thành</option>
                    </Form.Select>
                </Form.Group>
            </Form>
            <div className=" d-flex justify-content-md-center">
            <Button onClick={changeBasicInfo_Clicked} variant="success">Change basic info</Button>

            </div>
        </div>
    )
}
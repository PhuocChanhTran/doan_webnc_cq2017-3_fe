import React, {useEffect, useReducer }  from 'react'
import courseReducer from './courseReducer'
import CourseContext from './courseContext'
import { useParams } from 'react-router';
import {getCourseSingleCourse} from '../../services/course.service'
import {Container, Row, Col, Card, Button, Accordion } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCalendarTimes } from '@fortawesome/free-regular-svg-icons';
import Rating from 'react-rating'
import SectionContextAwareToggle from './components/SectionContextAwareToggle'
import VideoContextAwareToggle from './components/VideoContextAwareToggle'
import Review from './components/Review';
import CourseImage from './components/CourseImage'
import CourseInterview from './components/CourseInterview'
import {Redirect} from 'react-router-dom'
function Course(){
    const  {courseId} = useParams();
    const initialRating = 4;
    const initialCourseState = {
        course:{},
    };
    const [store, dispatch] = useReducer(courseReducer, initialCourseState);

    useEffect(function () { 
        async function loadSingleCourse() {
            const res = await getCourseSingleCourse(courseId);
            if(res.status===200){
                dispatch({
                    type: 'init',
                    payload: {
                        course: res.data,
                    }
                });
            }
            if(res.status ===204){
                dispatch({
                    type: 'init',
                    payload: {
                        course: null,
                    }
                });
            }
        }
        loadSingleCourse();
    },[]);
    const btnRatingClicked = () =>{
        console.log(store);
        console.log("Btn rating clicked");
    }
    return (
        <div>
            {store.course?(
                <CourseContext.Provider value={{ store, dispatch }}>
                <div className="course-content">
                    <Container  >
                        <Row className="justify-content-md-start course-row">
                            <Card className="course-card">
                                <Row >
                                    <Col sm={4}>
                                        <CourseImage></CourseImage>
                                    </Col>
                                    <Col  sm={8}>
                                        <CourseInterview></CourseInterview>
                                    </Col>
                                </Row>
                            </Card>
                        </Row>
                        <Row className="justify-content-md-start course-row">
                            <Card  className="course-card">
                                <Card.Body>
                                    <Card.Title><h2 className="course-card-title">Course Descriptions</h2></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                    <Card.Text>
                                        Become a Python Programmer and learn one of employer's most requested skills of 2021!
    
                                        This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.
    
                                        With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!
    
                                        Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!
    
                                        This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!
    
                                        We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we've got you covered.
    
                                        We cover a wide variety of topics, including:
    
                                        Command Line Basics
    
                                        Installing Python
    
                                        Running Python Code
    
                                        Strings
    
                                        Lists 
    
                                        Dictionaries
    
                                        Tuples
    
                                        Sets
    
                                        Number Data Types
    
                                        Print Formatting
    
                                        Functions
    
                                        Scope
    
                                        args/kwargs
    
                                        Built-in Functions
    
                                        Debugging and Error Handling
    
                                        Modules
    
                                        External Modules
    
                                        Object Oriented Programming
    
                                        Inheritance
    
                                        Polymorphism
    
                                        File I/O
    
                                        Advanced Methods
    
                                        Unit Tests
    
                                        and much more!
    
                                        You will get lifetime access to over 100 lectures plus corresponding Notebooks for the lectures!
    
                                        This course comes with a 30 day money back guarantee! If you are not satisfied in any way, you'll get your money back. Plus you will keep access to the Notebooks as a thank you for trying out the course!
    
                                        So what are you waiting for? Learn Python in a way that will advance your career and increase your knowledge, all in a fun and practical way!
    
                                        Who this course is for:
                                        Beginners who have never programmed before.
                                        Programmers switching languages to Python.
                                        Intermediate Python programmers who want to level up their skills!
                                    </Card.Text>
                                    {/* <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link> */}
                                </Card.Body>
                            </Card>
                        </Row>
                        <Row className="justify-content-md-start course-row">
                            <Card className="course-card">
                                <Card.Body>
                                    <Card.Title><h2 className="course-card-title">Course content/section/video</h2></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">26 sections • 161 lectures • 8h 51m total length</Card.Subtitle>
                                    <Card.Text>
                                        <Accordion >
                                            <Card>
                                                <Card.Header>
                                                <SectionContextAwareToggle eventKey="0">Section 1 • (3minutes)</SectionContextAwareToggle>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="0">
                                                <Card.Body>
                                                    
                                                    <Accordion >
                                                        <Card>
                                                            <Card.Header>
                                                            <VideoContextAwareToggle eventKey="0">Video 1</VideoContextAwareToggle>
                                                            </Card.Header>
                                                            <Accordion.Collapse eventKey="0">
                                                            <Card.Body>
                                                                Hello! I'm body
                                                            </Card.Body>
                                                            </Accordion.Collapse>
                                                        </Card>
                                                        <Card>
                                                            <Card.Header>
                                                            <VideoContextAwareToggle eventKey="1">Video 2</VideoContextAwareToggle>
                                                            </Card.Header>
                                                            <Accordion.Collapse eventKey="1">
                                                            <Card.Body>Hello! I'm another body</Card.Body>
                                                            </Accordion.Collapse>
                                                        </Card>
                                                    </Accordion>
    
                                                </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                            <Card>
                                                <Card.Header>
                                                    <SectionContextAwareToggle eventKey="1">Section 2</SectionContextAwareToggle>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="1">
                                                <Card.Body>Hello! I'm another body</Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        </Accordion>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Row>
                        <Row className="justify-content-md-start course-row">
                            <Card className="course-card">
                                <Card.Body>
                                    <Card.Title>
                                        <h2 className="course-card-title">Instructor</h2>
                                        <div><h3>Jonathan Lee</h3></div>
                                    </Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Harvard University Lecturer</Card.Subtitle>
                                    <Card.Body>
                                        <Row className="justify-content-md-center">
                                            <Col sm={4}>
                                                <Card.Text>
                                                    Lecturer Image
                                                </Card.Text>
                                                {/* <Card.Img></Card.Img> */}
                                            </Col>
                                            <Col sm={8}>
                                                <Card.Text>
                                                    Lecturer description
                                                </Card.Text>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card.Body>
                            </Card>
                        </Row>
                        <Row className="justify-content-md-start course-row">
                            <Card className="course-card">
                                <Card.Body>
                                    <Card.Title><h2 className="course-card-title">Reviews</h2></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted"> 
                                        <h4>
                                            Rating: {initialRating}
                                            <a className="btn" onClick={()=>btnRatingClicked()}><Rating  emptySymbol="fa fa-star-o fa-sm"  fullSymbol="fa fa-star fa-sm"  fractions={2} initialRating={initialRating} readonly="true"></Rating></a>
                                            <span>
                                                (2300 ratings)
                                            </span>
                                        </h4>
                                    </Card.Subtitle>
                                    <Card.Body>
                                        <Review></Review>
                                    </Card.Body>
                                </Card.Body>
                            </Card>
                        </Row>
                        <Row className="justify-content-md-start course-row">
                            <Card className="course-card">
                                <Card.Body>
                                    <Card.Title> <h2 className="course-card-title">5 khoá học khác cùng lĩnh vực được mua nhiều nhất</h2></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Container>
                </div>
            </CourseContext.Provider>
            ):(<Redirect to={{pathname:"/not-found"}}></Redirect>)}
        </div>
        
    )
}
export default Course;
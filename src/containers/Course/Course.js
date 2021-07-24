import React, {useEffect} from 'react'
import { useParams } from 'react-router';
import {getCourseSingleCourse} from '../../services/course.service'
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCalendarTimes } from '@fortawesome/free-regular-svg-icons';
import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, EmailShareButton, EmailIcon} from 'react-share';
import Rating from 'react-rating'
function Course(){
    const  {courseId} = useParams();
    const initialRating = 4;
    useEffect(function () { 
        console.log(courseId);
        async function loadSingleCourse() {
            const res = await getCourseSingleCourse(courseId);
            console.log(res.data);
        }
        loadSingleCourse();
    })
    const btnRatingClicked = () =>{
        console.log("Btn rating clicked");
    }
    return (
        <div className="course-content">
            <Container  >
                <Row className="justify-content-md-center course-image-row">
                    <Col sm={4}>
                        <Card border="light" style={{ width: '350px' }}>
                            <Card.Img className="card-img-img" variant="top" src="/logo192.png" />
                            <Card.Body className="card-img-body">
                                <Row>
                                    <Col>
                                        <Card.Text>Share: 
                                            {/* <Button variant="primary">Primary</Button>{' '} */}
                                            <FacebookShareButton><FacebookIcon size={32} round={true}></FacebookIcon></FacebookShareButton>
                                            <TwitterShareButton><TwitterIcon size={32} round={true}></TwitterIcon></TwitterShareButton>
                                            <EmailShareButton><EmailIcon size={32} round={true}></EmailIcon></EmailShareButton>
                                        </Card.Text>
                                    </Col>
                                    <Col>
                                        <Card.Text><a className="btn"><FontAwesomeIcon icon={faHeart} size="lg" color="red" ></FontAwesomeIcon></a>Wishlist(1400)
                                        </Card.Text>
                                    </Col>
                                </Row>
                                {/* <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text> */}
                            </Card.Body >
                            {/* <Card.Footer className="card-img-footer">
                                <small className="text-muted">Some thing some thing</small>
                            </Card.Footer> */}
                        </Card>
                    </Col>
                    <Col  sm={8}>
                        <h1>2021 Complete Python Bootcamp From Zero to Hero in Python</h1>
                        <h4>Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games</h4>
                        <div>
                            <h4>
                                Rating: {initialRating}
                                <a className="btn" onClick={()=>btnRatingClicked()}><Rating  emptySymbol="fa fa-star-o fa-sm"  fullSymbol="fa fa-star fa-sm"  fractions={2} initialRating={initialRating} readonly="true"></Rating></a>
                                <span>
                                    (2300 ratings)
                                </span>
                            </h4>
                            
                            <div>
                                34000 students
                            </div>
                            <div>
                                Created By Jonathan Lee
                            </div>
                            <div>
                                <span><FontAwesomeIcon icon={faCalendarTimes}></FontAwesomeIcon> Last Updated: 24/5/2021</span>
                            </div>
                            <div>
                                <Button variant="primary">Add to cart</Button>{' '}
                                <Button variant="success">Buy Now</Button>{' '}
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-md-start">
                    <h1>Course Descrition</h1>
                </Row>
                <Row className="justify-content-md-start">
                    <h1>Course content/section/video</h1>
                </Row>
                <Row className="justify-content-md-start">
                    <h1>Teacher</h1>
                </Row>
                <Row className="justify-content-md-start">
                    <h1>Revies</h1>
                </Row>
                <Row className="justify-content-md-start">
                    <h1>5 khoá học khác cùng lĩnh vực được mua nhiều nhất</h1>
                </Row>
            </Container>
        </div>
        
    )
}
export default Course;
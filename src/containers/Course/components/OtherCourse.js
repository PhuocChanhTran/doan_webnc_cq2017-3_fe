import React from   'react';
import {Card,Button,Row,Col} from 'react-bootstrap'
import emptyCourse from '../../../assets/images/emptyCourse.jpg'
import emptyUser from '../../../assets/images/emptyUser.png'
import Rating from 'react-rating'
export default function OtherCourse(){
    const btnAddToCart_Clicked = (e) =>{
        console.log("(e)=>btnAddToCart_Clicked(e)");
    }
    const btnAddToWishList_Clicked = (e) =>{
        console.log("(e)=>btnAddToWishList_Clicked(e)");
    }
    return (
        <Card className="course-card">
            <Card.Body>
                <Card.Title> <h2 className="course-card-title">Hot courses</h2></Card.Title>
                <Card.Text>
                    <div>
                        <div className="row course-items-area">
                            <div className="mix col-lg-3 col-md-4 col-sm-6 finance">
                                <a href="#" class="hvr-shrink">
                                    <div className="course-item">
                                        <div
                                            className="course-image set-bg"
                                            data-setbg={emptyCourse}
                                        >
                                            <div className="price">
                                            Price:{" "}
                                            10000
                                            &#65284;
                                            </div>
                                        </div>
                                        <div className="course-info">
                                            <h5>item.course_name</h5>
                                            <p>item.course_shortdescription</p>
                                            <h6 >
                                                5
                                                <a className="btn" ><Rating  className = "course-rating" emptySymbol="fa fa-star-o fa-sm"  fullSymbol="fa fa-star fa-sm"  fractions={10} initialRating={5} readonly="true"></Rating></a>
                                                <span>
                                                    (1000 ratings)
                                                </span>
                                            </h6>
                                            {/* <div className="students">{item.Saleoff!==0? item.saleoff*100:''} </div> */}
                                            <Row>
                                                <Col>
                                                    <a href="#" class="hvr-grow" onClick={(e)=>btnAddToCart_Clicked(e)}><i class="fa fa-cart-plus" aria-hidden="true">Cart</i></a>
                                                </Col>
                                                <Col>
                                                    <a href="#" class="hvr-grow" onClick={(e)=>btnAddToWishList_Clicked(e)}><i class="fa fa-heart" aria-hidden="true">Wishlist</i></a>
                                                </Col>
                                            </Row>
                                            <div className="course-author">
                                                <div
                                                    className="ca-pic set-bg"
                                                    data-setbg={emptyUser}
                                                />
                                                <p>
                                                    William Parker, <span>Developer</span>
                                                </p>
                                            </div>
                                        </div>
                                        </div>
                                </a>
                            </div>
                            <div className="mix col-lg-3 col-md-4 col-sm-6 finance">
                                <a href="/courses/22" class="hvr-shrink">
                                    <div className="course-item">
                                        <div
                                            className="course-image set-bg"
                                            data-setbg={emptyCourse}
                                        >
                                            <div className="price">
                                            Price:{" "}
                                            10000
                                            &#65284;
                                            </div>
                                        </div>
                                        <div className="course-info">
                                            <h5>item.course_name</h5>
                                            <p>item.course_shortdescription</p>
                                            <h6 >
                                                5
                                                <a className="btn" ><Rating  className = "course-rating" emptySymbol="fa fa-star-o fa-sm"  fullSymbol="fa fa-star fa-sm"  fractions={10} initialRating={5} readonly="true"></Rating></a>
                                                <span>
                                                    (1000 ratings)
                                                </span>
                                            </h6>
                                            {/* <div className="students">{item.Saleoff!==0? item.saleoff*100:''} </div> */}
                                            <Row>
                                                <Col>
                                                    <a href="#" class="hvr-grow" onClick={(e)=>btnAddToCart_Clicked(e)}><i class="fa fa-cart-plus" aria-hidden="true">Cart</i></a>
                                                </Col>
                                                <Col>
                                                    <a href="#" class="hvr-grow" onClick={(e)=>btnAddToWishList_Clicked(e)}><i class="fa fa-heart" aria-hidden="true">Wishlist</i></a>
                                                </Col>
                                            </Row>
                                            <div className="course-author">
                                                <div
                                                    className="ca-pic set-bg"
                                                    data-setbg={emptyUser}
                                                />
                                                <p>
                                                    William Parker, <span>Developer</span>
                                                </p>
                                            </div>
                                        </div>
                                        </div>
                                </a>
                            </div>
                            <div className="mix col-lg-3 col-md-4 col-sm-6 finance">
                                <a href="#" class="hvr-shrink">
                                    <div className="course-item">
                                        <div
                                            className="course-image set-bg"
                                            data-setbg={emptyCourse}
                                        >
                                            <div className="price">
                                            Price:{" "}
                                            10000
                                            &#65284;
                                            </div>
                                        </div>
                                        <div className="course-info">
                                            <h5>item.course_name</h5>
                                            <p>item.course_shortdescription</p>
                                            <h6 >
                                                5
                                                <a className="btn" ><Rating  className = "course-rating" emptySymbol="fa fa-star-o fa-sm"  fullSymbol="fa fa-star fa-sm"  fractions={10} initialRating={5} readonly="true"></Rating></a>
                                                <span>
                                                    (1000 ratings)
                                                </span>
                                            </h6>
                                            {/* <div className="students">{item.Saleoff!==0? item.saleoff*100:''} </div> */}
                                            <Row>
                                                <Col>
                                                    <a href="#" class="hvr-grow" onClick={(e)=>btnAddToCart_Clicked(e)}><i class="fa fa-cart-plus" aria-hidden="true">Cart</i></a>
                                                </Col>
                                                <Col>
                                                    <a href="#" class="hvr-grow" onClick={(e)=>btnAddToWishList_Clicked(e)}><i class="fa fa-heart" aria-hidden="true">Wishlist</i></a>
                                                </Col>
                                            </Row>
                                            <div className="course-author">
                                                <div
                                                    className="ca-pic set-bg"
                                                    data-setbg={emptyUser}
                                                />
                                                <p>
                                                    William Parker, <span>Developer</span>
                                                </p>
                                            </div>
                                        </div>
                                        </div>
                                </a>
                            </div>
                            <div className="mix col-lg-3 col-md-4 col-sm-6 finance">
                                <a href="#" class="hvr-shrink">
                                    <div className="course-item">
                                        <div
                                            className="course-image set-bg"
                                            data-setbg={emptyCourse}
                                        >
                                            <div className="price">
                                            Price:{" "}
                                            10000
                                            &#65284;
                                            </div>
                                        </div>
                                        <div className="course-info">
                                            <h5>item.course_name</h5>
                                            <p>item.course_shortdescription</p>
                                            <h6 >
                                                5
                                                <a className="btn" ><Rating  className = "course-rating" emptySymbol="fa fa-star-o fa-sm"  fullSymbol="fa fa-star fa-sm"  fractions={10} initialRating={5} readonly="true"></Rating></a>
                                                <span>
                                                    (1000 ratings)
                                                </span>
                                            </h6>
                                            {/* <div className="students">{item.Saleoff!==0? item.saleoff*100:''} </div> */}
                                            <Row>
                                                <Col>
                                                    <a href="#" class="hvr-grow" onClick={(e)=>btnAddToCart_Clicked(e)}><i class="fa fa-cart-plus" aria-hidden="true">Cart</i></a>
                                                </Col>
                                                <Col>
                                                    <a href="#" class="hvr-grow" onClick={(e)=>btnAddToWishList_Clicked(e)}><i class="fa fa-heart" aria-hidden="true">Wishlist</i></a>
                                                </Col>
                                            </Row>
                                            <div className="course-author">
                                                <div
                                                    className="ca-pic set-bg"
                                                    data-setbg={emptyUser}
                                                />
                                                <p>
                                                    William Parker, <span>Developer</span>
                                                </p>
                                            </div>
                                        </div>
                                        </div>
                                </a>
                            </div>
                            
                        </div>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
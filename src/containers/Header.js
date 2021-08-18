import React from "react";
import { useHistory, Link } from "react-router-dom";
import {
  Button,
  Form,
  FormControl,
  FormSelect,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { useContext, useEffect, useState } from "react";


import "../App.css";
import FrameCart from "./Cart/FrameCart";
import FrameWatch from "./WatchList/FrameWatch";

export default function Header(props) {
  const [searchKey, setsearchKey] = useState("");
  const [categoryFilter,setCategoryFilter] = useState("default");
  const history = useHistory();
  const signOutBtn_Clicked = () => {
    delete localStorage.userEmail;
    delete localStorage.accessToken;
    delete localStorage.refreshToken;
    history.push("/");
  };

  const handleSearchKeyChanged = function (e) {
    setsearchKey(e.target.value);
  };
  const handleButton_click = function () {
    console.log(categoryFilter);
    history.push(`/courses/search?course=${searchKey}&categoryId=${categoryFilter}`);
  };
  const handleFilterByCategory = (e)=> {
    console.log(e.target.value);
    setCategoryFilter(e.target.value);
  }

  return (
    <div>
      <div
        className=" set-bg top-container"
        data-setbg="http://localhost:3000/img/page-bg/1.jpg"
      >
        <nav class="secondary-menu">
          <div>
            <div class="sm-left">
              <strong>
                <i class="fa fa-phone"></i>
              </strong>{" "}
              <a href="#">+8412345678433</a>&nbsp;&nbsp;&nbsp;&nbsp;
              <strong>
                <i class="fa fa-envelope"></i>
              </strong>{" "}
              <a href="#">webnccq2017bct@gmail.com</a>
            </div>
            <div class="sm-right">
              <div class="sm-social-link">
                <a class="h-facebook" href="#">
                  <i class="fa fa-facebook"></i>
                </a>
                <a class="h-twitter" href="#">
                  <i class="fa fa-twitter"></i>
                </a>
                <a class="h-google" href="#">
                  <i class="fa fa-google-plus"></i>
                </a>
                <a class="h-linkedin" href="#">
                  <i class="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div class="clearfix"></div>
          </div>
        </nav>
      </div>
      <header className="header-section header" id="myHeader">
        <div className="container">
          <div className="row">
            <div className="col-sm-2">
              <div className="site-logo">
                {/* <img src="img/logo.png" alt /> */}
                <Link to="/">
                  <a>
                    <img src="http://localhost:3000/img/logo.png" alt />
                  </a>
                </Link>
              </div>
              <div className="nav-switch">
                <i className="fa fa-bars" />
              </div>
            </div>
            <div className="col-sm-4">
              <Form className="d-flex search-form">
                <FormControl
                  type="search"
                  placeholder="Course Name"
                  className="mr-2"
                  aria-label="Search"
                  onChange={handleSearchKeyChanged}
                />
                <FormSelect onChange={(e)=>handleFilterByCategory(e)} defaultValue="default">
                  <option value="default">All</option>
                  <option value={0}>Web Course</option>
                  <option value={1}>Mobile Course</option>
                </FormSelect>
                <Button variant="outline-primary" onClick={handleButton_click}>
                  <i class="fa fa-search"></i>
                </Button>
              </Form>
            </div>
            <div className="col-sm navbar-custom">
              <Nav className="">
                <NavDropdown title="IT" id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <Link
                      to="/courses/category/web-courses"
                      style={{ color: "#000" }}
                    >
                      Web courses
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link
                      to="/courses/category/mobile-courses"
                      style={{ color: "#000" }}
                    >

                      Mobile courses
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
                {localStorage.userEmail ? (
                  <>

                    <Nav.Link className="cart-nav">
                      <Link to="#">
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>{" "}
                        Cart
                      </Link>
                      <FrameCart />
                    </Nav.Link>
                    <Nav.Link className="watch-nav">
                      <Link to="#">
                        <i class="fa fa-heart" aria-hidden="true"></i> Wishlist
                      </Link>
                      <FrameWatch />
                    </Nav.Link>
                    <Nav.Link>
                      <Link to="/checkout">
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>{" "}
                        Checkout

                      </Link>
                    </Nav.Link>
                    <NavDropdown
                      title={<i class="fa fa-user"></i>}
                      id="basic-nav-dropdown"
                    >
                      <NavDropdown.Item>
                      <Link to="/settings" style={{ color: "#000" }}>
                          Settings
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <Link to="/profile" style={{ color: "#000" }}>
                          Profile
                        </Link>
                      </NavDropdown.Item>
                      {localStorage.userRole === "lecturer" ? (
                        <>
                          <NavDropdown.Item>
                          <Link to="/mycourses" style={{ color: "#000" }}>
                            My courses
                          </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                        <Link
                          to="/mysubcribecourses"
                          style={{ color: "#000" }}
                        >

                          My subscribe courses
                        </Link>
                      </NavDropdown.Item>
                        </>
                      ) : (
                        <NavDropdown.Item>
                          <Link
                            to="/mysubcribecourses"
                            style={{ color: "#000" }}
                          >

                            My subscribe courses
                          </Link>
                        </NavDropdown.Item>
                      )}
                      <NavDropdown.Item onClick={signOutBtn_Clicked}>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  </>
                ) : (
                  <Nav.Link ><Link to="/login">Login</Link></Nav.Link>
                )}
              </Nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

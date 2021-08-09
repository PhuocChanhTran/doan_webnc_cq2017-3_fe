import React from "react";
import {useHistory} from 'react-router-dom';
import {Button, Form, FormControl,Nav, Navbar,NavDropdown} from 'react-bootstrap';
import "../App.css";

export default function Header(props) {
  const history = useHistory();
    const signOutBtn_Clicked = () => {
        delete  localStorage.userEmail;
        delete localStorage.accessToken;
        delete localStorage.refreshToken;
        history.push('/');
    }
  return (
    <div>
      <div className=" set-bg top-container" data-setbg="http://localhost:3000/img/page-bg/1.jpg">
				<nav class="secondary-menu">
					<div>
						<div class="sm-left">
							<strong><i class="fa fa-phone"></i></strong> <a href="#">+8412345678433</a>&nbsp;&nbsp;&nbsp;&nbsp;
							<strong><i class="fa fa-envelope"></i></strong> <a href="#">webnccq2017bct@gmail.com</a>
						</div>
						<div class="sm-right">
							<div class="sm-social-link">
								<a class="h-facebook" href="#"><i class="fa fa-facebook"></i></a>
								<a class="h-twitter" href="#"><i class="fa fa-twitter"></i></a>
								<a class="h-google" href="#"><i class="fa fa-google-plus"></i></a>
								<a class="h-linkedin" href="#"><i class="fa fa-linkedin"></i></a>
							</div>
						</div>
						<div class="clearfix"></div>
					</div>
				</nav>
      </div>
      <header className="header-section header" id="myHeader">
       
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="site-logo">
                {/* <img src="img/logo.png" alt /> */}
                <a href="/">
                <img src="http://localhost:3000/img/logo.png" alt />
                </a>
              </div>
              <div className="nav-switch">
                <i className="fa fa-bars" />
              </div>
            </div>
            <div className="col-sm">
              <Form className="d-flex search-form">
                <FormControl
                  type="search"
                  placeholder="Course Name"
                  className="mr-2"
                  aria-label="Search"
                />
                <Button variant="outline-primary">Search</Button>
              </Form>
            </div>
            <div className="col-sm navbar-custom">  
              <Nav className="">
                <NavDropdown title="IT" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/courses/category/web-courses">Web course</NavDropdown.Item>
                  <NavDropdown.Item href="/courses/category/mobile-courses">Mobile course</NavDropdown.Item>                
                </NavDropdown>
                {localStorage.userEmail ? (
                  <>
                    <Nav.Link href="/cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Cart</Nav.Link>
                    <Nav.Link href="/wishlist"><i class="fa fa-heart" aria-hidden="true"></i> Wishlist</Nav.Link>
                    <NavDropdown title={<i class="fa fa-user"></i>} id="basic-nav-dropdown">
                      <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                      {localStorage.userRole === "lecturer"?
                        <NavDropdown.Item href="/mycourses">My course</NavDropdown.Item>
                        :
                        <NavDropdown.Item href="/mysubcribecourses">My subcribe course</NavDropdown.Item>
                      }
                      <NavDropdown.Item onClick={signOutBtn_Clicked}>Logout</NavDropdown.Item>                
                    </NavDropdown>
                  </>
                ) : (
                  <Nav.Link href="/login">Login</Nav.Link>
                )}

              </Nav>
            </div>
          </div>
        </div>
      </header>
      
    </div>
  );
}

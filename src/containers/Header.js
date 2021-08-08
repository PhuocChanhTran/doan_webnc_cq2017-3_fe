import React from "react";
import {useHistory} from 'react-router-dom';

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
      <header className="header-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <div className="site-logo">
                {/* <img src="img/logo.png" alt /> */}
                <img src="http://localhost:3000/img/logo.png" alt />
              </div>
              <div className="nav-switch">
                <i className="fa fa-bars" />
              </div>
            </div>
            <div className="col-lg-9 col-md-9">
              <a href className="site-btn header-btn">
                Login
              </a>
              <div>
                {localStorage.userEmail ? (
                  <span>
                    username: {localStorage.userEmail}
                    <button onClick={() => signOutBtn_Clicked()}>
                      Signout
                    </button>
                  </span>
                ) : (
                  <span></span>
                )}
              </div>

              <nav className="main-menu">
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="courses.html">Courses</a>
                  </li>
                  <li>
                    <a href="blog.html">News</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* <div className="page-info-section set-bg" data-setbg="img/page-bg/1.jpg"> */}
      <div className="page-info-section set-bg" data-setbg="http://localhost:3000/img/page-bg/1.jpg">nv 
      </div>
      <section className="search-section ss-other-page">
        <div className="container">
          <div className="search-warp">
            <div className="section-title text-white">
              <h2>
                <span>Search your course</span>
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                {/* search form */}
                <form className="course-search-form text-left">
                  <input type="text" placeholder="Course" />
                  <button className="site-btn btn-dark">Search Couse</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

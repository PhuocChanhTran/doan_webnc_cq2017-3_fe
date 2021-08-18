import React, { useContext, useEffect, useState } from "react";
import homeContext from "../homeContext";
import emptyCourse from '../../../assets/images/emptyCourse.jpg'
import { Link } from "react-router-dom";
export default function HotCourse() {
    const { store } = useContext(homeContext);
  return (
    <div>
      <div>
        <h2 className="mb-1 text-left">TOP Categories</h2>
      </div>
      <div>
        <div className="row course-items-area">
            {store.topCategories && store.topCategories.length !== 0?store.topCategories.map((item)=>(
              <div className="mix col-lg-3 col-md-4 col-sm-6 finance ">
                <Link to={`/courses/category/${item.categoryId}`} class=" hvr-shrink course-item">
                        <img
                            className="course-thumb set-bg"
                            src={item.categoryImage?`http://localhost:3001/uploads/images/categoryImage.png`:emptyCourse}
                            // src={item.categoryImage?`http://localhost:3001/uploads/images/${item.categoryImage}`:emptyCourse}
                        >
                            
                        </img>
                        <div className="course-info course-card-title">
                            {item.categoryName}
                        </div>
                </Link>
            </div>
             )):""}
          </div>
        </div>
    </div>
  );
}

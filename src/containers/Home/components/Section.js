import React, { useContext } from "react";
//import homeContext from '../homeContext';
export default function Section() {
  // const {store} = useContext(homeContext);
  return (
    <div>
      <section className="course-section spad pb-0">
        <div className="course-warp">
          <ul className="course-filter controls">
            <li className="control active" data-filter="all">
              ALL
            </li>
            <li className="control" data-filter="/*  */.finance">
              POPULAR COURSES
            </li>
            <li className="control" data-filter=".design">
              HOT COURSES
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

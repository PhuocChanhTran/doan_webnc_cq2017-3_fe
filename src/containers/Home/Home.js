import React, { useEffect, useReducer } from "react";

import "../../App.css";

import homeReducer from "./homeReducer";
import homeContext from "./homeContext";

import { getAllCourse } from "../../services/course.service";

import HotCourse from "./components/HotCourse";
import PopularCourse from "./components/PopularCourse";
import NewCourse from "./components/NewCourse";
import Section from "./components/Section";
import Category from "./components/Category";

export default function Home() {
  const initialHomeState = {
    hotCourse: [],
    popularCourse: [],
    newCourse: [],
  };
  const [store, dispatch] = useReducer(homeReducer, initialHomeState);

  useEffect(function () {
    async function loadHotCourse() {
      const res = await getAllCourse();
      if (res.status === 200) {
        dispatch({
          type: "initHotCourse",
          payload: {
            hotCourse: res.data,
          },
        });
      }
      if (res.status === 204) {
        dispatch({
          type: "initHotCourse",
          payload: {
            hotCourse: null,
          },
        });
      }
    }
    async function loadPopularCourse() {
      const res = await getAllCourse();
      if (res.status === 200) {
        dispatch({
          type: "initPopularCourse",
          payload: {
            popularCourse: res.data,
          },
        });
      }
      if (res.status === 204) {
        dispatch({
          type: "initPopularCourse",
          payload: {
            popularCourse: null,
          },
        });
      }
    }
    async function loadNewCourse() {
      const res = await getAllCourse();
      if (res.status === 200) {
        dispatch({
          type: "initNewCourse",
          payload: {
            newCourse: res.data,
          },
        });
      }
      if (res.status === 204) {
        dispatch({
          type: "initNewCourse",
          payload: {
            newCourse: null,
          },
        });
      }
    }
    loadHotCourse();
    loadPopularCourse();
    loadNewCourse();
  }, []);

  return (
    <div>
      <homeContext.Provider value={{ store, dispatch }}>
        <div className="container-fluit">
        <Section></Section>

          <div className="row">
            <Category></Category>
            {/* <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <div class="list-group">
                <a href="#" class="list-group-item active">IT</a>
                <a href="#" class="list-group-item">MARKETING</a>
                <a href="#" class="list-group-item">DESIGN</a>
                <a href="#" class="list-group-item">MUSIC</a>
                <a href="#" class="list-group-item">ART</a>
              </div>
            </div> */}
            <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
              {/* <Section></Section> */}
              <HotCourse> </HotCourse>
              <PopularCourse> </PopularCourse>
              <NewCourse> </NewCourse>
            </div>
          </div>
        </div>
      </homeContext.Provider>
    </div>
  );
  // return (
  //   <div >
  //     <homeContext.Provider value={{ store, dispatch }}>
  //       <Section></Section>
  //       <HotCourse> </HotCourse>
  //       <PopularCourse> </PopularCourse>
  //       <NewCourse> </NewCourse>
  //     </homeContext.Provider>
  //   </div>
  // );
}

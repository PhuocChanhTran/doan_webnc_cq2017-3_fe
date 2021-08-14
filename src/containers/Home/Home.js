import React, { useEffect, useReducer } from "react";

import "../../App.css";

import homeReducer from "./homeReducer";
import homeContext from "./homeContext";

import { getHotCourses, getNewCourses, getPopularCourses } from "../../services/course.service";

import HotCourse from "./components/HotCourse";
import PopularCourse from "./components/PopularCourse";
import NewCourse from "./components/NewCourse";
import Section from "./components/Section";

export default function Home() {
  const initialHomeState = {
    hotCourse: [],
    popularCourse: [],
    newCourse: [],
  };
  const [store, dispatch] = useReducer(homeReducer, initialHomeState);

  useEffect(function () {
    async function loadHotCourse() {
      const res = await getHotCourses();
      
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
      const res = await getPopularCourses();
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
      const res = await getNewCourses();
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
        <div className="container">
        <Section></Section>

          <div className="row">
              <HotCourse> </HotCourse>
              <PopularCourse> </PopularCourse>
              <NewCourse> </NewCourse>
          </div>
        </div>
      </homeContext.Provider>
    </div>
  );
}

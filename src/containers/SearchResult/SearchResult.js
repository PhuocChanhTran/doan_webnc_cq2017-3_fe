import React, { useEffect, useReducer } from "react";
import {useLocation} from 'react-router-dom';
import queryString from "query-string";
import "../../App.css";

import searchResultReducer from "./searchResultReducer";
import searchResultContext from "./searchResultContext";

import { getSearchResult } from "../../services/course.service";

import SearchResultList from "./components/SearchResultList";
import Section from "./components/Section";

export default function SearchResult() {
  const {search} = useLocation();
  const {course}=queryString.parse(search);
  const initialSearchResultCourseState = {
    searchResultCourse: [],
  };
  const [store, dispatch] = useReducer(
    searchResultReducer,
    initialSearchResultCourseState
  );
  useEffect(function () {
    async function loadSearchResultCourse() {
      const res = await getSearchResult(course);
      console.log("resultcourse iisss:");
      console.log(res.data);
      if (res.status === 200) {
        dispatch({
          type: "initSearchResultCourse",
          payload: {
            searchResultCourse: res.data.result,
          },
        });
      }
      if (res.status === 204) {
        dispatch({
          type: "initSearchResultCourse",
          payload: {
            searchResultCourse: null,
          },
        });
      }
    }
    loadSearchResultCourse();
  }, [course]);

  return (
    <div>
      <searchResultContext.Provider value={{ store, dispatch }}>
        <div className="container">
          <Section></Section>

          <div className="row">
            <SearchResultList> </SearchResultList>
          </div>
        </div>
      </searchResultContext.Provider>
    </div>
  );
}

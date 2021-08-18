import { createContext } from 'react';

const defaultValue = {
    hotCourse:[],
    popularCourse:[],
    newCourse:[],
    topCategories: []

};
const homeContext = createContext(defaultValue);

export default homeContext;
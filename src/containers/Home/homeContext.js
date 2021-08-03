import { createContext } from 'react';

const defaultValue = {
    hotCourse:[],
    popularCourse:[],
    newCourse:[],


};
const homeContext = createContext(defaultValue);

export default homeContext;
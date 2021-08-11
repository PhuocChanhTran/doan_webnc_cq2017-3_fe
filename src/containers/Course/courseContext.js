import { createContext } from 'react';

const defaultValue = {
    course:{},
    lecturer: {},
    reviews: [],
    user:{}
};
const CourseContext = createContext(defaultValue);

export default CourseContext;
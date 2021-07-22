import React, {useEffect} from 'react'
import {getAllCourse} from '../../services/course.service'
function Course(){
    useEffect(function () { 
        async function loadSingleCourse() {
            const res = await getAllCourse();
            console.log(res.data);
        }
        loadSingleCourse();
    })
    return (
        <div>
            This is course detail page
        </div>
    )
}
export default Course;
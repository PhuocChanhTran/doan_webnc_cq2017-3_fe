import React from 'react'
import { useParams } from 'react-router-dom'
export default function CourseEditing(){
    const {courseId} = useParams()
    return(
        <>
            <div>
                course Editting page.{courseId}
            </div>
        </>
    )
}
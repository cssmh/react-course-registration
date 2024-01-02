import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = ({handleAddCourse, notify}) => {

    const [courses, setCourses] = useState([])

    useEffect(()=> {
        fetch("course.json")
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    return (
        <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                courses.map(soloCourse => <Course 
                    key={soloCourse.id} 
                    getCourse={soloCourse}
                    handleAddCourse={handleAddCourse}
                    notify={notify}
                    ></Course>)
            }
        </div>
    );
};

Courses.propTypes = {
    handleAddCourse: PropTypes.func,
    notify: PropTypes.func
  };

export default Courses;
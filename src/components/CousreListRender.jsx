import React from "react";

const CourseListRender = ({ courses, render }) => {
  return <div className="course-list">{courses.map((course) => render(course))}</div>;
};

export default CourseListRender;
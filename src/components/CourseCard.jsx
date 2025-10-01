import React from "react";
import { FaBook, FaTag, FaArrowRight } from "react-icons/fa";

const CourseCard = ({ course, isHovered }) => {
  return (
    <div className="course-card">
      <h3>
        <FaBook /> {course.title}
      </h3>

      <p>
        <FaTag /> {course.category}
      </p>

      <p>{course.description}</p>

      <button>
        Learn More <FaArrowRight />
      </button>
    </div>
  );
};

export default CourseCard;
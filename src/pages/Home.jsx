import React, { useState, useMemo } from "react";
import UseFetchCourses from "../hooks/UseFetchCourses";
import HeaderFilter from "../components/HeaderFilter";
import Status from "../components/Status";
import CourseCard from "../components/CourseCard";
import WithHoverEffect from "../hoc/WithHoverEffect";
import CourseListRender from "../components/CousreListRender";

const HoverCourseCard = WithHoverEffect(CourseCard);

const Home = () => {
  const { courses, loading, error } = UseFetchCourses();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCourses = useMemo(() => {
    if (selectedCategory === "All") return courses;
    return courses.filter((course) => course.category === selectedCategory);
  }, [courses, selectedCategory]);

  return (
    <div>
      <HeaderFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <Status loading={loading} error={error} />

      <CourseListRender
        courses={filteredCourses}
        render={(course) => <HoverCourseCard key={course.id} course={course} />}
      />
    </div>
  );
};

export default Home;

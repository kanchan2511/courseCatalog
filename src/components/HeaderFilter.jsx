import React from "react";
import { FaFilter } from "react-icons/fa";

const HeaderFilter = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div>
    <h1>Course Explorer</h1>
    <header>
      <div className="filter-container">
        <p className="filter-heading">
          <FaFilter /> Filter by Category
        </p>
        <div>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
          >
            <option value="All">All Category</option>
            <option value="Web Development">Web Development</option>
            <option value="Data Science">Data Science</option>
            <option value="Artificial Intelligence">Artificial Intelligence</option>
            <option value="DevOps">DevOps</option>
            <option value="Cyber Security">Cyber Security</option>
            <option value="Mobile Development">Mobile Development</option>
          </select>
        </div>
      </div>
    </header>
    </div>
  );
};

export default HeaderFilter;
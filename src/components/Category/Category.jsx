import React from "react";
import { Link } from "wouter";
import "./Category.css";

const Category = ({ name, options = [] }) => {
  return (
    <div className="Category">
      <h3 className="Category-title">{decodeURI(name)}</h3>
      <ul className="Category-list">
        {options.map((option) => (
          <li className="Category-list-item" key={option}>
            <Link className="Category-link" to={`/search/${option}`}>
              {option}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;

import React from "react";
import { CategoryTitle, CategoryList, ListItem, CategoryLink } from "./styles";

const Category = ({ name, options = [] }) => {
  return (
    <section>
      <CategoryTitle>{decodeURI(name)}</CategoryTitle>
      <CategoryList>
        {options.map((option, index) => (
          <ListItem key={option} index={index}>
            <CategoryLink to={`/search/${option}`}>{option}</CategoryLink>
          </ListItem>
        ))}
      </CategoryList>
    </section>
  );
};

export default Category;

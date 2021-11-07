import React from "react";
import { StyledLink } from "./styles";

const Button = ({ children, href }) => {
  return <StyledLink to={href}>{children}</StyledLink>;
};

export default Button;

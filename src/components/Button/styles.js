import { Link } from "wouter";
import styled from "@emotion/styled";

export const StyledLink = styled(Link)`
  background-color: var(--brand-color_6);
  border: none;
  box-shadow: 2px 2px 0px var(--brand-color_8);
  color: var(--theme-body-bg);
  cursor: pointer;
  font-family: var(--font-primary);
  font-size: 1rem;
  font-weight: 400;
  height: 40px;
  margin-bottom: 5px;
  padding: 0.5rem 1rem;
  text-align: center;
  text-decoration: none;
  width: 160px;
  
  [disabled] {
  opacity: 0.3;
  pointer-events: none;
}

  :hover {
    background-color: var(--brand-color_5);
    box-shadow: 2px 2px 0px var(--brand-color_10);
    color: var(--brand-color_10);
    transition: all 150ms ease-in-out;
  }
`;
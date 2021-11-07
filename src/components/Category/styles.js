import styled from '@emotion/styled'
import { Link } from 'wouter';

export const CategoryTitle = styled.h3`
  padding: 0.5rem 1rem;
  background-color: var(--brand-color_5);
  text-shadow: 2px 2px 0 var(--brand-color_2);
  box-shadow: 2px 2px 0 var(--brand-color_8);
  color: var(--brand-color_8);
  font-family: "Exo", sans-serif;
  @media (min-width: 768px ){
    flex-wrap: nowrap;
    justify-content: flex-end;
   }
`
export const CategoryList = styled.ul`
  list-style-position: inside;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  @media (min-width: 768px ){
    justify-content: right;
  }
`
export const ListItem = styled.li`
  list-style: none;
  padding: 0.3rem;
  margin: 0.2rem;
  font-family: var(--font-primary);
  ${
    props => {
      const colorIndex = props.index % 10 + 1;
      return `
        background-color: var(--brand-color_${colorIndex});
        color: ${colorIndex};
      `
    }
  }
`
export const CategoryLink = styled(Link)`
  color: inherit;
  font-size: 1em;
  text-decoration: none;
  font-size: 1em;
  transition: color ease-in 0.1s;
  color: var(--theme-body-bg);
    :hover {
        color: white;
    }
`

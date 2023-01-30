import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const MenuLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  color: white;
  text-transform: uppercase;
  padding-bottom: 6px;
  margin: 10px;
  /* text-shadow: 0.5px 0.5px 1px black; */  
  :hover {
    transition: text-shadow 250ms linear;
    text-shadow: 1px 1px 2px black;
  } 
  &.active {
    text-shadow: 1px 1px 2px black;
    border-bottom: 1px solid #1cb6cd;
    /* color: #1cb6cd; */
  }
`;

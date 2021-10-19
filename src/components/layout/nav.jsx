import React from "react";
import { NavLink } from "react-router-dom";

const NavLinkLi = ({ route, linkTxt }) => (
  <li>
    <NavLink
      exact
      className="navlink"
      activeClassName="navlink--active"
      to={route}
    >
      {linkTxt}
    </NavLink>
  </li>
);

export default function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__ul">
        <NavLinkLi route="/" linkTxt="Picure Slider" />
        <NavLinkLi route="/baloon" linkTxt="Baloon" />
        <NavLinkLi route="/memory-cards" linkTxt="Memory Cards" />
        <NavLinkLi route="/squares-flow" linkTxt="Squares Flow" />
        <NavLinkLi route="/lista" linkTxt="Lista" />
      </ul>
    </nav>
  );
}

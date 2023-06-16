import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.css";
export default function Header() {
  return (
    <header className="main-header">
      <div className="logo"> Seidan</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/product">Products</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

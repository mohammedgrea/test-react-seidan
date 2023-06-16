import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

import "./app.css";
export default function () {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

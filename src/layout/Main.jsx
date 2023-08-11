import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../header/Nav";
import SideBar from "../sidebars/SideBar";
import Footer from "../footer/Footer";

const Main = () => {
  return (
    <div>
      <Nav />
      <div className="grid grid-cols-3 my-container py-8 gap-4">
        <SideBar />
        <div className="col-span-2 p-4 border">
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Main;

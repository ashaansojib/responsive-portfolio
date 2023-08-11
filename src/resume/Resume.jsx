import React from "react";
import SectionTitle from "../hooks/SectionTitle";
import { FaGraduationCap, FaShoppingBag } from "react-icons/fa";

const Resume = () => {
  return (
    <div>
      <SectionTitle title="Resume" />
      <div className="py-4 grid grid-cols-2 justify-between gap-4">
        <div className="">
          <h3 className="text-2xl font-semibold flex gap-4 items-center">
            <FaGraduationCap className="text-[#E32E6E] text-3xl" /> Education
          </h3>
          <div className="p-4 rounded-md bg-[#FFF4F4] my-3">
            <small>2021 - 2024</small>
            <h4 className="text-xl">B. A. Honours in English</h4>
            <span>National University - Bangladesh</span>
          </div>
          <div className="p-4 rounded-md bg-[#FFF4F4] my-3">
            <small>January 2023 - June 2023</small>
            <h4 className="text-xl">Complete Web Development Course From </h4>
            <span>Programming Hero</span>
          </div>
        </div>
        <div className="">
          <h3 className="text-2xl font-semibold flex gap-2 items-center">
            <FaShoppingBag className="text-[#E32E6E] text-3xl" /> Experiences
          </h3>
          <div className="p-4 rounded-md bg-[#FFF4F4] my-3">
            <small>Personal</small>
            <h4 className="text-xl">Six months of professional coding skills.</h4>
            <span>Programming Hero</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

import React from "react";
import SectionTitle from "../hooks/SectionTitle";
import { FaWeebly } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <SectionTitle title="About" />
      {/* about text */}
      <p className="text-xl text-gray-80 py-2">
        I'm Ashaduzzaman Sojib, Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Commodi vitae ducimus aut doloribus quasi officia
        asperiores. Consequatur adipisci aliquid nesciunt eveniet nemo, tempora
        quibusdam distinctio repellendus atque, molestiae, unde vel. veritatis
        aliquam alias laudantium. Reiciendis, iste! Illo cumque sint culpa quis
        neque enim vitae nisi ab!
      </p>
      <p className="text-xl text-gray-80 py-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nihil
        architecto et repellendus dicta maxime. Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Quas eius totam nobis recusandae deleniti,
      </p>
      {/* about my skills category */}
      <div className="grid grid-cols-2 gap-3 justify-center items-center py-4">
        <div className="p-4 bg-[#FFF4F4] rounded-md">
          <FaWeebly className="text-4xl text-[#E32E6E]" />
          <h3 className="text-2xl font-semibold">MERN Stack Developer</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, rerum
            facilis maxime delectus qui nesciunt? Quibusdam nobis, possimus
            pariatur, quod animi perspiciatis
          </p>
        </div>
        <div className="p-4 bg-[#EEF5FA] rounded-md">
          <FaWeebly className="text-4xl text-[#E32E6E]" />
          <h3 className="text-2xl font-semibold">Front-End Developer</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, rerum
            facilis maxime delectus qui nesciunt? Quibusdam nobis, possimus
            pariatur, quod animi perspiciatis
          </p>
        </div>
        <div className="p-4  bg-[#EEF5FA] rounded-md">
          <FaWeebly className="text-4xl text-[#E32E6E]" />
          <h3 className="text-2xl font-semibold">Back-End Developer</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, rerum
            facilis maxime delectus qui nesciunt? Quibusdam nobis, possimus
            pariatur, quod animi perspiciatis
          </p>
        </div>
        <div className="p-4 bg-[#FFF4F4] rounded-md">
          <FaWeebly className="text-4xl text-[#E32E6E]" />
          <h3 className="text-2xl font-semibold">Ui/Ux Design</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, rerum
            facilis maxime delectus qui nesciunt? Quibusdam nobis, possimus
            pariatur, quod animi perspiciatis
          </p>
        </div>
      </div>
      {/* technologis */}
      <div className="p-4 bg-slate-100">
          <h3 className="text-2xl font-semibold">Front-End Developer</h3>

      </div>
    </div>
  );
};

export default About;

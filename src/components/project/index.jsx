import React from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import data from "../../assets/data/data.json";

function Project() {
  return (
    <div className="grid grid-cols-1 bg-slate-800 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {data.map((props) => (
        <div key={props.id} className="bg-white rounded-lg shadow-md p-4">
          <div className="container">
            <img src={props.image} alt="" className="rounded-lg mb-4" />
          </div>

          <div className="flex justify-center space-x-4">
            <a target="_blank" rel="noopener noreferrer" href={props.liveLink}>
              <div className="">
                <AiFillEye />
              </div>
            </a>
            <a target="_blank" rel="noopener noreferrer" href={props.repo}>
              <div className="">
                <AiFillGithub />
              </div>
            </a>
          </div>
          <div className="">
            <h2 className="text-xl font-semibold mt-2">{props.title}</h2>
            <p className="text-gray-600 mt-1">{props.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;

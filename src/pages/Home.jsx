import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import "../styles/styles.css";

function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <video className="bg-video h-auto" autoPlay loop muted>
        <source src={process.env.PUBLIC_URL + "/bg.mp4"} type="video/mp4" />
      </video>
      <div className="mt-10  flex flex-col items-center md:w-48 md:h-48 lg:w-full lg:h-full">
        <div className="rounded-full border-2 mb-4 border-gray-500 hover:border-blue-700 hover:shadow-md transition duration-300">
          <img
            className="rounded-full"
            src="https://avatars.githubusercontent.com/u/126578388?v=4"
            alt=""
          />
        </div>

        <div className="text-center text-white items-center space-y-2">
          <h1 className="text-3xl">Ersin AYDIN</h1>
          <h3 className="text-3xl">JR. Frontend Developer</h3>
          <div className="flex justify-center">
            <button className="text-lg md:text-3xl bg-blue-900 hover:bg-blue-800 text-white py-2 px-4 rounded-full mt-4 md:mt-6 flex items-center justify-center md:justify-start space-x-2 transition duration-300">
              <AiOutlineDownload className="md:mr-2" />
              <a
                className="text-white underline md:no-underline"
                href="./assets/resume/Ersin Aydin - Resume.pdf"
                download="Resume.pdf"
              >
                Download Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

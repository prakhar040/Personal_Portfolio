import React from 'react';
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";
import image9 from "../assets/image9.png";
import image10 from "../assets/image10.png";
import image11 from "../assets/image11.png";
import image12 from "../assets/image12.png";
import image13 from "../assets/image13.png";
import image14 from "../assets/image14.png";
import image15 from "../assets/image15.png";
import image16 from "../assets/image16.jpeg";

const Skills = () => {
    const techs = [
        {
          id: 1,
          src: image7,
          title: "React",
          style: "shadow-sky-400",
        },
        {
          id: 2,
          src: image8,
          title: "JavaScript",
          style: "shadow-yellow-500",
        },
        {
          id: 3,
          src: image6,
          title: "CSS",
          style: "shadow-blue-500",
        },
        {
          id: 4,
          src: image5,
          title: "HTML",
          style: "shadow-orange-400",
        },
        {
          id: 5,
          src: image9,
          title: "Tailwind CSS",
          style: "shadow-sky-400",
        },
        {
          id: 6,
          src: image10,
          title: "Bootstrap",
          style: "shadow-indigo-500/50",
        },
        {
          id: 7,
          src: image11,
          title: "Git",
          style: "shadow-orange-600",
        },
        {
          id: 8,
          src: image12,
          title: "GitHub",
          style: "shadow-gray-400",
        },
        {
          id: 9,
          src: image13,
          title: "Npm",
          style: "shadow-red-500",
        },
        {
          id: 10,
          src: image14,
          title: "VS Code",
          style: "shadow-blue-400",
        },
        {
          id: 11,
          src: image15,
          title: "Vercel",
          style: "shadow-blue-300",
        },
        {
          id: 12,
          src: image16,
          title: "C/C++",
          style: "shadow-blue-500",
        },
      ];
    
  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full lg:h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">Currently working with the most used Front-end techs and tool<br></br>available for Web Development</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} `}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

export default Skills

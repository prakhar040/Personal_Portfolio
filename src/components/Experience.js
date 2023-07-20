import React from 'react';
import image17 from "../assets/image17.jpg";
import image18 from "../assets/image18.jpg";
import image31 from "../assets/image31.jpg";

const Experience = () => {
    const experienceList=[
        {
            id: 1,
            name: "Exposys Data Labs",
            src: image17,
            post: "Web Developer",
            duration: "Nov 2022-Jan 2023"
        },
        {
            id: 2,
            name: "Immensphere",
            src: image18,
            post: "Frontend Developer",
            duration: "Jan 2023-Mar 2023"
        },
        {
            id: 3,
            name: "Unique Identification Authority of India",
            src: image31,
            post: "Research and Development Intern",
            duration: "Jun 2023-Jul 2023"
        },
    ]
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
    <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-center w-full h-full lg:p-24">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
          <p className="py-6">I've worked with the following companies in the past.</p>
        </div>
        <div className="grid text-center sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {experienceList.map(({id, name, src, post, description, duration})=>(
                <div key={id} className="shadow-xl rounded-b-md duration-300 hover:scale-150">
              <div className="">
              <img
                src={src}
                alt=""
                className="rounded-t-md  exp "
              />
              <p className="bg-gray-900  font-semibold text-sm">{name}</p>
              <p className="bg-gray-900  font-semibold text-sm">{post}</p>
              <p className="bg-gray-900  font-semibold text-sm">{duration}</p>
              </div>
              </div>
            ))}
            </div>
      </div>
    </div>
  )
}

export default Experience

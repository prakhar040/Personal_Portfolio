import React from 'react';
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";

const Projects = () => {
        const projectsList = [
          {
            id: 1,
            name: "Agricultural Supply Chain",
            src: image1,
            hrefLive: "https://agricultural-supply-chain.vercel.app/",
            hrefCode: "https://github.com/prakhar040/Agricultural_Supply_Chain",
          },
          {
            id: 2,
            name: "FilmyVerse",
            src: image2,
            hrefLive: "https://filmy-verse-steel.vercel.app/",
            hrefCode: "https://github.com/prakhar040/FilmyVerse",
          },
          {
            id: 3,
            name: "Personal Portfolio",
            src: image3,
            hrefLive: "",
            hrefCode: "",
          },
          {
            id: 4,
            name: "Simon Game Challenge",
            src: image4,
            hrefLive: "https://prakhar040.github.io/Simon-Game-Challenge/",
            hrefCode: "https://github.com/prakhar040/Simon-Game-Challenge",
          },
          {
          id: 5,
          name: "",
          hrefLive: "",
          hrefCode: "",
        },
        {
          id: 6,
          name: "",
          hrefLive: "",
          hrefCode: "",
        },
          
        ];
      
  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-center w-full h-full lg:p-24">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid text-center sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projectsList.map(({ id, name, src, hrefLive, hrefCode }) => (
            <div key={id} className="shadow-xl rounded-b-md duration-300 hover:scale-150">
              <div className="">
              <img
                src={src}
                alt=""
                className="rounded-t-md "
              />
              <p className="bg-gray-900  font-semibold">{name}</p>
              </div>
              <div className="flex items-center justify-center bg-zinc-900 rounded-b-md">
                <button className="w-1/2 px-6 py-2 m-1 duration-200 hover:scale-110 text-sky-400">
                  <a href={hrefLive} target="_blank" rel="noreferrer">Live</a>
                </button>
                <button className="w-1/2 px-6 py-2 m-1 duration-200 hover:scale-110 text-sky-400">
                <a href={hrefCode} target="_blank" rel="noreferrer">Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
};


export default Projects

import React from "react";
import image21 from "../assets/image21.jpg";
import image22 from "../assets/image22.jpg";
import image23 from "../assets/image23.jpg";
import image24 from "../assets/image24.jpg";
import image25 from "../assets/image25.jpg";
import image26 from "../assets/image26.jpg";
import image27 from "../assets/image27.jpg";
import image28 from "../assets/image28.jpg";
import image29 from "../assets/image29.jpg";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      src: image21,
      style: "shadow-sky-400",
    },
    {
      id: 2,
      src: image22,
      style: "shadow-yellow-500",
    },
    {
      id: 3,
      src: image23,
      style: "shadow-blue-500",
    },
    {
      id: 4,
      src: image24,
      style: "shadow-orange-400",
    },
    {
      id: 5,
      src: image25,
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: image26,
      style: "shadow-indigo-500/50",
    },
    {
      id: 7,
      src: image27,
      style: "shadow-orange-600",
    },
    {
        id: 8,
        src: image28,
        style: "shadow-orange-600",
      },
      {
        id: 9,
        src: image29,
        style: "shadow-orange-600",
      },
  ];
  return (
    <div
      name="certificates"
      className="bg-gradient-to-b from-gray-800 to-black w-full lg:h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Certificates
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {certificates.map(({ id, src }) => (
            <div
              key={id}
              className="shadow-xl rounded-b-md duration-300 hover:scale-150"
            >
              <div className="">
                <img src={src} alt="" className="rounded-t-md h-52 w-52 " />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;

import React from 'react';
import image19 from "../assets/image19.png";
import image20 from "../assets/image20.jpg";

const Education = () => {
  const clients = [
    {
      src:image19,
      university : "Jaypee University of Engineering and Technology",
      degree : "B.Tech in Computer Science and Engineering",
      Date : "2020-2024",
      percent : "CGPA: 8.1"
    },
    {
      src:image20,
      university : "City Montessori School",
      degree : "Council for Indian School Certificate Examinations (CISCE)",
      Date : "2019-2020",
      percent : "91%"
    },
    {
      src:image20,
      university : "City Montessori School",
      degree : " Indian Certificate of Secondary Education (ICSE)",
      Date : "2017-2018",
      percent : "87%"
    }
  ];
  return (
    <div
    name="education"
      className="bg-gradient-to-b from-gray-800 to-black w-full lg:h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Education
          </p>
          <p className="py-6">Educational Information</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
        {clients.map((client, index) => {
          return (
            <div key={index}>
              <div className=' flex flex-col items-center'>
              <img
                src={client.src}
                alt=""
                className="rounded-t-md h-44 w-60 mr-16 " /><br />
                <div className=' text-2xl text-left'>
                <span>{client.university}</span><br /><br />
                <span>{client.degree}</span><br /><br />
                <span className=''>{client.Date}</span><br />
                <span>{client.percent}</span>
                </div>
              </div>
            </div>
          );
        })}
        </div>
      
    </div>
    
    </div>
  )
}

export default Education

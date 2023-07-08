import React from "react";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { addDoc } from "firebase/firestore";
import { usersRef } from "../Firebase/Firebase";
import swal from "sweetalert";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    mobile: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const addUser = async () => {
    setLoading(true);
    try {
      await addDoc(usersRef, data);
      swal({
        title: "Message Sent Successfully",
        icon: "success",
        buttons: false,
        timer: 3000,
      });

      setData({
        name: "",
        mobile: "",
        message: "",
      });
    } catch (err) {
      swal({
        title: err,
        icon: "error",
        buttons: false,
        timer: 3000,
      });
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className=" flex justify-center items-center">
          <form onSubmit={handleSubmit} className=" flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={data.name}
              onChange={handleChange}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              aria-required
              required
            />
            <input
              type="number"
              name="mobile"
              placeholder="Enter your mobile no."
              value={data.mobile}
              onChange={handleChange}
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              aria-required
              required
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              value={data.message}
              onChange={handleChange}
              aria-required
              required
            ></textarea>
            <button
            onClick={addUser}
               className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300" type="submit">
              {loading ? <TailSpin height={25} color="white" /> : "Let's Talk"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

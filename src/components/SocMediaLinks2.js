import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";


const SocMediaLinks2 = () => {
    const links = [
        {
          id: 1,
          child: (
            <>
            <BsFillPersonLinesFill size={30} />
            </>
          ),
          href: "https://drive.google.com/file/d/1gNteRgF8jCrtkqCScdCI9RzBIkNPV0vV/view?usp=sharing",
          download: true,
        },
        {
          id: 2,
          child: (
            <>
              <FaLinkedin size={30} />
            </>
          ),
          href: "https://www.linkedin.com/in/prakhar-srivastava-15b9ba202/",
        },
        {
          id: 3,
          child: (
            <>
            <FaGithub size={30} />
            </>
          ),
          href: "https://github.com/prakhar040",
        },
        {
          id: 4,
          child: (
            <>
            <HiOutlineMail size={30} />
            </>
          ),
          href: "mailto:prakhar.srivastava040@gmail.com",
        },
      ];
    
  return (
    <div className="lg:hidden">
      <ul className="flex">
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className="px-1"
          >
            <a
              href={href}
              className="text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>

  )
}

export default SocMediaLinks2

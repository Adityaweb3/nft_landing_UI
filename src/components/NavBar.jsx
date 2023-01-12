import React, { useState } from "react";
import { FaBars, FaTimes} from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Explore",
    },
    {
      id: 2,
      link: "Status",
    },
    {
      id: 3,
      link: "Resources",
    },
    
  ];

  return (
    <div className="flex justify-between bg-transparent items-center w-full h-20 px-4 text-white border-gray-900 fixed">
      <div>
      <form className="d-flex" role="search">
         
        <input className="form-control h-10 rounded-xl py-2 px-2 border-2 border-gray-900 bg-gray-900 me-2"  style={{borderRadius:"3px", marginLeft: "8rem"}}  type="search"  placeholder="Search" aria-label="Search"/>
        
      </form>
      </div>

      <ul className="hidden md:flex" style={{marginRight:"20rem"}}>
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <form className="flex">
        <button className="btn btn-outline-success rounded-lg py-2 px-2 border-2 border-white" style={{marginRight: "4rem"}} type="submit">Connect wallet</button>
      </form>
    </div>
  );
};

export default NavBar;
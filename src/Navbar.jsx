import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  
    return (
      <div className="mx-24 flex flex-row justify-between px-1 py-4">
        <div className="flex items-center">
          <div>
            <img
              className="w-12 h-12"
              src="/src/assets/Group 3.svg"
              alt="Mana Gambarmu"
            />
          </div>
          <div className="flex flex-col px-2">
            <div className="text-4xl font-bold font-poppins">Bookoe</div>
            <div className="text-sm">Rekomendasi Bukumu</div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-x-3">
          <ul className="flex gap-x-3 px-10">
            <li>
              <NavLink to="/">All</NavLink>
            </li>
            <li>
              <NavLink to="latest">Latest</NavLink>
            </li>
            <li>
              <NavLink to="toppicks">Top Picks</NavLink>
            </li>
          </ul>
          <div className="flex">
            <input
              className="w-60 h-8 border-2 border-black rounded-md mr-5"
              type="text"
              placeholder="Search by title or authors..."
            ></input>
          </div>
          <button className="border-solid border-2 border-[#8170F2] w-20 h-8 rounded-md text-[#8170F2]">
            Edit List
          </button>
        </div>
      </div>
    );
}

export default Navbar
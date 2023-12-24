"use client";

import { useState } from "react";

function HambergerMenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}


type Props = {
  onSideMenuClick?: (sideMenuIsActive: boolean) => void;
};

export default function Navbar({ onSideMenuClick }: Props) {
  const [sideMenuIsActive, setSideMenuIsActive] = useState(false);

  const handleHambergerClick = () => {
    setSideMenuIsActive((prev) => {
      onSideMenuClick && onSideMenuClick(!prev);
      return !prev;
    });
  };

  return (
    <nav className=" bg-white shadow-sm sticky top-0 w-full border-b-gray-200 border-b p-3 z-10">
      <div className="flex flex-row justify-between max-w-6xl mx-auto align-middle px-2">
        <button
          onClick={handleHambergerClick}
          className=" rounded-full text-md hover:bg-gray-100 my-auto h-9 px-2  font-bold text-gray-700 lg:hidden"
        >
          {sideMenuIsActive ? <CloseIcon /> : <HambergerMenuIcon />}
        </button>
        <div className="my-auto mx-2 text-lg font-extrabold">Niceboard</div>
        <div className="flex align-middle max-lg:hidden">
          <button className=" rounded-lg text-md hover:bg-gray-100 my-auto h-9 px-2 mx-3 font-bold text-gray-700 ">
            Dashboard
          </button>
          <button className=" rounded-lg text-md hover:bg-gray-100 my-auto h-9 mx-2 px-1 font-bold text-gray-700 ">
            Manage board
          </button>
          <button className=" rounded-lg text-md hover:bg-gray-100 my-auto h-9 mx-2 px-1 font-bold text-gray-700 ">
            Manage Data
          </button>
          <button className=" rounded-lg text-md hover:bg-gray-100 my-auto h-9 mx-2 px-1 font-bold text-blue-300 ">
            Open board
          </button>
        </div>
        <div className="flex align-middle my-auto">
          <button className=" rounded-lg bg-sky-500 px-2 my-auto h-9 text-sm font-bold text-white mx-4 max-lg:hidden">
            Upgrade now
          </button>
          <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-200 rounded-full ">
            <span className="font-light text-gray-600 ">JL</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

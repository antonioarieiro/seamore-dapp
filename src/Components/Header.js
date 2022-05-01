import React from 'react';
import './style.scss';
export default function Header() {
  return (
    <>
    <div className="absolute header w-full h-12 flex items-center">
      <p className="m-auto">New projects in Mint. See more</p>
      <div className="text-white flex justify-end absolute w-full">
     <span className="mr-28 cursor-pointer">
     X
     </span>
      </div>
    </div>
    </>
  )
}
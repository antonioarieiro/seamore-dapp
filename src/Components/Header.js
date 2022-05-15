import React from 'react';
import './style.scss';
import Icon from '@material-tailwind/react/Icon';
export default function Header() {
  return (
    <>
    <div className="absolute header w-full h-12 flex items-center">
      <p className="m-auto">New projects in Mint. See more</p>
      <div className="text-white flex justify-end absolute w-full">
     <span className="cursor-pointer flex items-center mr-9">
     <Icon name='close' size='4xl' color='white' />
     </span>
      </div>
    </div>
    </>
  )
}
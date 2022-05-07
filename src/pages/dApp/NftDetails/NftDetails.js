import React from 'react';
import SelectedNftInfo from './SelectedNftInfo';

import './style.scss';
export default function NftDetails() {
  return (
    <>
      <div className="absolute w-full">
        <SelectedNftInfo />
        <div className="mt-[96px] w-full flex">
          <div className="mr-8 ml-8 flex border w-full text-white items-center justify-between">
           <div className="flex">
           <p className="flex items-center mr-[57px]">
              <span className="mr-[17px]">
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 0H15V14H18V0ZM14 0H4V14H14V0ZM3 0H0V14H3V0Z" fill="#F7F7FC" />
                </svg>

              </span>

              Overview
            </p>
            <p className="flex items-center">
           

              Collection Itens
            </p>
           </div>
           <div>
           Trait Filters
           </div>
          </div>
        </div>
      </div>
    </>
  )
}
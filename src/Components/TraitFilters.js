import React from 'react';
import { SeamoreContext } from '../SeamoreContext/SeamoreContext';
import Icon from '@material-tailwind/react/Icon';
import './style.scss';


export default function TraitFilters() {
  const { openTraits, setOpenTraits } = React.useContext(SeamoreContext);
  return (
    <>
      <div className={openTraits ? "absolute h-full  z-50 justify-end flex w-full" : 'hidden'}>
        <div className={openTraits ? "bg-[#262338] w-[496px] fixed h-full" : 'hidden'}>
          <div
            className="flex w-full items-center cursor-default items-end justify-end mt-[37px]"
            onClick={() => { setOpenTraits(!openTraits) }}
          >
            <span className="mr-[37px]  hover:border-b border-blue-500">

              <Icon name='close' size='2xl' color='white' />
            </span>
          </div>
          <div className="flex w-full ml-[32px] items-center justify-between mt-[37px]">
            <div className="flex flex-col traits-text">
              <h2 className="title">
                Trait Filters
              </h2>
              <span>
                Select the trait preferences you want to see
              </span>
            </div>
            <span className="ml-16">
              <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7L7 1L13 7" stroke="#EFF0F6" strokeWidth="2" strokeWidth="round" strokeLinejoin="round" />
              </svg>

            </span>
            <div></div>
          </div>
          <div className="mt-[32px] flex justify-between ml-[35px] selected-filters">
            <div className="flex items-center">
              <span className="mr-[15px]">
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 8.4H2V5.6H0V8.4ZM0 14H2V11.2H0V14ZM0 2.8H2V0H0V2.8ZM4 8.4H18V5.6H4V8.4ZM4 14H18V11.2H4V14ZM4 0V2.8H18V0H4Z" fill="#F7F7FC" />
                </svg>
              </span>
              <p>
                Background
              </p>
            </div>
            <div className="mr-[37px] flex items-center">
              <span>
                8 filters
              </span>
              <div className="flex ml-[12px]  bg-[#4E4B66] w-[20px] h-[20px] items-center">
                <span className="ml-1">
                  <svg width="13" height="2" viewBox="0 0 13 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.25H11.5" stroke="#A0A3BD" strokeWidth="1.5" strokeWidth="round" strokeLinejoin="round" />
                  </svg>

                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
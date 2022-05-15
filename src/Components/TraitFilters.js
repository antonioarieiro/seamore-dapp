import React, { useState, useEffect } from 'react';
import { SeamoreContext } from '../SeamoreContext/SeamoreContext';
import Icon from '@material-tailwind/react/Icon';
import './style.scss';

export default function TraitFilters() {
  const [openTraitsFilter, setOpenTraitsFilter] = useState(false);
  const [openHighlight, setOpenHighlight] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(null)
  const [closeAtention, setCloseAtention] = useState(false);
  const [keys, setKeys] = useState([]);
  const { openTraits, setOpenTraits, collectionSet } = React.useContext(SeamoreContext);
  useEffect(() => {
    (async () => {
      await collectionSet
    })()
    var allKeys = [];
    var allContent = [];
    for (var a in collectionSet.traits) {
      allKeys.push(a)
      allContent.push(collectionSet.traits[a])
    }
    setKeys(allKeys)

  }, [collectionSet])

  const resetAlert = () => {
    setOpenHighlight(!openHighlight)
    if (openHighlight) {
      setCloseAtention(false);
    }
  }

  return (
    <>
      <div className={openTraits ? "absolute h-full  z-50 justify-end flex w-full" : 'hidden'}>
        <div className={openTraits ? "bg-[#262338] w-[496px] fixed h-full  overflow-y-scroll overflow-x-hidden pb-10" : 'hidden'}>
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
            <span
              onClick={() => { setOpenTraitsFilter(!openTraitsFilter) }}
              className="ml-16 hover:border-b-2 border-blue-500"
            >
              {
                openTraitsFilter
                  ? <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 7L7 1L13 7" stroke="#EFF0F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>

                  : <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L7 7L13 1" stroke="#EFF0F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
              }
            </span>
            <div></div>
          </div>
          <div className={
            openTraitsFilter ?
              "flex flex-col w-full "
              : 'hidden'
          }>
            {
              keys &&
              keys.map((val, index) => (
                <>
                  <div className="mt-[32px] flex justify-between ml-[35px] selected-filters">
                    <div className="flex items-center">
                      <span className="mr-[15px]">
                        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 8.4H2V5.6H0V8.4ZM0 14H2V11.2H0V14ZM0 2.8H2V0H0V2.8ZM4 8.4H18V5.6H4V8.4ZM4 14H18V11.2H4V14ZM4 0V2.8H18V0H4Z" fill="#F7F7FC" />
                        </svg>
                      </span>
                      <p className="cursor-default hover:border-b-2 border-blue-500">
                        {val}
                      </p>
                    </div>
                    <div className="mr-[37px] flex items-center">
                      <span className="hover:border-b-2 border-blue-500 cursor-default">
                        {val.length} items
                      </span>
                      <div
                        onClick={() => { setSelectedFilter(index) }}
                        className="flex ml-[12px] bg-[#4E4B66] w-[20px] h-[20px] items-center hover:border-b-2 border-blue-500">
                        <span className="ml-1 ">
                          <svg width="13" height="2" viewBox="0 0 13 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.25H11.5" stroke="#A0A3BD" strokeWidth="1.5" strokeWidth="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={
                    selectedFilter === index ?
                      `ml-[35px] flex flex-col w-full`
                      : 'hidden'
                  } >
                    <div className="flex items-center w-[432px] h-[56px] bg-[#14142B] opacity-50 mt-[24px]">
                      <span className="ml-[20px] mr-[20px]">
                        <Icon name='search' size='1xl' color='gray' />
                      </span>
                      <input className="h-[20px] bg-[#14142B] w-[145px] text-white searchStyle opacity-100 border-none" placeholder="Search background" />
                    </div>
                    <div className="mt-[24px] flex justify-between selected-filters mr-9">
                      <div className="flex items-center traits-filter">
                        <span className="mr-[15px]">
                          <input type="checkbox" className="w-[20px] h-[20px] bg-[#14142B] text-white searchStyle opacity-100 border-none cursor-default" />
                        </span>
                        <p className="cursor-default hover:border-b-2 border-blue-500">
                          Background
                        </p>
                      </div>
                      <div className="mr-[37px] flex items-center">
                        <span className="cursor-default hover:border-b-2 border-blue-500">
                          8 filters
                        </span>
                        
                      </div>
                    </div>
                  </div>
                </>
              ))

            }

          </div>
          <div className="flex w-full ml-[32px] items-center justify-between mt-[37px]">
            <div className="flex flex-col traits-text">
              <h2 className="title">
                Trait Highlight
              </h2>
              <span className="opacity-0">
                Select the trait preferences you want to see
              </span>
            </div>
            <span
              onClick={resetAlert}
              className="ml-16 hover:border-b-2 border-blue-500"
            >
              {
                openHighlight
                  ? <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 7L7 1L13 7" stroke="#EFF0F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>

                  : <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L7 7L13 1" stroke="#EFF0F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
              }
            </span>
            <div></div>
          </div>
          <div
            className={
              closeAtention ?
                "hidden"
                : "bg-[#4E4B66] h-[138px] w-[432px] ml-[32px] flex items-center flex-col atention"
            }
          >
            <div className="flex justify-between w-full mt-[14px] items-center">
              <div className="flex items-center ml-[19px]">
                <span className="mr-[15px]">
                  <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.9999 0.666687H5.33325L0.349919 5.66669L0.333252 15.6667C0.333252 16.5834 1.08325 17.3334 1.99992 17.3334H11.9999C12.9166 17.3334 13.6666 16.5834 13.6666 15.6667V2.33335C13.6666 1.41669 12.9166 0.666687 11.9999 0.666687ZM7.83325 13.1667H6.16659V11.5H7.83325V13.1667ZM7.83325 9.83335H6.16659V5.66669H7.83325V9.83335Z" fill="#262338" />
                  </svg>

                </span>
                <h4>
                  ATENTION
                </h4>
              </div>
              <span
                onClick={() => { setCloseAtention(true) }}
                className='mr-[21px] cursor-default hover:border-b-2 border-blue-500'
              >
                <Icon name='close' size='lg' color='white' />
              </span>
            </div>
            <p className="ml-[16px] mr-[28px]">
              This feature allows you to select a trait and continue to see all NFT options, but the item that get the trait selected, you  will have the sample in the listings listing and trades.
       </p>
          </div>
             </div>
      </div>
    </>
  )
}
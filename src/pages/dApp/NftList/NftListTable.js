import React from 'react';
import NftFilterbyTime from './NftFilterbyTime';
import './style.scss';
export default function NftListTable() {
  return (
    <>
    <div className="flex justify-end">
        <NftFilterbyTime/>
        </div>
      <div class=" shadow-md nft-table-header items-center ml-10 mr-10">
        
        <table className="flex items-center">
          <thread className="h-[56px] flex items-center">
            <tr className="flex">
              <th className='w-[320px] text-left px-8'>
                COLLECTIONS
              </th>
              <th className="w-[166px] items-center">
                FLOOR PRICE

                <span className="flex flex-col ml-2 items-center cursor-pointer">
                  <svg c width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-1">
                    <path d="M3.65995 0.811707L7.31991 5.94346H0L3.65995 0.811707Z" fill="#6E7191" />
                  </svg>
                  <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.66005 5.18829L0.000102015 0.0565327L7.32001 0.0565333L3.66005 5.18829Z" fill="#6E7191" />
                  </svg>

                </span>

              </th>
              <th className="w-[150px] items-center">
                SUPPLY
                <span className="flex flex-col ml-2 items-center">
                  <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-1">
                    <path d="M3.65995 0.811707L7.31991 5.94346H0L3.65995 0.811707Z" fill="#6E7191" />
                  </svg>
                  <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.66005 5.18829L0.000102015 0.0565327L7.32001 0.0565333L3.66005 5.18829Z" fill="#6E7191" />
                  </svg>

                </span>
              </th>
              <th className="w-[166px]  items-center">
                VOLUME 24H
                <span className="flex flex-col ml-2 items-center">
                  <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-1">
                    <path d="M3.65995 0.811707L7.31991 5.94346H0L3.65995 0.811707Z" fill="#6E7191" />
                  </svg>
                  <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.66005 5.18829L0.000102015 0.0565327L7.32001 0.0565333L3.66005 5.18829Z" fill="#6E7191" />
                  </svg>

                </span>
              </th>
              <th className="w-[166px] items-center">
                VOLUME 7D
                <span className="flex flex-col ml-2 items-center">
                  <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-1">
                    <path d="M3.65995 0.811707L7.31991 5.94346H0L3.65995 0.811707Z" fill="#6E7191" />
                  </svg>
                  <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.66005 5.18829L0.000102015 0.0565327L7.32001 0.0565333L3.66005 5.18829Z" fill="#6E7191" />
                  </svg>

                </span>
              </th>
              <th className="w-[166px] items-center">
                SALES
                <span className="flex flex-col ml-2 items-center">
                  <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-1">
                    <path d="M3.65995 0.811707L7.31991 5.94346H0L3.65995 0.811707Z" fill="#6E7191" />
                  </svg>
                  <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.66005 5.18829L0.000102015 0.0565327L7.32001 0.0565333L3.66005 5.18829Z" fill="#6E7191" />
                  </svg>

                </span>
              </th>
              <th className="w-[166px] items-center">
                ROYALTY
                <span className="flex flex-col ml-2 items-center">
                  <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-1">
                    <path d="M3.65995 0.811707L7.31991 5.94346H0L3.65995 0.811707Z" fill="#6E7191" />
                  </svg>
                  <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.66005 5.18829L0.000102015 0.0565327L7.32001 0.0565333L3.66005 5.18829Z" fill="#6E7191" />
                  </svg>
                </span>
              </th>
            </tr>
          </thread>

        </table>
      </div>

    </>
  )
}
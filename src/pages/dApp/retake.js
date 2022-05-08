import React, { useState, useEffect } from 'react';
import SelectedNftInfo from './SelectedNftInfo';

import { ScatterChart } from 'react-chartkick'
import 'chartkick/chart.js'

import './style.scss';
export default function CollectionDetails() {
  const [content, setContent] = useState('overview');
  const [time, setTime] = useState('24H');
  const filterOptions = [
    '24H',
    '7D',
    '30D',
    '90D',
    '6M',
    'ALL'
  ]
  return (
    <>
      <div className="absolute w-full">
        <SelectedNftInfo />
        <div className="mt-[96px] w-full flex flex-col">
          <div className="ml-10 flex w-full text-white items-center justify-between">
            <div className="flex">
              <p
                onClick={() => { setContent('overview') }}
                className="flex items-center mr-[57px] cursor-pointer"
              >
                <span className="mr-[17px]">
                  <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 0H15V14H18V0ZM14 0H4V14H14V0ZM3 0H0V14H3V0Z" fill={content === 'overview' ? "#F7F7FC" : '#4E4B66'} />
                  </svg>

                </span>
                <span className={content === 'overview' ? '' : "hover:border-b-2 border-blue-500 text-[#4E4B66]"}>
                  Overview
                </span>
              </p>
              <p
                onClick={() => { setContent('itens') }}
                className="flex items-center cursor-pointer"
              >
                <span className="mr-[17px]">
                  <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 20H1C0.734784 20 0.48043 19.8946 0.292893 19.7071C0.105357 19.5196 0 19.2652 0 19V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H17C17.2652 0 17.5196 0.105357 17.7071 0.292893C17.8946 0.48043 18 0.734784 18 1V19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20ZM5 5V7H13V5H5ZM5 9V11H13V9H5ZM5 13V15H10V13H5Z"
                      fill={content === 'itens' ? "#F7F7FC" : '#4E4B66'} />
                  </svg>

                </span>

                <span className={content === 'itens' ? '' : 'hover:border-b-2 border-blue-500 text-[#4E4B66]'}>
                  Collection Itens
                </span>
              </p>
            </div>
            <div className="traits flex items-center justify-center mr-[78px]">
              <span className="mr-[16px]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.250056 1.61C2.27006 4.2 6.00006 9 6.00006 9V15C6.00006 15.55 6.45006 16 7.00006 16H9.00006C9.55006 16 10.0001 15.55 10.0001 15V9C10.0001 9 13.7201 4.2 15.7401 1.61C15.8547 1.46237 15.9255 1.28553 15.9445 1.09961C15.9636 0.913684 15.93 0.726154 15.8477 0.558371C15.7654 0.390588 15.6376 0.249293 15.4789 0.150577C15.3202 0.0518598 15.137 -0.000312035 14.9501 1.40404e-06H1.04006C0.210056 1.40404e-06 -0.259944 0.950002 0.250056 1.61Z" fill="#F7F7FC" />
                </svg>
              </span>
              <p>
                Trait Filters
              </p>
            </div>
          </div>
          <div className="mr-10 ml-9 flex w-full text-white items-center">
            <div className={content === 'overview' ? 'bg-[#F7F7FC] w-[106px] h-[2px]' : 'opacity-0 w-[106px] h-[2px]'}></div>
            <div className={content === 'itens' ? 'bg-[#F7F7FC] w-[156px] h-[2px] ml-[52px]' : 'hidden'}></div>
          </div>
        </div>
        <div>

          <div className="mr-10 ml-9 mt-[30px] mb-[32px] flex w-full text-white items-center">
            No trait filters added
          </div>

        </div>
        <div className="ml-9 2xl:flex flex-col  w-full text-white">
          <div className="2xl:flex   mr-[70px]">
            <div className="2xl:w-8/12 chart flex flex-col">
              <div className="header-chart flex items-center h-full">
                <div className="flex  w-full items-center justify-between h-[96px]">
                  <div className="flex-col items-center ml-[24px]">
                    <p>Trades</p>
                    <span>
                      Showing 2300 trades.
                    </span>
                  </div>

                  <div className="flex items-center mr-[34px]">
                    <p className="time">Time:</p>
                    {filterOptions.map(val => (<span key={val} onClick={() => { setTime(val) }} className={time === val ? 'filter-trade-options ml-12 p-[6px] bg-[#4E4B66] cursor-pointer' : 'cursor-pointer filter-trade-options ml-12 p-[6px] text-[#6E7191]'}>{val}</span>))}
                  </div>
                </div>
              </div>
              <div className="mt-[24px] bg-[#262338] ">
                <ScatterChart data={[[174.0, 80.0,], [175.0, 80.0,], [176.5, 82.3]]} title="dale" height="448px" />
              </div>
            </div>

            <div className="ml-[32px]  listing w-4/12 flex flex-col">
              <div className="flex justify-between items-center w-full bg-[#262338] h-[56px]">
                <p className="ml-[24px]">Listing</p>
                <div className="order-filters flex items-center">
                  <span className="mr-[12px]">Order:</span>
                  <p>Profit</p>
                  <span className="ml-[25px] mr-[25px]">
                    <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.5 0.75L6 5.25L10.5 0.75" stroke="#F7F7FC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                  </span>
                </div>
              </div>
              <div className="mt-[24px] bg-[#262338] h-[384px] flex flex-col info-details-rank">
                <div className="mt-[24px] mb-[24px] ml-[24px] flex items-center justify-around">
                  <img src="https://lh3.googleusercontent.com/Yf4jFbxs54kGI74jY4D_Cmb1jqkLf9kwFo0gHK7Znwrvib-BLUs4cYj6bl4Dzao0Nv-gmGG4K9wJJ3yVhpWk-M09RS7ofxJFgtQF0w=w600" className="w-[48px] h-[48px]" alt="img" />
                  <div className="flex-col ml-[16px]">
                    <p>RANK7349</p>
                    <span>#1957</span>
                  </div>
                  <div className="flex-col items-center  ml-[26px]">
                    <div className="flex items-center justify-end">
                      <span className="flex flex-col items-center">
                        <svg className="mb-1" width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 1H12" stroke="#FCFCFC" stroke-width="1.5" />
                        </svg>
                        <svg className="mb-1" width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 1H10" stroke="#FCFCFC" stroke-width="1.5" />
                        </svg>
                        <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 1H12" stroke="#FCFCFC" stroke-width="1.5" />
                        </svg>
                      </span>
                      <p className="flex-col items-center ml-1 hover:border-b-2 border-blue-500 cursor-default">
                        140
                      </p>
                    </div>
                    <span>2 MINUTES AGO</span>
                  </div>
                  <div className="flex-col items-center  ml-[26px]">
                    <div className="flex items-center justify-end">
                      <span className="flex flex-col items-center">
                        <svg className="mb-1" width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 1H12" stroke="#FCFCFC" stroke-width="1.5" />
                        </svg>
                        <svg className="mb-1" width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 1H10" stroke="#FCFCFC" stroke-width="1.5" />
                        </svg>
                        <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 1H12" stroke="#FCFCFC" stroke-width="1.5" />
                        </svg>
                      </span>
                      <p className="flex-col items-center ml-1 hover:border-b-2 border-blue-500 cursor-default">
                        161.84
                      </p>
                    </div>
                    <span>ESTIMATED PRICE</span>
                  </div>
                  <div className="buy-btn">
                    <button className="text-center h-full w-full hover:border-2 border-blue-500">
                      BUY
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
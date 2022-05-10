import React, { useState } from 'react';
import { ScatterChart } from 'react-chartkick';
// import { SeamoreContext } from '../../../SeamoreContext/SeamoreContext';
import 'chartkick/chart.js';
import './style.scss'
export default function SmallSize() {
  const [time, setTime] = useState('24H');
  const [floor, setFloor] = useState('24H');
  const [traitTime, setTraitTime] = useState('1M');

  const filterOptions = [
    '24H',
    '7D',
    '30D',
    '90D',
    '6M',
    'ALL'
  ]
  const traits_time = [
    '1M',
    '5M',
    '15M',
    '30M',
    '1H',
    '1D'
  ]
  const floor_price = [
    '24H',
    '7D',
    '30D',
    '90D',
    '6M',
    'ALL'
  ]
  return (
    <>
      <div className="ml-9 2xl:flex flex-col  w-full text-white">
        <div className=" mr-[70px]">
          <div className="chart flex flex-col">
            <div className="header-chart flex-col flex items-center h-full">
              <div className="flex  w-full items-center justify-between h-[96px]">
                <div className="flex-col items-center ml-[24px]">
                  <p>Trades</p>
                  <span>
                    Showing 2300 trades.
                  </span>
                </div>
                <div className="flex items-center mr-[34px]">
                  <p className="time">Time:</p>
                  {filterOptions.map(val => (<span key={val} onClick={() => { setTime(val) }} className={time === val ? 'filter-trade-options ml-12 px-[20px] py-[12px] bg-[#4E4B66] cursor-pointer' : 'cursor-pointer filter-trade-options ml-12 p-[6px] text-[#6E7191]'}>{val}</span>))}
                </div>
              </div>
            </div>
            <div className="mt-[24px] bg-[#262338] ">
              <ScatterChart data={[[174.0, 80.0,], [175.0, 80.0,], [176.5, 82.3]]} title="dale" height="448px" />
            </div>
            <div className="w-full flex justify-between mt-[64px]">
              <div className="w-3/6 mr-[32px]">
                <div className="flex justify-between items-center w-full bg-[#262338] h-[56px]">
                  <p className="ml-[24px]">Listing</p>
                  <div className="order-filters flex items-center">
                    <span className="mr-[12px]">Order:</span>
                    <p>Profit</p>
                    <span className="ml-[25px] mr-[25px]">
                      <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 0.75L6 5.25L10.5 0.75" stroke="#F7F7FC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
                            <path d="M0 1H12" stroke="#FCFCFC" strokeWidth="1.5" />
                          </svg>
                          <svg className="mb-1" width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1H10" stroke="#FCFCFC" strokeWidth="1.5" />
                          </svg>
                          <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1H12" stroke="#FCFCFC" strokeWidth="1.5" />
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
                            <path d="M0 1H12" stroke="#FCFCFC" strokeWidth="1.5" />
                          </svg>
                          <svg className="mb-1" width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1H10" stroke="#FCFCFC" strokeWidth="1.5" />
                          </svg>
                          <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 1H12" stroke="#FCFCFC" strokeWidth="1.5" />
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
              <div className="w-6/12">
                <div className="flex justify-between items-center w-full  bg-[#262338] h-[56px]">
                  <p className="ml-[24px]">Trades</p>
                  <div className="order-filters flex items-center">
                    <span className="mr-[12px]">Order:</span>
                    <p>Price min to max</p>
                    <span className="ml-[25px] mr-[25px]">
                      <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 0.75L6 5.25L10.5 0.75" stroke="#F7F7FC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="mt-[24px] bg-[#262338] h-[384px] flex flex-col info-details-rank">
                  <div className="mt-[24px] mb-[24px] ml-[24px] flex items-center justify-between">
                    <div className="flex">
                      <img src="https://lh3.googleusercontent.com/Yf4jFbxs54kGI74jY4D_Cmb1jqkLf9kwFo0gHK7Znwrvib-BLUs4cYj6bl4Dzao0Nv-gmGG4K9wJJ3yVhpWk-M09RS7ofxJFgtQF0w=w600" className="w-[48px] h-[48px]" alt="img" />
                      <div className="flex-col ml-[16px]">
                        <p>RANK7349</p>
                        <span>#1957</span>
                      </div>
                    </div>
                    <div className="flex items-center  ml-[26px]">
                      <div className="flex flex-col">
                        <div className="flex items-center justify-end">
                          <span className="flex flex-col items-center">
                            <svg className="mb-1" width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0 1H12" stroke="#FCFCFC" strokeWidth="1.5" />
                            </svg>
                            <svg className="mb-1" width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0 1H10" stroke="#FCFCFC" strokeWidth="1.5" />
                            </svg>
                            <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0 1H12" stroke="#FCFCFC" strokeWidth="1.5" />
                            </svg>
                          </span>
                          <p className="flex-col items-center ml-1 hover:border-b-2 border-blue-500 cursor-default">
                            161.84
                          </p>
                        </div>
                        <span>ESTIMATED PRICE</span>
                      </div>
                      <div className="mr-[30px] ml-[82px]">
                        <span>
                          <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.01104 11.4269C5.01102 11.2928 5.03759 11.1601 5.08923 11.0363C5.14087 10.9126 5.21656 10.8002 5.31195 10.7056C5.40734 10.611 5.52056 10.5362 5.64509 10.4853C5.76962 10.4345 5.90302 10.4086 6.03763 10.4092L7.7396 10.4148C8.01097 10.4148 8.27123 10.5221 8.46312 10.7132C8.65501 10.9043 8.76281 11.1634 8.76281 11.4336V17.8419C8.95454 17.7854 9.20043 17.7251 9.4698 17.6622C9.65683 17.6183 9.82351 17.5129 9.94283 17.3629C10.0621 17.2129 10.1271 17.0272 10.1271 16.8359V8.88695C10.1271 8.75313 10.1536 8.62062 10.205 8.49698C10.2564 8.37334 10.3318 8.261 10.4268 8.16637C10.5218 8.07174 10.6346 7.99667 10.7588 7.94545C10.883 7.89423 11.016 7.86786 11.1504 7.86785H12.8558C13.1271 7.86789 13.3874 7.97525 13.5792 8.16631C13.7711 8.35738 13.8789 8.6165 13.879 8.8867V16.2647C13.879 16.2647 14.3058 16.0926 14.7218 15.9178C14.8763 15.8527 15.0081 15.7438 15.1008 15.6046C15.1936 15.4654 15.2431 15.3021 15.2432 15.1351V6.33936C15.2432 6.20557 15.2697 6.07308 15.3211 5.94947C15.3725 5.82586 15.4479 5.71354 15.5429 5.61893C15.6379 5.52432 15.7507 5.44927 15.8748 5.39807C15.9989 5.34686 16.132 5.32051 16.2664 5.32051H17.9717C18.2431 5.32051 18.5033 5.42785 18.6952 5.61892C18.8871 5.80999 18.995 6.06914 18.995 6.33936V13.5822C20.4735 12.5153 21.9719 11.2319 23.161 9.68891C23.3335 9.46492 23.4477 9.2019 23.4933 8.92331C23.5389 8.64471 23.5145 8.35921 23.4224 8.09226C22.6178 5.75751 21.1087 3.72718 19.1013 2.27891C17.0939 0.83063 14.6862 0.0350992 12.2075 0.0010879C5.52343 -0.0883183 -0.00056824 5.34462 8.83533e-05 12.001C-0.00647455 14.1073 0.545615 16.1779 1.60053 18.0036C1.74602 18.2533 1.96004 18.4565 2.21747 18.5893C2.4749 18.7221 2.76505 18.779 3.05382 18.7533C3.37645 18.725 3.77812 18.685 4.25563 18.6292C4.46347 18.6056 4.65535 18.5068 4.79473 18.3515C4.9341 18.1962 5.01124 17.9952 5.01145 17.7869V11.4269" fill="#D9DBE9" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-between items-center">
              <div className="border">
                uma
              </div>
              <div className="border">
                duas
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

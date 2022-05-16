import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SelectedNftInfo from './SelectedNftInfo';
import { SeamoreContext } from '../../../SeamoreContext/SeamoreContext';
import BreakMaxSize from './BreakProint1920';
import SmallSize from './SmallSize';
import 'chartkick/chart.js'
import './style.scss';
import CollectionItemsHeader from '../../../Components/CollectionItems/Header/HeaderCollectionItem';
import Card from '../../../Components/Card/Card';
import CardsItems from '../../../Components/CollectionItems';
import CardTest from '../../../Components/Card/CardTest';


function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}


export default function CollectionDetails() {
  const { openTraits, setOpenTraits } = React.useContext(SeamoreContext);
  const [content, setContent] = useState('overview');

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  const testB = [
    {
      name: "Botão 1",
      type: "button",
    },
    {
      name: "Botão 2",
      type: "submit",
    },
    {
      name: "Botão 3",
      type: "button",
    }
  ]


  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);



  }, [windowDimensions, setWindowDimensions, getWindowDimensions])

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
            {
              content !== 'overview'
              ? <div>
                Teste
              </div>
              : ''
            }
            <div
              className="traits flex items-center justify-center mr-[78px] cursor-pointer hover:border-2 border-blue-500"
              onClick={() => { setOpenTraits(!openTraits) }}
            >
              
              <span className="mr-[16px]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.250056 1.61C2.27006 4.2 6.00006 9 6.00006 9V15C6.00006 15.55 6.45006 16 7.00006 16H9.00006C9.55006 16 10.0001 15.55 10.0001 15V9C10.0001 9 13.7201 4.2 15.7401 1.61C15.8547 1.46237 15.9255 1.28553 15.9445 1.09961C15.9636 0.913684 15.93 0.726154 15.8477 0.558371C15.7654 0.390588 15.6376 0.249293 15.4789 0.150577C15.3202 0.0518598 15.137 -0.000312035 14.9501 1.40404e-06H1.04006C0.210056 1.40404e-06 -0.259944 0.950002 0.250056 1.61Z" fill="#F7F7FC" />
                </svg>
              </span>
              <p className="hover:border-b-2 border-blue-500">
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

          {
            content === 'overview' ?
            <div className="mr-10 ml-9 mt-[30px] mb-[32px] flex w-full text-white items-center">
              No trait filters added
            </div>
            : <CollectionItemsHeader />
          }
          {
            content === 'overview' ?
            <div>
              {
                windowDimensions.width > 1910
                  ? <BreakMaxSize />
                  : <SmallSize />
              }
            </div>
            : <div>
              {
                testB.map((teste) => (
                  <CardTest type={teste.type} name={teste.name} />
                ))
              }
            </div>
          }

        </div>

      </div>
    </>
  )
}
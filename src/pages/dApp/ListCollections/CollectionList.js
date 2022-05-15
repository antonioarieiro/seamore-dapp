import React from 'react';
import CollectionListBody from './CollectionListBody';
import Calendar from '../Calendar/Calendar';
import Search from './SearchBar';
import { SeamoreContext } from '../../../SeamoreContext/SeamoreContext';
import './style.scss';
export default function NftList() {
  const { openCalendar } = React.useContext(SeamoreContext);
  return (
    <>
        <div className={ "absolute bg-[#14142B] w-full h-full min-w-1920 "}
      >
        <div className="text-white mt-12 infos">
          <Search />
        </div>
        <div className="text-white mt-[5px]">
          <div className="ml-10 text-white mt-[10px]  w-full">
            <div className="mr-[80px] pb-10">
              {
                openCalendar
                ? <Calendar/>
                : <CollectionListBody />
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

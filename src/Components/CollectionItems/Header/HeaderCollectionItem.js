import * as Icon from 'react-feather';
import './HeaderItems.scss'

const CollectionItemsHeader = () => {
  return (
    <div className="mr-10 ml-9 mt-[30px] mb-[32px] flex w-[95%] justify-between text-white items-center">
        <p className="no-trait-filter-text">No trait filters added</p>

        <div className="search-container flex items-center pl-[10px] w-[384px] h-[56px]">
            <Icon.Search />
            <input type="search" name="search" id="search" className="search w-full h-full" placeholder="Search from ID" />
        </div>
      </div>
  );
};

export default CollectionItemsHeader;

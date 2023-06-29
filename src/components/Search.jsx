import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";
import { ReactComponent as Delete } from "../assets/icons/delete.svg";

const Search = () => {
  return (
    <div className="search-section">
      <input
        type="text"
        className="w-full h-16 bg-inherit px-5 text-xl focus:outline-none"
      />
      <div className="flex gap-2">
        <SearchIcon width={25} className="cursor-pointer" />
        <Delete width={25} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Search;

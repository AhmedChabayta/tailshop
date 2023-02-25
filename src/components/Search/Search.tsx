import Dropdown from '../Dropdown/Dropdown';

const Search = () => {
  return (
    <form className="relative flex min-h-[40px] max-w-xl items-center rounded-md border-2 border-blue-500 bg-white pl-4">
      <input
        placeholder="Search"
        className="flex-1 appearance-none bg-transparent outline-none focus:outline-none"
      />

      <div className="flex h-full w-[400px] items-center ">
        <Dropdown />
        <button
          className="absolute inset-y-0 right-0 h-full rounded-r-sm bg-blue-500 px-4 text-white"
          type="button"
        >
          Search
        </button>
      </div>
    </form>
  );
};
export default Search;

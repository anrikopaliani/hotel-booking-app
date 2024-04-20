import { useSearchContext } from "../context/SearchContext";

const Search = () => {
  const search = useSearchContext();
  console.log(search);
  return <>Search page</>;
};

export default Search;

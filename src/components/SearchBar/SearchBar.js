import style from "./searchbar.module.css";

const SearchBar = () => {

  return <div className={style.SearchBar}>
    <form>
      <input placeholder="Search"></input>
    </form>
  </div>
}

export default SearchBar;
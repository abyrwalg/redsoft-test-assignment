import classes from "./SearchBar.module.css";

function SearchBar(props) {
  return (
    <div className={classes.SearchBar}>
      <input type="text" placeholder={props.placeholder} />
      <button>Найти</button>
    </div>
  );
}

export default SearchBar;

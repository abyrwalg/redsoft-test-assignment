import classes from "./Loader.module.css";

function Loader() {
  return (
    <div className={classes.Loader}>
      <div className={classes.InnerLoader} style={{ position: "absolute" }}>
        Loading...
      </div>
    </div>
  );
}

export default Loader;

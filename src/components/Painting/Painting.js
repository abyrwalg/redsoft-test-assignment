import React from "react";
import classes from "./Painting.module.css";

import Loader from "../Loader/Loader";

import okIcon from "../../assets/images/icons/ok.png";

function Painting(props) {
  function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  let sellingBlock;
  let buttonContent;

  if (props.bought) {
    buttonContent = (
      <span className={classes.purchased}>
        <img src={okIcon} alt="OK icon" />
        <span>В корзине</span>
      </span>
    );
  } else {
    buttonContent = "Купить";
  }

  if (props.sold) {
    sellingBlock = <span className={classes.sold}>Продана на аукционе</span>;
  } else {
    sellingBlock = (
      <React.Fragment>
        <div className={classes.price}>
          {props.price !== props.oldPrice ? (
            <span className={classes.oldPirce}>
              {numberWithSpaces(props.oldPrice)}$
            </span>
          ) : null}
          <span className={classes.currentPrice}>
            {numberWithSpaces(props.price)}$
          </span>
        </div>
        {props.loading ? (
          <Loader />
        ) : (
          <button
            className={props.bought ? classes.bought : null}
            onClick={props.click}
          >
            {buttonContent}
          </button>
        )}
      </React.Fragment>
    );
  }

  return (
    <section
      className={classes.Painting}
      style={props.sold ? { opacity: "0.5" } : null}
    >
      <div
        className={classes.image}
        style={{
          backgroundImage: `url("${props.image}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className={classes.mainContent}>
        <h2 className={classes.title}>«{props.title}»</h2>
        <span className={classes.author}>{props.author}</span>
        <div className={classes.selling}>{sellingBlock}</div>
      </div>
    </section>
  );
}

export default Painting;

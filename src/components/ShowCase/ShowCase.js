import { useState, useEffect } from "react";

import axios from "axios";

import classes from "./ShowCase.module.css";

import venera from "../../assets/images/paintings/venera.jpg";
import vecher from "../../assets/images/paintings/vecher.jpg";
import adam from "../../assets/images/paintings/adam.jpg";
import anatomy from "../../assets/images/paintings/anatomy.jpg";

import Painting from "../Painting/Painting";

function ShowCase(props) {
  const [paintings, setPaintings] = useState([
    {
      title: "Рождение Венеры",
      author: "Сандро Боттичелли",
      image: venera,
      price: 1000000,
      oldPrice: 2000000,
      sold: false,
      bought: false,
      loading: false,
    },
    {
      title: "Тайная вечеря",
      author: "Леонардо да Винчи",
      image: vecher,
      price: 3000000,
      oldPrice: 3000000,
      sold: false,
      bought: false,
      loading: false,
    },
    {
      title: "Сотворение Адама",
      author: "Микеланджело",
      image: adam,
      price: 6000000,
      oldPrice: 5000000,
      sold: false,
      bought: false,
      loading: false,
    },
    {
      title: "Урок анатомии",
      author: "Рембрандт",
      image: anatomy,
      price: 1000000,
      oldPrice: 2000000,
      sold: true,
      bought: false,
      loading: false,
    },
  ]);

  useEffect(() => {
    if (localStorage.getItem("paintings")) {
      setPaintings(JSON.parse(localStorage.getItem("paintings")));
    }
  }, []);

  const paintingPurchaseHandler = (event, title) => {
    let paintingsCopy = [...paintings];
    const currentIndex = paintingsCopy.findIndex(
      (element) => element.title === title
    );

    if (paintingsCopy[currentIndex].bought) {
      paintingsCopy[currentIndex].bought = false;
      setPaintings(paintingsCopy);
      localStorage.setItem("paintings", JSON.stringify(paintings));
      return;
    } else {
      paintingsCopy[currentIndex].loading = true;
      setPaintings(paintingsCopy);
    }

    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        paintingsCopy = [...paintings];
        paintingsCopy[currentIndex].loading = false;
        paintingsCopy[currentIndex].bought = true;
        setPaintings(paintingsCopy);
        localStorage.setItem("paintings", JSON.stringify(paintings));
      });
  };

  return (
    <div className={classes.ShowCase}>
      <div className={classes.container}>
        <h2>Картины эпохи Возрождения</h2>
        <div className={classes.content}>
          {paintings.map((painting) => (
            <Painting
              key={painting.title}
              image={painting.image}
              title={painting.title}
              author={painting.author}
              price={painting.price}
              oldPrice={painting.oldPrice}
              sold={painting.sold}
              bought={painting.bought}
              loading={painting.loading}
              click={(event) => paintingPurchaseHandler(event, painting.title)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShowCase;

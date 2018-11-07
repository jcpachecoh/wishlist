import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

import { WishList } from "./models/Wishlist";

const wishList = WishList.create({
  items: [
    {
      name: "LEGO Mindstroms",
      price: 349.5,
      image:
        "https://images-eu.ssl-images-amazon.com/images/I/51jyiJYxcqL._SY300_QL70_.jpg"
    },
    {
      name: "LEGO Mindstroms toy",
      price: 34,
      image:
        "http://www.ducklearning.com/wp-content/uploads/2016/07/45544_61.jpg"
    }
  ]
});

ReactDOM.render(<App wishList={wishList} />, document.getElementById("root"));

setInterval(() => {
    wishList.items[0].changePrice(wishList.items[0].price + 1)
}, 1000)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

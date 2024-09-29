import { useState } from "react";
import { setCookie, getCookie } from 'cookies-next';

import "./cart-card.scss";
import { CART } from "@/constants";

const CartCard = () => {
  const [cart, setCart] = useState(JSON.parse(getCookie(CART) || "[]")); 

  const cartBtn = (attr) => {
    let cache = current;
    if (attr === "to") {
      cache.quantity = 1;
      setCart([...cart, cache]);
      setCookie(CART, JSON.stringify([...cart, cache]))
      // localStorage.setItem(CART, JSON.stringify([...cart, cache]));
    } else if (attr === "+") {
      ++cache.quantity;
      let fake = cart?.map((el) => {
        if (el.id === cache.id) {
          return cache;
        }
        return el;
      });
      setCart(fake);
      setCookie(CART, JSON.stringify(fake))
      
      // localStorage.setItem(CART, JSON.stringify(fake));
    } else if (attr === "-") {
      --cache.quantity;
      let fake;
      if (cache.quantity === 0) {
        fake = cart?.filter((el) => el.id === cache.id);
      }
      fake = cart?.map((el) => {
        if (el.id === cache.id) {
          return cache;
        }
        return el;
      });
      setCart(fake);
      setCookie(CART, JSON.stringify(fake))
      // localStorage.setItem(CART, JSON.stringify(fake));
    }
    setCurrent(cache);
  };
  return (
    <div className="cart-card">
      <div className="cart-card__image-box"></div>
      <div className="cart-card__content">
        <h1></h1>
      </div>
    </div>
  );
};

export default CartCard;

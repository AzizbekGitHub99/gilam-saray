"use client";

import { setCookie, getCookie } from "cookies-next";
import { Icons } from "@/app/utils";
import { CART } from "@/constants";

import "./to-cart-btns.scss";
import { useState } from "react";

const ToCardBtns = ({ data }) => {
  const [cart, setCart] = useState(JSON.parse(getCookie(CART) || "[]"));
  const [current, setCurrent] = useState(
    cart.find((el) => el.id === data?.id) || data
  );

  const cartBtn = (attr) => {
    let cache = current;
    if (attr === "to") {
      cache.quantity = 1;
      setCart([...cart, cache]);
      setCookie(CART, JSON.stringify([...cart, cache]));
    } else if (attr === "out") {
      ++cache.quantity;
      if (cache.quantity === 0) {
        fake = cart?.filter((el) => el.id === cache.id);
      }
      setCart(fake);
      setCookie(CART, JSON.stringify(fake));
    } else if (attr === "+") {
      ++cache.quantity;
      let fake = cart?.map((el) => {
        if (el.id === cache.id) {
          return cache;
        }
        return el;
      });
      setCart(fake);
      setCookie(CART, JSON.stringify(fake));
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
      setCookie(CART, JSON.stringify(fake));
    }
    setCurrent(cache);
  };

  return (
    <div className="buttons">
      {current?.quantity > 0 ? (
         <button onClick={() => cartBtn("out")} className="out-cart">
         Уже добавлено <Icons.bucket />
       </button>
      ) : (
        <button onClick={() => cartBtn("to")} className="to-cart">
          Добавить в корзину <Icons.bucket />
        </button>
      )}
      <button className="share">
        Поделится <Icons.share />
      </button>
    </div>
  );
};

export default ToCardBtns;

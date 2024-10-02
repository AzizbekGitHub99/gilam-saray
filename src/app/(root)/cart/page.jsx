"use client";

import { useState } from "react";
import { getCookie } from 'cookies-next';


import { CART } from "@/constants";

import "./cart.scss";
import CartCard from "@/component/cart-card";

const Cart = () => {
  const [cart, setCart] = useState(
    useState(JSON.parse(getCookie(CART) || "[]"))
  );
  return (
    <div className="cart">
      <div className="cart__container container">
        <div className="cart__container__left">
          <div className="cart__container__left__wrapper">
            {cart?.map((el) => (
              <CartCard key={el.id} />
            ))}
          </div>
        </div>
        <div className="cart__container__right"></div>
      </div>
    </div>
  );
};

export default Cart;

"use client";
import { Fragment, useEffect, useState } from "react";
import Image from "next/image";

import { CART } from "@/constants";
import MainWrapper from "@/component/main-wrapper";
import { gilams, Icons } from "@/app/utils";
import BottomPanel from "@/component/bottom-panel";
import { getProductById } from "@/request";

import "./single.scss";

const SinglePage = ({params}) => {
  console.log(params);
  const single = getProductById(params.single)
  const [current, setCurrent] = useState();
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem(CART) || "[]")
  );


  const cartBtn = (attr) => {
    let cache = current;
    if (attr === "to") {
      cache.quantity = 1;
      setCart([...cart, cache]);
      localStorage.setItem(CART, JSON.stringify([...cart, cache]));
    } else if (attr === "+") {
      ++cache.quantity;
      let fake = cart?.map((el) => {
        if (el.id === cache.id) {
          return cache;
        }
        return el;
      });
      setCart(fake);
      localStorage.setItem(CART, JSON.stringify(fake));
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
      localStorage.setItem(CART, JSON.stringify(fake));
    }
    setCurrent(cache);
    console.log(cart);
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    setCurrent(
      cart?.find((el) => el.id == +single) ||
        gilams?.find((el) => el.id == +single)
    );
  }, [single, current, cart]);

  return (
    <Fragment>
      <div className="single">
        <div className="single__inner">
          <div className="single__inner__left">
            <Image
              src={current?.image || "/assets/images/logo.png"}
              quality={100}
              priority
              fill
              alt={current?.name || "gilam"}
            />
          </div>
          <div className="single__inner__right">
            <p className="type">classic</p>
            <div className="name">
              {current?.name}
              <span>{`${current?.price} so'm`}</span>
            </div>
            <div className="optionals">
              {/* <div className="optional shape">
                <Icons.rect />
                <span>Rectangle</span>
              </div>
              <div className="optional color">
                <Icons.colorPot color={current?.color} />
                <span>Beige</span>
              </div> */}
              <div className="optional size">{`${current?.g_width} x ${current?.g_height}`}</div>
            </div>
            <div className="main">
              <div className="main-wrapper">
                <div className="main-wrapper-item">Вес ковра</div>
                <div className="main-wrapper-item">Высота ворса (мм.)</div>
                <div className="main-wrapper-item">Плотность по основе</div>
                <div className="main-wrapper-item">Плотность по утку</div>
                <div className="main-wrapper-item">Плотность ворса</div>
                <div className="main-wrapper-item">Производитель</div>
                <div className="main-wrapper-item">Стиль</div>
                <div className="main-wrapper-item">Цвет</div>
                <div className="main-wrapper-item">Коллекция</div>
                <div className="main-wrapper-item">Материал дорса</div>
                <div className="main-wrapper-item">Форма</div>
                <div className="main-wrapper-item">2,35 кг/м2</div>
                <div className="main-wrapper-item">12</div>
                <div className="main-wrapper-item">40</div>
                <div className="main-wrapper-item">44</div>
                <div className="main-wrapper-item">352 000 точек на 1 м2</div>
                <div className="main-wrapper-item">SAG. Узбекистан</div>
                <div className="main-wrapper-item">Современный</div>
                <div className="main-wrapper-item">серый / голубой</div>
                <div className="main-wrapper-item">Prada</div>
                <div className="main-wrapper-item">100% Полипропилен</div>
                <div className="main-wrapper-item">Прямоугольный</div>
              </div>
            </div>
            <div className="buttons">
              {current?.quantity > 0 ? (
                <div className="to-cart-btns">
                  <button onClick={() => cartBtn("-")}>-</button>
                  <span>{current?.quantity}</span>
                  <button onClick={() => cartBtn("+")}>+</button>
                </div>
              ) : (
                <button onClick={() => cartBtn("to")} className="to-cart">
                  Добавить в корзину <Icons.bucket />
                </button>
              )}
              <button className="share">
                Поделится <Icons.share />
              </button>
            </div>
          </div>
        </div>
       <BottomPanel/>
      </div>
      <div className="container">
        <MainWrapper />
      </div>
    </Fragment>
  );
};

export default SinglePage;

"use client";
import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { useParams, usePathname } from "next/navigation";

import { gilams, Icons } from "@/app/utils";

import "./single.scss";
import { CART } from "@/constants";
import MainWrapper from "@/component/main-wrapper";
import Link from "next/link";

const SinglePage = () => {
  const [isFilter, setIsFilter] = useState(true);
  const [current, setCurrent] = useState();
  const { single } = useParams();
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem(CART) || "[]")
  );

  const param = usePathname();

  const cartBtn = (attr) => {
    let cache = current;
    if (attr === "to") {
      cache.quantity = 1;
    } else if (attr === "+") {
      ++cache.quantity;
    } else if (attr === "-") {
      --cache.quantity;
    }
    setCurrent(cache);
    setCart([...cart, cache]);
    localStorage.setItem(CART, JSON.stringify([...cart, cache]));
    console.log(cache);
  };

  useEffect(() => {
    setCurrent(
      cart?.find((el) => el.id == +single) ||
        gilams?.find((el) => el.id == +single)
    );
  }, [single, cart]);

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
              <div className="optional shape">
                <Icons.rect />
                <span>Rectangle</span>
              </div>
              <div className="optional color">
                <Icons.colorPot color={current?.color} />

                <span>Beige</span>
              </div>
              <div className="optional size">{`${current?.g_width} x ${current?.g_height}`}</div>
            </div>
            <div className="main">
              <ul>
                <li>Вес ковра</li>
                <li>Высота ворса (мм.)</li>
                <li>Плотность по основе</li>
                <li>Плотность по утку</li>
                <li>Плотность ворса</li>
                <li>Производитель</li>
                <li>Стиль</li>
                <li>Цвет</li>
                <li>Коллекция</li>
                <li>Материал дорса</li>
                <li>Форма</li>
              </ul>
              <ul>
                <li>2,35 кг/м2</li>
                <li>12</li>
                <li>40</li>
                <li>44</li>
                <li>352 000 точек на 1 м2</li>
                <li>SAG. Узбекистан</li>
                <li>Современный</li>
                <li>серый / голубой</li>
                <li>Prada</li>
                <li>100% Полипропилен</li>
                <li>Прямоугольный</li>
              </ul>
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
        <div className="control">
          <div className="control__menu">
            <div className="burger">
              <div className="burger__icon">
                <span></span>
                <span></span>
              </div>
              Menu
            </div>
          </div>
          <Link
            href="/cart"
            className="control__cart"
            style={param == "/cart" ? { backgroundColor: "#bd8e1f" } : {}}
          >
            <Icons.bucket color={param == "/cart" ? "white" : "black"} />
          </Link>
          <ul
            className={
              isFilter ? "open-filter control__filter" : "control__filter"
            }
          >
            <li>
              <button onClick={() => setIsFilter(!isFilter)}>
                {isFilter ? (
                  <>
                    <Icons.tornado />
                    <span>Filter</span>
                  </>
                ) : (
                  <Icons.ex />
                )}
              </button>
            </li>
            <li>
              <button>Style ↑</button>
            </li>
            <li>
              <button>Shape ↑</button>
            </li>
            <li>
              <button>Size ↑</button>
            </li>
            <li>
              <button>Color ↑</button>
            </li>
          </ul>
        </div>
      </div>
      <MainWrapper />
    </Fragment>
  );
};

export default SinglePage;

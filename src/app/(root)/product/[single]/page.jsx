"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

import { gilams, Icons } from "@/app/utils";

import "./single.scss";

const SinglePage = () => {
  const [current, setCurrent] = useState();
  const { single } = useParams();
  useEffect(() => {
      setCurrent(gilams.find((el) => el.id == +single));

  }, [single]);

  return (
    <div className="single">
      <div className="single__inner">
        <div className="single__inner__left">
          <Image
            src={current?.image || "/assets/images/logo.png"}
            quality={100}
            priority
            fill
            // width={1000}
            // height={1000}
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
            <button className="to-cart">
              Добавить в корзину <Icons.bucket />
            </button>
            <button className="share">
              Поделится <Icons.share />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;

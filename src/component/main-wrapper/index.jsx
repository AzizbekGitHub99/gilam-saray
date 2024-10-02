"use client";
import { useEffect, useState } from "react";

import MainCard from "../main-card";

import "./main-wrapper.scss";

const MainWrapper = ({data}) => {  
  const [checkSize, setCheckSize] = useState(4);
  const [columns, setColumns] = useState({});

  useEffect(() => {
    function handleResize() {
      if (window?.innerWidth > 1400) {
        let one = [];
        let two = [];
        let three = [];
        let four = [];
        setCheckSize(4);
        for (let i = 0; i < data?.length; i = i + 4) {
          one.push(data[i]);
          two.push(data[i + 1]);
          three.push(data[i + 2]);
          four.push(data[i + 3]);
        }
        setColumns({
          one: one,
          two: two,
          three: three,
          four: four,
        });
      } else if (window?.innerWidth > 900) {
        let one = [];
        let two = [];
        let three = [];
        setCheckSize(3);
        for (let i = 0; i < data?.length; i = i + 3) {
          one.push(data[i]);
          two.push(data[i + 1]);
          three.push(data[i + 2]);
        }
        setColumns({
          one: one,
          two: two,
          three: three,
        });
      } else if (window?.innerWidth > 600) {
        let one = [];
        let two = [];
        setCheckSize(2);
        for (let i = 0; i < data?.length; i = i + 2) {
          one.push(data[i]);
          two.push(data[i + 1]);
        }
        setColumns({
          one: one,
          two: two,
        });
      } else {
        let one = [];
        setCheckSize(1);
        for (let i = 0; i < data?.length; i++) {
          one.push(data[i]);
        }
        setColumns({
          one: one,
        });
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [checkSize, data]);
  return (
    <div className="main__container__wrapper">
      {checkSize == 4 ? (
        <>
          <div className="columns column-first">
            {columns.one?.map((el, i) => {
              return <MainCard key={i} data={el} />;
            })}
          </div>
          <div className="columns column-second">
            {columns.two?.map((el, i) => {
              return <MainCard key={i} data={el} />;
            })}
          </div>
          <div className="columns column-third">
            {columns.three?.map((el, i) => {
              return <MainCard key={i} data={el} />;
            })}
          </div>
          <div className="columns column-fourth">
            {columns.four?.map((el, i) => {
              return <MainCard key={i} data={el} />;
            })}
          </div>
        </>
      ) : checkSize == 3 ? (
        <>
          <div className="columns column-first">
            {columns.one?.map((el, i) => {
              return <MainCard key={i} data={el} />;
            })}
          </div>
          <div className="columns column-second">
            {columns.two?.map((el, i) => {
              return <MainCard key={i} data={el} />;
            })}
          </div>
          <div className="columns column-third">
            {columns.three?.map((el, i) => {
              return <MainCard key={i} data={el} />;
            })}
          </div>
        </>
      ) : checkSize == 2 ? (
        <>
          <div className="columns column-first">
            {columns.one?.map((el, i) => {
              return <MainCard key={i} data={el} />;
            })}
          </div>
          <div className="columns column-second">
            {columns.two?.map((el, i) => {
              return <MainCard key={i} data={el} />;
            })}
          </div>
        </>
      ) : (
        <>
          <div className="columns column-first">
            {columns.one?.map((el, i) => {
              return <MainCard key={i} data={el} />;
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default MainWrapper;

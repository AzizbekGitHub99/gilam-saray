"use client";
import { Fragment, useState } from "react";

import MainWrapper from "@/component/main-wrapper";
import { Icons } from "@/app/utils";

import "./home.scss";

export default function Home() {
  const [isFilter, setIsFilter] = useState(true);
  return (
    <Fragment>
      <section className="main">
        <h1 className="main-title">
          Sharq an&apos;analarining qulay va <br /> go&apos;zal gilamlari
        </h1>
        <div className="container main__container">
          <MainWrapper />
          <div className="control">
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
      </section>
    </Fragment>
  );
}

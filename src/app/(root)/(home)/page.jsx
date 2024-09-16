"use client";
import { Fragment } from "react";

import MainWrapper from "@/component/main-wrapper";

import "./home.scss";

export default function Home() {
  return (
    <Fragment>
      <section className="main">
        <h1 className="main-title">
          Sharq an&apos;analarining qulay va <br /> go&apos;zal gilamlari
        </h1>
        <div className="container main__container">
          <MainWrapper />
        </div>
      </section>
    </Fragment>
  );
}

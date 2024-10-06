import { Fragment } from "react";

import MainWrapper from "@/component/main-wrapper";

import "./home.scss";
import { getAllProducts } from "@/request";
import BottomPanel from "@/component/bottom-panel";

export default async function Home() {
  const products = await getAllProducts();

  return (
    <Fragment>
      <section className="main">
        <h1 className="main-title">
          Sharq an&apos;analarining qulay va <br /> go&apos;zal gilamlari
        </h1>
        <div className="container main__container">
          <MainWrapper data={products?.data} />
          <BottomPanel />
        </div>
      </section>
    </Fragment>
  );
}

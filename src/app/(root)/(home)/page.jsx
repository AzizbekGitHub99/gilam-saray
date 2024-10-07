import { Fragment } from "react";

import MainWrapper from "@/component/main-wrapper";
import BottomPanel from "@/component/bottom-panel";
import { getAllProducts } from "@/request";

import "./home.scss";

export const dynamic = 'force-dynamic'

const Home = async () => {
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
};

export default Home;

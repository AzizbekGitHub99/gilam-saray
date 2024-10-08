import { Fragment } from "react";
import Image from "next/image";

import MainWrapper from "@/component/main-wrapper";
import BottomPanel from "@/component/bottom-panel";
import ToCardBtns from "@/component/to-cart-btns";
import { getAllProducts, getProductById } from "@/request";

import "./single.scss";

// export async function generateMetadata({ params }) {
//   // read route params
//   const id = params.single;
//   console.log(id);

//   // fetch data
//   const product = await getProductById(id);

//   return {
//     // title: product?.collection.title,
//     openGraph: {
//       title: "",
//       images: [`https://api.gilamsaray.uz${product.data[0]?.media?.url || ""}`],
//     },
//   };
// }

const SinglePage = async ({ params }) => {
  const products = await getAllProducts();
  const current = await getProductById(params.single);
  const carpet = current?.data[0];
  console.log(carpet);

  return (
    <Fragment>
      <div className="single">
        <div className="single__inner">
          <div className="single__inner__left">
            <Image
              src={`https://api.gilamsaray.uz${carpet?.media?.url || ""}`}
              quality={100}
              priority
              fill
              alt={carpet?.media?.alternativeText || "gilam"}
            />
          </div>
          <div className="single__inner__right">
            <p className="name">
              {carpet?.collection.title + " " + carpet?.model.title}
            </p>
            <div className="optionals">
              <div className="optional size">
                {`${carpet?.size.lenght} x ${carpet?.size.height}`}
              </div>
              <div className="optional price">{`${carpet?.price} so'm`}</div>
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
            <ToCardBtns data={carpet} />
          </div>
        </div>
        <BottomPanel />
      </div>
      <div className="container">
        <MainWrapper data={products?.data} />
      </div>
    </Fragment>
  );
};

export default SinglePage;

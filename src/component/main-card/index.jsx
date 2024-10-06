"use client";
import Image from "next/image";
import Link from "next/link";

import "./main-card.scss";

const MainCard = ({ data }) => {
  
  let cardWidth = "100%";
  if (data?.size.lenght >= 300) {
    cardWidth = "100%";
  } else if (data?.size.lenght >= 200) {
    cardWidth = "80%";
  } else {
    cardWidth = "60%";
  }  

  return data?.id !== undefined ? (
    <Link
      href={`/product/${data?.id}`}
      className="main-card"
      style={{
        width: cardWidth,
      }}
    >
      <div className="main-card__head">
        <div className="image-box">
          <Image
            src={`https://api.gilamsaray.uz${data?.media.formats.large.url}`}
            width={100000}
            quality={100}
            priority
            height={100}
            alt={data?.collection.title}
          />
        </div>
      </div>
      <div className="main-card__body">
        <h1>{data?.collection.title + " " + data?.model.title}</h1>
        <p>{`${data?.size.lenght} x ${data?.size.height}`}</p>
      </div>
    </Link>
  ) : (
    <></>
  );
};

export default MainCard;

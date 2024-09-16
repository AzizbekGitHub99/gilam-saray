"use client";
import Image from "next/image";
import Link from "next/link";

import "./main-card.scss";

const MainCard = ({ data }) => {
  let cardWidth = "100%";
  console.log(data);
  if (data?.g_width >= 300) {
    cardWidth = "100%";
  } else if (data?.g_width >= 200) {
    cardWidth = "80%";
  } else {
    cardWidth = "60%";
  }

  return data?.id !== undefined ? (
    <Link
      href={`product/${data?.id}`}
      className="main-card"
      style={{
        width: cardWidth,
      }}
    >
      <div className="main-card__head">
        <div className="image-box">
          <Image
            src={data?.image}
            width={100000}
            quality={100}
            priority
            height={100}
            alt={data?.name}
          />
        </div>
      </div>
      <div className="main-card__body">
        <h1>{data?.name}</h1>
        <p>{`${data?.g_width} x ${data?.g_height}`}</p>
      </div>
    </Link>
  ) : (
    <></>
  );
};

export default MainCard;

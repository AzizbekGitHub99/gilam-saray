"use client"
import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { Icons } from "@/app/utils";

import "./header.scss";

const Header = () => {
  const param = usePathname();
  
  return (
    <Fragment>
      <header className="header">
        <div className="container header__container">
          <div className="header__container__left">
            <div className="burger">
              <div className="burger__icon">
                <span></span>
                <span></span>
              </div>
              Menu
            </div>
            <Link
              href="/cart"
              className="cart"
              style={param == "/cart" ? { backgroundColor: "#bd8e1f" } : {}}
            >
              <Icons.bucket color={param == "/cart" ? "white" : "black"} />
            </Link>
          </div>
          <Link href="/" className="logo">
            <Image
              src="/assets/images/logo.png"
              width={210}
              height={90}
              priority
              quality={100}
              alt="gilam saray"
            />
          </Link>
          <a href="tel:+998991404422" className="call">
            <Icons.phone />
            +998 99 140-44-22
          </a>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;

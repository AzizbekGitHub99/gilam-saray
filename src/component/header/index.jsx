"use client";
import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

import { Icons } from "@/app/utils";

import "./header.scss";

const Header = () => {
  return (
    <Fragment>
      <header className="header">
        <div className="container header__container">
          <Link href="/" className="logo">
            <Image
              src="/assets/images/logo.png"
              width={180}
              height={77}
              priority
              quality={100}
              alt="gilam saray"
            />
          </Link>
          <a href="tel:+998991404422" className="call">
            <Icons.phone />
            <span>+998 99 140-44-22</span>
          </a>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;

"use client";

import { useState } from "react";
import NavLink from "../navlink";
import { Icons } from "@/app/utils";

import "./bottom-panel.scss";

const BottomPanel = () => {
  const [isFilter, setIsFilter] = useState(true);

  return (
    <div className="control">
      <div className="control__menu">
        <div className="burger">
          <div className="burger__icon">
            <span></span>
            <span></span>
          </div>
          Menu
        </div>
      </div>
      <NavLink href="/cart" className="control__cart">
        <Icons.bucket />
      </NavLink>

      <ul className={isFilter ? "open-filter control__filter" : "control__filter"}>
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
  );
};

export default BottomPanel;

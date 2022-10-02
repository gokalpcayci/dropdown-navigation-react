import React, { Fragment } from "react";
import { useState } from "react";
export default function Menu(props) {
  const [menu, setMenu] = useState(false);
  return (
    <button
      className={menu ? "hidden" : "md:hidden block"}
      onClick={() => props.onMenuOpen(!menu)}
    >
      <svg width="32" height="18" xmlns="http://www.w3.org/2000/svg">
        <g fill="#151515" fill-rule="evenodd">
          <path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z" />
        </g>
      </svg>
    </button>
  );
}

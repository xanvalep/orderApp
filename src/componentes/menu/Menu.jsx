import React from "react";
import Item from "..//menu/Item";
import "..//..//scss/Menu.scss";

export default function Menu() {
  return (
    <section id="menu" className="menu">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Menu</h2>
          <p>
            The Pizza Restaurant was founded in blabla by Mr. Italiano in lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>

        <div className="container-menu">
          <div id="Pizza" className="">
            <Item />
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
}

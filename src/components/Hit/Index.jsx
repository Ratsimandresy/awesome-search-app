import React, { useState, useRef } from "react";
import "./style.css";
import Address from "../SVG/Address";
import Contact from "../SVG/Contact";
import Fax from "../SVG/Fax";
import Work from "../SVG/Work";
import { Website } from "../SVG/Website";
import Mail from "../SVG/Mail";
import Followers from "../SVG/Followers";
import BlockInfo from "../BlockInfo/Index";
import Bubble from "../Bubble/Index";
import Profil from "../SVG/Profile";

const Index = ({ hit }) => {
  const [show, setShow] = useState(false);
  const { firstname, lastname, followers, objectID, address, city } = hit;
  const ref = useRef(null);

  const handleInfo = (e) => {
    if (!ref.current.contains(e.target)) {
      setShow(false);
    }
    setShow(!show);
  };

  return (
    <div
      ref={ref}
      onClick={handleInfo}
      data-aos="fade-right"
      key={objectID}
      className="hit-card"
    >
      <section className="hit-profile">
        <Profil />
        <div className="hit-name">
          <p>
            {firstname} {lastname}
          </p>
          <p>
            <Address /> {address}, {city}
          </p>
        </div>
      </section>
      <section className="followers">
        <Bubble followers={followers} />
        <Followers />
        <small>followers</small>
      </section>
      <BlockInfo show={show} onClickOutSide={handleInfo} hit={hit} />
    </div>
  );
};

export default Index;

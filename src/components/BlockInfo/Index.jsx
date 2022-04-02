import React from "react";
import Profile from "../SVG/Profile2";
import Address from "../SVG/Address";
import Contact from "../SVG/Contact";
import Fax from "../SVG/Fax";
import Work from "../SVG/Work";
import "./style.css";
import Location from "../SVG/Location";

const Index = ({ show, hit }) => {
  console.log(hit);
  const hidden = show ? "" : "hidden";
  const {
    firstname,
    lastname,
    company,
    followers,
    objectID,
    address,
    city,
    zip,
    county,
    email,
    fax,
    phone,
  } = hit;

  return (
    <div className={`hit-info ${hidden}`}>
      <header className="hit-header">
        <div className="hit-card-name">
          <p> {firstname}</p>
          <p>{lastname}</p>
        </div>
        <div className="hit-block-profil2 ">
          <Profile />
        </div>
      </header>

      <section className="hit-info-section">
        <div className="hit-info-work">
          <p>{email}</p>

          <div className="hit-info-contact">
            <small>
              {" "}
              <Location /> {city}
            </small>
            <small>
              {" "}
              <Work />
              {company}
            </small>
          </div>
        </div>
        <div className="hit-info-followers">
          <div>
            <p>{followers}</p>
            <small>Followers</small>
          </div>
          <div>
            <p> - </p>
            <small>Following</small>
          </div>
        </div>
        <div className="hit-info-follow">
          <p>Follow</p>
        </div>
      </section>
    </div>
  );
};

export default Index;

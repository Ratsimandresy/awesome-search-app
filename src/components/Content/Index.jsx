import React, { useState } from "react";
import { Hits } from "react-instantsearch-dom";
import Hit from "../Hit/Index";
import "./styles.css";

const Index = () => {
  const [data, setData] = useState(null);
  return (
    <div className="content">
      <div className="hero">
        <h1 className="hero-title">
          <p>Contacts</p>
        </h1>
      </div>
      <Hits hitComponent={Hit} />
    </div>
  );
};

export default Index;

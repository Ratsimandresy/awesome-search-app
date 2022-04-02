import React from "react";
import { createConnector } from "react-instantsearch-dom";
import SearchIcon from "../SVG/SearchIcon";
import "./style.css";

const connectWithQuery = createConnector({
  displayName: "WidgetWithQuery",
  getProvidedProps(props, searchState) {
    const currentRefinement = searchState.attributeForMyQuery || "";
    return { currentRefinement };
  },
  refine(props, searchState, nextRefinement) {
    return {
      ...searchState,
      attributeForMyQuery: nextRefinement,
    };
  },
  getSearchParameters(searchParameters, props, searchState) {
    return searchParameters.setQuery(searchState.attributeForMyQuery || "");
  },
  cleanUp(props, searchState) {
    const { attributeForMyQuery, ...nextSearchState } = searchState;
    return nextSearchState;
  },
});

const SearchBox = ({ currentRefinement, refine }) => {
  return (
    <div>
      <SearchIcon />
      <div className="search-bar">
        <input
          type="input"
          value={currentRefinement}
          onChange={(e) => refine(e.currentTarget.value)}
          className="input"
          placeholder="&nbsp;"
        />
        <span className="label">Search</span>
        <span className="highlight"></span>
        <div className="search-btn">
          <svg className="icon icon-18">
            <use href="#magnify"></use>
          </svg>
        </div>
      </div>
    </div>
  );
};

const ConnectedSearchBox = connectWithQuery(SearchBox);

export default ConnectedSearchBox;

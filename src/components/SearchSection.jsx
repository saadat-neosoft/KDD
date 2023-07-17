import React from "react";
import "../styles/components/search/search.scss";

import { RxCross2 } from "react-icons/rx";

const SearchSection = ({ isSearchActive, toggleSearch }) => {
  return (
    <div className="search-container">
      {isSearchActive && (
        <div onClick={toggleSearch} className="search-backdrop"></div>
      )}
      <div
        className={isSearchActive ? "search-section-active" : "search-section"}
      >
        <div className="d-flex justify-content-end mb-3">
          <button
            className="border-0 d-flex align-items-center justify-content-center bg-light p-2"
            onClick={toggleSearch}
          >
            <RxCross2 size={20} strokeWidth={0.5} />
          </button>
        </div>
        <div className="search-section__title">
          Searching for something specific
        </div>
        <div className="search-section__text">What are you looking for?</div>
        <div className="search-section__input-container">
          <input
            className="search-section__input-container__input"
            type="text"
            placeholder="Search Keyword"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchSection;

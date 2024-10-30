"use client";

import SearchIcon from "../icons/SearchIcon";
import { MainContainer, SearchInput } from "./SearchBox.styled";

const SearchBox = () => {
  return (
    <MainContainer>
      <SearchIcon />
      <SearchInput name="search" type="text" placeholder="Search" />
    </MainContainer>
  );
};

export default SearchBox;

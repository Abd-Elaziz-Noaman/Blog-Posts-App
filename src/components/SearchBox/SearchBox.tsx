"use client";

import { ChangeEvent, FC } from "react";
import SearchIcon from "../icons/SearchIcon";
import { MainContainer, SearchInput } from "./SearchBox.styled";

interface SearchBoxProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox: FC<SearchBoxProps> = ({ value, onChange }) => {
  return (
    <MainContainer>
      <SearchIcon />
      <SearchInput
        name="search"
        type="search"
        placeholder="Search"
        value={value}
        onChange={onChange}
      />
    </MainContainer>
  );
};

export default SearchBox;

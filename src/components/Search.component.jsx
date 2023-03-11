// Libs
import { useEffect } from "react";
import styled from "styled-components";

// Icon
import searchIcon from "../icons/search.svg";

const Search = ({ search, setSearch }) => {
  useEffect(() => {
    setSearch(localStorage.getItem("inputValue"));
  }, []);

  return (
    <Wrapper>
      <SearchBtn>
        <img src={searchIcon} alt="search" />
      </SearchBtn>
      <Input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          localStorage.setItem("inputValue", e.target.value);
        }}
        type="text"
        placeholder="Filter by name..."
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  margin: 16px 0 61px 0;
  padding: 16px 16px 16px 46px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 8px;
`;

const SearchBtn = styled.button`
  position: absolute;
  z-index: 9999;
  top: 37px;
  left: 20px;
  border: none;
  outline: none;
  background: none;
  transition: all 0.5s;
  &:hover {
    transform: scale(1.4);
  }
`;

export default Search;

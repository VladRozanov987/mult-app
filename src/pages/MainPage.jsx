// Main
import { useState, useEffect } from "react";

// Components
import { Logo, Search, Character } from "../components/index.js";

// Libs
import styled from "styled-components";
import axios from "axios";

const MainPage = () => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");

  const url = `https://rickandmortyapi.com/api/character/?name=${search}`;

  useEffect(() => {
    axios
      .get(url)
      .then((data) => {
        setData(data.data.results);
      })
      .catch((err) => console.log(err));
  }, [url]);

  return (
    <Main>
      <Logo />
      <Search setSearch={setSearch} />
      <CharacterWrapper>
        <Character data={data} />
      </CharacterWrapper>
    </Main>
  );
};

const Main = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 86px 24px;
  @media screen and (max-width: 370px) {
    padding: 92px 24px;
  }
`;

const CharacterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  border-radius: 4px;
  @media screen and (max-width: 880px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 370px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 32px;
  }
`;

export default MainPage;

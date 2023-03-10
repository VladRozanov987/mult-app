// Main
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// Libs
import axios from "axios";
import styled from "styled-components";

// Icon
import back from "../icons/back.svg";

const SinglePage = () => {
  let { id } = useParams();
  const [data, setData] = useState(null);

  const url = `https://rickandmortyapi.com/api/character/${id}`;
  console.log(data);
  useEffect(() => {
    axios
      .get(url)
      .then((data) => {
        setData(data.data);
      })
      .catch((err) => console.log(err));
  }, [url]);

  return (
    data && (
      <SingleWrapper>
        <Link to="/">
          <StyledRow src={back} alt="" />
          <StyledBtnText>Go Back</StyledBtnText>
        </Link>
        <div>
          <StyledAvatar src={data.image} alt="" />
        </div>
        <div>
          <StyledName>{data.name}</StyledName>
          <StyledTitle>Informations</StyledTitle>
        </div>
        <div>
          <InfoWrapper>
            <h4>Gender</h4>
            <p>{data.gender}</p>
          </InfoWrapper>
          <InfoWrapper>
            <h4>Status</h4>
            <p>{data.status}</p>
          </InfoWrapper>
          <InfoWrapper>
            <h4>Species</h4>
            <p>{data.species}</p>
          </InfoWrapper>
          <InfoWrapper>
            <h4>Origin</h4>
            <p>{data.origin.name}</p>
          </InfoWrapper>
          <InfoWrapper>
            <h4>Type</h4>
            <p>{data.type ? data.type : "Unknown"}</p>
          </InfoWrapper>
        </div>
      </SingleWrapper>
    )
  );
};

const SingleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 76px 54px;
  text-align: center;
  @media screen and (max-width: 370px) {
    padding: 24px;
  }
`;

const StyledRow = styled.img`
  width: 16px;
  margin-right: 16px;
  margin-left: 0;
`;

const StyledBtnText = styled.p`
  font-family: "Karla" serif;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
`;

const StyledAvatar = styled.img`
  border-radius: 50%;
  @media screen and (max-width: 370px) {
    margin-top: 77px;
    margin-bottom: 34px;
  }
`;

const StyledName = styled.h1`
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
  color: #081f32;
  margin: 16px 0 48px 0;
  @media screen and (max-width: 370px) {
    margin-top: 0;
    margin-bottom: 34px;
  }
`;

const StyledTitle = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: #8e8e93;
  margin-bottom: 48px;
  @media screen and (max-width: 370px) {
    margin-bottom: 16px;
    text-align: left;
  }
`;

const InfoWrapper = styled.div`
  border-bottom: 1px solid rgba(33, 33, 33, 0.08);
  padding: 10px 0;
  @media screen and (max-width: 370px) {
    margin-bottom: 16px;
    text-align: left;
  }
`;
export default SinglePage;

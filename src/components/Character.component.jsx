import { Link } from "react-router-dom";
import styled from "styled-components";

const Character = ({ data }) => {
  let card;

  if (data) {
    card = data.map((resData) => {
      let { id, name, species, image } = resData;
      return (
        <Link key={id} to={`${id}`}>
          <Card>
            <StyledImg src={image} alt="" />
            <TextWrapper>
              <h6>{name}</h6>
              <p>{species}</p>
            </TextWrapper>
          </Card>
        </Link>
      );
    });
  } else {
    card = "Smth went wrong";
  }

  return <>{card}</>;
};

const Card = styled.div`
  cursor: pointer;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  transition: all 0.5s;
  &:hover {
    transform: scale(1.05);
  }
`;

const StyledImg = styled.img`
  max-width: 100%;
`;

const TextWrapper = styled.div`
  padding: 12px 16px;
`;

export default Character;

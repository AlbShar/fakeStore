import styled from "styled-components";

export const StyledArticle = styled.article`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  border-radius: 7px;
  padding: 20px 40px;
  height: auto;
  margin: 10px 0 0 0;

  @media screen and (min-width: 900px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 20px;
  }
`;

export const StyledImg = styled.img`
  width: 150px;
  height: 150px;

  @media screen and (min-width: 900px) {
    width: 280px;
    height: 280px;
  }
`;

export const StyledDivWrapper = styled.div`
  width: fit-content;
  margin: 0 auto;
`;

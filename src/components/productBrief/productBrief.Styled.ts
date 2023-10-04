import styled from "styled-components";

export const StyledArticle = styled.article`
  position: relative;
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  height: 100%;
  padding: 5px;
`;

export const StyledImg = styled.img`
  width: 90px;
  height: 90px;
`;

export const StyledSpan = styled.span`
  position: absolute;
  display: inline-block;
  top: 5px;
  right: 15px;
  width: 15px;
  height: 15px;
  color: black;
  cursor: pointer;
`;

export const StyledDivWrapper = styled.div`
  width: fit-content;
`;

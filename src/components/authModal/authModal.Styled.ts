import styled from "styled-components";

const StyleDivModal = styled.div`
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  padding-top: 15px;
`;

const StyledForm = styled.form`
  box-sizing: border-box;
  position: absolute;
  padding: 15px;
  border-radius: 10px;
  background-color: white;
  margin: 0 auto;
  width: 90%;
  max-width: 700px;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export { StyleDivModal, StyledForm };

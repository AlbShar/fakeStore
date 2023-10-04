import { useState } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import {
  StyledLogo,
  StyledHeader,
  StyledSpan,
  StyledDiv,
} from "./header.Styled";
import logo from "assets/logo.png";
import Form from "components/form/form";
import Button from "UI/button/button";

const Header = () => {
  const root = document.querySelector("#root");
  const [isShowForm, setShowForm] = useState(false);
  const { pathname } = useLocation();
  const isHomePage = !pathname.includes("product") ? true : false;
  const showForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={10.8}>
        <StyledHeader>
          <StyledDiv>
            <StyledLogo src={logo} alt="logo" />
            <StyledSpan>FAKE STORE</StyledSpan>
          </StyledDiv>
          <Button onClick={showForm} style={{ margin: 0 }}>
            {isHomePage ? "Добавить товар" : "Изменить товар"}
          </Button>
          {isShowForm
            ? root &&
              createPortal(
                <Form pathname={pathname} closeForm={closeForm} />,
                root,
              )
            : false}
        </StyledHeader>
      </Grid>
    </Grid>
  );
};

export default Header;

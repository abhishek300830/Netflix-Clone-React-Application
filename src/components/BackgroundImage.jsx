import React from "react";
import loginBackground from "../assets/login.jpg";
import styled from "styled-components";

const BackgroundImage = () => {
  return (
    <Container>
      <img src={loginBackground} alt="background" />
    </Container>
  );
};

export default BackgroundImage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  img {
    width: 100vw;
    height: 100vh;
  }
`;

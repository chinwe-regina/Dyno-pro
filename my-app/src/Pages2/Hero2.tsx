import React from "react";
import styled from "styled-components";

import img from "../Assets/courier-hero-desktop.jpg";
import Globalbutton from "./Globalbutton";
const Hero2 = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Text>
            <h1>Make money delivering food in Nigeria</h1>
            <Globalbutton
              mt=""
              w=""
              h="50px"
              pad="15px 23px 15px 23px"
              bgc={"#1D965C"}
              col={"white"}
              text={"Sign up as a courier"}
              mg=""
            />
            <p>
              If you are representing a delivery company, signup as a fleet
              owner here.
            </p>
          </Text>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Hero2;
const Text = styled.div`
  /* height: 400px; */
  display: flex;
  text-align: left;
  flex-direction: column;
  color: white;
  width: 95%;
  /* background-color: blueviolet; */
  margin-top: 95px;
  h1 {
    font-size: 40px;
    font-weight: 600;
    line-height: 48px;
    width: 90%;
    @media (min-width: 968px) {
      font-size: 60px;
      font-weight: 700;
      width: 60%;
    }
    /* margin-top: 20px; */
  }
  p {
    font-size: 14px;
    text-align: left;
    width: 90%;
    line-height: 30px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 90%;
`;

const Container = styled.div`
  background-color: green;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* position: relative; */
`;

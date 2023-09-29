import React from "react";
import { styled } from "styled-components";
import GlobalCricle from "./GlobalCircle";

const Delivery = () => {
  return (
    <div>
      <Container>
        <h1>How to become a delivery courier in Nigeria</h1>
        <Comp>
          <Box>
            <GlobalCricle
              ht={"40px"}
              wd={"40px"}
              bgc={"white"}
              text={"1"}
              br={"50%"}
              col="#32BB78"
            />
            <h3>Complete the sign-up form</h3>
            <p>Submit an application with your details and documents.</p>
          </Box>
          <Box>
            <GlobalCricle
              ht={"40px"}
              wd={"40px"}
              bgc={"white"}
              text={"2"}
              br={"50%"}
              col="#32BB78"
            />
            <h3>Complete the sign-up form</h3>
            <p>Submit an application with your details and documents.</p>
          </Box>
        </Comp>
      </Container>
    </div>
  );
};

export default Delivery;
const Box = styled.div`
  height: 170px;
  width: 400px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
`;
const Comp = styled.div`
  height: 300px;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* background-color: #fff; */
  h3 {
    color: white;
    font-size: 18px;
    text-align: center;
  }
  p {
    color: white;
    width: 70%;
    font-size: 15px;
    text-align: center;
  }
`;
const Container = styled.div`
  height: 400px;
  width: 100%;
  background-color: #32bb78;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    color: white;
    text-align: center;
    width: 80%;
    font-size: 50px;
  }
`;

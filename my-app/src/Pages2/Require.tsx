import React from "react";
import styled from "styled-components";
import { FaAddressBook } from "react-icons/fa";
import { BsFillPhoneFill } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
const Require = () => {
  return (
    <div>
      <Container>
        <h1>Bolt food courier requirements</h1>
        <Boxes>
          <Box>
            <Icon>
              <FaAddressBook />{" "}
            </Icon>
            <h3>Valid photo ID</h3>
            <p>Proving that you meet the minimum age requirement</p>
          </Box>
          <Box>
            <Icon>
              <BsFillPhoneFill />{" "}
            </Icon>
            <h3>Smartphone</h3>
            <p>Proving that you meet the minimum age requirement</p>
          </Box>
          <Box>
            <Icon>
              <FaShare />{" "}
            </Icon>
            <h3>Scooter, bike or car</h3>
            <p>Proving that you meet the minimum age requirement</p>
          </Box>
        </Boxes>
      </Container>
    </div>
  );
};

export default Require;
const Icon = styled.div`
  font-size: 30px;
  color: #32bb78;
`;
const Box = styled.div`
  height: 200px;
  width: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* background-color: skyblue; */
  h3 {
    font-size: 20px;
    color: #474444;
  }

  p {
    font-size: 16px;
    text-align: center;
    width: 90%;
  }
`;
const Boxes = styled.div`
  width: 80%;
  /* background-color: blue; */
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;
const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* background-color: grey; */
  h1 {
    color: #272525;
  }
`;

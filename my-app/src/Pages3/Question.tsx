import React from "react";
import styled from "styled-components";
import { FaAngleDown } from "react-icons/fa";
const Question = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          Frequently Asked Questions
          <Box>
            How do I get paid?
            <Icon>
              {" "}
              <FaAngleDown />{" "}
            </Icon>
          </Box>
          <Box>
            How much does a delivery driver at Bolt Food make?
            <Icon>
              {" "}
              <FaAngleDown />{" "}
            </Icon>
          </Box>
          <Box>
            How can I find out how much I earned?
            <Icon>
              {" "}
              <FaAngleDown />{" "}
            </Icon>
          </Box>
          <Box>
            Will I deliver on a schedule, or can I choose my own hours?
            <Icon>
              {" "}
              <FaAngleDown />{" "}
            </Icon>
          </Box>
          <Box>
            What are the requirements to sign up for a courier account with Bolt
            Food?
            <Icon>
              {" "}
              <FaAngleDown />{" "}
            </Icon>
          </Box>
          <Box>
            Why should I sign up as a Courier with Bolt Food?
            <Icon>
              {" "}
              <FaAngleDown />{" "}
            </Icon>
          </Box>
          <Box>
            When can I get started?
            <Icon>
              {" "}
              <FaAngleDown />{" "}
            </Icon>
          </Box>
          <Box>
            What happens to the tips I get for delivering food?
            <Icon>
              {" "}
              <FaAngleDown />{" "}
            </Icon>
          </Box>
          <Box>
            How many orders will I receive?
            <Icon>
              {" "}
              <FaAngleDown />{" "}
            </Icon>
          </Box>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Question;
const Icon = styled.div``;
const Box = styled.div`
  width: 100%;
  height: 90px;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  /* background-color: pink; */
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;
const Wrapper = styled.div`
  height: 95%;
  width: 60%;
  display: flex;
  align-items: center;
  font-size: 40px;
  flex-direction: column;
  /* background-color: skyblue; */
`;
const Container = styled.div`
  height: 700px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: blue; */
`;

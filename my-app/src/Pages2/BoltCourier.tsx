import React from "react";

import styled from "styled-components";

import Img from "../Assets/how-the-courier-works-desktop.png";

import GlobalCricle from "./GlobalCircle";

const BoltCourier = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Image src={Img} />

          <TextBox>
            <h1>Boost Your Earning</h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
              inventore voluptate odit minima laborum hic illum porro quis est
              expedita.
            </p>

            <Boxes>
              <Box>
                <HeadBox>
                  <h5> Earn more when it’s busy</h5>

                  <GlobalCricle
                    col="white"
                    br={"50%"}
                    ht={"20px"}
                    wd={"20px"}
                    bgc={"#1D965C"}
                    text={"1"}
                  />
                </HeadBox>

                <p>
                  Maximise your earnings with our dynamic pricing model, so you
                  get paid more during busy times.
                </p>
              </Box>

              <Box>
                <HeadBox>
                  <h5> Keep all of your tips together</h5>

                  <GlobalCricle
                    col="white"
                    br={"50%"}
                    ht={"20px"}
                    wd={"20px"}
                    bgc={"#1D965C"}
                    text={"2"}
                  />
                </HeadBox>

                <p>
                  Receive additional earnings from customers who appreciate your
                  hard work.
                </p>
              </Box>

              <Box>
                <HeadBox>
                  <h5> Get paid more with bonuses</h5>

                  <GlobalCricle
                    col="white"
                    br={"50%"}
                    ht={"20px"}
                    wd={"20px"}
                    bgc={"#1D965C"}
                    text={"3"}
                  />
                </HeadBox>

                <p>
                  We offer extra income opportunities for completing deliveries
                  on weekends, during late hours or on bad weather days..
                </p>
              </Box>
            </Boxes>
          </TextBox>
        </Wrapper>
      </Container>
    </div>
  );
};

export default BoltCourier;

const Boxes = styled.div`
  height: 500px;

  display: flex;

  flex-direction: column;
`;

const HeadBox = styled.div`
  width: 60%;

  display: flex;

  align-items: center;

  justify-content: center;

  flex-direction: row-reverse;

  h5 {
    font-size: 15px;

    font-weight: 700;

    margin-left: 10px;

    color: #302e2e;
  }
`;

const Box = styled.div`
  p {
    font-size: 16px;

    color: #252424;
  }

  h6 {
    gap: 10px;

    font-size: 17px;

    display: flex;

    align-items: center;
  }
`;

const TextBox = styled.div`
  width: 45%;

  h1 {
    width: 75%;

    font-size: 37px;
  }
`;

const Image = styled.img`
  width: 50%;
`;

const Wrapper = styled.div`
  height: 90%;

  width: 90%;

  display: flex;

  align-items: center;

  justify-content: space-between;
`;

const Container = styled.div`
  margin-top: 5%;

  height: 100%;

  width: 100%;

  display: flex;

  align-items: center;

  justify-content: center;
`;

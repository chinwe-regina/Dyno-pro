import React from "react";
import styled from "styled-components";
import Img from "../Assets/boost-your-earnings-desktop (1).png";
import GlobalCricle from "./GlobalCircle";
const BoostEarns = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Image src={Img} />
          <TextBox>
            <h1>Boost Your Earning</h1>
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

export default BoostEarns;
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
  height: 124px;
  width: 80%;
  flex-direction: column;
  margin-top: 12px;
  p {
    font-size: 14px;
    color: #575252bd;
  }
`;
const Boxes = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
`;
const TextBox = styled.div`
  width: 500px;
  height: 60%;
  flex-direction: column;
  margin-left: 30px;
  h1 {
    font-size: 34px;
    @media (min-width: 960px) {
      font-size: 45px;
      margin-left: 0px;
    }
  }
`;
const Image = styled.img`
  width: 95%;
  margin-left: 10px;
  border-radius: 10px;
  @media (min-width: 768px) {
    width: 50%;
    object-fit: cover;
    border-radius: 15px;
  }
`;
const Wrapper = styled.div`
  @media (min-width: 975px) {
    display: flex;
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  display: flex;
  flex-wrap: wrap;
`;
const Container = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 20px;
  @media (min-width: 768px) {
    margin-top: 50px;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

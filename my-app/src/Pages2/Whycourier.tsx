import React from "react";
import styled from "styled-components";
import { FaMoneyBillWaveAlt } from "react-icons/fa";
import { BiSolidTime } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";

const Whycourier = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Head>Why couriers choose Bolt Food</Head>
          <Boxes>
            <Box>
              <Icon>
                {" "}
                <FaMoneyBillWaveAlt />{" "}
              </Icon>
              <h2>Weekly payouts</h2>
              <h4>Get paid at the end of each week with no monthly fees.</h4>
            </Box>
            <Box>
              <Icon>
                {" "}
                <BiSolidTime />{" "}
              </Icon>
              <h2>Flexible hours</h2>
              <h4>
                As an independent courier, you choose when to earn money
                delivering orders.
              </h4>
            </Box>
            <Box>
              <Icon>
                {" "}
                <TbTruckDelivery />{" "}
              </Icon>
              <h2>Deliver food your way</h2>
              <h4>
                Want to make money as a delivery driver, or get some exercise on
                your bike? You decide.
              </h4>
            </Box>
          </Boxes>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Whycourier;

const Icon = styled.div`
  font-size: 30px;
  color: #32bb78;
`;
const Box = styled.div`
  height: 200px;
  width: 290px;
  text-align: center;
  line-height: 5px;
  /* background-color: blue; */
  color: #433e3e;
  h4 {
    text-align: center;
    font-size: 14px;
    width: 90%;
    color: rgb(118, 118, 118);
    font-weight: 400;
    line-height: 15px;
    @media (min-width: 768px) {
      font-size: 15px;
      margin-top: 15px;
      line-height: 20px;
      width: 95%;
    }
  }
  h2 {
    font-size: 24px;
  }
  @media (min-width: 898px) {
    flex-direction: row;
    width: 320px;
  }
`;
const Boxes = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  @media (min-width: 898px) {
    flex-direction: row;
    margin-top: 10px;
    height: 100px;
  }
`;
const Head = styled.div`
  color: #433e3e;
  font-size: 30px;
  font-weight: 200;
  margin-bottom: 3px;
  font-weight: 800;
  @media (min-width: 969px) {
    font-size: 43px;
    margin-bottom: 12px;
    font-weight: 800;
  }
`;
const Wrapper = styled.div`
  width: 93%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* flex-wrap: wrap; */
`;
const Container = styled.div`
  margin-top: 3%;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

import React from "react";
import styled from "styled-components";
import img from "../Assets/smart-insights (1).png";

const Insight = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Card>
              <h2>Smart insights for smart businesses</h2>
              <p>
                Track your kry performance indicators and make data-driven
                decisions with Bolt Food
              </p>
            </Card>
            <Card2>
              <WriteUp>
                <h2>Unique users</h2>
                <p>
                  the number of users who made their first order from your
                  restaurant during the week.
                </p>
              </WriteUp>
              <WriteUp>
                <h2>Average order value</h2>
                <p>
                  Better understand your customers' average per-discount spend.
                </p>
              </WriteUp>
              <WriteUp>
                <h2>Revenue</h2>
                <p>
                  Total number of users who made their first order from your
                  restaurant during the week.
                </p>
              </WriteUp>
              <WriteUp>
                <h2>Conversion</h2>
                <p>
                  The percentage of customer who made their first order from
                  your restaurant during the week.
                </p>
              </WriteUp>
            </Card2>
          </Left>
          <Right>
            <Img src={img} />
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Insight;

const WriteUp = styled.div`
  display: flex;
  flex-direction: column;
  /* line-height: 30px; */
  h2 {
    font-size: 25px;
    font-weight: 650;
  }
  p {
    font-size: 23px;
    font-weight: 350;
    margin-top: 0;
  }
`;

const Card2 = styled.div`
  height: 70%;
  /* background-color: #aaaab8; */
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Card = styled.div`
  height: 25%;
  /* background-color: blue; */
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  h2 {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  p {
    font-size: 28px;
    margin-top: 0;
    /* padding-bottom: 20px; */
  }
`;

const Left = styled.div`
  height: 90vh;
  width: 48%;
  /* background-color: purple; */
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Img = styled.img`
  height: 95%;
`;

const Right = styled.div`
  width: 45%;
  height: 90vh;
  /* background-color: yellowgreen; */
  display: flex;
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 96%;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 100px;
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: green; */
`;

import React from "react";
import styled from "styled-components";
import img from "../Assets/achieve-more (1).png";

const AchieveMore = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Card>
              <h2>Achieve more with Bolt Food</h2>
              <p>
                Experience more success with our powerful tools and support:
              </p>
            </Card>
            <Card2>
              <Nav1>
                <Circle>1</Circle>
                <WriteUp>
                  <h2>More revenue</h2>
                  <p>Earn up to $1,000 per week in additional revenue</p>
                </WriteUp>
              </Nav1>
              <Nav1>
                <Circle>2</Circle>
                <WriteUp>
                  <h2>More customers</h2>
                  <p>
                    Get access to loyal Bolt Food customers and millions of user
                    regularly use our car ride, electric scooter, e-bike and
                    car-sharing services
                  </p>
                </WriteUp>
              </Nav1>
              <Nav1>
                <Circle>3</Circle>
                <WriteUp>
                  <h2>More insights</h2>
                  <p>Earn up to $1,000 per week in additional revenue</p>
                </WriteUp>
              </Nav1>
              <Nav1>
                <Circle>4</Circle>
                <WriteUp>
                  <h2>More flexibility</h2>
                  <p>
                    Earn up to $1,000 per week in additional revenue
                    hnshgxsysuxggdwsjh njwhdjw jhgqdg2du jh2judgu{" "}
                  </p>
                </WriteUp>
              </Nav1>
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

export default AchieveMore;

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
const Circle = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 100%;
  /* padding: 1px; */
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 25px;
  margin-top: 26px;
`;
const Nav1 = styled.div`
  display: flex;
  /* background-color: grey; */
  /* align-items: center; */
  /* justify-content: space-between; */
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
  width: 100%;
  @media (min-width: 1026px) {
    height: 90vh;
    width: 48%;
    /* background-color: purple; */
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
`;

const Img = styled.img`
  height: 95%;
`;

const Right = styled.div`
  width: 100%;
  @media (min-width: 1026px) {
    width: 45%;
    height: 90vh;
    display: flex;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 1026px) {
    height: 100vh;
    width: 96%;
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 100px;
  }
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: green; */
  /* padding-bottom: 100%; */
`;

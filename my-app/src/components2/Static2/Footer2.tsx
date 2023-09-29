import React from "react";
import styled from "styled-components";
import { BiGlobe } from "react-icons/bi";
import img from "../../Assets/ng.svg";
import img1 from "../../Assets/download.svg";

const Footer2 = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Card>
            <Wrap>
              <BLogo src={img1}></BLogo>
              <Button>
                <Icon>
                  <BiGlobe />
                </Icon>
                <h3>English</h3>
              </Button>
              <Button>
                <Circle src={img} />
                <h3>Nigeria</h3>
              </Button>
            </Wrap>
          </Card>
          <Card>
            <CWrap>
              <h3>Bolt</h3>
              <p>Rides</p>
              <p>Food Delivery</p>
              <p>Grocery Delivery</p>
              <p>Scooters</p>
              <p>Car-sharing</p>
              <p>Business</p>
              <p>Airports</p>
              <p>Cities</p>
            </CWrap>
          </Card>
          <Card>
            <CWrap>
              <h3>Partner with Bolt</h3>
              <p>Sign up as a driver</p>
              <p>Sign up as a courier</p>
              <p>Fleets</p>
              <p>Franchise</p>
              <p>Influencers</p>
            </CWrap>
          </Card>
          <Card>
            <CWrap>
              <h3>Company</h3>
              <p>About us</p>
              <p>Careers</p>
              <p>Green Plan</p>
              <p>Press</p>
              <p>Blog</p>
            </CWrap>
          </Card>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Footer2;

const Icon = styled.div`
  font-size: 30px;
`;
const Circle = styled.img`
  height: 25px;
  width: 25px;
  border-radius: 100%;
  /* padding: 20px; */
  /* background-color: grey; */
`;
const Button = styled.div`
  height: 50px;
  width: 130px;
  border-radius: 30px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: grey;
`;

const BLogo = styled.img`
  height: 50px;
  width: 70px;
`;

const Wrap = styled.div`
  /* height: 200px; */
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background-color: yellow; */
  position: absolute;
`;
const CWrap = styled.div`
  /* height: 400px; */
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background-color: green; */
  position: absolute;

  h3 {
    font-size: 25px;
    margin: 0;
    /* margin-bottom: 3px; */
  }
  p {
    font-size: 22px;
    margin-top: 2px;
    /* height: 5px; */
  }
`;

const Card = styled.div`
  height: 100%;
  width: 20%;
  position: relative;
`;

const Wrapper = styled.div`
  height: 60%;
  width: 96%;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding-bottom: 100px; */
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: yellow; */
`;

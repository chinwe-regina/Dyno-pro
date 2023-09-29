import React from "react";
import styled from "styled-components";
import img from "../Assets/hero (3).jpg";
import img1 from "../Assets/hero (2).jpg";

const Hero = () => {
  return (
    <div>
      <Container>
        <BImage src={img} />
        <BImage1 src={img1} />
        <Cover />
        <Wrapper>
          <Card>
            <h1>Go wherever, whenever</h1>
            <p>
              Bolt is the all-in-one mobility app. Get picked up by a top-rated
              driver in minutes and enjoy a comfortable ride to wherever you’re
              going; or skip the traffic entirely on one of our industry-leading
              scooters.
            </p>
            <Button>Get started</Button>
          </Card>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Hero;

const Button = styled.div`
  width: 150px;
  height: 100px;
  display: flex;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  color: white;
  padding: 15px;
  background-color: green;
  @media screen and (max-width: 768px) {
    display: flex;
  }
  /* margin-bottom: 100px; */
`;

const Card = styled.div`
  height: 40%;
  width: 620px;
  /* background-color: blue; */
  display: flex;
  justify-content: space-between;
  /* padding-bottom: 50px; */
  padding-top: 50px;
  flex-direction: column;
  p {
    font-size: 25px;
    flex-wrap: wrap;
    color: white;
    margin-top: 0px;
    @media screen and (max-width: 768px) {
      display: flex;
      flex-wrap: wrap;
      font-size: 15px;
    }
  }
  h1 {
    font-size: 55px;
    font-weight: 700;
    flex-wrap: wrap;
    color: white;
    @media screen and (max-width: 768px) {
      display: flex;
      flex-wrap: wrap;
      font-size: 25px;
      font-weight: 700;
    }
  }
`;

const Wrapper = styled.div`
  height: 100%;
  width: 96%;
  /* background-color: red; */
  position: absolute;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const Cover = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;
const BImage1 = styled.img`
  height: 80%;
  width: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  object-fit: cover;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;
const BImage = styled.img`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  object-fit: cover;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

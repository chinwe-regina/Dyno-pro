import React, { useState } from "react";
import styled from "styled-components";
import { SlMenu } from "react-icons/sl";
import { AiOutlineMenu } from "react-icons/ai";
import { LiaAngleDownSolid } from "react-icons/lia";
import img from "../../Assets/ng.svg";
import Globalbutton from "../../Pages2/Globalbutton";
const Header2 = () => {
  const [header, setHeader] = useState(false);

  const headerChange = () => {
    if (window.pageYOffset >= 70) {
      setHeader(!true);
    } else {
      setHeader(true);
    }
  };
  window.addEventListener("scroll", headerChange);
  return (
    <div>
      {header ? (
        <Container bgc="">
          <Wrapper>
            <Logo col="white">
              <h2>Bolt</h2>
            </Logo>

            <SmallScreen>
              <Image src={img} />
              <h3>(EN)</h3>
              <Icon col="white">
                <AiOutlineMenu />
              </Icon>
            </SmallScreen>

            <NavHolder>
              <Image src={img} />
              <Navs col="white">Nigeria(EN)</Navs>
              <Navs col="white">Support</Navs>
              <Globalbutton
                pad={"7px 22px 7px 22px"}
                bgc={"#444040"}
                col={"white"}
                text={"Sign Up"}
                h={""}
                w={""}
                mg="0px 10px"
                mt=""
              />
              <Icon col="white">
                <SlMenu />
              </Icon>
            </NavHolder>
          </Wrapper>
        </Container>
      ) : (
        <Container bgc="#EEF2F1">
          <Wrapper>
            <Logo col="black">
              <h4>
                Bolt <br />
                Couriers
              </h4>
              <p>Bolt Couriers</p>
            </Logo>

            <SmallScreen1>
              <Icons col="">
                {" "}
                <LiaAngleDownSolid />{" "}
              </Icons>
              <Globalbutton
                pad={"10px 6px 10px 6px"}
                bgc={"#1D965C"}
                col={"white"}
                text={"Become Courier"}
                h={""}
                w={""}
                mg={""}
                mt={""}
              />
            </SmallScreen1>
            <NavHolder>
              <Last>
                <h6>Overview</h6>
                <h6>How It Works</h6>
                <h6>FAQ</h6>
                <Globalbutton
                  pad={"7px"}
                  bgc={"#1D965C"}
                  col={"white"}
                  text={"Become A Courier"}
                  h={"33px"}
                  w={""}
                  mg={"20px"}
                  mt="0px"
                />
              </Last>
            </NavHolder>
          </Wrapper>
        </Container>
      )}
    </div>
  );
};

export default Header2;
const Last = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  height: 20px;
  width: 20px;
  border-radius: 50%;
`;
const Icons = styled.div<{ col: string }>`
  margin-right: 20px;
  color: ${({ col }) => col};
  display: flex;
`;
const Icon = styled.div<{ col: string }>`
  margin-left: 20px;
  display: flex;
`;
const Nav1 = styled.div`
  display: flex;
  align-items: center;
  h4 {
    margin-right: 20px;
    font-size: 20px;
  }
`;
const Navs = styled.div<{ col: string }>`
  margin-right: 22px;
  color: ${({ col }) => col};
`;
const NavHolder = styled.div`
  width: 420px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  color: white;
  line-height: 35px;
  h6 {
    font-size: 15px;
    font-weight: 400;
    color: #4d4b4b;
    margin-top: 17px;
    margin-right: 15px;
  }
  justify-content: space-between;
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`;
const Logo = styled.div<{ col: string }>`
  font-size: 20px;
  font-weight: 600;
  color: ${({ col }) => col};
  h4 {
    display: flex;
    @media (min-width: 768px) {
      display: none;
    }
    margin-top: 10px;
  }
  p {
    display: none;
    @media (min-width: 768px) {
      display: flex;
    }
  }
`;
const Wrapper = styled.div`
  width: 93%;
  height: 50px;
  display: flex;
  /* flex-wrap: wrap; */
  align-items: center;
  justify-content: space-between;
  h5 {
  }
`;
const SmallScreen1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    display: none;
  }
`;

const SmallScreen = styled.div`
  display: flex;
  align-items: center;
  color: white;
  h3 {
    font-size: 15px;
    margin-left: 10px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
const Container = styled.div<{ bgc: string }>`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;
  background-color: ${({ bgc }) => bgc};
  position: fixed;
`;

import React from "react";
import { useNavigate } from "react-router-dom";

import styled, { keyframes } from "styled-components";
import "../App.css";
import "./WalkIn.css";

import GalaxyBg from "../images/universe.jpg";

const delay = ["W", "E", "L", "C", "O", "M", "E"];

const waviy = keyframes`
0%,40%,100% {
  transform: translateY(0);
  opacity:1;
}
20% {
  transform: translateY(-20px);
  opacity:0;
}
`;

const StyledWaivy = styled.div`
  position: relative;
  top: 20%;
  -webkit-box-reflect: below -20px linear-gradient(transparent, rgba(0, 0, 0, 0.2));
  font-size: 4.5rem;

  & > span {
    opacity: 0;
    position: relative;
    display: inline-block;
    color: #fff;
    text-transform: uppercase;
    animation: ${waviy} 3.5s;
  }
`;

const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
`;

function WalkIn() {
  const navigate = useNavigate();
  const goToMain = (endPoint) => {
    navigate(endPoint);
  };
  return (
    <StyledContainer
      style={{
        backgroundImage: `url(${GalaxyBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      <StyledWaivy>
        {delay.map((num, index) => (
          <span
            key={index}
            style={{ animationDelay: `calc(.1s * ${index + 1})` }}
          >
            {num}
          </span>
        ))}
        <div className="parent">
          <p className="child">FrontEnd Developer</p>
        </div>
        <div className="parent">
          <p className="child">Saemi's </p>
        </div>
        <div className="parent">
          <p className="child">Profile</p>
        </div>
      </StyledWaivy>
      <div className="startBtn korButton" onClick={() => goToMain("/main")}>
        <span>Kor</span>
      </div>
      <div className="startBtn engButton" onClick={() => goToMain("/")}>
        <span>Eng</span>
      </div>
    </StyledContainer>
  );
}

export default WalkIn;

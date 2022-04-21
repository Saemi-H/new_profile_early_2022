import React from 'react'
import { useNavigate } from 'react-router-dom';

import styled, { keyframes } from 'styled-components';
import "../App.css";
import "./WalkIn.css";

import GalaxyBg from "../images/universe.jpg";

const delay=["안","녕", "하", "세", "요"]


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
-webkit-box-reflect: below -20px linear-gradient(transparent, rgba(0,0,0,.2));
font-size: 4.5rem;

& > span{
  opacity: 0;
        position: relative;
        display: inline-block;
        color: #fff;
        text-transform: uppercase;
        animation: ${waviy} 3.5s;
}
`

const StyledContainer = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: fixed;
`;




function WalkIn() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main');
  }
  return (
    <StyledContainer style={{backgroundImage: `url(${GalaxyBg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", position:"relative"}}>
      <StyledWaivy>
      {
        delay.map((num, index) => <span key={index} style={{animationDelay: `calc(.1s * ${index+1})`}}>{num}</span>)
      }
      <div className='parent'>
        <p className='child'>프론트엔드 개발자</p>
        </div>
        <div className='parent'>
        <p className='child'>홍새미의 </p>
        </div>
        <div className='parent'>
        <p className='child'>홈페이지 입니다</p>
        </div>
  </StyledWaivy>
      <div className='startBtn' onClick={goToMain}>
        <span>Enter</span>
      </div>
    </StyledContainer>
  )
}

export default WalkIn;
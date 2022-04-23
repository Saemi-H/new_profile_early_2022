import React, { useEffect, useRef } from 'react'
import {Link} from "react-router-dom"
import { useDispatch } from 'react-redux';

import styled, {keyframes} from "styled-components";

import {CaretRightOutlined} from "@ant-design/icons"

import kioskImg from "../images/kiosk_pic.png";
import tasioImg from "../images/tasio.png";

const boxFocus = keyframes`
  0%{
    top: -200%;
  }

  100%{
    top: 0%;
  }
`;

const StyledTitleBox = styled.div`
    text-align: left;
    font-size: 2rem;
    margin-bottom: 40px;
    >p::after{
        display: inline-block;
        content: "";
        height: 1px;
        background-color: rgba(255, 255, 255, 0.3);
        margin-left: 1rem;
    }
`;

const StyledColor = styled.span`
    color: #59e5c7;
`;

const StyledContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
`

const StyledDesContainer = styled.div`
  width: 300px;
  height: 40vh;
  margin: 10px;
  flex-shrink: 0;
  flex-grow: 0;
  position: relative;
  background-image: url(${kioskImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  border: 1px solid rgba(29, 70, 82, 1);
  &:hover >.content-box{
      background-color: rgba(29, 70, 82, 0.8);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding: 15px;
      box-sizing: border-box;
  }
`;

const StyledGoToButton = styled.button`
  border: none;
  background-color: transparent;
  color: #222;
  font-weight: bold;
`;

const StyledButton = styled.button`
    background-color: transparent;
    height: 40px;
    line-height: 40px;
    border: 1px solid #fff;
    padding: 0 15px;
    border-radius: 4px;
    &:hover{
        border-color: #59e5c7;
    }
    > .link-style{
        color: #fff;
        &:hover{
            color: #59e5c7;
        }
    }
`;

const GoToButton = ({kioskAddress}) => {
  return(
    <StyledButton>
    <Link
    className='link-style'
    to="#"
    onClick={(e) => {
      window.location.href = kioskAddress;
      e.preventDefault();
    }}
    >
        바로가기
    </Link>
    </StyledButton>
  )
}

const ProjectsIndex = () => {
  const sectionRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: "SAVEOFFSETTOP", payload: {id: 2, top: sectionRef.current.offsetTop}})
  }, [sectionRef.current])
  return (
  <>
      <StyledTitleBox ref={sectionRef}>
        <p><StyledColor>03.</StyledColor>Projects</p>
      </StyledTitleBox>
      <StyledContainer>
        <StyledDesContainer>
          <div className='content-box'>
          <div >
            <h6>Kiosk</h6>
            <div style={{padding: "10px", backgroundColor: "#112240", position: "absolute", whiteSpace: "pre-wrap"}}>
              QR코드를 통해 웹 뷰 앱으로 이동 가능한 키오스크 앱을 유지 보수 및 React Material 고도화 프로젝트를 진행했습니다. {"\n"}
              <CaretRightOutlined />React, Redux, React-Query, Leaflet, Material UI, Styled-Component
              <GoToButton kioskAddress="https://kiosk.springgo.io/"/>
            </div>
          </div>
          </div>
        </StyledDesContainer>
        <StyledDesContainer>
          <div className='content-box'>
          <div >
            <h6>Kiosk</h6>
            <div style={{padding: "10px", backgroundColor: "#112240", position: "absolute", whiteSpace: "pre-wrap"}}>
              QR코드를 통해 웹 뷰 앱으로 이동 가능한 키오스크 앱을 유지 보수 및 React Material 고도화 프로젝트를 진행했습니다. {"\n"}
              <CaretRightOutlined />React, Redux, React-Query, Leaflet, Material UI, Styled-Component
              <GoToButton kioskAddress="https://kiosk.springgo.io/"/>
            </div>
          </div>
          </div>
        </StyledDesContainer>
        <StyledDesContainer>
          <div className='content-box'>
          <div >
            <h6>Kiosk</h6>
            <div style={{padding: "10px", backgroundColor: "#112240", position: "absolute", whiteSpace: "pre-wrap"}}>
              QR코드를 통해 웹 뷰 앱으로 이동 가능한 키오스크 앱을 유지 보수 및 React Material 고도화 프로젝트를 진행했습니다. {"\n"}
              <CaretRightOutlined />React, Redux, React-Query, Leaflet, Material UI, Styled-Component
              <GoToButton kioskAddress="https://kiosk.springgo.io/"/>
            </div>
          </div>
          </div>
        </StyledDesContainer>
        <StyledDesContainer>
          <div className='content-box'>
          <div >
            <h6>Kiosk</h6>
            <div style={{padding: "10px", backgroundColor: "#112240", position: "absolute", whiteSpace: "pre-wrap"}}>
              QR코드를 통해 웹 뷰 앱으로 이동 가능한 키오스크 앱을 유지 보수 및 React Material 고도화 프로젝트를 진행했습니다. {"\n"}
              <CaretRightOutlined />React, Redux, React-Query, Leaflet, Material UI, Styled-Component
              <GoToButton kioskAddress="https://kiosk.springgo.io/"/>
            </div>
          </div>
          </div>
        </StyledDesContainer>
        </StyledContainer>
  </>
  )
}

export default ProjectsIndex
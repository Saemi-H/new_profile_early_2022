import React from 'react'

import styled, {keyframes} from "styled-components";

import {CaretRightOutlined} from "@ant-design/icons"
import { Button } from 'antd';

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

const StyledDesContainer = styled.div`
  width: 50%;
  height: 40vh;
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

const GoToAddressButton = () => {
  return(
    <div>
      <Button>바로가기</Button>
    </div>
  )
}

const ProjectsIndex = () => {
  return (
  <>
      <StyledTitleBox>
        <p><StyledColor>03.</StyledColor>Projects</p>
      </StyledTitleBox>
        <StyledDesContainer>
          <div className='content-box'>
          <div >
            <h6>Kiosk</h6>
            <div style={{padding: "10px", backgroundColor: "#112240", position: "absolute", whiteSpace: "pre-wrap"}}>
              QR코드를 통해 웹 뷰 앱으로 이동 가능한 키오스크 앱을 유지 보수 및 React Material 고도화 프로젝트를 진행했습니다. {"\n"}
              <CaretRightOutlined />React, Redux, React-Query, Leaflet, Material UI, Styled-Component
              <GoToAddressButton />
            </div>
          </div>
          </div>
        </StyledDesContainer>
  </>
  )
}

export default ProjectsIndex
import React from 'react'
import styled from "styled-components";
import { Carousel } from 'antd';
import {CaretRightOutlined} from "@ant-design/icons"


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

const carouselStyle = {
    height: '45vh',
}

const contentStyle = {
    height: '45vh',
    color: "#fff",
    textAlign: "left",
    padding: "10px 15px",
    boxSizing: "border-box",
    marginTop: '30px'
  };


const WorkIndex = () => {
    const [dotPosition, setDotPosition] = React.useState('top');


    return (
    <><StyledTitleBox>
            <p><StyledColor>02.</StyledColor> Saemi's TimeLine</p>
        </StyledTitleBox>
        <Carousel style={carouselStyle} dotPosition={dotPosition}>
                <div>
                    <div style={contentStyle}>
                        <p>Front-End Developer <StyledColor>@SpringCloud</StyledColor></p>
                        <p>March 2021 - Present</p>
                        <p>
                            <CaretRightOutlined /> Back-End developers, Designer, QA, Font-End developers와의 커뮤니케이션 및 협업
                        </p>
                        <p>
                            <CaretRightOutlined /> Vuetify, Material UI와 같이 FrameWork Library를 사용해 UI 개발
                        </p>
                        <p>
                            <CaretRightOutlined /> React-Redux, React-Query를 사용해 상태 관리
                        </p>
                        <p>
                            <CaretRightOutlined /> React,Vue와 같이 FrameWork를 사용해 웹 뷰 앱 개발
                        </p>
                    </div>
                </div>
                <div>
                    <div style={contentStyle}>
                    <p>UI/UX 웹 디자인, 퍼블리셔 과정 <StyledColor>@그린컴퓨터아카데미</StyledColor></p>
                            <p>June 2020 - Nov 2020</p>
                            <p>
                                <CaretRightOutlined /> Photoshop 툴 사용해 간단한 웹 디자인 시안 
                            </p>
                            <p>
                                <CaretRightOutlined /> HTML, CSS, Jquery 사용해 웹 페이지 구축
                            </p>
                    </div>
                </div>
                <div>
                    <div style={contentStyle}>
                    <p>학사 졸업 <StyledColor>@University of Saskatchewan</StyledColor></p>
                            <p>July 2013 - June 2018</p>
                            <p>
                                <CaretRightOutlined /> BA of Psychology 졸업
                            </p>
                    </div>
                </div>
            </Carousel></>
  )
}

export default WorkIndex
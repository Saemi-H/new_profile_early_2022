import React, { useEffect, useRef } from "react";

import { useDispatch } from "react-redux";

import styled from "styled-components";
import { Carousel } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";

const StyledTitleBox = styled.div`
  text-align: left;
  font-size: 2rem;
  margin-bottom: 40px;
  > p::after {
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
  height: "45vh",
};

const contentStyle = {
  width: "95%",
  height: "45vh",
  color: "#fff",
  textAlign: "left",
  padding: "10px 15px",
  boxSizing: "border-box",
  marginTop: "30px",
};

const WorkIndex = () => {
  const sectionRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: "SAVEOFFSETTOP",
      payload: { id: 1, top: sectionRef.current.offsetTop },
    });
  }, [sectionRef.current]);

  const [dotPosition, setDotPosition] = React.useState("top");

  return (
    <>
      <StyledTitleBox ref={sectionRef}>
        <p>
          <StyledColor>02.</StyledColor> Saemi's TimeLine
        </p>
      </StyledTitleBox>
      <Carousel style={carouselStyle} dotPosition={dotPosition}>
        <div>
          <div style={contentStyle}>
            <p>
              Front-End Developer <StyledColor>@Pet-Friends</StyledColor>
            </p>
            <p>Aug. 2022 - Dec. 2023</p>
            <p>
              <CaretRightOutlined /> Introduced testing-library, such as Jest
              and Cypress
            </p>
            <p>
              <CaretRightOutlined /> Managing states with React-Query and Jotai
            </p>
            <p>
              <CaretRightOutlined /> Led payment page migration project from Vue
              to Next.js
            </p>
            <p>
              <CaretRightOutlined /> Contributed writing frontend team's
              Tech-blog
            </p>
            <p>
              <CaretRightOutlined /> Worked in E-commerce industry
            </p>
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <p>
              Front-End Developer <StyledColor>@SpringCloud</StyledColor>
            </p>
            <p>Mar. 2021 - Jul. 2022</p>

            <p>
              <CaretRightOutlined /> Developing UI using libraries, such as
              Vuetify and Material UI
            </p>
            <p>
              <CaretRightOutlined /> Managing states using React-Redux-thunk and
              React-Query
            </p>
            <p>
              <CaretRightOutlined /> Led project migrating Kiosk Page using
              React
            </p>
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <p>
              UI/UX Web-Designing and Publishing class{" "}
              <StyledColor>@Green computer academy</StyledColor>
            </p>
            <p>June 2020 - Nov 2020</p>
            <p>
              <CaretRightOutlined /> Web-designing using Photoshop
            </p>
            <p>
              <CaretRightOutlined /> Built websites using HTML, CSS, Jquery
            </p>
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <p>
              Undergraduate{" "}
              <StyledColor>@University of Saskatchewan</StyledColor>
            </p>
            <p>July 2013 - June 2018</p>
            <p>
              <CaretRightOutlined /> BA of Psychology
            </p>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default WorkIndex;

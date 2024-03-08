import React, { useEffect, useRef } from "react";

import { useDispatch } from "react-redux";

import styled from "styled-components";
import { Rate } from "antd";
import "react-circular-progressbar/dist/styles.css";
import Slider from "react-slick";

import Html from "../../images/html.png";
import Css from "../../images/csslogo.png";
import Js from "../../images/jslogo.png";
import ReactLogo from "../../images/react.png";
import Vue from "../../images/vue.png";
import Vuetify from "../../images/vuetify.png";
import Sass from "../../images/sass.png";
import MUI from "../../images/mui.png";
import Jquery from "../../images/jquery.png";
import Rqlog from "../../images/rqlogo.png";
import Jira from "../../images/jira.png";
import confluence from "../../images/confluence.png";
import githublogo from "../../images/github.png";
import bitbucket from "../../images/bitbucket.png";
import figmalogo from "../../images/figma.png";
import Netlify from "../../images/netlify.png";
import PSlogo from "../../images/ps.png";
import ReduxLogo from "../../images/redux.png";
import typescript from "../../images/typescript.svg";

const settings1 = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: false,
  autoplaySpeed: 1000,
  slidesToShow: 8,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "50px",
  swipeToSlide: true,
  pauseOnHover: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1800,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 300,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  touchMove: true,
};

const settings2 = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: false,
  autoplaySpeed: 1500,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "50px",
  swipeToSlide: true,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  touchMove: true,
  arrows: false,
};

const StyledBg = styled.div`
  padding-top: 100px;
`;

const StyledTitleBox = styled.div`
  text-align: left;
  font-size: 2rem;
  margin: 40px 0;
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

const StyledSubTitle = styled.h2`
  color: #fff;
  font-weight: bold;
  padding-bottom: 1rem;
`;

const FrontItem = styled.div`
  width: 18.125rem;
  height: 20vh;
  text-align: center;
  background: #fff;
  border-radius: 1rem;
  background-color: #000;
  position: relative;
`;

const StyledImgContainer = styled.div`
  width: 70%;
  height: 40%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 25%;
`;

const StyledComImgContainer = styled.div`
  width: 70%;
  height: 40%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 25%;
  background-color: #f4e2c6;
  padding-top: 5%;
  box-sizing: border-box;
`;

const StyledLogos = styled.img`
  margin: -10% auto;
  height: 70%;
  ${({ className }) =>
    className === "etc" &&
    `
  margin: 0 auto;
`}
`;

const ResizeLogo = styled.img`
  height: 5.25rem;
  margin: -20% auto;
  line-height: 20vh;
`;
const ResizeRq = styled.img`
  width: 100%;
  margin: 0 auto;
  line-height: 20vh;
`;

const StyledContent = styled.div`
  width: 80%;
  height: 85%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 50%;
  color: #fff;
  ${({ className }) =>
    className === "etc" &&
    `
  top: 70%;
`}
`;

const StyledName = styled.p`
  font-size: 2rem;
`;

const StyledLevel = styled.span`
  font-size: 2rem;
  color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Skills = () => {
  const sectionRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "SAVEOFFSETTOP",
      payload: { id: 3, top: sectionRef.current.offsetTop },
    });
  }, [sectionRef.current]);
  return (
    <StyledBg>
      <StyledTitleBox ref={sectionRef}>
        <StyledColor>04.</StyledColor> Skills
      </StyledTitleBox>
      <StyledSubTitle>Front-End Skills</StyledSubTitle>
      <Slider {...settings1}>
        <FrontItem>
          <StyledImgContainer>
            <ResizeLogo src={Html} alt="html logo" />
          </StyledImgContainer>
          <StyledContent>
            <StyledName>HTML</StyledName>
            <StyledLevel>
              <Rate
                allowHalf
                disabled
                defaultValue={5}
                style={{
                  listStyle: "none",
                  display: "flex",
                  marginTop: "-2.5rem",
                }}
              />
            </StyledLevel>
          </StyledContent>
        </FrontItem>
        <FrontItem>
          <StyledImgContainer>
            <ResizeLogo src={Css} alt="css logo" />
          </StyledImgContainer>
          <StyledContent>
            <StyledName>CSS</StyledName>
            <StyledLevel>
              <Rate
                allowHalf
                disabled
                defaultValue={5}
                style={{
                  listStyle: "none",
                  display: "flex",
                  marginTop: "-2.5rem",
                }}
              />
            </StyledLevel>
          </StyledContent>
        </FrontItem>
        <FrontItem>
          <StyledImgContainer>
            <ResizeLogo src={Js} alt="scriptt logo" />
          </StyledImgContainer>
          <StyledContent>
            <StyledName>JS</StyledName>
            <StyledLevel>
              <Rate
                allowHalf
                disabled
                defaultValue={3.5}
                style={{
                  listStyle: "none",
                  display: "flex",
                  marginTop: "-2.5rem",
                }}
              />
            </StyledLevel>
          </StyledContent>
        </FrontItem>
        <FrontItem>
          <StyledImgContainer>
            <StyledLogos src={ReactLogo} alt="React logo" />
          </StyledImgContainer>
          <StyledContent>
            <StyledName>React</StyledName>
            <StyledLevel>
              <Rate
                allowHalf
                disabled
                defaultValue={4}
                style={{
                  listStyle: "none",
                  display: "flex",
                  marginTop: "-2.5rem",
                }}
              />
            </StyledLevel>
          </StyledContent>
        </FrontItem>
        <FrontItem>
          <StyledImgContainer>
            <StyledLogos src={Vue} alt="Vue logo" />
          </StyledImgContainer>
          <StyledContent>
            <StyledName>Vue</StyledName>
            <StyledLevel>
              <Rate
                allowHalf
                disabled
                defaultValue={3}
                style={{
                  listStyle: "none",
                  display: "flex",
                  marginTop: "-2.5rem",
                }}
              />
            </StyledLevel>
          </StyledContent>
        </FrontItem>
        <FrontItem>
          <StyledImgContainer>
            <StyledLogos src={Jquery} alt="Jquery logo" />
          </StyledImgContainer>
          <StyledContent>
            <StyledName>Jquery</StyledName>
            <StyledLevel>
              <Rate
                allowHalf
                disabled
                defaultValue={3.5}
                style={{
                  listStyle: "none",
                  display: "flex",
                  marginTop: "-2.5rem",
                }}
              />
            </StyledLevel>
          </StyledContent>
        </FrontItem>
        <FrontItem>
          <StyledImgContainer>
            <StyledLogos src={MUI} alt="material ui logo" />
          </StyledImgContainer>
          <StyledContent>
            <StyledName>Material UI</StyledName>
            <StyledLevel>
              <Rate
                allowHalf
                disabled
                defaultValue={4}
                style={{
                  listStyle: "none",
                  display: "flex",
                  marginTop: "-2.5rem",
                }}
              />
            </StyledLevel>
          </StyledContent>
        </FrontItem>
        <FrontItem>
          <StyledImgContainer>
            <StyledLogos src={Sass} alt="sass logo" />
          </StyledImgContainer>
          <StyledContent>
            <StyledName>SASS</StyledName>
            <StyledLevel>
              <Rate
                allowHalf
                disabled
                defaultValue={4}
                style={{
                  listStyle: "none",
                  display: "flex",
                  marginTop: "-2.5rem",
                }}
              />
            </StyledLevel>
          </StyledContent>
        </FrontItem>
        <FrontItem>
          <StyledImgContainer>
            <StyledLogos src={Vuetify} alt="vuetify logo" />
          </StyledImgContainer>
          <StyledContent>
            <StyledName>Vuetify</StyledName>
            <StyledLevel>
              <Rate
                allowHalf
                disabled
                defaultValue={3}
                style={{
                  listStyle: "none",
                  display: "flex",
                  marginTop: "-2.5rem",
                }}
              />
            </StyledLevel>
          </StyledContent>
        </FrontItem>
        <FrontItem>
          <StyledImgContainer>
            <ResizeRq src={Rqlog} alt="react query logo" />
          </StyledImgContainer>
          <StyledContent>
            <StyledName>React Query</StyledName>
            <StyledLevel>
              <Rate
                allowHalf
                disabled
                defaultValue={3}
                style={{
                  listStyle: "none",
                  display: "flex",
                  marginTop: "-2.5rem",
                }}
              />
            </StyledLevel>
          </StyledContent>
        </FrontItem>
        <FrontItem>
          <StyledImgContainer>
            <StyledLogos src={ReduxLogo} alt="reduxlogo" />
          </StyledImgContainer>
          <StyledContent>
            <StyledName>React Redux</StyledName>
            <StyledLevel>
              <Rate
                allowHalf
                disabled
                defaultValue={3.5}
                style={{
                  listStyle: "none",
                  display: "flex",
                  marginTop: "-2.5rem",
                }}
              />
            </StyledLevel>
          </StyledContent>
        </FrontItem>
        <FrontItem>
          <StyledImgContainer>
            <StyledLogos src={typescript} alt="typescript logo" />
          </StyledImgContainer>
          <StyledContent>
            <StyledName>Typescript</StyledName>
            <StyledLevel>
              <Rate
                allowHalf
                disabled
                defaultValue={2}
                style={{
                  listStyle: "none",
                  display: "flex",
                  marginTop: "-2.5rem",
                }}
              />
            </StyledLevel>
          </StyledContent>
        </FrontItem>
      </Slider>
      <StyledSubTitle>Other Skills</StyledSubTitle>
      <Slider {...settings2}>
        <FrontItem>
          <StyledComImgContainer>
            <StyledLogos className="etc" src={figmalogo} alt="figma logo" />
          </StyledComImgContainer>
          <StyledContent className="etc">
            <StyledName>Figma</StyledName>
          </StyledContent>
        </FrontItem>
        <FrontItem>
          <StyledComImgContainer>
            <img
              style={{ margin: "0 auto", height: "50%" }}
              src={Jira}
              alt="jira logo"
            />
          </StyledComImgContainer>
          <StyledContent className="etc">
            <StyledName>Jira</StyledName>
          </StyledContent>
        </FrontItem>
        <FrontItem>
          <StyledComImgContainer>
            <img
              style={{ margin: "0 auto", height: "35%" }}
              src={confluence}
              alt="confluence logo"
            />
          </StyledComImgContainer>
          <StyledContent className="etc">
            <StyledName>Confluence</StyledName>
          </StyledContent>
        </FrontItem>
        <FrontItem>
          <StyledComImgContainer>
            <StyledLogos className="etc" src={githublogo} alt="github logo" />
          </StyledComImgContainer>
          <StyledContent className="etc">
            <StyledName>Github</StyledName>
          </StyledContent>
        </FrontItem>
        <FrontItem>
          <StyledComImgContainer>
            <StyledLogos className="etc" src={bitbucket} alt="bitbucket logo" />
          </StyledComImgContainer>
          <StyledContent className="etc">
            <StyledName>Bitbucket</StyledName>
          </StyledContent>
        </FrontItem>
        <FrontItem>
          <StyledComImgContainer>
            <StyledLogos className="etc" src={Netlify} alt="Netlify logo" />
          </StyledComImgContainer>
          <StyledContent className="etc">
            <StyledName>Netlify</StyledName>
          </StyledContent>
        </FrontItem>
        <FrontItem>
          <StyledComImgContainer>
            <StyledLogos className="etc" src={PSlogo} alt="photoshop logo" />
          </StyledComImgContainer>
          <StyledContent className="etc">
            <StyledName>Photoshop</StyledName>
          </StyledContent>
        </FrontItem>
      </Slider>
    </StyledBg>
  );
};

export default Skills;

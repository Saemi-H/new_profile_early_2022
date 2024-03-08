import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import styled from "styled-components";

import { CaretRightOutlined } from "@ant-design/icons";

import kioskImg from "../../images/kiosk_pic.png";
import SettleBankImg from "../../images/settleBankImg.png";
import PaymentMigrationImg from "../../images/paymentImgration.png";
import SamplingGiftImg from "../../images/samplingGift.png";

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

const StyledContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
`;
const StyledOverlayExplanation = styled.div`
  height: 100%;
  padding: 25px;
  background-color: #112240;
  position: absolute;
  left: 0;
  bottom: -100%;
  white-space: pre-wrap;
  transition: bottom 0.5s;
`;

const StyledDesContainer = styled.div`
  width: 300px;
  height: 40vh;
  margin: 10px;
  flex-shrink: 0;
  flex-grow: 0;
  overflow: hidden;
  position: relative;
  background-image: url(${kioskImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  border: 1px solid rgba(29, 70, 82, 1);
  &:hover > .content-box {
    background-color: rgba(29, 70, 82, 0.8);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 15px;
    box-sizing: border-box;
  }
  &:hover ${StyledOverlayExplanation} {
    bottom: 0;
  }
  ${({ id }) =>
    id === "paymentMigration" &&
    `
    background-image: url(${PaymentMigrationImg});
  `}

  ${({ id }) =>
    id === "samplingGift" &&
    `
    background-image: url(${SamplingGiftImg});
  `}


${({ id }) =>
    id === "settleBank" &&
    `
    background-image: url(${SettleBankImg});
  `}
`;

const StyledButton = styled.button`
  background-color: transparent;
  height: 40px;
  line-height: 40px;
  border: 1px solid #fff;
  padding: 0 15px;
  border-radius: 4px;
  &:hover {
    border-color: #59e5c7;
  }
  > .link-style {
    color: #fff;
    &:hover {
      color: #59e5c7;
    }
  }
`;

const GoToButton = ({ notionAddress }) => {
  return (
    <StyledButton>
      <Link
        className="link-style"
        to="#"
        onClick={(e) => {
          window.location.href = notionAddress;
          e.preventDefault();
        }}
      >
        Details
      </Link>
    </StyledButton>
  );
};

const ProjectsIndex = () => {
  const sectionRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: "SAVEOFFSETTOP",
      payload: { id: 2, top: sectionRef.current.offsetTop },
    });
  }, [sectionRef.current]);
  return (
    <>
      <StyledTitleBox ref={sectionRef}>
        <p>
          <StyledColor>03.</StyledColor>Project Highlights
        </p>
      </StyledTitleBox>
      <StyledContainer>
        <StyledDesContainer id="paymentMigration">
          <div className="content-box">
            <div>
              <StyledOverlayExplanation>
                Migration of the payment page from Vue to Next. {"\n"}
                {"\n"}
                <CaretRightOutlined />
                Next.js, Jotai, React-Query, Styled-Component, TypeScript, Jest,
                Cypress {"\n"}
                {"\n"}
                <GoToButton notionAddress="https://www.notion.so/saemihong940104/Payment-Page-Migration-95e1b0367ad749eb85eb3040f014e78d?pvs=4" />
              </StyledOverlayExplanation>
            </div>
          </div>
        </StyledDesContainer>
        <StyledDesContainer id="samplingGift">
          <div className="content-box">
            <div>
              <StyledOverlayExplanation>
                A popup with sampling gift lists and users could choose either
                get it (with ‘ok’ button) or not getting it (with ‘cancel’
                button).
                {"\n"}
                {"\n"}
                <CaretRightOutlined />
                Vue, Vuex, Postman {"\n"}
                {"\n"}
                <GoToButton notionAddress="https://www.notion.so/saemihong940104/Sampling-Gift-c65489f7e8df412fa10c6e98ffdc858a?pvs=4" />
              </StyledOverlayExplanation>
            </div>
          </div>
        </StyledDesContainer>
        <StyledDesContainer id="settleBank">
          <div className="content-box">
            <div>
              <StyledOverlayExplanation>
                Added a new payment method and renewed payment options selection
                box UI.{"\n"}
                {"\n"}
                <CaretRightOutlined />
                Vue, Vuex {"\n"}
                {"\n"}
                <GoToButton notionAddress="https://www.notion.so/saemihong940104/Add-Payment-Method-Settle-Bank-2bc546bf5ff84eaa8c4ec6eca4889e4f?pvs=4" />
              </StyledOverlayExplanation>
            </div>
          </div>
        </StyledDesContainer>
        <StyledDesContainer>
          <div className="content-box">
            <div>
              <StyledOverlayExplanation>
                Migration of Kiosk page from class based React to Functional
                component React with Material UI. {"\n"}
                {"\n"}
                Resolution : 1080*1920{"\n"}
                {"\n"}
                <CaretRightOutlined />
                React, Redux, React Query, Leaflet, Material UI, Styled
                Component {"\n"}
                {"\n"}
                <GoToButton notionAddress="https://saemihong940104.notion.site/conversion-of-Kiosk-d3bc6f54cbbf46b282ab678da0322219/" />
              </StyledOverlayExplanation>
            </div>
          </div>
        </StyledDesContainer>
      </StyledContainer>
    </>
  );
};

export default ProjectsIndex;

import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import styled from "styled-components";

import { CaretRightOutlined } from "@ant-design/icons";

import kioskImg from "../../images/kiosk_pic.png";
import tasioImg from "../../images/tasio.png";
import monitoringImg from "../../images/monitoring.png";
import partnersListPage from "../../images/partnersListPage.png";

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
    id === "tasio" &&
    `
    background-image: url(${tasioImg});
  `}

  ${({ id }) =>
    id === "monitor" &&
    `
    background-image: url(${monitoringImg});
  `}


${({ id }) =>
    id === "pfadmin" &&
    `
    background-image: url(${partnersListPage});
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
          <StyledColor>03.</StyledColor>Projects
        </p>
      </StyledTitleBox>
      <StyledContainer>
        <StyledDesContainer id="pfadmin">
          <div className="content-box">
            <div>
              <StyledOverlayExplanation>
                파트너스 신규서비스 어드민 페이지입니다. 신규 파트너스 등록 가능
                및 기존 파트너스에 대한 정보(키워드 쿠폰, 정산 내역 등)를 볼 수
                있습니다.{"\n"}
                {"\n"}
                <CaretRightOutlined />
                Vue, vue-bootstrap {"\n"}
                {"\n"}
                <GoToButton notionAddress="https://www.notion.so/saemihong940104/Petf-Partners-Admin-74f16b8acfac47b18ed516b47ce41170" />
              </StyledOverlayExplanation>
            </div>
          </div>
        </StyledDesContainer>
        <StyledDesContainer id="monitor">
          <div className="content-box">
            <div>
              <StyledOverlayExplanation>
                차량의 상태, 이벤트 상태 등 차량 관련 상태를 관제실에서 볼 수
                있는 관제 웹을 React Material 고도화 프로젝트를 진행하고
                있습니다.{"\n"}
                {"\n"}
                <CaretRightOutlined />
                React, Redux, Leaflet, Material UI, Styled Component {"\n"}
                {"\n"}
                <GoToButton notionAddress="https://saemihong940104.notion.site/conversion-of-Monitoring-System-74a06cbed4994c499108eb518a25675f" />
              </StyledOverlayExplanation>
            </div>
          </div>
        </StyledDesContainer>
        <StyledDesContainer>
          <div className="content-box">
            <div>
              <StyledOverlayExplanation>
                QR코드를 통해 웹 뷰 앱으로 이동 가능한 키오스크 앱을 유지 보수
                및 React Material 고도화 프로젝트를 진행했습니다. {"\n"}
                {"\n"}
                해상도 : 1080*1920{"\n"}
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
        <StyledDesContainer id="tasio">
          <div className="content-box">
            <div>
              <StyledOverlayExplanation>
                Vue.js와 Vuetify로 만들어진 웹 뷰 형식의 앱을 유지 보수
                했습니다. {"\n"}
                {"\n"}
                <CaretRightOutlined />
                Vue, Vuetify {"\n"}
                {"\n"}
                <GoToButton notionAddress="https://saemihong940104.notion.site/d1de934c100c4d5c9441e2e3f36c3be6" />
              </StyledOverlayExplanation>
            </div>
          </div>
        </StyledDesContainer>
      </StyledContainer>
    </>
  );
};

export default ProjectsIndex;

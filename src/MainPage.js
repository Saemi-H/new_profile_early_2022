import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import "antd/dist/antd.min.css";

import AppBar from "./Korean/AppBar/AppBar";
import Contact from "./Korean/Contact/Contact";
import IntroIndex from "./Korean/Intro/IntroIndex";
import ProjectsIndex from "./Korean/Projects/ProjectsIndex";
import Skills from "./Korean/Skills/Skills";
import WorkIndex from "./Korean/Work/WorkIndex";
import ResponsiveAppBar from "./Korean/AppBar/ResponsiveAppBar";

function MainPage() {
  const offsetArray = useSelector((state) => state.menuReducer.offsetTop);
  const selectedId = useSelector((state) => state.menuReducer.clickedId);
  const openState = useSelector((state) => state.menuReducer.menuOpen);

  const getOffsetTop = offsetArray.find(
    (offsetTop) => offsetTop.id === selectedId
  );

  const GoToTop = () => {
    window.scrollTo({
      top: getOffsetTop.top,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    GoToTop();
  }, [selectedId]);

  return (
    <>
      <AppBar />
      {openState && <ResponsiveAppBar />}
      <div className="content">
        <IntroIndex />
        <WorkIndex />
        <ProjectsIndex />
        <Skills />
        <Contact />
      </div>
    </>
  );
}

export default MainPage;

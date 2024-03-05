import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import "antd/dist/antd.min.css";

import AppBar from "./English/AppBar/AppBar";
import Contact from "./English/Contact/Contact";
import IntroIndex from "./English/Intro/IntroIndex";
import ProjectsIndex from "./English/Projects/ProjectsIndex";
import Skills from "./English/Skills/Skills";
import WorkIndex from "./English/Work/WorkIndex";
import ResponsiveAppBar from "./English/AppBar/ResponsiveAppBar";

function EngMainPage() {
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

export default EngMainPage;

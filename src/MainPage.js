import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'

import MediaQuery from 'react-responsive'
import 'antd/dist/antd.min.css';

import AppBar from './AppBar/AppBar';
import Contact from './Contact/Contact';
import IntroIndex from './Intro/IntroIndex';
import ProjectsIndex from './Projects/ProjectsIndex';
import Skills from './Skills/Skills';
import WorkIndex from './Work/WorkIndex';

function MainPage() {
    const offsetArray = useSelector((state) => state.menuReducer.offsetTop)
    const selectedId = useSelector((state) => state.menuReducer.clickedId)
    const getOffsetTop = offsetArray.find(offsetTop => offsetTop.id === selectedId)
  
    const GoToTop = () => {
      window.scrollTo({
        top: getOffsetTop.top,
        behavior: "smooth",
      })
      setMenuState(false);
    }
    useEffect(()=>{
      GoToTop();
    }, [selectedId])
  
      const [menuState, setMenuState] = useState(false);
      const openMenu = (state) =>{
        setMenuState(state);
      }
      const closeMenu = (state) =>{
        setMenuState(state);
    }
  return (
    <>
    <AppBar/>
      <div className='content'>
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
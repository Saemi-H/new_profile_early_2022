import React, { useEffect, useRef } from 'react';

import { useDispatch } from 'react-redux';

const Skills = () => {
  const sectionRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: "SAVEOFFSETTOP", payload: {id: 3, top: sectionRef.current.offsetTop}})
  }, [sectionRef.current])
  return (
    <div ref={sectionRef}>04. Skills</div>
  )
}

export default Skills
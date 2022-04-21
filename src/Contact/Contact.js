import React, { useEffect, useRef } from 'react';

import { useDispatch } from 'react-redux';

const Contact = () => {
  const sectionRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: "SAVEOFFSETTOP", payload: {id: 4, top: sectionRef.current.offsetTop}})
  }, [sectionRef.current])

  return (
    <div ref={sectionRef}>Contact</div>
  )
}

export default Contact
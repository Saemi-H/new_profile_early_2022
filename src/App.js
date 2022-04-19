import './App.css';
import 'antd/dist/antd.min.css';

import Contact from './Contact/Contact';
import IntroIndex from './Intro/IntroIndex';
import ProjectsIndex from './Projects/ProjectsIndex';
import Skills from './Skills/Skills';
import WorkIndex from './Work/WorkIndex';
import AppBar from './AppBar/AppBar';
import ResponsiveAppBar from './AppBar/ResponsiveAppBar';

function App() {
  return (
    <div className="App">
      {/* <AppBar /> */}
      <ResponsiveAppBar />
      <div className='content'>
        <IntroIndex />
        <WorkIndex />
        <ProjectsIndex />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;

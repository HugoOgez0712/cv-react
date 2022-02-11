import React, { useState} from 'react';
import LeftBanner from './LeftBanner';
import './LeftBanner.css'

import Experience from './Experience'
import experienceData from './experience-data.json'

import About from './About.js'
import './App.css';



function App() {

  const [experienceList, setExperienceList] = useState(experienceData);


  return (
    <div className="App">
      <LeftBanner />
      <About />
      <Experience experienceList={experienceList} />
    </div>
  );
}

export default App;

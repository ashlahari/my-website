import React from 'react';
import './App.css';
import { Space } from './components/space';
import { Intro } from './components/intro';
import { About } from './components/about';
import { Skills } from './components/skills';
import 'primeflex/primeflex.css';

function App() {
  return (
    <div className="App">
        <Space />
        <Intro />
        <About />
        {/* <Skills /> */}
    </div>
  );
}

export default App;

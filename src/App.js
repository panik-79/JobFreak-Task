import './App.css';
import { useState } from 'react';
import Apps from './components/Apps'
import User from './components/User';

function App() {
  const [currTab,setCurrTab] = useState("Home");
  return (
    <div className="App">
      <User currTab={currTab} setCurrTab = {setCurrTab}/>
      <Apps currTab={currTab}/>
    </div>
  );
}

export default App;

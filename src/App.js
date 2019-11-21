import React from 'react';
import './App.css';
import Screen from './components/Screen';
import ButtonGroup from './components/ButtonGroup';

function App() {
  return (
    <div className='App'>
      <h1>Calculator</h1>
      <p style={{ textAlign: 'right', marginRight: '10px' }}>test</p>
      <Screen />
      <ButtonGroup />
    </div>
  );
}

export default App;

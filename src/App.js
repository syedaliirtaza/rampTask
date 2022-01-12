import React from 'react';
import InputContainer from './InputContainer';
import './App.css';

function App() {

  return (
    <div className="App">
      <h1 className='heading'>Ramp Task</h1>
      <InputContainer input="" />
      <InputContainer input={["SYED","ALI","IRTAZA"]} />
      <InputContainer input="This is my ramp task" /> 
    </div>
  );
}

export default App;

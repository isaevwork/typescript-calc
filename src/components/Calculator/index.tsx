import React, { useState } from 'react';
import Display from "./components/Display";
import NumPad from './components/NumPad';
import './style/index.css'

export default () => {

  const [displayValue, setDisplayValue] = useState<number[]>([]);
  
  return (
    <div className='app'>
        <Display value={displayValue}/>
        <NumPad value={displayValue} click={setDisplayValue} />
    </div>
  );
}


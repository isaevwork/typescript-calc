import React, { useState } from 'react';
import Display from "./components/Display";
import NumPad from './components/NumPad';
import './style/index.css'

export default () => {

  const [displayValue, setDisplayValue] = useState<string>('');
  
  return (
    <div className='app'>
        <Display dataDisplay={displayValue}/>
        <NumPad dataDisplay={displayValue} setDisplayValue={setDisplayValue} />
    </div>
  );
}


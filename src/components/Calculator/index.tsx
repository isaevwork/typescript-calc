import React, { useState } from 'react';
import Display from "./components/Display";
import NumPad from './components/NumPad';
import './style/index.css'

export default () => {

  const [displayValue, setDisplayValue] = useState<string>('');
  const [prevItem, setPrevItem] = useState<string>('');
  
  return (
    <div className='app'>
        <Display dataDisplay={displayValue} prevItem={prevItem} />
        <NumPad 
          dataDisplay={displayValue} 
          setDisplayValue={setDisplayValue} 
          prevItem={prevItem}
          setPrevItem={setPrevItem}
          />
    </div>
  );
}


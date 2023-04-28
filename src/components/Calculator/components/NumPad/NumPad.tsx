import "./NumPad.css";
import React, { useState } from 'react';


interface NumPadProps {
  dataDisplay: string;
  prevItem: string;
  setDisplayValue: (value: string) => void;
  setPrevItem: (value: string) => void;
}

const numbers = [
  '7',
  '8',
  '9',
  '4',
  '5',
  '6',
  '1',
  '2',
  '3',
  '0',
  '.'
];

const NumPad: React.FC<NumPadProps> = ({ setDisplayValue, dataDisplay, prevItem, setPrevItem }: NumPadProps) => {
  const [lastOp, setLastOp] = useState(true)
  
  const handleClick = (e: MouseEventHandler<HTMLDivElement>) => {
    const value = e.target.innerText
    if (value === 'AC') {
      setDisplayValue('')
      setPrevItem('');

      return
    }
    if (value === '=') {
      if (dataDisplay.length !== 0) {
        setPrevItem(dataDisplay + ' =');
      } 
      return onEqual(dataDisplay)

    }

    if(['+', '/', '*', '-'].includes(value) && lastOp) {
      return
    }
    
    if (value.length === 1) {
      setDisplayValue(dataDisplay + value);
      setLastOp(['+', '/', '*', '-'].includes(value))
    }
    return
  }


  const onCalculation = (l: string, op: string, r: string) => {
    console.log('op = ', op)
    if (op === '+') {
      return +l + +r
    }
    if (op === '-') {
      return +l - +r
    }
    if (op === '÷') {
      return +l / +r
    }
    if (op === '×') {
      return +l * +r
    }
    return 0
  }


  const handleCalculation = (arr: string[]) => {
    if (arr.length === 3) {
      return String(onCalculation(...arr))
    }

    if (arr.includes('×') || arr.includes('÷')) {
      const index = arr.indexOf('×') || arr.indexOf('÷')
      const temp = [ arr[index - 1], arr[index], arr[index + 1]]
      const calculateTemp = onCalculation(...temp)
      const head = arr.slice(0, index - 1)
      const tail = arr.slice(index + 2)
      return handleCalculation([...head, calculateTemp, ...tail])
    }

    if (arr.length > 3) {
      const [l, op, r, ...tail] = arr
      const head = String(onCalculation(l, op, r))
      return handleCalculation([head, ...tail])
    }
    return arr
  }



  const onEqual = (value: string) => {
    const arr = value.match(/\d+|[\×\÷\-\+]/g);
    // const temp = [];
    // const source = [];
    setDisplayValue(handleCalculation(arr))

    // if (arr.length <= 3) {
    //   return handleCalculation(arr);
    // }
    // if (arr.length > 3) {

    //   for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === '*' || arr[i] === '/') {
    //       temp.push(onCalculation(arr[i - 1], arr[i], arr[i + 1]));
    //       arr.splice(i - 1, 3);
    //     }
    //   }

    // for (let j = 0; j < arr.length; j++) {
    //   if (arr[j] === "+" || arr[j] === '-') {
    //     let removedItem = temp.shift();
    //     source.push(removedItem?.toString(), arr[j]);
    //   } else {
    //     source.push(arr[j]);
    //   }
    // }
    // console.log(source, 'kek')
    // return handleCalculation(source)
    // }
  }





  return (
    <div className="wrapper" onClick={handleClick}>
      <div className='numpadContainer'>
        <div className="bracketContainer">
          <button className='buttonOperator'>(</button>
          <button className='buttonOperator'>)</button>
          <button className='buttonOperator'>%</button>
        </div>
        <div className="numbersContainer">
          {
            numbers.map((el, idx) => {
              return (
                <button
                  key={idx}
                  className='elementContainer'
                  value={el}
                >
                  {el}
                </button>
              )
            })
          }
          <button className='buttonOperator'>=</button>
        </div>


      </div>
      <div className="operatorsContainer">
        <button className='buttonOperator'>AC</button>
        <button className='buttonOperator'>÷</button>
        <button className='buttonOperator'>×</button>
        <button className='buttonOperator'>-</button>
        <button className='buttonOperator'>+</button>
      </div>
    </div>
  );
};

export default NumPad;
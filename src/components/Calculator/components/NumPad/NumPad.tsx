import "./NumPad.css";

interface NumPadProps {
  dataDisplay: string;
  setDisplayValue: (value: string) => void;
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

const NumPad: React.FC<NumPadProps> = ({ setDisplayValue, dataDisplay }: NumPadProps) => {
  
  const handleClick = (e: MouseEventHandler<HTMLDivElement>) => {
    const value = e.target.innerText
    if (value === 'AC') {
      setDisplayValue('') 
      return 
    }
    if(value === '=') {
      onEqual(dataDisplay)
      return
    }
    if (value.length === 1) {
      setDisplayValue(dataDisplay + value)
    }
    return
  }

  
  const onCalculation = (l: string, op: string, r: string) => {
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

  // const getFilteringList = (arr: string[]) => {
  //   arr.map(el => )
  // }

  const handleCalculation = (arr: string[]) => {
    if (arr.length === 3) {
      return String(onCalculation(...arr))
    }

    if(arr.length > 3) {
      const [l,op,r, ...tail] = arr
      const head = String(onCalculation(l,op,r))
      return handleCalculation([head, ...tail])
      console.log(head)
    }
    return arr
  }

  

  const onEqual = (value: string) => {
    const arr = value.match(/\d+|[+-÷×]/g);
    const temp = [];
    const source = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '×' || arr[i] === '÷') {
       temp.push(onCalculation(arr[i - 1], arr[i], arr[i + 1]))
         arr.splice(i - 1, 3)
      }
    }
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === "+" || arr[j] === '-') {
        let removedItem = temp.shift();
        source.push(removedItem.toString(), arr[j])
      } else {
        source.push(arr[j])
        
      }
    }
    console.log(source);
    console.log(handleCalculation(source))
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
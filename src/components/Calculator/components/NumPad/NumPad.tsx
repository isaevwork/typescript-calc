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
      onEqule(dataDisplay)
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

  const recurCalculation = (arr: string[]) => {
    if (arr.length === 3) {
      return String(onCalculation(...arr))
    }

    if(arr.length > 3) {
      const [l,op,r, ...tail] = arr
      const head = String(onCalculation(l,op,r))
      return recurCalculation([head, ...tail])
    }
    return arr
  }
 
  const onEqule = (value: string) => {
    const arr = value.match(/\d+|[+-÷×]/g);
    console.log(recurCalculation(arr))
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
import "./NumPad.css";

interface NumPadProps {
  id: number;
  value: [];
  click: (number) => void;
}
const NumPad: React.FC<NumPadProps> = ({ click, value }: NumPadProps) => {

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

  const getDisplayValue = (e) => {
    let stroke = e.target.value + value;
    click(stroke);
  };
  
  const removeDisplay = () => {
    click('');
  }

  const addBrackets = (e) => {
    click([...value, `(${e.target.value})`])
  }

  const getAmount = (e) => {
    console.log(typeof value)
    const amount = Number(value) + Number(e.target.value);
    click(amount);
  }
  
  return (
    <div className="wrapper">
      <div className='numpadContainer'>
        <div className="bracketContainer">
          <button className='elementContainer' onClick={addBrackets} >(</button>
          <button className='elementContainer'>)</button>
          <button className='elementContainer'>%</button>
        </div>
        <div className="numbersContainer">
          {
            numbers.map((el, idx) => {
              return (
                <button
                  key={idx}
                  className='elementContainer'
                  value={el}
                  onClick={getDisplayValue}
                >
                  {el}
                </button>
              )
            })
          }
            <button className='elementContainer'>=</button>
        </div>

        
      </div>
      <div className="operatorsContainer">
          <button className='elementContainer' onClick={removeDisplay} >AC</button>
          <button className='elementContainer'>÷</button>
          <button className='elementContainer'>×</button>
          <button className='elementContainer'>-</button>
          <button className='elementContainer' onClick={getAmount} >+</button>
      </div>
    </div>
  );
};

export default NumPad;
import "./Display.css";

interface DisplayProps {
  dataDisplay?: [],
}

const Display: React.FC<DisplayProps> = ({ dataDisplay }: DisplayProps) => {
  return (
    <div className='displayContainer'>
      <div className='dislpayContent'>
        {dataDisplay}
      </div>
    </div>
  );
};

export default Display;
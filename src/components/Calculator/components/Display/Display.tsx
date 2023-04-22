import "./Display.css";

interface DisplayProps {
  value?: [],
}

const Display: React.FC<DisplayProps> = ({ value }: DisplayProps) => {
  return (
    <div className='displayContainer'>
      <div className='dislpayContent'>
        {value}
      </div>
    </div>
  );
};

export default Display;
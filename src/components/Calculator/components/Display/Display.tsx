import "./Display.css";

interface DisplayProps {
  dataDisplay?: string,
  prevItem?: string,
}

const Display: React.FC<DisplayProps> = ({ dataDisplay,prevItem }: DisplayProps) => {
  return (
    <div className='displayContainer'>
      <div className='upperWrapper'>
        {prevItem}
      </div>
      <div className="bottomWrapper">
        {dataDisplay}
      </div>
    </div>
  );
};

export default Display;
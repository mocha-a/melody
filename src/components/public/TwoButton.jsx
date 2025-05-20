import Button from './Button';

function TwoButton({ btn1, btn2, onClick1, onClick2, type1 = "button", type2 = "button" }) {
  return (
    <div className='TwoBtn'>
      <Button className="btn1" btn={btn1} onClick={onClick1} type1={type1} />
      <Button className="btn2" btn={btn2} onClick={onClick2} type2={type2} />

    </div>
  );
}

export default TwoButton;


function Cancel({ className, onClick }) {
  return (
    <div onClick={onClick} className={`icon ${className}`}>
      <img src="/img/public_cancel_01.svg" alt="" />
    </div>
  );
}

export default Cancel;

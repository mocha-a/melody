
import Heart1 from '../icon/Heart1';
import Heart2 from '../icon/Heart2';

function Wish({ className, wish, onToggle }) {
    return (
        <div className={className} onClick={(e) => { e.preventDefault(); onToggle(); }}>
            { wish? <Heart2/> : <Heart1/>}
        </div>
    )
}

export default Wish
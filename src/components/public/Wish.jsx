import { useState } from 'react'
import Heart1 from '../icon/Heart1';
import Heart2 from '../icon/Heart2';

function Wish({ className }) {
    const [wish, setWish] = useState(true);
    return (
        <div className={className} onClick={()=>{setWish((prev) => !prev)}}>
            { wish? <Heart1/> : <Heart2/> }
        </div>
    )
}

export default Wish
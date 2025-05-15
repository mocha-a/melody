import { useState } from 'react'
import Heart_1 from '../icon/Heart_1';
import Heart_2 from '../icon/Heart_2';

function Wish() {
    const [wish, setWish] = useState(true);
    return (
        <div onClick={()=>{setWish((prev) => !prev)}}>
            { wish? <Heart_1/> : <Heart_2/> }
        </div>
    )
}

export default Wish
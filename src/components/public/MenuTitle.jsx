import DashedLine from './DashedLine'
import Prev from '../icon/Prev'
import { useNavigate } from 'react-router-dom';

function MenuTitle({ title }) {
    const navigate = useNavigate();

    return (
        <div className='title_container'>
            <div className='title_up'>
                <button onClick={()=>{navigate(-1)}}><Prev className={"title_prev"}/></button>
                <h2>{title}</h2>
            </div>
            <div className='title_dashedline'><DashedLine/></div>
        </div>
    )
}

export default MenuTitle
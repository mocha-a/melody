import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { instance } from '../../api/sanrio';
import '../../styles/main.scss';
import axios from 'axios';

function Section1() {
    const BASE_URL = `${process.env.REACT_APP_APIURL_IMG}/`;
    const [item1, setItem1] = useState(null);
    const [item2, setItem2] = useState(null);
    const [item3, setItem3] = useState(null);

    const navigate = useNavigate();

    const productClick = (id) => {
        navigate(`/product/${id}`);
    };

    useEffect(() => {
        async function fetchItems() {
            const res = await axios.get('/api/p_list.php');
            const data = res.data;

            setItem1(data.find(p => Number(p.id) === 274));
            setItem2(data.find(p => Number(p.id) === 199));
            setItem3(data.find(p => Number(p.id) === 20));
        }
        
        fetchItems();
    }, []);

    return (
        <div className="section1_container">
            <img src="/upload/111.jpg" alt="" />
            <div className="top">
                <div className="half" onClick={() => productClick(item1?.id)}>
                    <img src={`${BASE_URL}${item1?.p_thumb}`} alt="" />
                </div>
                <div className="half" onClick={() => productClick(item2?.id)}>
                    <img src={`${BASE_URL}${item2?.p_thumb}`} alt="" />
                </div>
            </div>
            <div className="bottom" onClick={() => productClick(item3?.id)}>
                <img src={`${BASE_URL}${item3?.p_thumb}`} alt="" />
            </div>
        </div>
    );
}

export default Section1;

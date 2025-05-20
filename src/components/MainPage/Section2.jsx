import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { instance } from '../../api/sanrio';
import '../../styles/main.scss';

function Section2() {
    const BASE_URL = `${process.env.REACT_APP_APIURL}/admin/product/upload/`;
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/product/${id}`);
    };

    useEffect(() => {
        async function fetchItems() {
            const res = await instance.get('/p_list.php');
            const data = res.data;

            const itemIds = [79, 186, 125, 130, 97];
            const filteredItems = itemIds.map(id => data.find(p => Number(p.id) === id));

            setItems(filteredItems);
        }

        fetchItems();
    }, []);

    return (
        <div className="section2_container">
            <div className="top_row">
                <img className="left" src={`${BASE_URL}${items[0]?.p_thumb}`} onClick={() => handleClick(items[0]?.id)} />
                <img className="right" src={`${BASE_URL}${items[1]?.p_thumb}`} onClick={() => handleClick(items[1]?.id)} />
            </div>
            <div className="middle_row">
                <img className="left" src={`${BASE_URL}${items[2]?.p_thumb}`} onClick={() => handleClick(items[2]?.id)} />
                <img className="right" src={`${BASE_URL}${items[3]?.p_thumb}`} onClick={() => handleClick(items[3]?.id)} />
            </div>
            <div className="bottom_full">
                <img src={`${BASE_URL}${items[4]?.p_thumb}`} onClick={() => handleClick(items[4]?.id)} />
            </div>
        </div>
    );
}

export default Section2;

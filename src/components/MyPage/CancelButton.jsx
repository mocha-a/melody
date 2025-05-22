import Cancel from "../icon/Cancel";
import useWish from "../../api/wish";

function CancelButton({ item }) {
    const { wishList, bufferServerSync } = useWish();

    const cancel = (e, item) => {
        e.preventDefault()
        let updated;

        updated = wishList.filter(x => x.wish_id !== item.wish_id);
        bufferServerSync(item, 'remove');

        localStorage.setItem('wish', JSON.stringify(updated));
    };

    return (
        <div className='wish_cancel' onClick={(e) => {cancel(e, item)}}>
            <Cancel/>
        </div>
    )
}

export default CancelButton
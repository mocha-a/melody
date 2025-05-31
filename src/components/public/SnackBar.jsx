import { Link } from "react-router-dom"

function SnackBar({ modal }) {
  return (
    <div className="snack_bar_container">
        <div className="snack_bar_item">
            <p>{ modal }</p>
            <Link to='/cart'>확인하기</Link>
        </div>
    </div>
  )
}

export default SnackBar
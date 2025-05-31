
function TopButton() {
  const upScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="top_button_fixed" onClick={()=>{upScroll()}}>
        <button className="button" style={{ '--clr': '#fcd6ef' }}>
            <span className="button__icon-wrapper">
              <img src="/img/public_topButton.svg" alt="" />
                {/* <svg
                width="18"
                height="100%"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="button__icon-svg"
                preserveAspectRatio="xMidYMid meet">
                <path d="M8 14V1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M1 8L8 1L15 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
        
                <svg className="button__icon-svg button__icon-svg--copy" width="18" height="100%" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                <path d="M8 14V1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M1 8L8 1L15 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg> */}
            </span>
        </button>
    </div>
  )
}

export default TopButton
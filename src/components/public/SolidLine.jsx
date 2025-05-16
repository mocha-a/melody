
function SolidLine({ className }) {
    return (
    <div className={`${className} solid_line`}>
        <svg style={{ display: 'block' }} width="100%" height="1" viewBox="0 0 100 2" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <line x1="0" y1="1" x2="100" y2="1" stroke="#C3C3C3" strokeWidth="1"/>
        </svg>
    </div>
    )
}

export default SolidLine
import React from 'react'

function DashedLine() {
    return (
    <div className='dashed_line'>
        <svg width="100%" height="2" viewBox="0 0 100 2" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <line x1="0" y1="1" x2="100" y2="1" stroke="#C3C3C3" strokeDasharray="2 2" strokeWidth="1"/>
        </svg>
    </div>
    )
}

export default DashedLine
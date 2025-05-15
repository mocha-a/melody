import React from 'react'

function TagBtn({onClick, tagbtn, className}) {
    return (
        <div className={`tagbtn ${className}`} onClick={onClick}>{tagbtn}</div>
    )
}

export default TagBtn
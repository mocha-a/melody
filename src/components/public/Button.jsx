
function Button({className, btn, onClick}) {
    return (
        <div className={`${className} btn`} onClick={onClick}>
            {btn}
        </div>
    )
}

export default Button
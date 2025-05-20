
function Button({className, btn, onClick, type, children}) {
    return (
        <>
            <button className={`${className} btn`} onClick={onClick} type={type}>
                {btn}
            </button>
            {children}
        </>
    )
}

export default Button

function RemoveBtn({className, onClick}) {
    return (
        <button className={className} onClick={onClick}>
            선택 상품 삭제
        </button>
    )
}

export default RemoveBtn
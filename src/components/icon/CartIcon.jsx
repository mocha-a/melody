
function CartIcon({ className, onClick }) {
  return (
    <div className={className} onClick={onClick}>
        <img src="/img/public_cart_01.svg" alt="" />
    </div>
  )
}

export default CartIcon
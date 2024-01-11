import './CartWidget.css'
import iconCart from '../../assets/cart.svg'

const CartWidget = () => {
    return (
        <button type="button" className="cartButton">
            <img src={iconCart} className="iconCart" alt="Carrito" width={24} />
            <div className='amount'>
                <span className="amountValue">1</span>
            </div>
            
        </button>
    )
}

export default CartWidget;
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const CartCard = ({name, price, quantity, image="", id, deleteItem, color, size}) => {

    const finalPrice = quantity * Number(price.replace("$", ""))


  return (
    <div className="cartCard">
        <Link to={`/product/${id}`}>
            <div className='cartCardImg'>
                <img src={image} alt={name.replaceAll(" ", "-")} />
            </div>
        </Link>
        <div>
            <Link to={`/product/${id}`}><p className='nameT'>{name}</p></Link>
            <div className='sub-info'>
                {color && <p className='colorT'>{color} | </p>}
                {size && <p className='sizeT'>{size} | </p>}
                <p className='qty'>Qty {quantity}</p>
            </div>
        </div>
        <div>
            <p className='priceT'>${finalPrice}</p>
        <button className='dlt' onClick={() => deleteItem()}>Remove</button>
        </div>
    </div>
  )
}

CartCard.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    deleteItem: PropTypes.func,
    quantity: PropTypes.number,
    color: PropTypes.string,
    size: PropTypes.string
}

export default CartCard
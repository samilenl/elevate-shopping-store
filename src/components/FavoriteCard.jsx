import { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import addToCart from '../utils/addToCart'

const FavoriteCard = ({name, price, image="", id, deleteItem, color, size}) => {
    const [myColor, setColor] = useState(color ? "select" : undefined)
    const [mySize, setSize] = useState(size ? "select" : undefined)
    const [quantity, setQuantity] = useState(1)

    // console.log(id, ";", myColor)    
    
  return (
    <div className="fcard">
        <div className='likeCont' onClick={() => deleteItem(id) }>
            <img src='/assets/svg/close.svg'  className="like"/>
        </div>

        <Link to={`/product/${id}`}>
            <div className='cardImg'>
                <img src={image} alt="demo" />
            </div>
            
        </Link>
        <div className='bottom'>
            <div>
                <p className='itemName'>{name}</p>
                <p className='itemPrice fccolor'>{price}</p>
            </div>
            {/* <div className='customs'> */}
                {color && <select className='slct' onChange={(e) => setColor(e.target.value) }><option value="select" hidden>Select Color</option>{color.map((value, index) => <option key={index} value={value}>{value}</option>)}</select>}
                {size && <select className='slct' onChange={(e) => setSize(e.target.value)}><option value="select" hidden>Select Size</option>{size.map((value, index) => <option key={index} value={value}>{value}</option>)}</select>}
                <input className='inp' type="number" name="" id="Qty" defaultValue={1} onChange={(e) => setQuantity(e.target.value)}/>
            {/* </div> */}
            <div>
                <button className='toCart' onClick={() => addToCart(id, image, name, quantity, price, myColor, mySize)}>Add To Cart</button>
            </div> 
        </div>
    </div>
  )
}

FavoriteCard.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    deleteItem: PropTypes.func,
    color: PropTypes.array,
    size: PropTypes.array
}

export default FavoriteCard
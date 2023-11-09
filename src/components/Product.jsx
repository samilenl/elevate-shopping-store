import { useState } from 'react'
import { useParams } from 'react-router-dom'
import addToCart from '../utils/addToCart'
import getProductById from '../utils/getProductById'
import RecentlyViewed from './RecentlyViewed'
import "../styles/Product.css"

const Product = () => {

    const { id } = useParams()
    const value = getProductById(id)

    const [color, setColor] = useState(value.color ? "select" : undefined)
    const [size, setSize] = useState(value.size ? "select" : undefined)
    const [quantity, setQuantity] = useState(1)

    return (
        <div>
            <div className='productCont'>
                <div className='product-img-container'>
                    <div className='product-img'>
                        <img src={value.img} alt="" className='productImage'/>
                    </div>
                </div>
                <div className='product-info'>
                    <div className='prodTop'>
                        <h1 className='prodName'>{value.name}</h1>
                        <p className='prodPrice'>{value.price}</p>
                        <p className='prodDes'>{value.description}</p>
                        <div className='choose'>
                            {value.color && <select className='select' onChange={(e) => setColor(e.target.value)}><option value="select" className='myOptions' hidden>Select Color</option>{value.color.map((values, index) => <option key={index} value={values} className='myOptions'>{values}</option>)}</select>}
                            {value.size && <select className='select' onChange={(e) => setSize(e.target.value)}><option value="select" className='myOptions' hidden>Select Size</option>{value.size.map((values, index) => <option key={index} value={values} className='myOptions'>{values}</option>)}</select>}
                        </div>
                        <div>
                    </div>
                    
                    <label className='prodQty'>
                        Quantity
                        <input className='prodInp' type="number" defaultValue={1} onChange={(e) => setQuantity(e.target.value)}/>
                    </label>
                    <button className='prodBtn' onClick={() => addToCart(id, value.img, value.name, quantity, value.price, color, size)}>Add to Cart</button>
                    </div>
                </div>
            </div>
            <RecentlyViewed />
        </div>
    )
}


export default Product
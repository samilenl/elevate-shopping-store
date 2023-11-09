import { useState } from 'react'
import PropTypes from 'prop-types'
import CartCard from './CartCard'

const Cart = ({ closeModal }) => {
    const cart = localStorage.getItem("cart")
    const shoppingCart = cart ? JSON.parse(cart) : []

    const [myCart, setMyCart] = useState(shoppingCart)


    const removeFromCart = (id) => {
        const tempList = [...myCart]
        for(let i=0; i<tempList.length; i++){
            if (tempList[i].id === id){
                tempList.splice(i, 1)
                setMyCart(tempList)
                break
            }
        }
        localStorage.setItem("cart", JSON.stringify(tempList))
        // console.log(JSON.parse(localStorage.getItem("cart")))
    }


    let totalPrice = 0
    for (let i=0; i<myCart.length; i++){
        const price = myCart[i].quantity * Number(myCart[i].price.replace("$", ""))
        totalPrice += price
    }


    const totalOrNothing = () => {
        if (myCart.length > 0) {
            return (
                <div className='summary'>
                    <p className='total'>Total: ${totalPrice.toFixed(2)}</p>
                    <button className='checkout' onClick={(e) => e.stopPropagation()}>Checkout</button>
                </div>
            )
        }
    }

   

    return (
        <div className='overlay' onClick={closeModal}>
            <dialog className='modal' onClick={(e) => e.stopPropagation()} open>
                <div className='cartTop'>
                    <button className="clsBtn svg" onClick={closeModal}><img src="/assets/svg/close.svg" alt="" /></button>
                    <p className='cartHdr'>Shopping Bag</p>
                </div>
                
                <div className='cartCont'>
                    {myCart.length === 0 && <p className="nothing">There is nothing here right now</p>}
                    {myCart.map((item, index) => <CartCard key={index}
                                                    id={item.id}
                                                    name={item.name}
                                                    price={item.price}
                                                    quantity={item.quantity}
                                                    image={item.img}
                                                    color={item.color}
                                                    size={item.size}
                                                    deleteItem={() => removeFromCart(item.id)}
                                                        />)}
                </div>
                {totalOrNothing()}
            </dialog>
        </div>
    )


}

Cart.propTypes = {
    closeModal: PropTypes.func
}

export default Cart
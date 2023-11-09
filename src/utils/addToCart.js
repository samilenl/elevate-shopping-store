const addToCart = (id, image, name, quantity, price, color, size) => {
    const cart = localStorage.getItem("cart")
    const parsedCart = cart ? JSON.parse(cart) : []

    let itemNotInCart = true

    for(let i=0; i<parsedCart.length; i++){
        if (id === parsedCart[i].id){
            if (color !== parsedCart[i].color || size !== parsedCart[i].size){
                itemNotInCart = true
                continue
            }
            itemNotInCart = false
            break
        }
    }


    if(itemNotInCart){

        const newObject = { id: id,  img: image,  name: name,  quantity: quantity,  price: price, }

        if (color!==undefined && size!==undefined){
            newObject.color = color
            newObject.size = size
            size === "select" || color === "select" ? alert("You must choose a color and a size") : parsedCart.push(newObject); localStorage.setItem("cart", JSON.stringify(parsedCart));

        }
        else {
            parsedCart.push(newObject)
            const updatedCart = JSON.stringify(parsedCart)
            localStorage.setItem("cart", updatedCart)
        }
    }
    else {
        alert("Item is already in cart")
    }
   
}

export default addToCart
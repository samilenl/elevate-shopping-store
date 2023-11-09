import { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import addToRecently from '../utils/addToRecently'

const ItemCard = ({name, price, image="", id, color, size, option}) => {
    const [mySrc, setMySrc] = useState("/assets/svg/cards-heart-outline.svg")

    const list = JSON.parse(localStorage.getItem("favorites")) ? JSON.parse(localStorage.getItem("favorites")) : []
    for(let i=0; i<list.length; i++){
        if (list[i].id === id){
            setTimeout(() =>{
                setMySrc("/assets/svg/cards-heart-liked.svg")
            } ,0)
            break
        }
    }


    
    

    const addToFavorites = () => {
        let itemIsNotLiked = true
        const favorites = localStorage.getItem("favorites")
        const parsedFavorites = favorites ? JSON.parse(favorites) : []
    
        for(let i=0; i<parsedFavorites.length; i++){
            if (parsedFavorites[i].id === id){
                parsedFavorites.splice(i, 1)
                setMySrc("/assets/svg/cards-heart-outline.svg")
                itemIsNotLiked = false
                break
            }
            else {
                itemIsNotLiked = true
            }
        }

        if (itemIsNotLiked) {
            setMySrc("/assets/svg/cards-heart-liked.svg")
            const newObject = { id: id,  img: image,  name: name, price: price, }
            if (color && size) {
                // console.log(color, size)
                newObject.color = color
                newObject.size = size
            }
            parsedFavorites.push(newObject)
        }

        localStorage.setItem("favorites", JSON.stringify(parsedFavorites))
        // console.log(JSON.parse(localStorage.getItem("favorites")))
    }

    

  return (
    <div className="card">
        <div className='likeCont'>
            <div className="like" onClick={addToFavorites}><img src={mySrc} alt="" /></div>
        </div>
        
        <Link to={`/product/${id}`} onClick={() => {addToRecently(id, name, price, image)}}>
            <div className='cardImg'>
                <img src={image} alt="demo" />
            </div>
            <div className='npCont'>
                <p className='itemName'>{name}</p>
                <p className={`itemPrice ${option}`}>{price}</p>
            </div>
        </Link>
    </div>
  )
}

ItemCard.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string,
    id: PropTypes.string,
    color: PropTypes.array,
    size: PropTypes.array,
    option: PropTypes.string
}

export default ItemCard
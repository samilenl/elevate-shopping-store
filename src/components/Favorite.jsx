import { useState } from "react"
import FavoriteCard from "./FavoriteCard"
import "../styles/CartAndFav.css"

const Favorite = () => {
    const favorites = localStorage.getItem("favorites")
    const parsedFavorites = favorites ? JSON.parse(favorites) : []

    const [myFavorites, setMyFavorites] = useState(parsedFavorites)


    const removeFromFavorites = (id) => {
        const tempList = [...myFavorites]
        for(let i=0; i<tempList.length; i++){
            if (tempList[i].id === id){
                tempList.splice(i, 1)
                setMyFavorites(tempList)
                break
            }
        }
        localStorage.setItem("favorites", JSON.stringify(tempList))
        // console.log(JSON.parse(localStorage.getItem("favorites")))
    }


  return (
    <div className="favCont">
        <h1>Your Favorite Items!</h1>
        <div className="mainProducts cardContainer">
            {myFavorites.map((item) => <FavoriteCard key={item.id} 
                                                     name={item.name} 
                                                     price={item.price} 
                                                     image={item.img} 
                                                     id={item.id} 
                                                     deleteItem={removeFromFavorites}
                                                     color={item.color}
                                                     size={item.size}
                                                    />)}
        </div>
    </div>
  )
}

export default Favorite

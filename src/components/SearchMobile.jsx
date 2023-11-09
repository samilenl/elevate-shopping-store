import { useState, useEffect } from "react"
import SearchModal from "./SearchModal"
import { useLocation } from "react-router-dom"
import getProductByName from "../utils/getProductByName"

const SearchMobile = () => {
    const [mySrc, setMySrc] = useState("/assets/svg/magnify.svg")
    const location = useLocation()
    const [isActive, setIsActive] = useState(false)
    const [searchValue, setSearchValue] = useState("")

    const handleChange = (e) => {
        setSearchValue(e.target.value)
    }

    const handleClick = () => {
        setIsActive(!isActive)
    }
    useEffect(()=>{
        isActive ? setMySrc("/assets/svg/arrow-up.svg") : setMySrc("/assets/svg/magnify.svg")
        if (isActive) {
            document.querySelector(".content").style.display = "none"
            document.querySelector("footer").style.display = "none"
        } else {
            document.querySelector(".content").style.display = "block"
            document.querySelector("footer").style.display = "flex"
        } 
    }, [isActive])
    


    let searchResults = []
    if (searchValue !== ""){
        searchResults = getProductByName(searchValue)
    }
    

    useEffect(() => {
        setIsActive(false)
    }, [location])




  return (
    <div className="searchMobileOption">
        <button className="mobile-icon" onClick={handleClick}><img src={mySrc} alt="" /></button>
        {isActive && ( 
            <div className="mobileModal">
                <input type="text" name="" id="search-input-mobile" onChange={handleChange} value={searchValue} autoCapitalize="words" />
                <SearchModal list={searchResults} type={"mobile"} /> 
            </div>
        )}
    </div>
  )
}

export default SearchMobile
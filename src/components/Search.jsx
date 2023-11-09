import { useState, useEffect } from "react"
import SearchModal from "./SearchModal"
import { useLocation } from "react-router-dom"
import getProductByName from "../utils/getProductByName"

const Search = () => {
    const location = useLocation()
    const [isActive, setIsActive] = useState(false)
    const [searchValue, setSearchValue] = useState("")

    const handleChange = (e) => {
        setSearchValue(e.target.value)
    }

    const handleFocus = () => {
        setIsActive(true)
    }

    const handleExit = (e) => {
        if (!e.target.closest("search")){
            // console.log("outside")
            setIsActive(false)
            setSearchValue("")
        }
    }

    let searchResults = []
    if (searchValue !== ""){
        searchResults = getProductByName(searchValue)
        // console.log(searchResults)
    }
    

    useEffect(()=>{
        window.addEventListener("click", handleExit)
    })

    useEffect(() => {
        setIsActive(false)
    }, [location])


  return (
    <div className="search" onClick={e => e.stopPropagation()}>
        <input type="text" name="" id="search-input" onChange={handleChange} onFocus={handleFocus} value={searchValue} autoCapitalize="words" autoComplete="off"/>
        {isActive && <SearchModal list={searchResults}/>}
    </div>
  )
}

export default Search
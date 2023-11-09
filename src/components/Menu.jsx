import { NavLink } from "react-router-dom"


import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"


const Menu = () => {
    const [mySrc, setMySrc] = useState("/assets/svg/menu.svg")
    const location = useLocation()
    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
        setIsActive(!isActive)
    }
    useEffect(()=>{
        isActive ? setMySrc("/assets/svg/close.svg") : setMySrc("/assets/svg/menu.svg")
        if (isActive) {
            document.querySelector(".content").style.display = "none"
            document.querySelector("footer").style.display = "none"
        } else {
            document.querySelector(".content").style.display = "block"
            document.querySelector("footer").style.display = "flex"
        } 
    }, [isActive])
    



    useEffect(() => {
        setIsActive(false)
    }, [location])


  return (
    <div className="menu">
        <button className="mobile-icon svg" onClick={handleClick}><img src={mySrc} alt="" /></button>
        {isActive && (
            <nav className="mobileHeaderNav">
                <NavLink to="/clothing" className="mobile-header-links">Clothing</NavLink>
                <NavLink to="/skincare" className="mobile-header-links">Skin Care</NavLink>
                <NavLink to="/furniture" className="mobile-header-links">Furniture</NavLink>
                <NavLink to="/shoes" className="mobile-header-links">Shoes</NavLink>
            </nav>
        )}
    </div>
  )
}

export default Menu
import { useState, useEffect } from "react"
import { NavLink, Link, useLocation } from "react-router-dom"
import Cart from "./Cart"
import Search from "./Search"
import SearchMobile from "./SearchMobile"
import Menu from "./Menu"
import "../styles/Header.css"


const Header = () => {
    const [cartNumber, setCartNumber] = useState(0)
    const [favoriteNumber, setFavoriteNumber] = useState(0)

    const location = useLocation()
    const [isModalOpen, setIsModalOpen] = useState(false)

    const showModal = (e) => {
        e.preventDefault()
        setIsModalOpen(true)
    }

    const closeModal = (e) => {
        if(!e.target.closest('modal')){
            // console.log("outside")
            setIsModalOpen(false)
        }
    }

    useEffect(() => {
        setIsModalOpen(false)
    }, [location])
    
    useEffect(()=>{

        const fvrtList = localStorage.getItem("favorites")
        const cartList = localStorage.getItem("cart")
        if(cartList){
            const cartLength = JSON.parse(cartList).length
            cartLength <= 99 ? setCartNumber(cartLength) : setCartNumber("99+")
        }
        if (fvrtList){
            const favoriteLength = JSON.parse(fvrtList).length
            favoriteLength <= 99 ? setFavoriteNumber(favoriteLength) : setFavoriteNumber("99+")
        }
        
    }, [])


    useEffect(()=>{
        window.addEventListener("click", ()=>{
            const fvrtList = localStorage.getItem("favorites")
            const cartList = localStorage.getItem("cart")
            if(cartList){
                const cartLength = JSON.parse(cartList).length
                cartLength <= 99 ? setCartNumber(cartLength) : setCartNumber("99+")
            }
            if (fvrtList){
                const favoriteLength = JSON.parse(fvrtList).length
                favoriteLength <= 99 ? setFavoriteNumber(favoriteLength) : setFavoriteNumber("99+")
            }
        })
    })

    const fclass = favoriteNumber > 0 ? "count" : "hide"
    const cclass = cartNumber > 0 ? "count" : "hide"

  return (
    <header>
        <div>   
            <div className="menuLogo">
                <Menu />     
                <Link to="/" className="myLinks">  <h1 className="logo">ELEVATE</h1>  </Link>
            </div>        
            <Search />
            <div className="directories">
                <SearchMobile />
                <Link to="/favorites" className="myLinks">
                    <span className={`${fclass} fvrt`}>{favoriteNumber}</span>
                    <img src="/assets/svg/cards-heart.svg" alt="" className="svg"/>
                </Link>
                <Link onClick={showModal} className="myLinks">
                    <span className={`${cclass} crt`}>{cartNumber}</span>
                    <img src="/assets/svg/cart.svg" alt="" className="svg cart"/>
                </Link>
                {isModalOpen && <Cart closeModal={closeModal} />}
            </div>
        </div>
    
        <nav className="headerNav">
            <NavLink to="/clothing" className="header-links animated">Clothing</NavLink>
            <NavLink to="/skincare" className="header-links animated">Skin Care</NavLink>
            <NavLink to="/furniture" className="header-links animated">Furniture</NavLink>
            <NavLink to="/shoes" className="header-links animated">Shoes</NavLink>
        </nav>
    
    </header>
  )
}

export default Header

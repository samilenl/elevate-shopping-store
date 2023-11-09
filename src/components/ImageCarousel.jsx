import man from "../carousel/man2.jpg"
import woman from "../carousel/dominik-kielbasa-ssnCzNayHC4-unsplash.jpg"
import furniture from "../carousel/furniture.jpg"
import shoe from "../carousel/shoe.jpg"
import skincare from "../carousel/skinCare.jpg"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "../styles/Carousel.css"

const ImageCarousel = () => {
    const [imageIndex, setimageIndex] = useState(0)
    const images = [man, woman, furniture, shoe, skincare]
    const text = [{header: "Elevate Your Wardrobe with Timeless Style", body:  "Discover our collection of men's clothing that blends classic designs with modern trends. From tailored suits to casual essentials, elevate your wardrobe with our high-quality garments.", link: "/clothing/men"}, 
                {header: "Unleash Your Inner Fashionista", body:"Express your unique style with our wide range of women's clothing. From chic dresses to trendy tops, elevate your fashion game and make a statement wherever you go.", link: "/clothing/women"}, 
                {header: "Discover Your Perfect Space", body:"Explore our collection of stylish and comfortable furniture pieces to create a space that truly reflects your style and personality.", link: "/furniture"}, 
                {header: "Step into Style and Comfort", body:"Find the perfect pair of shoes that combines fashion and comfort. From trendy sneakers to elegant heels, elevate your footwear game with our diverse selection.", link: "/shoes"}, 
                {header: "Nourish Your Skin, Enhance Your Glow", body:"Indulge in our range of skincare products designed to pamper and revitalize your skin. From cleansers to serums, achieve a radiant complexion with our carefully curated collection.", link: "/skincare"}
            ]

    const goToNext = () => {
        setimageIndex((prevIndex) => prevIndex === 4 ? 0 : prevIndex + 1)
    }

    const goToPrevious = () => {
        setimageIndex((prevIndex) => prevIndex === 0 ? 4 : prevIndex - 1)
    }

    useEffect(()=>{
        const interval = setInterval(()=>{
            goToNext()
        }, 5000)

        return () => {
            clearInterval(interval)
        }

    }, [])

  return (
    <div className="carousel">
        <div className="picDiv" id="pic1Div">
            <Link to={`${text[imageIndex].link}`}>
                <img src={images[imageIndex]} alt="" className="pic"/>
                <div className="textInfo">
                    <p className="head">{text[imageIndex].header}</p>
                    <p className="content">{text[imageIndex].body}</p>
                </div>
            </Link>
            <button className="change" id="left" onClick={goToPrevious}><img src="/assets/svg/chevron-left.svg" alt="" /></button>
            <button className="change" id="right" onClick={goToNext}><img src="/assets/svg/chevron-right.svg" alt="" /></button>
        </div>
        <div className="indicators">
            {images.map((x, index) => {
                return <div key={index} className={index === imageIndex ? `indicator active` : `indicator`} onClick={() => setimageIndex(index)}></div>
            })}
        </div>
    </div>
  )
}

export default ImageCarousel
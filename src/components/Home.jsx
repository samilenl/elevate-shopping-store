import "../styles/Home.css"
import ItemCard from "./ItemCard"
import ImageCarousel from "./ImageCarousel"
import shopData from "../shopData.json"
import { Fragment } from "react"
import { Link } from "react-router-dom"
const Home = () => {
  const trendingMen = shopData.clothing.men.slice(-2)
  const trendingWomen = shopData.clothing.women.slice(-3)

  const star = <div>
                  <img src="/assets/svg/star.svg" className="ic"/> 
                  <img src="/assets/svg/star.svg" className="ic"/>
                  <img src="/assets/svg/star.svg" className="ic"/>
                  <img src="/assets/svg/star.svg" className="ic"/>
                  <img src="/assets/svg/star.svg" className="ic"/>
              </div>
  return (
    <div>
      <ImageCarousel />

      <div className="categories">
        <div className="clothingCat">
          <div className="clothing-category" id="n1">
            <img src="/assets/images/e954f048f423a37837fa7189e68ac480aae9cea4.jpg" alt="" className="clothImg"/>
            <p className="shopHdr">MEN{"'"}S COLLECTION</p>
            <Link to={'/clothing/men'}><button className="shopBtn">SHOP MEN CLOTHES</button></Link>
          </div>
          <div className="clothing-category" id="n2">
            <img src="/assets/images/2a9eed5566a5471ddac59a21971e1d5fa8643e83.jpeg" alt="" className="clothImg"/>
            <p className="shopHdr">WOMEN{"'"}S COLLECTION</p>
            <Link to={'/clothing/women'}><button className="shopBtn">SHOP WOMEN CLOTHES</button></Link>
          </div>
          <div className="clothing-category" id="n3">
            <img src="/assets/images/3+-+Piece+Living+Room+Set.webp" alt="" className="clothImg"/>
            <p className="prodHdr">MODERN AND FAMILY FRIENDLY</p>
            <Link to={'/furniture'}><button className="shopBtn">SHOP FURNITURE</button></Link>
          </div>
          <div className="clothing-category" id="n4">
            <img src="/assets/images/9895ead01463e8dbd3545fdd4c01bafbda64c1ed.jpg" alt="" className="clothImg"/>
            <p className="prodHdr">SHOES FOR EVERY OCCASION</p>
            <Link to={'/shoes'}><button className="shopBtn">SHOP SHOES</button></Link>
          </div>
          <div className="clothing-category" id="n5">
            <img src="/assets/images/skinCareCat.jpg" alt="" className="clothImg"/>
            <p className="prodHdr">BECAUSE YOUR SKIN IS WORTH IT</p>
            <Link to={'/skincare'}><button className="shopBtn">SHOP SKINCARE</button></Link>
          </div>
        </div>
      </div>
      <div>
        <div className="review-header">Excellent {star} based on 856 reviews</div>
        <div className="reviews">
          <div className="review-card">
            <div className="nm">Sarah {star}</div>
            <p className="text">
              I recently purchased a beautiful piece of furniture from Elevate and
              I couldn{"'"}t be happier! The quality is outstanding, and it has truly
              elevated the look of my living room. The ordering process was seamless,
              and the delivery was prompt. I highly recommend Elevate for anyone looking
              for stylish and high-quality furniture.
            </p>
          </div>
          <div className="review-card">
            <div className="nm">Mark {star}</div>
            <p className="text">
              Elevate is my go-to store for all my clothing needs. The selection is
              fantastic, and they offer trendy and versatile options for young adults
              like me. The quality of the clothing is top-notch, and the prices are reasonable.
              I{"'"}ve received numerous compliments on the outfits I{"'"}ve purchased from Elevate.
              It{"'"}s definitely a store I trust and recommend to others.</p>
          </div>
          <div className="review-card">
            <div className="nm">Emily {star}</div>
            <p className="text">
              I recently started taking skincare seriously, and Elevate has been a game-changer for me.
              Their skincare products are amazing! I{"'"}ve noticed a significant improvement in my skin
              since I started using their products. The range they offer caters to different skin types
              and concerns. The customer service is also exceptional, with helpful recommendations and tips.
              Elevate has become my go-to for all things skincare!
            </p>
          </div>
        </div>
      </div>
      <div className="trending">
        <p id="topic">Trending Items</p>
        <div className="trending-cont">
          {trendingWomen.reverse().map((item, index) => {
            return (
              <Fragment key={index}>
                <ItemCard name={item.name} price={item.price} image={item.img} id={item.id} color={item.color} size={item.size} option={'pColor'}/>
                {trendingMen[index] && <ItemCard name={trendingMen[index].name} price={trendingMen[index].price} image={trendingMen[index].img} id={trendingMen[index].id} color={trendingMen[index].color} size={trendingMen[index].size} option={'pColor'}/>}
              </Fragment>
            )
          })}
        </div>

      </div>

      <div className="about">
        <p id="aboutHdr">Elevate your lifestyle, Embrace your potential</p>
        <p id="about-section">
          Welcome to Elevate, your one-stop destination for all things essential for young adults and those seeking to start their lives
          independently. Our mission is to provide you with high-quality, stylish, and functional products that will help you establish
          your personal space and foster your independence.
          At Elevate, we understand that each individual has unique needs and preferences. Our diverse range of products includes:
         <br /> - Furniture: Comfortable and stylish furniture pieces that will make your living space your own.
          <br />- Clothing: Trendy and versatile clothing options that will keep you looking and feeling fresh.
          <br />- Skincare: A collection of skincare products designed to pamper and nourish your skin.
         <br /> - Shoes: Stylish and comfortable footwear that will make your every step a fashion statement.
          <br />We are committed to offering the best customer experience, with fast shipping and hassle-free returns. Shop with confidence at
          Elevate and let us help you build a life you love.
        </p>
      </div>
      
    </div>
  )
}

export default Home
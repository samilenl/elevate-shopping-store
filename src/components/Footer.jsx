import "../styles/Footer.css"

const Footer = () => {
  return (
    <footer>
      <div className="right">

        <div className="fClass">
            <h1 className="header">CONTACT US</h1>
            <p id="para">Whether you{"'"}re a home owner or you{"'"}re visiting for the first time. We{"'"}re here to assist!</p>
            <div className="contact-info">
              <p>(345)-890-2333</p> |
              <p>info@elevate.com</p>
            </div>
        </div>
        <div className="fClass">
            <h1 className="header">BE A PART OF ELEVATE</h1>
            <p>Enjoy 10% off your first purchase when you sign up!</p>
            <div className="sign-up-div">
              <input type="text" id="sign-up-input"/>
              <button id="sign-up-btn" placeholder="Enter your email here">SUBSCRIBE</button>
            </div>
        </div>
          
        <p className="copyy">Copyright © 2023 Elevate, Inc</p>

      </div>
        
    </footer>
  )
}

export default Footer
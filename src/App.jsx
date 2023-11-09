import Header from "./components/Header"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"
import ScrollToTop from "./components/ScrollToTop"

const App = () => {
  return (
    <div className="container">
        <ScrollToTop />
        <Header />

        <div className="content">
          <Outlet/>
        </div>
        
        <Footer />
    </div>
  )
}

export default App
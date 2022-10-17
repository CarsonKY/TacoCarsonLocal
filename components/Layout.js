import Footer from "./Footer"
import Navbar from "./Navbar"

// Import children as prop

const Layout = ({children}) => {
  return (
    <div>
        {/* import components */}
        <Navbar />
        {children}
        <Footer />
        
    </div>
  )
}

export default Layout;
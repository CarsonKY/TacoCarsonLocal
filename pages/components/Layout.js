import Footer from "/Footer"
import Navbar from "/Navbar"


const Layout = () => {
  return (
    <div>
        {/* import components */}
        <Navbar/>
        {children}
        <Footer/>
        
    </div>
  )
}

export default Layout
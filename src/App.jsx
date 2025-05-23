import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import MainNavbar from './component/MainNavbar'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Order from './pages/Order'
import Blog from './pages/Blog'
import Recipe from './pages/Recipe'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import Viewcard from './pages/Viewcard'
import Title from './component/Title'
import SignIn from './pages/SignIn'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/custom-variants.css'

// Create a wrapper component to handle title updates
const PageWrapper = ({ children }) => {
  const location = useLocation();
  
  // Get the current path and set appropriate title
  const getPageTitle = () => {
    const path = location.pathname;
    switch(path) {
      case '/':
        return 'Home';
      case '/menu':
        return 'Menu';
      case '/order':
        return 'Order';
      case '/blog':
        return 'Blog';
      case '/recipe':
        return 'Recipes';
      case '/shop':
        return 'Shop';
      case '/contact':
        return 'contact';
      case '/signin':
        return 'Sign In';
      default:
        return 'Restaurant Name';
    }
  };

  return (
    <>
      <Title title={getPageTitle()} />
      {children}
    </>
  );
};

function App() {
  return (
    <Router>
      <PageWrapper>
        <header className='fixed-top'>
      <MainNavbar/>
    </header>
        <main className='header_space'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/order" element={<Order />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/recipe" element={<Recipe />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/viewcard" element={<Viewcard />} />
          </Routes>
        </main>
      </PageWrapper>
    </Router>
  )
}

export default App

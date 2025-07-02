import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import MainNavbar from './component/MainNavbar'
import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Order from './pages/Order'
import Blog from './pages/Blog'
import Recipe from './pages/Recipe'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import SignIn from './pages/SignIn'
import Payment from './pages/Payment'
import Privacy from './pages/Privacy'
import Viewcard from './pages/Viewcard'
import Title from './component/Title'
import TermsCondition from './pages/TermsCondition'
import Terms from './pages/Terms'
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
      case '/about':
        return 'About';
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
      case '/payment':
        return 'Payment & Tax';
      case '/terms':
        return 'Terms of Services';
      case '/privacy':
        return 'Privacy Policy';
      case '/termscondition':
        return 'Terms of Use';
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
      <MainNavbar/>
        <main className='header_space'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/order" element={<Order />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/recipe" element={<Recipe />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/viewcard" element={<Viewcard />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/termscondition" element={<TermsCondition />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
      </PageWrapper>
    </Router>
  )
}

export default App

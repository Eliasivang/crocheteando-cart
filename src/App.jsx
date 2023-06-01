import Header from './components/Header'
import Gallery from './components/Gallery'
import Footer from './components/Footer';
import {CartProvider} from './context/CartContext';
import './App.css'
import Featured from './components/Featured';
import NotificationCart from './components/NotificationCart';


function App() {

  return (
   <>
    <CartProvider>
      <Header/>
      <Featured/>
      <Gallery/> 
      <Footer/> 
    </CartProvider>
   </>
  )
}

export default App

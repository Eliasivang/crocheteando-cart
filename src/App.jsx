import Header from './components/Header'
import Gallery from './components/Gallery'
import Footer from './components/Footer';
import {CartProvider} from './context/CartContext';
import './App.css'


function App() {

  return (
   <>
    <CartProvider>
        <Header/>    
        <Gallery/> 
        <Footer/> 
    </CartProvider>
   </>
  )
}

export default App

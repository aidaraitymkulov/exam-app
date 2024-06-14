import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Product } from './pages/Product/Product'
import '../src/assets/styles/index.scss'
import { Footer } from './components/Footer'

export const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product' element={<Product />} />
    </Routes>
    <Footer />
      
    </>
  )
}

export default App;

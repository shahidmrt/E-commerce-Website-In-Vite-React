
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Header from './components/Header'
function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='product/:id' element={<ProductDetail/>}/>
      </Routes>
      <Sidebar/>
      <Footer/>
    </Router>
  )
}

export default App

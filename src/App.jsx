import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homepage/HomePage'
import CartPage from './pages/cartPage/CartPage'
import CategoryPage from './pages/categoryProductPage/CategoryProductPage'
import ProductPage from './pages/productSinglePage/ProductSinglePage'
import SearchPage from './pages/searchPage/SearchPage'
import Header from './components/header/Header'
import { Provider } from 'react-redux'
import store from './store/Store'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div>
      <Provider store={store}>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='product/:id' element={<ProductPage/>} />
        <Route path='category/:category' element={<CategoryPage/>} />
        <Route path='/cart' element={<CartPage/>} />
        <Route path='search/:searchTerm' element={<SearchPage/>} />
      </Routes> 
      <Footer/>
      </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App

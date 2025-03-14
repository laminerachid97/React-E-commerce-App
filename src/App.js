import './App.css';
import Home from './pages/home';
import Login from './pages/login';
import About from './pages/about';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Menu from './pages/menu';
import Profile from './pages/profile';
import Details from './pages/details';
import ProductDetail from './pages/product-detail';
import NotFound from './pages/not-found';
import Cart from './pages/cart';
import Favorite from './pages/favorite';
import Contact from './pages/contact';

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/menu' element={<Menu />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/favorite' element={<Favorite />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
            <Route path='/product-details/:id' element={<ProductDetail />}></Route>
            <Route path='/details/:type' element={<Details />}></Route>
            {/* Not found Route */}
            <Route path='*' element={<NotFound />}></Route>
            <Route path="/not-found" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;

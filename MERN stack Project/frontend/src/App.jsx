import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/Home'
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';
import Protected from './components/protected/Protected';

import styles from "./App.module.css";
import { Login } from './pages/login/Login';

function App() {
  const isAuth = false;

  return (
    <>
      <div className={styles.container}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/crypto' exact element={<div>Crypto</div>} />
            <Route path='/blogs' exact element={
              <Protected isAuth = {isAuth}>
                <div>Blogs</div>
              </Protected>
            } />
            <Route path='/submit' exact element={
              <Protected isAuth = {isAuth}>
                <div>Submit</div>
              </Protected>
            }
            />
            <Route path='/login' exact element={<Login />} />
            <Route path='/signup' exact element={<div>Sign Up</div>} />
            <Route path='*' exact element={<div>404 Error</div>} />
          </Routes>
          <div className={styles.footer}>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App

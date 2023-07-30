import { NavLink } from 'react-router-dom';

import styles from './Navabar.module.css';

export const Navbar = () => {
  const isAuthenticated = false;
  return (
    <>
      <nav className={styles.navbar}>
        <NavLink to='/' className={styles.logo}>Logo</NavLink>
        <NavLink to='/' className={({ isActive }) => isActive ? styles.activeStyle : styles.inActiveStyle}>Home</NavLink>
        <NavLink to='/crypto' className={({ isActive }) => isActive ? styles.activeStyle : styles.inActiveStyle}>Cryptocurrencies</NavLink>
        <NavLink to='/blogs' className={({ isActive }) => isActive ? styles.activeStyle : styles.inActiveStyle}>Blogs</NavLink>
        <NavLink to='/submit' className={({ isActive }) => isActive ? styles.activeStyle : styles.inActiveStyle}>Submit a blog</NavLink>

        {
          (isAuthenticated) ? <NavLink to='/Signout' className={styles.signout}><button> Sign Out</button>
          </NavLink>
            :
            <>
              <NavLink to='/login' className={styles.loginbtn}><button> Login</button></NavLink>
              <NavLink to='/signup' className={styles.signupbtn}><button> Sign up</button></NavLink>
            </>
        }
      </nav>
      <hr className={styles.line} />
    </>
  )
}

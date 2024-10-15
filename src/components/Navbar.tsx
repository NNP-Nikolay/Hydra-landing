import logo from '../assets/logo-vector.svg';
import logoName from '../assets/hydra-logo-word.svg';

import '../ui/Navbar.css';

export default function NavBar(): React.JSX.Element {
  return (
    <header className='header'>
      <nav className='nav'>
        <div className='nav__logos'>
          <img 
            className='nav__logos-logo'
            src={logo}
            alt='not-foundImg'
          />
          <img
            className='nav__logos-logoName'
            src={logoName}
            alt='not-foundImg'
          />
        </div>
        <ul className='nav__list'>
          <li className='nav__list-item'>
            <a href='#about' className='nav__link'>ABOUT</a>
          </li>
          <li className='nav__list-item'>
            <a href='#services' className='nav__link'>SERVICES</a>
          </li>
          <li className='nav__list-item'>
            <a href='#technologies' className='nav__link'>TECHNOLOGIES</a>
          </li>
          <li className='nav__list-item'>
            <a href='#how-to' className='nav__link'>HOW TO</a>
          </li>
        </ul>
        <div className='nav__buttons'>
          <button
            className='button button_contact-us' 
            type='button'>
            CONTACT US
          </button>
          <button 
            className='button button_join-hydra'
            type='button'>
            JOIN HYDRA
          </button>
        </div>
      </nav>
    </header>
  )
}
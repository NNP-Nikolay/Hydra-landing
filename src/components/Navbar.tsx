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
          <li className='nav__list-item'>ABOUT</li>
          <li className='nav__list-item'>SERVICES</li>
          <li className='nav__list-item'>TECHNOLOGIES</li>
          <li className='nav__list-item'>HOW TO</li>
        </ul>
        <div className='nav__buttons'>
          <button type='button'>CONTACT US</button>
          <button type='button'>JOIN HYDRA</button>
        </div>
      </nav>
    </header>
  )
}
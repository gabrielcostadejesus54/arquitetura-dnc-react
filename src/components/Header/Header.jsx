import {Link} from 'react-router-dom';
import './Header.css';

// Assets
import Logo from '../../assets/dnc-logo.svg';

function Header() {
  return (
    <header>
        <div className="container">
            <img src={Logo} alt="Logo do site" />

            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    </header>
  );
}

export default Header;
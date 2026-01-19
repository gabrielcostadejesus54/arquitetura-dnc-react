// Router
import { Link } from 'react-router-dom';

// assets
import Logo from '../../assets/dnc-logo.svg';
import FacebookIcon from '../../assets/facebook-icon.svg';
import TwitterIcon from '../../assets/twitter-icon.svg';
import LinkedinIcon from '../../assets/linkedin-icon.svg';
import InstagramIcon from '../../assets/instagram-icon.svg';
import BrazilIcon from '../../assets/brazil-icon.svg';
import UsaIcon from '../../assets/usa-icon.svg';

// css
import './Footer.css';

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="flex">
                    <div className="logo-col">
                        <img className='logo-dnc' src={Logo} alt="Logo DNC" />
                        <p>A escola que prepara você para as profissões em alta no mercado de trabalho.</p>
                        <div className="socials">
                            <a href="wwww.facebook.com" target='_blank'><img src={FacebookIcon} alt="Facebook" /></a>
                            <a href="wwww.twitter.com" target='_blank'><img src={TwitterIcon} alt="Twitter" /></a>
                            <a href="wwww.linkedin.com" target='_blank'><img src={LinkedinIcon} alt="LinkedIn" /></a>
                            <a href="wwww.instagram.com" target='_blank'><img src={InstagramIcon} alt="Instagram" /></a>
                        </div>
                    </div>
                    <div className='space'></div>
                    <div className="pages-col">
                        <h2>Pages</h2>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About us</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="contact-col">
                        <h2>Contact</h2>
                        <ul>
                            <li>R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030</li>
                            <li>suporte@escoladnc.com.br</li>
                            <li>(19) 99187-4342</li>
                        </ul>
                    </div>
                </div>
                <div className="flex footer-bottom">
                    <p>Copyright © DNC - 2024</p>
                    <div className="lang">
                        <img src={BrazilIcon} alt="Português" />
                        <img src={UsaIcon} alt="Inglês" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
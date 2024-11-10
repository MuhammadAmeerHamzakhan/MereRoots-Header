import './Navbar.css';
import logo from '../../assets/logo.png';
import image from '../../assets/24/7.png';  // Use 'image' instead of 'Image'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='nav-logo'>
        <img src={logo} alt="Mere Roots Logo" className='logo-image' />
      </div>
      <ul className='nav-menu'>
        <li className='nav-items'>SERVICES</li>
        <li className='nav-items'>ABOUT US</li>
        <li className='nav-items'>HOW IT WORKS</li>
        <li className='nav-items'>CONTACT</li>
      </ul>
      <div className="nav-right">
        <img src={image} alt="Mere Roots 24/7" className="logo-image" /> {/* Change Image to image */}
      </div>
      <i class="fa fa-phone" aria-hidden="true"></i>

      <span className="phone-number">+123 456 7890</span>
    </div>
  );
};

export default Navbar;

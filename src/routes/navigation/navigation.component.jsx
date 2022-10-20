import { Fragment, useContext } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import { CartContext } from '../../contexts/cart.context';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import './navigation.styles.scss'

const Navigation=()=>{

const navigate=useNavigate();

const {currentUser}=useContext(UserContext);
const {isCartOpen}=useContext(CartContext);

  return(
    <Fragment>

      <div className='navigation-container'>

        <Link to={'/'} className="logo-container" >Home</Link>

        <div className='nav-links-container'>
          <Link to={'/shop'} className='nav-link'><div>Shop</div></Link>
          {currentUser?<span className='nav-link' onClick={signOutUser}>SIGN OUT</span>:<Link className='nav-link' to='/auth'>SIGN IN</Link>}
          <CartIcon />
        </div>
        {isCartOpen&&<CartDropdown/>}

      </div>

    <Outlet/>

  </Fragment>
  )
}
export default Navigation;
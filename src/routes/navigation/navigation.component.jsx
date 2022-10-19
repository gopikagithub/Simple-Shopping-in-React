import { Fragment } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Checkout from '../checkout/checkout.component';
import './navigation.styles.scss'

const Navigation=()=>{
  const navigate=useNavigate();
const cartOnclickHandler=()=>(
  navigate('/checkout')
    
  )
  return(
    <Fragment>

      <div className='navigation-container'>

        <Link to={'/'} className="logo-container" >Home</Link>

        <div className='nav-links-container'>
          <Link to={'/shop'} className='nav-link'><div>Shop</div></Link>
          <Link to={'/authentication'} className='nav-link'><div>auth</div></Link>
          <div className='nav-link' onClick={cartOnclickHandler}>cart</div>
        </div>

      </div>

    <Outlet/>

  </Fragment>
  )
}
export default Navigation;
import React, { useEffect } from 'react'
import {Link,useNavigate} from 'react-router-dom'

const Nav = () => {
  const auth=localStorage.getItem("user");
  const navigate=useNavigate();
  const logout=()=>{
    localStorage.clear();
    navigate('/signup')
  }
  return (
    <div className='header'>
      <img className='logo' alt='logos' src='https://media.chatterblock.com/cache/e5/98/e598d08e294befee3a0f9945aa651a3c.png'></img>
     { auth ? <ul className='nav-ul'>
        <li><Link to='/'>Products</Link></li>
        <li><Link to='/add'>Add Products</Link></li>
        <li><Link to='/update'>Update Products</Link></li>
        <li><Link to='/profile'>profile Products</Link></li>
        <li><Link onClick={logout} to='/signup'>logout Products ( {JSON.parse(auth).name} )</Link></li>
        {/**<li>{auth ? <Link onClick={logout} to='/signup'>logout Products</Link> :<Link to='/signup'>SignUp</Link>}</li>
        <li><Link to='/login'>Login</Link></li> */}
    
      </ul>
      :
      <ul className='nav-ul nav-right'>

            <li><Link to='/signup'>SignUp</Link></li>
            <li><Link to='/login'>Login</Link></li>

      </ul>
    }  
    </div>
  )
}

export default Nav

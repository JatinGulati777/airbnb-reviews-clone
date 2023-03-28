import react from 'react';
import airbnb from '../assets/logo.png';
import '../styles/style.css'

function Nav(){
    return(
        <div className='main-navbar'>
        <div className='navbar'>
            <img src={airbnb}></img>
        </div>
        </div>
    )
}

export default Nav;
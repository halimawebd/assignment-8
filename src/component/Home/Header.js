import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            
         {/* <FontAwesomeIcon icon="https://cdn-icons-png.flaticon.com/512/2112/2112337.png"></FontAwesomeIcon> */}
          <h1><img className='header-content' src="https://cdn-icons-png.flaticon.com/512/2112/2112337.png" alt="" />
            Badminton-active-club</h1>
        </div>
    );
};

export default Header;
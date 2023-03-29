import React from 'react';
import {Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='row header-area'>
            <div className='col-6'>
                <Link to="/home"><h2>SHOPON</h2></Link>
            </div>
            <div className='col-6'>

            </div>
        </div>
    )
}

export default Header

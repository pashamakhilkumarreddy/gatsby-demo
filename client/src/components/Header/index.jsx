import React, { memo, useState } from 'react'
import { Link } from 'gatsby';
import '../../assets/styles/scss/header.scss';

const Header = () => {
  const [display, setDisplay] = useState(false);
  return (
    <header className='header'>
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <Link to='/' className='navbar-item'>
            <img src='' style={{ margin: 0 }} alt='Logo' loading='lazy' decoding='async' />
          </Link>

          <span role='button' className={`navbar-burger ${display ? 'is-active' : ''}`}
          aria-label='menu' aria-expanded='false' data-target='main-navbar'
          onClick={() => setDisplay(!display)}>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </span>
        </div>

        <div id='main-navbar' className={`navbar-menu ${display ? 'is-active' : ''}`}>
          <div className='navbar-start'>
            <Link to='/' className='navbar-item'>
              Home
            </Link>
          </div>

          <div className='navbar-end'>
            <Link to='/' className='navbar-item'>
              Clock
            </Link>
            <Link to='/' className='navbar-item'>
              Counter
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default memo(Header);
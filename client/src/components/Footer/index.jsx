import React, { memo } from 'react';
import '../../assets/styles/scss/footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='content has-text-centered'>
        <p className='title is-4'>
          &copy; React Gatsby 2021
        </p>
      </div>
    </footer>
  )
}

export default memo(Footer);
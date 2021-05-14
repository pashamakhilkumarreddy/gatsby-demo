import React from 'react';
import { Link } from 'gatsby';
import Layout from '../layouts';

const PageNotFound = () => {
  return (
    <Layout>
      <div className='columns is-centered is-vcentered is-mobile'>
        <div className='column is-12 has-text-centered'>
          <h2 className='title is-2'>Page Not Found</h2>
          <Link to='/' className='button is-light is-info'>{`<-- Go to Home`}</Link>
        </div>
      </div>
    </Layout>
  )
}

export default PageNotFound;
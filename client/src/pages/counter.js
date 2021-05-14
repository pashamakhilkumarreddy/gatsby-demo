import React, { useReducer } from 'react';
import Layout from '../layouts';

const initialState = {
  count: 0,
}

const Counter = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return {
          count: state.count + 1,
        }
      case 'decrement':
        return {
          count: state.count - 1
        }
      default:
        throw new Error('Invalid action type');
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Layout>
      <div className='columns is-centered is-vcentered is-mobile is-multiline has-text-centered'>
        <div className='column is-12-mobile is-full-tablet is-12-desktop is-full-widescreen is-12-fullhd'>
          <h2 className='title is-2'>Counter</h2>
          <div className='title is-4'>{state.count}</div>
        </div>
        <div className='column is-12-mobile is-full-tablet is-12-desktop is-full-widescreen is-12-fullhd'>
          <div className='buttons is-justify-content-center'>
            <button className='button is-danger is-light large' onClick={(() => dispatch({ type: 'decrement' }))}>-</button>
            <button className='button is-primary is-light large' onClick={(() => dispatch({ type: 'increment' }))}>+</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Counter;
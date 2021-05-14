import React, { useEffect, useReducer } from 'react';
import Layout from '../layouts';

const initialState = {
  hours: new Date().getHours(),
  minutes: new Date().getMinutes(),
  seconds: new Date().getSeconds(),
}

const Clock = () => {
  const reducer = (state, action) => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    switch(action.type) {
      case 'time':
        return {
          hours,
          minutes,
          seconds,
        }
      default:
        throw new Error('Invalid action type');
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const timerId = setInterval(() => {
      try {
        dispatch({ type: 'time' });
      } catch(err) {
        console.error(err);
      }
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);
  return (
    <Layout>
      <div className='columns is-centered is-vcentered is-mobile is-multiline has-text-centered is-align-items-flex-start
      is-justify-content-space-around'>
        <div className='column is-12'>
          <h2 className='title is-2 has-text-centered mb-3'>Digital Clock</h2>          
        </div>
        <div className='column is-11-mobile is-3-tablet is-3-desktop is-3-widescreen is-3-fullhd box 
        is-flex is-flex-direction-column is-align-items-center is-justify-content-centered mb-3'>
          <div className='title is-2'>Hours</div>
          <div className='title is-3'>{state.hours}</div>
        </div>
        <div className='column is-11-mobile is-3-tablet is-3-desktop is-3-widescreen is-3-fullhd box
        is-flex is-flex-direction-column is-align-items-center is-justify-content-centered mb-3'>
          <div className='title is-2'>Minutes</div>
          <div className='title is-3'>{state.minutes}</div>
        </div>
        <div className='column is-11-mobile is-3-tablet is-3-desktop is-3-widescreen is-3-fullhd box
        is-flex is-flex-direction-column is-align-items-center is-justify-content-centered mb-3'>
          <div className='title is-2'>Seconds</div>
          <div className='title is-3'>{state.seconds}</div>
        </div>
      </div>
    </Layout>
  )
}

export default Clock;
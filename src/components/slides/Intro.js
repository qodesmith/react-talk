import React from 'react';
import ReactLogo from '../ReactLogo';

const Intro = () => (
  <div>
    <div className='bg-black-80 white pb3 mb3'>
      <ReactLogo className='w-20 center' />
      <h1 className='tc'>React === Awesomeness!</h1>
    </div>

    <div className='tc i f4'>A JavaScript library for building user interfaces</div>
    <div className='tc i f5'>(Where things React<span className='f7 strike v-top'>TM</span> to data)</div>
  </div>
);

export default Intro;

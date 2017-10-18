import React, { Component } from 'react';

const Arrows = props => {
  const { prior, next, disablePrior, disableNext } = props;
  const priorClass = disablePrior ? 'black-30' : '';
  const nextClass = disableNext ? 'black-30' : '';

  return (
    <div className='bg-white-90 shadow-3 pv1 flex justify-center f1 pointer no-select fixed bottom-0 w-100'>
      {/* Left arrow. */}
      <div
        className={`mh6 ${priorClass}`}
        onClick={prior}>
        {'\u21E6'}
      </div>

      {/* Right arrow. */}
      <div
        className={`mh6 ${nextClass}`}
        onClick={next}>
        {'\u21E8'}
      </div>
    </div>
  );
};

export default Arrows;

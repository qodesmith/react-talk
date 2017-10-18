import React, { Component } from 'react';

class DataFlow extends Component {
  componentDidMount() {
    document.body.classList.add('bg-light-blue');
  }

  componentWillUnmount() {
    document.body.classList.remove('bg-light-blue');
  }

  render() {
    return (
      <div className='ph3'>
        <h1>1-Way Data Flow</h1>
        <ul className='mt2'>
          <li>You'll no longer be that framework tourist asking for data-flow directions.</li>
          <li>Data management is intuitive - <span className='i'>parent &rarr; child</span>.</li>
        </ul>
        <div className='flex f-6 i tc justify-around mt5'>
          <div className='black-30'>&#10157;</div>
          <div className='black-40'>&#10157;</div>
          <div className='black-50'>&#10157;</div>
          <div className='black-60'>&#10157;</div>
          <div className='black-70'>&#10157;</div>
          <div>&#10157;</div>
        </div>
      </div>
    );
  }
}

export default DataFlow;

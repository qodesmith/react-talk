import React, { Component } from 'react';

class Redux extends Component {
  componentDidMount() {
    document.body.classList.add('bg-washed-red');
  }

  componentWillUnmount() {
    document.body.classList.remove('bg-washed-red');
  }
  render() {
    return (
      <div className='ph3'>
        <h1>Redux In 30 Seconds...</h1>

        <div>Redux is a JavaScript library that aims to simplify how we manage stateful data. Redux keeps all of our data in a single JS object called the <span className='b'>Store</span>. A single function, the <span className='b'>reducer</span>, is responsible for making modifications to the Store. We trigger the reducer by 'dispatching' an <span className='b'>action</span> - a JS object that describes how our data should change. The reducer function receives the action as an argument and makes changes accordingly. Other parts of the code (usually React Components) can subscribe to data in the Store. When data changes, Redux notifies subscribers of the change.</div>
      </div>
    );
  }
}

export default Redux;

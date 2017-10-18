import React, { Component } from 'react';
import ReactClassroom from '../ReactClassroom';

class Resources extends Component {
  componentDidMount() {
    document.body.classList.add('bg-light-yellow');
  }

  componentWillUnmount() {
    document.body.classList.remove('bg-light-yellow');
  }

  render() {
    return (
      <div className='ph3'>
        <ReactClassroom size={100} alpha={.8} className='absolute top-1 right-0 mr3' />

        <h1>Resources - Learn React</h1>

        <ul>
          <li className='mb1'>
            <a href='https://goo.gl/MpkZZX' target='_blank'>React For Beginners</a> ($139)
          </li>
          <li className='mb1'>
            <a href='https://goo.gl/vfDHjm' target='_blank'>Ihatetomatoes Youtube Tutorial</a>
          </li>
          <li className='mb1'>
            <a href='https://goo.gl/gbrjmj' target='_blank'>ReactCasts Youtube Tutorial</a>
          </li>
          <li className='mb1'>
            <a href='https://goo.gl/LjvLY2' target='_blank'>30 Days of React</a>
          </li>
          <li className='mb1'>
            <a href='https://goo.gl/A17pJC' target='_blank'>Official Tutorial - Tic Tac Toe</a>
          </li>
          <li className='mb1'>
            <a href='https://goo.gl/ZGhBGF' target='_blank'>Getting Started With Redux</a>
          </li>
        </ul>
      </div>
    );
  }
};

export default Resources;

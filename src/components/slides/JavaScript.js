import React, { Component } from 'react';

class JavaScript extends Component {
  componentDidMount() {
    document.body.classList.add('bg-yellow');
  }

  componentWillUnmount() {
    document.body.classList.remove('bg-yellow');
  }

  render() {
    return (
      <div className='ph3'>
        <h1 className='fixed f-6 bottom-1 right-1 mt0 mb5'>JS</h1>
        <h1>JavaScript!</h1>
        <div>
          You just write JavaScript. That's it.
        </div>

        <h3 className='mb1'>Components</h3>
        <ul className='mt1'>
          <li>Write once, share & reuse for generations to come.</li>
          <li>Transfix can finally have one header to rule them all.</li>
          <li>Loki can finally be truly <span className='i'>global</span> <span className='f7'>(or eradicated in favor of CSS modules)</span>.</li>
        </ul>

        <h3 className='mb1'>JSX</h3>
        <ul className='mt1'>
          <li>JSX <span className='b'>&gt;</span> <code className='f6'>{'{{ yourFavTempEngine }}'}</code></li>
          <li>If you know HTML, you know JSX.</li>
          <li>Just get used to it being returned from a function.</li>
        </ul>
      </div>
    );
  }
};

export default JavaScript;

import React, { Component } from 'react';
import nonsense from  '../../nonsense';

const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const names = [
  'Aaron',
  'Derek',
  'Rose',
  'Randy',
  'Kevin',
  'Chris'
];

class FunPage extends Component {
  constructor() {
    super();

    // Comment this line out to see the difference
    // it makes when the `hello` method is run.
    this.hello = this.hello.bind(this);
  }

  makeFunnies() {
    return names.map(name => {
      const msg = nonsense[randomNum(0, nonsense.length - 1)];
      return <div key={name} className='pointer' onClick={this.hello}>{name} {msg}</div>;
    });
  }

  hello() {
    console.log(this);
  }

  render() {
    return (
      <div className='ph3'>
        <h1>Nonsense!</h1>
        {this.makeFunnies()}
      </div>
    );
  }
}

export default FunPage;

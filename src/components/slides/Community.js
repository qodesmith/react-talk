import React, { Component } from 'react';
import FlexTable from '../FlexTable';

const header = ['Library', 'Github Stars', 'S.O. Questions']
const rows = [
  [<span className='i'>React</span>, <span className='i'>78,581</span>, '60,718'],
  ['Angular', '28,815', '76,636'],
  ['Backbone', '26,767', '20,433'],
  ['Ember', '18,354', '21,936'],
  ['Aurelia', '10,174', '2,554']
];

class Community extends Component {
  componentDidMount() {
    document.body.classList.add('bg-washed-green');
  }

  componentWillUnmount() {
    document.body.classList.remove('bg-washed-green');
  }

  render() {
    return (
      <div className='ph3 pb4'>
        <h1>Community</h1>

        <h3 className='mbo'>Tremendous ecosystem & support</h3>
        <ul className='mt2'>
          <li>Backed by Facebook.</li>
          <li>Extensive Stack Overflow support.</li>
          <li>Well supported 3rd party modules like <a href='https://goo.gl/EN2EXt' target='_blank'>React Router</a>, <a href='http://redux.js.org/' target='_blank'>Redux</a>, and a <a href='https://goo.gl/Qi6YHF' target='_blank'>Chrome extension</a> that doesn't suck.</li>
          <li>Huge companies are using React - Instagram, Netflix, Twitter, Uber, BBC, Airbnb, Dropbox, Lyft and <a href='https://goo.gl/6HuRha' target='_blank'>everyone</a> else.</li>
          <li>Even your grandmother is using it.</li>
        </ul>

        <h3 className='mb2'>Popularity Contest</h3>
        <FlexTable rows={rows} header={header} />
      </div>
    );
  }
}

export default Community;

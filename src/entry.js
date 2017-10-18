/*
  This file serves as our application entry point.
  The top-level SCSS file (styles.scss) should be imported here
  as well as the top-level React component (SlideShow).

  Once that's taken care of, we simply attach things to the
  DOM with `ReactDOM.render`. #Boom
*/

import './styles/styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import SlideShow from './components/SlideShow';

const div = document.createElement('div');
div.className = 'react-talk sans-serif';
document.body.appendChild(div);

ReactDOM.render(
  <SlideShow />,
  document.querySelector('.react-talk')
);

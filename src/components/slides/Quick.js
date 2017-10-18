import React from 'react';
import Syntax from '../Syntax';
import FastReact from '../FastReact';

const html = `
  <!DOCTYPE html>
  <html lang="en-US">
    <meta charset="UTF-8">
    <title>So Simple</title>
  </head>
  <body>
    <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
    <script src="main.js"></script>
  </body>
  </html>
`;

const js = `
  const div = document.createElement('div');

  div.className = 'react-rules';
  document.body.appendChild(div);

  ReactDOM.render(
    <div>Hello world!</div>,
    document.querySelector('.react-rules')
  );
`;

const Quick = () => (
  <div className='ph3 pb4'>
    <h1>Quick To Get Started</h1>

    <h3>Create React App</h3>
    <div>
      You can literally have a React app running in about 30 seconds.  It includes a Webpack build and dev server.
    </div>
    <div>Do yourself a favor and <span className='code'>`npm install -g <a href='https://goo.gl/pJwiC8' target='_blank'>create-react-app</a>`</span>.  Welcome to the future.
    </div>

    <h3>Hello World</h3>
    <div>How's this for a (overly-simplified, completely contrived) speedy start?</div>

    <h4>index.html</h4>
    <Syntax content={html} type='html' />

    <h4>main.js</h4>
    <Syntax content={js} type='javascript' />

    <FastReact
      size={50}
      alpha={.8}
      className='absolute top-1 right-1' />
  </div>
);

export default Quick;

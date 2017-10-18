import React, { Component } from 'react';

// https://goo.gl/MrXVRS - micro UUID!
const uuid = a=>a?(a^Math.random()*16>>a/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,uuid);

class Syntax extends Component {
  constructor(props) {
    super(props);
    this.id = 'syntax-' + uuid(); // Avoids id's beginning with a number.
  }

  renderContent() {
    if (!this.props.content) return '';

    let contentArr = this.props.content.split('\n');
    if (!contentArr[0]) contentArr = contentArr.slice(1);

    const indent = contentArr[0].search(/\S/); // https://goo.gl/DirJ71

    return contentArr
      .map(line => line.slice(indent))
      .join('\n');
  }

  componentDidMount() {
    /*
      Themes - https://highlightjs.org/static/demo/
      CSS theme files - https://cdnjs.com/libraries/highlight.js
    */
    hljs.highlightBlock(document.querySelector(`#${this.id}`));
  }

  render() {
    return (
      <pre id={this.id} className='pre br2'>
        <code className={this.props.type}>
          {this.renderContent()}
        </code>
      </pre>
    );
  }
}

export default Syntax;

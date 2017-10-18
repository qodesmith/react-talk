import React, { Component } from 'react';
import Syntax from '../Syntax';

const setStateExamples = `
  // Typical usage:
  setState({ react: 'is awesome '});

  // Watch out! It's async:
  setState({ react: 'is awesome'}, () => {
    // Stuff here is guarunteed to run *after* state has updated.
  });

  // Safest way to updated state:
  setState(prevState => ({ awesomeness: prevState.awesomeness + 1 }));

  // NEVER DO THIS:
  setState({ amount: 1 });
  this.showAmount(this.state.amount); // Won't be what you think!
`;

const Method = props => {
  const { title, show, onClick, children } = props;
  return (
    <div className={'pr1 flex-equal'}>
      <h4 className='mv2 pointer code' onClick={onClick}>{props.title}</h4>
      <div className={show ? 'db mb3' : 'dn'}>{children}</div>
    </div>
  );
};

class Simple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setState: false,
      render: false,
      componentWillMount: false,
      componentDidMount: false,
      componentWillUnmount: false,
      componentWillUpdate: false,
      componentDidUpdate: false,
      componentWillReceiveProps: false,
      shouldComponentUpdate: false,
    };

    this.toggleThing = this.toggleThing.bind(this);
  }

  componentDidMount() {
    document.body.classList.add('bg-light-green');
  }

  componentWillUnmount() {
    document.body.classList.remove('bg-light-green');
  }

  toggleThing(e) {
    const method = e.target.textContent.slice(0, -2);
    this.setState(prevState => ({ [method]: !prevState.method }));
  }

  render() {
    const { toggleThing } = this;
    const {
      setState,
      render,
      componentWillMount,
      componentDidMount,
      componentWillUnmount,
      componentWillUpdate,
      componentDidUpdate,
      componentWillReceiveProps,
      shouldComponentUpdate
    } = this.state;

    return (
      <div className='ph3 mb5'>
        <h1>It's Simple</h1>

        <h3>The Component API</h3>
        <div>A few semantic lifecycle methods, <span className='code f6'>`setState`</span>, some ES6 spices, and voila!</div>
        <div>This is <a href='https://goo.gl/fDqEbs' target='_blank'>all you need</a> to know to get started:</div>

        <div className='flex mt2'>
          <Method
            onClick={toggleThing}
            show={setState}
            title='setState()'>
            <div>
              React components can manage their own data.
              <span className='code f6'>`setState`</span> is how you update that data (<span className='f7'>#MindBlown</span>).
              Pass this badboy an object of stuff to set on the state & you're on your way.
            </div>
          </Method>

          <Method
            onClick={toggleThing}
            show={render}
            title='render()'>
            <div>
              This is the only mandatory method on all React components.
              Return some JSX to show stuff on the screen.
              <span className='code'>`render`</span>
              also fires every time state or props are updated.
            </div>
          </Method>

          <Method
            onClick={toggleThing}
            show={componentWillMount}
            title='componentWillMount()'>
            <div>That moment when something is about to show on the screen...</div>
          </Method>
        </div>

        <div className='flex'>
          <Method
            onClick={toggleThing}
            show={componentDidMount}
            title='componentDidMount()'>
            <div>
              Congratulations, you made it to the big screen.  This is also the place to fire off some sweet ajax calls.  All the api things...
            </div>
          </Method>

          <Method
            onClick={toggleThing}
            show={componentWillUnmount}
            title='componentWillUnmount()'>
            <div>When you realize its friday and almost 5pm...</div>
          </Method>

          <Method
            onClick={toggleThing}
            show={componentWillUpdate}
            title='componentWillUpdate()'>
            <div>'Bout to make moves yo.</div>
          </Method>
        </div>

        <div className='flex'>
          <Method
            onClick={toggleThing}
            show={componentDidUpdate}
            title='componentDidUpdate()'>
            <div>The eagle has landed.</div>
          </Method>

          <Method
            onClick={toggleThing}
            show={componentWillReceiveProps}
            title='componentWillReceiveProps()'>
            <div>
              Mad props, yo. Props are data received from parent components...
              and bragging rights attained from doing amazing things, such as
              using React instead of some other framework. #Boom
            </div>
          </Method>

          <Method
            onClick={toggleThing}
            show={shouldComponentUpdate}
            title='shouldComponentUpdate()'>
            <div>
              This is what Windows 10 needs - a way to stop updates from happening.
              In the React world, the default behavior is to re-render on every state or props change.
              If you return <span className='code'>`false`</span> from this method, the component won't update.
            </div>
          </Method>
        </div>

        <h3>setState Examples</h3>
        <Syntax content={setStateExamples} type='javascript' />
      </div>
    )
  }
};

export default Simple;

import React, { Component } from 'react';
import slides from './slides';
import Arrows from './Arrows';

class SlideShow extends Component {
  constructor(props) {
    super(props);

    this.lastSlide = slides.length - 1;
    this.state = { slide: 9 };

    this.prior = this.prior.bind(this);
    this.next = this.next.bind(this);
  }

  componentWillMount() {
    document.addEventListener('keyup', e => {
      if (e.which === 37) this.prior();
      if (e.which === 39) this.next();
    });
  }

  prior() {
    const { slide } = this.state;

    if (slide === 0) return;
    this.setState({ slide: slide - 1 });
  }

  next() {
    const { slide } = this.state;

    if (slide === this.lastSlide) return;
    this.setState({ slide: slide + 1 });
  }

  render() {
    const CurrentSlide = slides[this.state.slide];

    return (
      <div className='black-80'>
        <CurrentSlide changeBg={this.changeBg} />
        <Arrows
          prior={this.prior}
          next={this.next}
          disablePrior={this.state.slide === 0}
          disableNext={this.state.slide === this.lastSlide} />
      </div>
    );
  }
}

export default SlideShow;

import { toTop as scrollToPageTop } from './scrollT';
import React, { Component } from 'react';
import './ScrollTop.css';


class ScrollTop extends Component {
    constructor(props) {
      super(props);
      this.handleScroll = this.handleScroll.bind(this);
      this.state = {
        shouldShowScrollTopArrow: false
      };
    }
  
    handleScroll() {
      const boundingRect = ((document || {}).documentElement || {})
        .getBoundingClientRect;
      if (boundingRect) {
        if (document.documentElement.getBoundingClientRect().top * -1 > 100)
          this.setState({ shouldShowScrollTopArrow: true });
        else this.setState({ shouldShowScrollTopArrow: false });
      }
    }
  
    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }
  
    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  
    render() {
      //const { theme: { colorPrimary } } = this.context;
      const hideArrowClass = this.state.shouldShowScrollTopArrow ? '' : 'hide';
      return (
        <div className="scroll-top"  onClick={(e) => scrollToPageTop()}>
          <div
            className={`arrow ${hideArrowClass}`}
            style={{ color: this.props.color }}
          >
            <span className="fas fa-angle-double-up fa-2x"  style={{color: this.props.color}} href="#" />
            <div className="to-top sam">To Top</div>
          </div>
        </div>
      );
    }
  }
  
  // ScrollTop.contextTypes = {
  //   theme: PropTypes.any
  // };
  
  export default ScrollTop;
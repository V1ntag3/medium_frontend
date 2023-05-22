import { Component } from 'react';
import './topBar.css';

export default class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav className="top-bar">
        <div className="top-bar-left">
          <a className="top-bar-title" href="/">
            MEDIUM
          </a>
        </div>
        <div className="top-bar-right">
          <div>
            <a href="/">BLOG</a>
            <a href="/">ABOUT</a>
            <a href="/">PROJECTS</a>
          </div>
        </div>
      </nav>
    );
  }
}

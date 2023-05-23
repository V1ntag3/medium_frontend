import { Component } from 'react';
import './topBar.css';
import avatar from "../../avatar/avatar.png"

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
          <div className='avatar'>
            <img src={avatar} alt='avatar' />
          </div>
        </div>
      </nav>
    );
  }
}

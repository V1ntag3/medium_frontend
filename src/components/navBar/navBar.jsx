import { Component } from 'react';
import './navBar.css';
import avatar from '../../avatar/avatar.png';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav className="nav-bar">
        <div className="nav-bar-left">
          <a className="nav-bar-title" href="/">
            MEDIUM
          </a>
        </div>
        <div className="nav-bar-right">
          <div className="avatar">
            <img src={avatar} alt="avatar" />
          </div>
        </div>
      </nav>
    );
  }
}

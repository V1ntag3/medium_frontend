import { Component } from 'react';
import avatar from '../../avatar/avatar.png';
import './card.css';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="card">
        <div className="card-avatar">
          <img src={avatar} alt="user-avatar" />
        </div>
        <div className="informations">
          <div className="card-user-name">Lucas William</div>
          <div className="creation-date-reading">Apr 15, 2023 · 4 min read</div>
        </div>
      </div>
    );
  }
}

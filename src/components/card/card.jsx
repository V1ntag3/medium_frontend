import { Component } from 'react';
import avatar from '../../avatar/avatar.png';
import './card.css';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      readingTime: props.readingTime,
      creationAt: props.creationAt,
    };
  }

  render() {
    const { readingTime, creationAt } = this.state;
    const month = new Date(creationAt).toLocaleString('default', {
      month: 'short',
    });
    const day = new Date(creationAt).getDate();
    const year = new Date(creationAt).getFullYear();

    return (
      <div className="card">
        <div className="card-avatar">
          <img src={avatar} alt="user-avatar" />
        </div>
        <div className="informations">
          <div className="card-user-name">Lucas William</div>
          <div className="creation-date-reading">
            {month} {day}, {year} · {readingTime} min read
          </div>
        </div>
      </div>
    );
  }
}

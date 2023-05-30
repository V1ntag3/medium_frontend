import { Component } from 'react';
import './loading.css';

export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: props.message,
    };
  }

  render() {
    const { message } = this.state;
    return (
      <div className="loading-container">
        <div className="loading-spinner" />
        <div className="loading-text">{message}</div>
      </div>
    );
  }
}

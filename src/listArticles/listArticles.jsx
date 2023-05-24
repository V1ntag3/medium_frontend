import { Component } from 'react';
import './listArticles.css';
import MainArticle from './components/mainArticle';
import NavBar from '../components/navBar/navBar';

export default class ListArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavBar />
        <MainArticle />
      </div>
    );
  }
}

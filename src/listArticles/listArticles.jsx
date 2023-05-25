import { Component } from 'react';
import './listArticles.css';
import MainArticle from './components/mainArticle/mainArticle';
import NavBar from '../components/navBar/navBar';
import ArticleElement from './components/articleElement/articleElement';

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
        <div className="all-articles">All Articles</div>
        <div className="articles">
          <ArticleElement />
          <ArticleElement />
          <ArticleElement />
          <ArticleElement />
        </div>
      </div>
    );
  }
}

import { Component } from 'react';
import './mainArticle.css';

export default class MainArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainArticleCoverPath:
        'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    };
  }

  render() {
    const { mainArticleCoverPath } = this.state;
    return (
      <div className="main-article">
        <div className="main-article-cover">
          <img src={mainArticleCoverPath} alt="main-article-cover" />
        </div>
        <div className="main-article-title">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
          accusantium iusto voluptatibus consequatur, tempora.
        </div>
        <div className="main-article-subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </div>
    );
  }
}

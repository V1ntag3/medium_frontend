import { Component } from 'react';
import './articleElement.css'

export default class ArticleElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      mainArticleCoverPath:
        'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    };
  }

  render() {
    const { mainArticleCoverPath, title } = this.state;
    return (
      <div className="article">
        <div className="article-cover">
          <img src={mainArticleCoverPath} alt="article-cover" />
        </div>
        <div className="article-title">
          {title}
        </div>
      </div>
    );
  }
}

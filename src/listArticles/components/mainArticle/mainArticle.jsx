import { Component } from 'react';
import './mainArticle.css';
import { Link } from 'react-router-dom';

export default class MainArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      mainArticleCoverPath:
        'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      title: props.title,
      subtitle: props.subtitle,
    };
  }

  render() {
    const { id, mainArticleCoverPath, title, subtitle } = this.state;
    return (
      <Link to={`/article/${id}`}>
        <div className="main-article" style={{ cursor: 'Point' }}>
          <div className="main-article-cover">
            <img src={mainArticleCoverPath} alt="main-article-cover" />
          </div>
          <div className="main-article-title">{title}</div>
          <div className="main-article-subtitle">{subtitle}</div>
          <hr className="divisor" />
        </div>
      </Link>
    );
  }
}

import { Component } from 'react';
import './articleElement.css';
import { Link } from 'react-router-dom';

export default class ArticleElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      title: props.title,
      mainArticleCoverPath:
        'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    };
  }

  render() {
    const { id, mainArticleCoverPath, title } = this.state;
    return (
      <Link to={`/article/${id}`}>
        <div className="article" style={{textDecoration: "none"}}>
          <div className="article-cover">
            <img src={mainArticleCoverPath} alt="article-cover" />
          </div>
          <div className="article-title">{title}</div>
        </div>
      </Link>
    );
  }
}

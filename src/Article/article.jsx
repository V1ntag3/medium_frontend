import { TagGroup, Tag } from 'rsuite';
import NavBar from '../components/NavBar/navBar';
import Card from '../components/Card/card';
import './article.css';
import 'rsuite/dist/rsuite.min.css';
import getArticle from './articleController';
import Loading from '../components/Loading/loading';

const tagColors = [
  'red',
  'orange',
  'yellow',
  'green',
  'cyan',
  'blue',
  'violet',
  'purple',
  'pink',
];

function mountArticle() {
  const params = window.location.pathname.split('/');
  const id = params[params.length - 1];

  const { data, error, loading } = getArticle(id);

  if (error) {
    return <Loading message={error.message} />;
  }

  if (loading) {
    return <Loading message="Loading..." />;
  }

  const { article } = data;
  const mainArticleCoverPath =
    'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80';

  return (
    <div className="article-page">
      <NavBar />
      <div className="title">{article.title}</div>
      <div className="subtitle">{article.subtitle}</div>
      <div className="cover">
        <img src={mainArticleCoverPath} alt="cover-article" />
      </div>
      <hr className="divisor" />
      <Card />
      <div className="content">{article.body}</div>
      <div className="tags">
        Tags:
        <TagGroup className="tags">
          {article.tagList.map(tag => (
            <Tag
              color={
                tagColors[Math.floor(Math.random() * tagColors.length - 1)]
              }
            >
              {tag}
            </Tag>
          ))}
        </TagGroup>
      </div>
    </div>
  );
}

export default function Article() {
  return mountArticle();
}

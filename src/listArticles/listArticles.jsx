import './listArticles.css';
import MainArticle from './components/mainArticle/mainArticle';
import NavBar from '../components/NavBar/navBar';
import ArticleElement from './components/articleElement/articleElement';
import getArticles from './listArticlesController';
import Loading from '../components/Loading/loading';

function mountArticles() {
  const { data, error, loading } = getArticles();

  if (loading) {
    return <Loading message="Loading..." />;
  }

  if (error) {
    return <Loading message={error.message} />;
  }

  const articlesList = data.articles;
  if (!articlesList || articlesList.length === 0) {
    return <div>No articles</div>;
  }

  const mainArticle = articlesList[0];
  const otherArticles = articlesList.slice(1);

  return (
    <div>
      <NavBar />
      <MainArticle
        id={mainArticle.id}
        title={mainArticle.title}
        subtitle={mainArticle.subtitle}
      />
      <div className="all-articles">All Articles</div>
      <div className="articles">
        {otherArticles.map(article => (
          <ArticleElement
            key={article.id}
            id={article.id}
            title={article.title}
          />
        ))}
      </div>
    </div>
  );
}

export default function ListArticle() {
  return mountArticles();
}

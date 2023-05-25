import './listArticles.css';
import MainArticle from './components/mainArticle/mainArticle';
import NavBar from '../components/navBar/navBar';
import ArticleElement from './components/articleElement/articleElement';
import getArticles from './listArticlesController';

function mountArticles() {
  const { data, error, loading } = getArticles();

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }

  const articlesList = data.articles.map(article => (
    <ArticleElement key={article.id} title={article.title} />
  ));
  return articlesList;
}

export default function ListArticle() {
  const articlesList = mountArticles();
  return (
    <div>
      <NavBar />
      <MainArticle />
      <div className="all-articles">All Articles</div>
      <div className="articles">{articlesList}</div>
    </div>
  );
}

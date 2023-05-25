import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListArticles from './listArticles/listArticles';
import ArticleElement from './Article/article';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListArticles />} />
        <Route path="article/:id" element={<ArticleElement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

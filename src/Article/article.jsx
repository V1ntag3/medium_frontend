import { Component } from 'react';
import { TagGroup, Tag } from 'rsuite';
import NavBar from '../components/navBar/navBar';
import Card from '../components/card/card';
import './article.css';
import 'rsuite/dist/rsuite.min.css';

export default class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainArticleCoverPath:
        'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    };
  }

  render() {
    const { mainArticleCoverPath } = this.state;
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
    return (
      <div className="article-page">
        <NavBar />
        <div className="title">
          Title Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Commodi, unde placeat!
        </div>
        <div className="subtitle">
          Title Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Commodi, unde placeat! Laboriosam, sequi perferendis qui perspiciatis
          similique maxime?
        </div>
        <div className="cover">
          <img src={mainArticleCoverPath} alt="cover-article" />
        </div>
        <hr className="divisor" />
        <Card />
        <div className="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          perferendis, natus modi obcaecati, aliquam quaerat ipsa voluptas
          officiis, nihil quam nulla! Veniam assumenda facere fugit eum nisi
          quae nobis officiis. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Aliquid perferendis, natus modi obcaecati, aliquam
          quaerat ipsa voluptas officiis, nihil quam nulla! Veniam assumenda
          facere fugit eum nisi quae nobis officiis. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Aliquid perferendis, natus modi
          obcaecati, aliquam quaerat ipsa voluptas officiis, nihil quam nulla!
          Veniam assumenda facere fugit eum nisi quae nobis officiis. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          perferendis, natus modi obcaecati, aliquam quaerat ipsa voluptas
          officiis, nihil quam nulla! Veniam assumenda facere fugit eum nisi
          quae nobis officiis. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Aliquid perferendis, natus modi obcaecati, aliquam
          quaerat ipsa voluptas officiis, nihil quam nulla! Veniam assumenda
          facere fugit eum nisi quae nobis officiis.
        </div>
        <div className="tags">
          Tags:
          <TagGroup className='tags'>
            <Tag color={tagColors[Math.floor(Math.random() * tagColors.length - 1)]}>Product</Tag>
            <Tag
              color={tagColors[Math.floor(Math.random() * tagColors.length - 1 )]}
            >
              Tecnology
            </Tag>

            <Tag
              color={tagColors[Math.floor(Math.random() * tagColors.length - 1)]}
            >
              Development
            </Tag>
          </TagGroup>
        </div>
      </div>
    );
  }
}

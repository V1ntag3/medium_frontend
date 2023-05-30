import { useQuery, gql } from '@apollo/client';

export default function getArticle(id) {
  const articleQuery = gql`
    query Article {
      article(id: ${id}) {
        id
        title
        subtitle
        readingTime
        body
        tagList
      }
    }
  `;

  return useQuery(articleQuery);
}

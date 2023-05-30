import { useQuery, gql } from '@apollo/client';

export default function getArticles() {
  const articlesQuery = gql`
    {
      articles {
        id
        title
        subtitle
      }
    }
  `;

  return useQuery(articlesQuery);
}

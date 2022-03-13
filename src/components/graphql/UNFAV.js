import gql from 'graphql-tag';

const UNFAVORITE = gql `
mutation unlike($food_id: Int!, $user_id: Int!) {
  delete_favorites(where: {food_id: {_eq: $food_id}, favorite_user_id: {_eq: $user_id}}) {
    returning {
      id
    }
  }
}
`
export default UNFAVORITE;
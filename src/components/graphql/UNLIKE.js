import gql from 'graphql-tag';

const UNLIKE = gql `
mutation unlike($food_id: Int!, $user_id: Int!) {
  delete_likes(where: {food_id: {_eq: $food_id}, like_user_id: {_eq: $user_id}}) {
    returning {
      id
    }
  }
}
`
export default UNLIKE;
import gql from 'graphql-tag';

const LIKE = gql `
mutation like($food_id: Int!, $user_id: Int!) {
  insert_likes(objects: {food_id: $food_id, like_user_id: $user_id}) {
    returning {
      id
    }
  }
}
`
export default LIKE;
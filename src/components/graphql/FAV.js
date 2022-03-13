import gql from 'graphql-tag';

const FAV = gql `
mutation like($food_id: Int!, $user_id: Int!) {
  insert_favorites(objects: {food_id: $food_id, favorite_user_id: $user_id}) {
    returning {
      id
    }
  }
}
`
export default FAV;
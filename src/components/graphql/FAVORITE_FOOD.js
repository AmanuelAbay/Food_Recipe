import gql from 'graphql-tag';

const FAVORITE = gql `
query favorite_food($user_id:Int!) {
  favorites(where: {favorite_user_id: {_eq: $user_id}}) {
   food {
    id
    title
    description
    category
    duration
    user{
      id
      name
    }
    likes{
      like_user_id
    }
    rates {
      rate_user_id
      value
    }
    favorites{
      favorite_user_id
    }
    images{
      path
    }
      }
  }
}
`
export default FAVORITE;
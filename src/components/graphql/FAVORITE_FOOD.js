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
    ingredients{
      id
      name
      amount
    }
    steps{
      id
      description
      step_number
    }
    comments {
      id
      user{
        id
        name
      }
      comment
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
      }
  }
}
`
export default FAVORITE;
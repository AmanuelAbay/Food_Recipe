import gql from 'graphql-tag';

const YOUR_FOOD = gql `
query your_foods($user_id: Int!) {
  foods(where: {created_by: {_eq: $user_id}}) {
    id
    title
    description
    category
    duration
    user {
      id
      name
    }
    
    likes {
      like_user_id
    }
    rates {
      rate_user_id
      value
    }
    favorites {
      favorite_user_id
    }
    images{
      path
    }
  }
}
`
export default YOUR_FOOD;
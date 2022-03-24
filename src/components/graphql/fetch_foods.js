import gql from 'graphql-tag'

const FETCHING_FOODS = gql `
query MyQuery {
  foods {
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
    images{
      path
    }
  }
}
`
export default FETCHING_FOODS
import gql from 'graphql-tag'

const FILTER_FOODS = gql `
query filter($food_id:Int!) {
  foods(where: {id: {_eq: $food_id}}){
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
    # likes{
    #   id
    # }
    rates {
      rate_user_id
      value
    }
    favorites{
      favorite_user_id
    }
  }
}
`
export default FILTER_FOODS
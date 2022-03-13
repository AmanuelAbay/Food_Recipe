import gql from 'graphql-tag'

const fetching_foods = gql `
query MyQuery {
  foods {
    id
    title
    duration
    description
    user {
      name
    }
    category
    favorites {
      id
    }
  }
}
`
export default fetching_foods
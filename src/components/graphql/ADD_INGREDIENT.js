import gql from 'graphql-tag';

const ADD_INGREDIENT = gql `
mutation add_ingredient($food_id:Int!, $name:String!,$amount:Int!) {
  insert_ingredients(objects: {amount: $amount, food_id: $food_id, name: $name}) {
    returning {
      id
    }
  }
}
`
export default ADD_INGREDIENT;
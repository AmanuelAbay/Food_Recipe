import gql from 'graphql-tag';

const UPDATE_INGREDIENT = gql `
mutation update_ingredient($id: Int!, $name: String!, $amount: Int!) {
  update_ingredients(where: {id: {_eq: $id}}, _set: {name: $name, amount: $amount}) {
    returning {
      id
      name
    }
  }
}
`
export default UPDATE_INGREDIENT;
import gql from 'graphql-tag';

const DELETE_INGREDIENT = gql `
mutation delete_ingredients($id:Int!) {
  delete_ingredients(where: {id: {_eq: $id}}) {
    returning {
      id
      name
    }
  }
}
`
export default DELETE_INGREDIENT;
import gql from 'graphql-tag';

const UPDATE_STEP = gql `
mutation update_step($id: Int!, $description:String!) {
  update_steps(where: {id: {_eq: $id}}, _set: {description: $description}) {
    returning {
      description
    }
  }
}
`
export default UPDATE_STEP;
import gql from 'graphql-tag';

const ADD_STEP = gql `
mutation add_step($food_id:Int!, $step_number:Int!, $step_description:String!) {
  insert_steps(objects: {food_id: $food_id, step_number: $step_number, description: $step_description}) {
    returning {
      id
    }
  }
}
`
export default ADD_STEP;
import gql from 'graphql-tag';

const ADD_FOODS = gql `
mutation addingFood($title:String!,$category: String!, $user_id: Int!, $description: String!, $duration: String!, $steps: [steps_insert_input!]!, $ingredients: [ingredients_insert_input!]!, $images_url: [images_insert_input!]!) {
  insert_foods(objects: {category: $category, created_by: $user_id, description: $description, duration: $duration, steps: {data: $steps}, title: $title, ingredients: {data: $ingredients}, images: {data: $images_url}}) {
    returning {
      id
    }
  }
}
`
export default ADD_FOODS;
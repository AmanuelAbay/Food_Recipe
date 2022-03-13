import gql from 'graphql-tag';

const EDIT_FOOD = gql `
mutation delted_food($food_id: Int!) {
  delete_comments(where: {food_id: {_eq: $food_id}}) {
    affected_rows
  }
  delete_likes(where: {food_id: {_eq: $food_id}}) {
    affected_rows
  }
    delete_favorites(where: {food_id: {_eq: $food_id}}) {
    affected_rows
  }
    delete_steps(where: {food_id: {_eq: $food_id}}) {
    affected_rows
  }
    delete_ingredients(where: {food_id: {_eq: $food_id}}) {
    affected_rows
  }
    delete_rate(where: {food_id: {_eq: $food_id}}) {
    affected_rows
  }
    delete_images(where: {food_id: {_eq: $food_id}}) {
    affected_rows
  }
  ## and finally deleting the food
  delete_foods(where: {id: {_eq: $food_id}}) {
    returning {
      id
    }
  }
}
`
export default EDIT_FOOD;
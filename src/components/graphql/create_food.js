import gql from 'graphql-tag';

const ADD_FOODS = gql `
mutation addFood ($category:String!, $description: String!, $duration: String!, $ingredients: String!, $steps: String!, $title: String!, $created_by:Int){
  insert_foods(objects:{
    category:$category, description:$description, duration:$duration,ingredients:$ingredients, steps:$steps, title: $title, created_by:$created_by
  }){
    affected_rows
    returning{
      id
    }
  }
  
}
`
export default ADD_FOODS;
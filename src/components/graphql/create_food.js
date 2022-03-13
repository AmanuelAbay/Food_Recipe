import gql from 'graphql-tag';

const ADD_FOODS = gql `
mutation addFood ($category:String!, $description: String!, $duration: String!, $title: String!, $created_by:Int){
  insert_foods(objects:{
    category:$category, description:$description, duration:$duration,title: $title, created_by:$created_by
  }){
    returning{
      id
    }
  }
  
}
`
export default ADD_FOODS;
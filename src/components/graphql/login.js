import gql from 'graphql-tag';

const LOGIN = gql `
mutation login($email: String!, $password: String!) {
  login(email: $email,  password: $password) {
    token
    id
    name
    email
    phone_number
    password
  }
}
`
export default LOGIN;
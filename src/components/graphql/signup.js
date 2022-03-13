import gql from 'graphql-tag';

const SIGNUP_USER = gql `
mutation ($name: String!, $email: String!, $phone_number: String!, $password: String!) {
  signup(name: $name, email: $email, phone_number: $phone_number, password: $password) {
    token
    id
    name
    email
    phone_number
    password
  }
}

`
export default SIGNUP_USER;
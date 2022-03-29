import gql from 'graphql-tag';

const UPLOAD_IMAGE = gql `
mutation uploadImage($image:String!,$folder:String!) {
	upload(image: $image, folder: $folder){
    path
  }
}
`
export default UPLOAD_IMAGE;
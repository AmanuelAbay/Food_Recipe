const apollo_client = require("../../utils/apollo");
import SIGNUP from "../../graphql/signup.js";

export default async(newUser) => {
    let data = await apollo_client.mutate({
        mutation: SIGNUP,
        variables: { "name": newUser.firstname + " " + newUser.lastname, "email": newUser.email, "phone_number": newUser.phonenumber, "password": newUser.password },
    });
    return data.data.signup;

    //todo: data contain token and new user info then we will store the data to the local storage

}
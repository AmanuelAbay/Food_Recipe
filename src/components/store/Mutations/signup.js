const apollo_client = require("../../utils/apollo");
import SIGNUP_USER from "../../graphql/signup.js";

export default async(newUser) => {
    let data = await apollo_client.mutate({
        mutation: SIGNUP_USER,
        variables: { "name": newUser.firstname + " " + newUser.lastname, "email": newUser.email, "phone_number": newUser.phonenumber, "password": newUser.password },
    });
    return data.data.signup;
}
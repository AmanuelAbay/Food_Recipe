const apollo_client = require("../../utils/apollo");
import LOGIN from "../../graphql/login.js";

export default async(User) => {
    let data = await apollo_client.mutate({
        mutation: LOGIN,
        variables: { "email": User.email, "password": User.password },
    });
    if (data)
        return data.data.login;
    else {
        return "User Not Found!";
    }

    //todo: data contain token and new user info then we will store the data to the local storage

}
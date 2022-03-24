const apollo_client = require("../utils/apollo");
const GET_USER = require("../graphql/get_user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const loginhandler = async(req, res) => {
    const email = req.body.input.email;
    let data = await apollo_client.query({
        query: GET_USER,
        variables: { email },
    });

    if (data.data.users.length == 0) {
        res.json({
            token: false,
            id: null,
            name: null,
            email: null,
            phone_number: null,
            password: null,
            message: "email not found, please sign up first"
        });
        return
    }
    const isValidPassword = await bcrypt.compare(
        req.body.input.password,
        data.data.users[0].password
    );
    if (!isValidPassword) {
        res.json({
            token: false,
            id: null,
            name: null,
            email: null,
            phone_number: null,
            password: null,
            message: "Invalid Password"
        });
        return
    }

    const payload = {
        "https://hasura.io/jwt/claims": {
            "x-hasura-allowed-roles": ["admin", "user"],
            "x-hasura-default-role": "user",
            "x-hasura-user-id": data.data.users[0].id,
        },
        metadata: {
            "x-hasura-allowed-roles": ["admin", "user"],
            "x-hasura-default-role": "user",
            "x-hasura-user-id": data.data.users[0].id,
        },
    };
    const token = jwt.sign(payload, process.env.HASURA_GRAPHQL_JWT_SECRETS, {
        algorithm: "HS256",
        expiresIn: Date.now() + 1 * 24 * 60 * 60 * 1000
    })

    res.json({
        token: token,
        id: data.data.users[0].id,
        name: data.data.users[0].name,
        email: data.data.users[0].email,
        phone_number: data.data.users[0].phone_number,
        password: data.data.users[0].password,
        message: "success"
    });


}

module.exports = loginhandler
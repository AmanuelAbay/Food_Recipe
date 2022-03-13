const express = require("express");
const bodyParser = require("body-parser");
const signuphandler = require("./components/handlers/signup");
const loginhandler = require("./components/handlers/login");
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

const PORT = process.env.NODE_SERVER_PORT || 3000;


app.post('/signup', signuphandler)
app.post('/signin', loginhandler)

// app.get('/post', authenticateToken, async(req, res) => {
//     res.json({ post })
// })

// app.post('/login', async(req, res) => {
//     // Authenticate the User
//     const email = req.body.email;
//     const user = { email: email }

//     const accessToken = generateAccessToken(user) // generating token for a new user
//     const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET); // will be manually handelled
//     res.json({ accesstoken: accessToken, refreshToken: refreshToken });

// });

// function generateAccessToken(user) {
//     return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15s' })
// }

// function authenticateToken(req, res, next) {
//     const authHeader = req.headers['authorization']
//     const token = authHeader && authHeader.split(' ')[1]
//     if (token == null) return res.sendStatus(401)

//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//         if (err) return res.sendStatus(403);
//         req.user = user
//         next() // the next step will processed
//     });
// }

app.listen(PORT, () => {
    console.log("Server Running at port " + PORT + "...");
});
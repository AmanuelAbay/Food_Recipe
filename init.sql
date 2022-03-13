CREATE TABLE IF NOT EXISTS users(
    id  SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone_number VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS foods (
    id      SERIAL PRIMARY KEY,
    title    TEXT NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(255) NOT NULL,
    duration VARCHAR(255) NOT NULL,
    created_by INTEGER REFERENCES users(id) NOT NULL
);

CREATE TABLE IF NOT EXISTS steps(
    id         SERIAL PRIMARY KEY,
    step_number INTEGER NOT NULL,
    food_id    INTEGER NOT NULL REFERENCES foods(id),
    description        TEXT NOT NULL

);
CREATE TABLE IF NOT EXISTS ingredients(
    id SERIAL PRIMARY KEY,
    food_id INTEGER NOT NULL REFERENCES foods(id),
    name TEXT NOT NULL,
    amount INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS images(
    id          SERIAL PRIMARY KEY,
    image_status      VARCHAR(255) NOT NULL,
    food_id     INTEGER NOT NULL REFERENCES foods(id)
);

CREATE TABLE IF NOT EXISTS comments(
    id             SERIAL PRIMARY KEY,
    food_id        INTEGER REFERENCES foods(id) NOT NULL,
    comment        TEXT NOT NULL,
    comment_user_id        INTEGER REFERENCES users(id) NOT NULL,
    commented_date     date DEFAULT CURRENT_DATE
);

CREATE TABLE IF NOT EXISTS likes(
    id             SERIAL PRIMARY KEY,
    food_id        INTEGER REFERENCES foods(id) NOT NULL,
    like_user_id        INTEGER REFERENCES users(id) NOT NULL
);

CREATE TABLE IF NOT EXISTS favorites(
    id             SERIAL PRIMARY KEY,
    food_id        INTEGER REFERENCES foods(id) NOT NULL,
    favorite_user_id        INTEGER REFERENCES users(id) NOT NULL
);

CREATE TABLE IF NOT EXISTS rate(
    id             SERIAL PRIMARY KEY,
    food_id        INTEGER REFERENCES foods(id) NOT NULL,
    value          INTEGER NOT NULL,
    rate_user_id        INTEGER REFERENCES users(id) NOT NULL
);

INSERT INTO users (name, email, phone_number, password) VALUES 
('Amanuel', 'amanab.449@gmail.com', '+251936579595', 'password'),
('Kaleab', 'amanab.449@gmail.com', '+251936579595', '123'),
('Samuel', 'amanab.449@gmail.com', '+251936579595', '456'),
('Pop', 'amanab.449@gmail.com', '+251936579595', 'passw');

INSERT INTO foods (title, description, category, duration, created_by) VALUES 
('Burger', 'deslasjdfasjdf', 'Fruit', '3min', 1),
('Cake', 'deslasjdfasjdf', 'Fruit', '3min', 2),
('Salad', 'deslasjdfasjdf', 'Fruit', '3min', 1),
('Burgeriza', 'deslasjdfasjdf', 'Fruit', '3min', 2);

INSERT INTO comments (food_id, comment, comment_user_id) VALUES (1,'what a delicious food is it',1 );

INSERT INTO likes (food_id, like_user_id) VALUES (1,1);

INSERT INTO favorites (food_id, favorite_user_id) VALUES (1,2),(2,2),(3,1);
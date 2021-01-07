CREATE DATABASE project_manager;
\c project_manager

CREATE TABLE users(id SERIAL PRIMARY KEY, username TEXT, email TEXT, password_digest TEXT);

CREATE TABLE tasks(id SERIAL PRIMARY KEY, task_name TEXT, due_date TEXT, staff_id INTEGER, details TEXT, complete TEXT);

INSERT INTO tasks(task_name, due_date, details) VALUES('Task 1 - Tic Tac Toe', '2021 January 10', 'Let''s start out with something fun - a game! Everyone will get a chance to be creative, and work through some really tough programming challenges – Let''s start out with something fun - a game! We''ll be making tic tac toe (knots and crosses). What a nice surprise! But it''s up to you to come up with a fun and interesting approach to this classic game. You will be working individually for this project, but we''ll be guiding you along the process and helping you as you go. Show us what you''ve got!');

INSERT INTO tasks(task_name, due_date, details) VALUES ('Task 2 - CRUD Apps', '2021 February 01', 'Make a web apps that requires you to use create, read, update and delete apps.');

INSERT INTO tasks(task_name, due_date, details) VALUES('Task 3 - Front End', '2021 January 20', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque unde, optio temporibus, labore earum est aspernatur possimus itaque quidem porro molestiae sapiente maxime asperiores! Reiciendis nam dolor adipisci suscipit facilis!');

INSERT INTO tasks(task_name, due_date, details) VALUES('Task 4 - Server Part', '2021 January 20', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, laudantium reiciendis. Deserunt consequuntur maxime sunt aspernatur nemo tempore officia, illum neque. In deserunt omnis architecto dolore iure reiciendis distinctio pariatur!');

INSERT INTO tasks(task_name, due_date, details) VALUES('Task 5 - Stylish CSS', '2021 January 19', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum mollitia nulla aperiam cum labore consequuntur earum sapiente, obcaecati quia cumque libero iure quos, voluptate officia velit expedita eligendi suscipit voluptatibus?');

INSERT INTO tasks (task_name, due_date, details) VALUES ('Task 6 - HUHUHU Apps', '2021 February 01', 'Make a web apps that requires you to use create, read, update and delete apps.');

SELECT * FROM users;
SELECT * FROM tasks;

UPDATE tasks SET staff_id = '';
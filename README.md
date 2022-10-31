# NoSQL Social Network API (Sterling) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 📙 Table of Contents

- [Project Description](#project-description) 🚧

- [Installation](#installation) 💾

- [Usage](#usage) 🔑

- [Contributing](#contributing) 👨🏽‍💻

- [Tests](#tests) 🧪

- [License](#license) 📃

- [Questions](#questions) 🤔

## Project Description

This is an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

This application uses Express, Node, MongoDB and Mongoose to allow users, thoughts, friend lists and thought reactions to be created, updated, and deleted.

Watch a walkthrough video:

## Installation

- Clone GitHub repo
- npm init
- Ensure that MongoDB and Express are installed
- Invoke application using npm start

## Usage

**User**

- Get all users: `GET /api/users`
- Create a user: `POST /api/users`
- Get user by ID: `GET /api/users/:id`
- Update a user: `PUT /api/users/:id`
- Delete a user: `DELETE /api/users/:id`
- Add a friend: `PUT /api/users/:userId/friends/:friendId`
- Delete a friend: `DELETE /api/users/:userId/friends/:friendId`

**Thought**

- Get all thoughts: `GET /api/thoughts`
- Create a thought: `POST /api/thoughts`
- Get thought by ID: `GET /api/thoughts/:id`
- Update a thought: `PUT /api/thoughts/:id`
- Delete a thought: `DELETE /api/thoughts/:id`

**Reaction**

- Add a reaction: `PUT /api/thoughts/:id/reactions`
- Delete a reaction: `DELETE /api/thoughts/:id/reactions`

## Contributing

There are no contribution guidelines for this application,

## Tests

There are no tests for this application,

## License

Licensed under the MIT license

## Questions

- [Visit my GitHub](https://github.com/OvernightSolo)
- Drop me a line at sterlingtx75@gmail.com with your questions.
- Contact me on Twitter

  <a href="https://twitter.com/RobertScott6114">
  <img alt="Twitter: RobertScott6114" src="https://img.shields.io/twitter/follow/RobertScott6114.svg?style=social" target="_blank" />
  </a>

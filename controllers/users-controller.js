// require Users model
const { Users } = require("../models");

// Set up Users controller
const usersController = {
  // Create a new User
  createUsers({ body }, res) {
    Users.create(body)
      .then(dbUsersData => res.json(dbUsersData))
      .catch(err => res.status(400).json(err));
  },

  // Get all Users
  getAllUsers(req, res) {
    Users.find({})
      // Populate user thoughts
      .populate({ path: "thoughts", select: "-__v" })
      // Populate user friends
      .populate({ path: "friends", select: "-__v" })
      .select("-__v")
      .then(dbUsersData => res.json(dbUsersData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Get User by ID
  getUsersById({ params }, res) {
    Users.findOne({ _id: params.id })
      .populate({ path: "thoughts", select: "-__v" })
      .populate({ path: "friends", select: "-__v" })
      .select("-__v")
      .then(dbUsersData => {
        if (!dbUsersData) {
          res.status(404).json({ message: "There are no users with that ID" });
          return;
        }
        res.json(dbUsersData);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // Update a current User by ID
  updateUsers({ params, body }, res) {
    Users.findOneAndUpdate({ _id: params.id }, body, {
      new: true,
      runValidators: true,
    })
      .then(dbUsersData => {
        if (!dbUsersData) {
          res.status(404).json({ message: "There are no users with that ID" });
          return;
        }
        res.json(dbUsersData);
      })
      .catch(err => res.json(err));
  },

  //Delete a User by ID
  deleteUsers({ params }, res) {
    Users.findOneAndDelete({ _id: params.id })
      .then(dbUsersData => {
        if (!dbUsersData) {
          res.status(404).json({ message: "There are no users with that ID" });
          return;
        }
        res.json(dbUsersData);
      })
      .catch(err => res.status(400).json(err));
  },

  // Add a friend
  addFriend({ params }, res) {
    Users.findOneAndUpdate(
      { _id: params.id },
      { $push: { friends: params.friendId } },
      { new: true }
    )
      .populate({ path: "friends", select: "-__v" })
      .select("-__v")
      .then(dbUsersData => {
        if (!dbUsersData) {
          res.status(404).json({ message: "There are no users with that ID" });
          return;
        }
        res.json(dbUsersData);
      })
      .catch(err => res.json(err));
  },

  // Delete a friend
  deleteFriend({ params }, res) {
    Users.findOneAndUpdate(
      { _id: params.id },
      { $pull: { friends: params.friendId } },
      { new: true }
    )
      .populate({ path: "friends", select: "-__v" })
      .select("-__v")
      .then(dbUsersData => {
        if (!dbUsersData) {
          res.status(404).json({ message: "There are no users with that ID" });
          return;
        }
        res.json(dbUsersData);
      })
      .catch(err => res.status(400).json(err));
  },
};

module.exports = usersController;

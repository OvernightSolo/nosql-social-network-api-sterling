// Require Mongoose
const { Schema, model } = require("mongoose");

// set up Users Schema
const UsersSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // use regex to validate correct email
      match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thoughts",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "Users",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// get total friends count
UsersSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// create Users model using UsersSchema
const Users = model("Users", UsersSchema);

module.exports = Users;

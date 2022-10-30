// Require Mongoose and Moment.js
const { Schema, model, Types } = require("mongoose");
const moment = require("moment");

// Set up Reactions Schema
const ReactionsSchema = new Schema(
  {
    // set custom ID
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal =>
        moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

// Set up Thoughts Schema
const ThoughtsSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // Moment.js
      get: createdAtVal =>
        moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
    },
    username: {
      type: String,
      required: true,
    },
    // Use ReactionsSchema to validate data
    reactions: [ReactionsSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// get total reaction count
ThoughtsSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// create Thoughts model using ThoughtsSchema
const Thoughts = model("Thoughts", ThoughtsSchema);

module.exports = Thoughts;

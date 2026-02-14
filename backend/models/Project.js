const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide project title'],
      trim: true,
      maxlength: [100, 'Title cannot be more than 100 characters']
    },
    description: {
      type: String,
      required: [true, 'Please provide project description'],
      trim: true,
      maxlength: [1000, 'Description cannot be more than 1000 characters']
    },
    techStack: {
      type: [String],
      required: [true, 'Please provide tech stack'],
      validate: {
        validator: function(arr) {
          return arr.length > 0;
        },
        message: 'Tech stack must have at least one technology'
      }
    },
    githubLink: {
      type: String,
      trim: true,
      match: [/^https?:\/\/.+/, 'Please provide a valid URL']
    },
    liveLink: {
      type: String,
      trim: true,
      match: [/^https?:\/\/.+/, 'Please provide a valid URL']
    },
    imageUrl: {
      type: String,
      trim: true
    },
    featured: {
      type: Boolean,
      default: false
    },
    order: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Project', projectSchema);
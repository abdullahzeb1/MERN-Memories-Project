import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  creator: { type: String, require: true },
  title: { type: String, require: true },
  message: { type: String, require: true },
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
    require: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;

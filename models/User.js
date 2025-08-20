import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  bio: String,
  skillsToTeach: [String],
  skillsToLearn: [String]
});

export default mongoose.model('User', userSchema);

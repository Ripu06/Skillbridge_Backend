import mongoose from 'mongoose';

const requestSchema = new mongoose.Schema({
  senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  receiverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  skill: String,
  status: { type: String, default: 'pending' }
});

export default mongoose.model('Request', requestSchema);

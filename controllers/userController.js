import User from '../models/User.js';

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, '-password'); // Exclude passwords
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id, '-password');
    res.json(user);
  } catch (err) {
    res.status(404).json({ message: 'User not found' });
  }
};

export const updateUserProfile = async (req, res) => {
  try {
    const { name, bio, skillsToTeach, skillsToLearn } = req.body;

    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.name = name || user.name;
    user.bio = bio || user.bio;
    user.skillsToTeach = skillsToTeach || user.skillsToTeach;
    user.skillsToLearn = skillsToLearn || user.skillsToLearn;

    const updated = await user.save();
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

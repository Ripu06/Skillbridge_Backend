import Request from '../models/Request.js';

export const sendRequest = async (req, res) => {
  try {
    const { receiverId, skill } = req.body;

    const newRequest = new Request({
      senderId: req.user.id,
      receiverId,
      skill
    });

    const saved = await newRequest.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getRequestsForUser = async (req, res) => {
  try {
    const requests = await Request.find({
      $or: [
        { senderId: req.user.id },
        { receiverId: req.user.id }
      ]
    }).populate('senderId', 'name email').populate('receiverId', 'name email');

    res.json(requests);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

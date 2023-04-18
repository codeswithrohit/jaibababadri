import connectDB from '../../middleware/mongoose';
import { getSession } from 'next-auth/react';
import Order from '../../models/Order';

const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { email } = req.query;

  try {
    const orders = await Order.find({ email });
    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export default connectDB(handler);

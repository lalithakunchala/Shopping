import { Schema, model } from 'mongoose';

// Create Schema
const ItemSchema = new Schema({
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    unique: true
  },
  rating: {
    type: Number,
    required: true,
    unique: true
  },
  image: {
    type: String,
    required: true
  },
  posted_date: {
    type: Date,
    default: Date.now
  },
  posted_by: {
    type: string,
  }
});

const User = model('item', ItemSchema);

export default Item;
import { Schema, model } from 'mongoose';

// Create Schema
const AdminSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default:admin
  },
  register_date: {
    type: Date,
    default: Date.now
  }
});

const Admin = model('user', AdminSchema);

export default Admin;
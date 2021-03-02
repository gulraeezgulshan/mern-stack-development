import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
  first_name: {
    type: String,
    trim: true,
    required: "First Name is required",
  },
  last_name: {
    type: String,
    trim: true,
    required: "Last Name is required",
  },
  age: {
    type: Number,
    required: "Age is required",
  },
  salary: {
    type: Number,
    required: "Salary is required",
  },
  created: {
    type: Date,
    default: Date.now,
  },
  created_by: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
});

export default mongoose.model("Employee", EmployeeSchema);

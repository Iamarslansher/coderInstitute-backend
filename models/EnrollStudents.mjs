import mongoose from "mongoose";

const { Schema } = mongoose;

const enrollStudentSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  userPhone: {
    type: Number,
    required: true,
  },
  courseName: {
    type: String,
    required: true,
  },
  userImage: {
    type: String,
    required: true,
  },
  userId: {
    type: Number,
  },
});

const EnrollStudent = mongoose.model("enrollStudents", enrollStudentSchema);

export default EnrollStudent;

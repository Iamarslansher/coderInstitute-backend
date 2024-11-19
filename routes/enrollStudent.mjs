import express from "express";
import EnrollStudents from "../models/EnrollStudents.mjs";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + file.originalname;
    cb(null, uniqueSuffix);
  },
});

const upload = multer({ storage: storage });
const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const students = await EnrollStudents.find();
    res.send({
      message: "Enroll Students",
      data: students,
    });
  } catch (error) {
    res.send(error.message);
  }
});

router.post("/add", upload.single("userImage"), async (req, res) => {
  try {
    const { userName, userPhone, courseName, email } = req.body;
    const userImage = req.file.path;
    const userId = Math.floor(10000 + Math.random() * 90000);

    await EnrollStudents.create({
      userName,
      userPhone,
      courseName,
      email,
      userImage,
      userId,
    });
    res.send({
      message: "Student saved successfully",
    });
  } catch (error) {
    res.send({ message: error.message });
  }
});

export default router;

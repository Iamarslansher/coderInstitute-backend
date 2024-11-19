import express from "express";
import enrollStudent from "./enrollStudent.mjs";
import user from "./user.mjs";

const router = express.Router();

router.use("/users", user);
router.use("/enrollStudents", enrollStudent);

export default router;

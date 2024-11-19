import express from "express";
import db from "./config/db.mjs";
import routes from "./routes/index.mjs";
import cors from "cors";

const app = express();

app.use(express.json());

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET, POST, PUT, DELETE",
  Credentials: true,
};
app.use(cors(corsOptions));

app.use("/uploads", express.static("uploads"));

app.use("/", routes);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

db.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

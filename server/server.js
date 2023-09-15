import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from 'url';
import authMiddleware from "./routes/auth-config.js";
import gardenRouter from "./routes/gardens.js";
import homeRouter from './routes/home.js';
import plantRouter from './routes/plants.js';

/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(authMiddleware);

/* FILE STORAGE */
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

/* MONGOOSE DB CONNECTION */
const PORT = process.env.PORT || 6000;
const connection = process.env.dbUrl;
mongoose.connect(connection, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  app.listen(PORT, () => console.log(`MongoDB connected.. Listening on ${PORT}`));

  /* ADD DATA ONE TIME */
  // User.insertMany(users);
  // Post.insertMany(posts);
})
.catch((error) => console.log(`${error} did not connect`));

/* ROUTES */
app.use('/', homeRouter);
app.use('/gardens', gardenRouter);
app.use('/gardens/plants', plantRouter);
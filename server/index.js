require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

app.use(cors({ origin: process.env.ORIGIN || "http://localhost:3000" }));
app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use("/uploads", express.static("uploads"));

const authRoutes = require("./src/routes/auth");
const userRoutes = require("./src/routes/user");
const postRoutes = require("./src/routes/post");
const transactionRoutes = require("./src/routes/transaction");
const hireRoutes = require("./src/routes/hire");
const projectRoutes = require("./src/routes/project");
const artRoutes = require("./src/routes/art");

app.use("/api/v1/", authRoutes);
app.use("/api/v1/", userRoutes);
app.use("/api/v1/", postRoutes);
app.use("/api/v1/", transactionRoutes);
app.use("/api/v1/", hireRoutes);
app.use("/api/v1/", projectRoutes);
app.use("/api/v1/", artRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is listening to port: ${port}`));

import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import productRoutes from "./routers/product.route.js"

dotenv.config();

const app = express();

app.use(express.json()); // allow us to accept json data in the request body

app.use("/api/products/", productRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  connectDB();
  console.log("Server started on https://localhost:" + PORT);
});

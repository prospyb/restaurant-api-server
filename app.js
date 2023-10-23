import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import bodyParser from "body-parser";
import { config } from "./src/config/connect.js";
import { globalErrorHandler } from "./src/utils/errorHandler.js";

// The Routes
import { router as userRouter } from "./src/router/user.route.js";

// creating the express app
const app = express();

// database connection
mongoose.connect(config.mongodb_connection_url).then(() => console.log("Database Connection Established")).catch((e) => console.log(e.message));

// port configuration
const port = config.port || 8080

// middleware
app.use(morgan("tiny"));
app.use(express.json());
app.use(bodyParser.json());

// Routes
app.use("/api/restaurant/user", userRouter);

// globalerrorhandler
app.use(globalErrorHandler);

// setting up the express server
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
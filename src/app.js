import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));

app.use(express.json({ limit: "16kb" }))   // express.json()
app.use(express.urlencoded({ extended: true, limit: "16kb" }))    // express.urlencoded()
app.use(express.static("public"))
app.use(cookieParser())


// routes

import userRouter from "./routes/user.routes.js"
import commentRouter from "./routes/comment.routes.js";
import videoRouter from "./routes/video.routes.js";
import subscriptionRouter from "./routes/subscription.route.js";

// routes declaration
app.use("/api/v1/users", userRouter);  //http://localhost:8000/api/v1/users/register
app.use("/api/v1/comments", commentRouter);
app.use("/api/v1/videos", videoRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);


// export default app;
export { app }; 

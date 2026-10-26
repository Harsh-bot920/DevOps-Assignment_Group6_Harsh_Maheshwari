import "dotenv/config";
import express from "express";
import connectDB from "./config/database.js";
import cors from "cors";
import userRouter from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import chatRouter from "./routes/chatRouter.js";
import messageRouter from "./routes/messageRouter.js";
import { connectRedis } from "./config/redis.js";

const app = express();
const allowedOrigins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "http://localhost:5500",
    "http://127.0.0.1:5500",
    ...(process.env.FRONTEND_URL ? [process.env.FRONTEND_URL] : []),
];

app.use(cors({
    origin(origin, callback) {
        // Requests without an Origin header include health checks and local tools.
        if (!origin || allowedOrigins.includes(origin)) {
            return callback(null, true);
        }
        return callback(new Error("Origin is not allowed by CORS"));
    },
    credentials: true,
}));
app.use(express.json({ limit: "1mb" }));
app.use(cookieParser());

app.get("/health", (req, res) => {
    res.status(200).json({ status: "ok" });
});
app.use("/user", userRouter);
app.use("/chat", chatRouter);
app.use("/message", messageRouter);

const startServer = async () => {
    try {
        await connectDB();
        await connectRedis();
        const port = Number(process.env.PORT) || 3000;
        app.listen(port, () => {
            console.log(`Backend server is listening on port ${port}`);
        });
    } catch (err) {
        console.error("Server startup failed:", err.message);
        process.exit(1);
    }
};

startServer();

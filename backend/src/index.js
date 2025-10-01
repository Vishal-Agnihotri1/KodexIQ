const express = require('express');
const app = express();
require('dotenv').config();
const main = require('./config/db');
const cookieParser = require('cookie-parser');
const authRouter = require("./routes/userAuth");
const redisClient = require('./config/redis'); // Your redis client
const problemRouter = require("./routes/problemCreator");
const submitRouter = require("./routes/submit");
const aiRouter = require("./routes/aiChatting");
const videoRouter = require("./routes/videoCreator");
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.use('/user', authRouter);
app.use('/problem', problemRouter);
app.use('/submission', submitRouter);
app.use('/ai', aiRouter);
app.use("/video", videoRouter);

const InitalizeConnection = async () => {
    try {
        // Add listeners BEFORE trying to connect
        redisClient.on('connect', () => {
            console.log('✅ Successfully connected to Redis!');
        });

        redisClient.on('error', (err) => {
            console.error('❌ Could not connect to Redis. Error:', err);
        });

        // Connect to MongoDB and Redis
        await Promise.all([main(), redisClient.connect()]);
        
        console.log("All databases connected.");

        app.listen(process.env.PORT, () => {
            console.log("Server listening at port number: " + process.env.PORT);
        });

    } catch (err) {
        // This will now catch errors from MongoDB or other setup issues
        console.log("Failed to initialize server. Error: " + err);
    }
}

InitalizeConnection();
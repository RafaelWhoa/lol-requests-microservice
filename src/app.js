import express from 'express';
import loggerUtils from "./utils/logger.utils.js";
import {recieveMessageFromQueue} from "./utils/recieve_request.js";

const app = express();

app.listen(3000, () => {
  loggerUtils.info('Server is running on port 3000');
})

recieveMessageFromQueue('lol-requests')
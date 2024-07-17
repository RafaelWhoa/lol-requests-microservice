import { connect } from 'amqplib'
import {logger} from "./utils.index.js";
import dotenv from 'dotenv'
import {requests_controller} from "../controller/requests_controller.js";

dotenv.config();

export const recieveMessageFromQueue = async (queue) => {
    const amqpConnection = await connect('amqp://' + process.env.RABBITMQ_HOST);

    const channel = await amqpConnection.createChannel();

    await channel.assertQueue(queue, {
        durable: false
    });

    await channel.consume(queue, (message) => {
        logger.info(`Received message from queue ${queue}: ${message.content.toString()}`);
        requests_controller(message.content);
    }, {
        noAck: true
    });
}
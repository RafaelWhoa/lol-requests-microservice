import {connect} from "amqplib";
import dotenv from "dotenv";

dotenv.config();


export const send_response = async (queue, message) => {
    const amqpConnection = await connect('amqp://' + process.env.RABBITMQ_HOST);

    const channel = await amqpConnection.createChannel();

    await channel.assertQueue(queue, {
        durable: false
    })

    channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));

    setTimeout(function() {
        amqpConnection.close();
    }, 500);
}
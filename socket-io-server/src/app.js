'use strict'

import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

// socket.io
import { Server } from 'socket.io'
import Http from 'http'
import { startServer } from './providers/socketIo'

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

// initialize the server
const server = Http.createServer(app);
const io = new Server(server)
startServer(io).then(() => console.log('socket started'))

app.get("/api", (req, res) => {
  res.status(200).send({ message: "I am alive" });
});

export default app

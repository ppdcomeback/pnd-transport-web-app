import express from 'express'
import { json } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

let server = express()
server.use(json()) // ให้ server(express) ใช้งานการ parse json
server.use(morgan('dev')) // ให้ server(express) ใช้งานการ morgam module
server.use(cors()) // ให้ server(express) ใช้งานการ cors module

server.listen(3000, function () {
  console.log('Server Listen at http://localhost:3000')
})

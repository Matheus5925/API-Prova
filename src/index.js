import 'dotenv/config'

import express from 'express';
import cors from 'cors';

import endpoint from './endpoint.js'


const server = express();
server.use(cors());
server.use(express.json());

server.use(endpoint);



server.listen(process.env.PORT, 
                ()=> console.log(`API onLine rodando na porta ${process.env.PORT}`));
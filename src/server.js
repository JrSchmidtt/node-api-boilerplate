import dotenv from 'dotenv/config';
import express from 'express';
import session from 'express-session';
import router from './routes/router';
import cors from 'cors';
import morgan from 'morgan';

const server = express();
const secret = process.env.SECRET || 'secret';
const port = process.env.PORT || 3000;

server.use(cors());

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(morgan('dev'))

server.use(session({
    secret: secret, 
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
}));

server.use('/api', router);

server
    .listen(port, (err) => {
        if (err) throw err;
        console.log(`Server ready on http://localhost:${port}`);
    });
import dotenv, { config } from 'dotenv';

dotenv= config();

export const config = {
    server:{
        NODE_ENV: process.env.NODE_ENV || 'DEV',
        HOST: process.env.NODE_HOST || '127.0.0.1',
        PORT: process.env.PORT || 8080,
    },
    DB:{
        HOST: process.env.DB_MONGO_HOST || '127.0.0.1',
        PORT: process.env.DB_MONGO_PORT || 27070
    }
};
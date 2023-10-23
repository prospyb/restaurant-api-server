import dotenv from "dotenv";
dotenv.config();

export const config = {
    mongodb_connection_url: process.env.MONGODB_CONNECTION_URL,
    jwt_key: process.env.JWT_KEY,
    port: +process.env.PORT,
    bcrypt_salt_round: +process.env.BCRYPT_SALT_ROUND
}
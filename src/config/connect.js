import dotenv from "dotenv";
dotenv.config();

export const config = {
    mongodb_connection_url: process.env.MONGODB_CONNECTION_URL,
    jwt_key: process.env.JWT_KEY,
    port: +process.env.PORT,
    bcrypt_salt_round: +process.env.BCRYPT_SALT_ROUND,
    google_client_id: process.env.GOOGLE_CLIENT_ID,
    google_client_secret: process.env.GOOGLE_CLIENT_SECRET,
    google_callback_url: process.env.GOOGLE_CALLBACK_URL
}
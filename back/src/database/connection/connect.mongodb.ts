import * as mongoose from 'mongoose';
require('dotenv');

const connectMongoDb = async () => {
    try {
        mongoose.connect(process.env.URI);
        console.info('MongoDB en connexion...');
    } catch (err) {
        console.error(`Errreur de connexion à mongodb | ${err.message}`);
        process.exit(1);
    }
}

export default connectMongoDb;
// MongoDb clusterName:finly, databaseName: JustoSinak password: @Twopiece.23 or @twopiece.23

const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) throw new Error('MONGODB_URI is missing');
mongoose.connect(MONGODB_URI, {
dbName: 'JustoSinak',
bufferCommands: false,
});
console.log('Connected to MongoDB')


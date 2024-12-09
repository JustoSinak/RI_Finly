// MongoDb clusterName:finly, databaseName: JustoSinak password: @Twopiece.23 or @twopiece.23
// Connection String: mongodb+srv: JustoSinak:<db_password>@finly.99o9w.mongodb.net/?retryWrites=true&w=majority&appName=Finly


const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) throw new Error('MONGODB_URI is missing');
mongoose.connect(MONGODB_URI, {
dbName: 'JustoSinak',
bufferCommands: false,
});
console.log('Connected to MongoDB')


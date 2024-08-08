import mongoose from 'mongoose';

let isConnected = false

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)

    if (isConnected) {
        console.log('MongoDB is already connected')
        return
    }

    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: "share_prompt"
        })

        console.log('MongoDB is connected')
        isConnected = true
    } catch (error) {
        console.log('MongoDB connection failed')
    }
}
import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected', () => {
        console.log("Database Connected");
    })
    mongoose.connection.on('error', (err) => console.error("DB connection error:", err));

    await mongoose.connect(`${process.env.MONGODB_URI}/imagify?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

}

export default connectDB;
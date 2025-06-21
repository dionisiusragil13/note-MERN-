import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGGO_URI);
        console.log("MONGGODB CONNECTED")
    } catch (error) {
        console.error("error connecting to MonggoDB",error);
        process.exit(1)
    }
}
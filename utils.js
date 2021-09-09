import { MongoClient } from "mongodb"

export   const connectToDb = async () =>{
    const client = await MongoClient.connect(process.env.MONGODB_URI)
    const db = client.db()
    return {db , client}
}

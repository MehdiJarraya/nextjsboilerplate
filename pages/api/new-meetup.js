//URL is =>  /api/new-meetup

// we can define api logic here and in pages to prevent usless api call :)

import {MongoClient} from 'mongodb'


async function handler(req, res){
    // POST /api/new-meetup
    if(req.method==='POST'){
        const data=req.body;
        // const {title, image, address, description}=data
        const client= await  MongoClient.connect("mongodb+srv://mehdi:0000@cluster0.hqkwb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
        const db=client.db();
        const meetupsCollection = db.collection('meetups')
       const result = await meetupsCollection.insertOne(data);
       console.log("result", result);
       client.close()
       res.status(201).json({message:"Meetup inserted sucesseffly"})
    }
}

export default handler
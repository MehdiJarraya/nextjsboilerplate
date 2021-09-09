
import MeetupDetailsComponent from "../../components/meetups/MeetupDetail"
import { MongoClient, ObjectId } from "mongodb"
import Head from "next/head"

export default function MeetupDetails({ meetupData }) {
    return (
        <>
            <Head>
                <title> {meetupData.title} </title>
                <meta name="description" content={meetupData.description}></meta>
            </Head>
            <MeetupDetailsComponent {...meetupData} />
        </>
    )
}

export async function getStaticPaths() {
    const client = await MongoClient.connect("mongodb+srv://mehdi:0000@cluster0.hqkwb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    const db = client.db()
    const meetupsCollection = db.collection('meetups')
    // find first argument for filter createra sooo => {} will fetch all element
    // find second argument for field  
    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray()

    client.close()

    return {
        fallback: false,
        //=> paths contains all the id and if user type inexistinting id => redirect to 404
        // fallback: true,
        // => next will try generate page for this inexistinting id from server while request

        paths: meetups.map(item => ({
            params: {
                meetupId: item._id.toString()
            }
        }))
        // paths: [
        //     {
        //         params: {
        //             meetupId: 'm1'
        //         }
        //     },
        //     {
        //         params: {
        //             meetupId: 'm2'
        //         }
        //     },
        // ]
    }

}

export async function getStaticProps(context) {

    const meetupId = context.params.meetupId
    const client = await MongoClient.connect("mongodb+srv://mehdi:0000@cluster0.hqkwb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    const db = client.db()
    const meetupsCollection = db.collection('meetups')
    // find first argument for filter createra sooo => {} will fetch all element
    // find second argument for field  
    const selectedMeetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) })
    console.log("selectedMeetup", selectedMeetup)

    return {
        props: {
            // we must do this bellow otherwise we will get Error serializing `.meetupData._id` 
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                description: selectedMeetup.description,
                image: selectedMeetup.image,
                address: selectedMeetup.address,
            }
        }

    }

}

import MeetupDetailsComponent from "../../components/meetups/MeetupDetail"
import {MongoClient} from "mongodb"

export default function MeetupDetails({ meetupData }) {
    return (
        <MeetupDetailsComponent {...meetupData} />
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
        //     {
        //         params: {
        //             meetupId: 'm3'
        //         }
        //     }
        // ]
    }

}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId
    return {
        props: {
            meetupData: {
                id: meetupId,
                image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                title: "first meetup yeaaaaaa",
                address: "chotrana 1 ariana",
                description: "Bloublba blablalb description"
            }
        }

    }

}
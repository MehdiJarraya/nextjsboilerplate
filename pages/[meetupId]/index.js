
import MeetupDetailsComponent from "../../components/meetups/MeetupDetail"


export default function MeetupDetails({ meetupData }) {
    return (
        <MeetupDetailsComponent {...meetupData} />
    )
}

export async function getStaticPaths() {
    return {
        fallback: false,
        //=> paths contains all the id and if user type inexistinting id => redirect to 404
        // fallback: true,
        // => next will try generate page for this inexistinting id from server while request

        paths: [
            {
                params: {
                    meetupId: 'm1'
                }
            },
            {
                params: {
                    meetupId: 'm2'
                }
            },
            {
                params: {
                    meetupId: 'm3'
                }
            }
        ]
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
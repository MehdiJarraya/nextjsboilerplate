
import MeetupList from "../components/meetups/MeetupList"


const meetups = [
  {
    id: 1,
    title: "meetup 1",
    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    address: " ariana 1",
    description: "description 1"
  },
  {
    id: 2,
    title: "meetup 2",
    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    address: " ariana 2",
    description: "description 2"
  },
  {
    id: 3,
    title: "meetup 3",
    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    address: " ariana 3",
    description: "description 3"
  },
]

export default function Home() {
  return (

        <MeetupList meetups={meetups} />

  )
}

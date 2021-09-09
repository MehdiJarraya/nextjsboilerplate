
import MeetupList from "../components/meetups/MeetupList"


const staticData = [
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

export default function Home({ meetups }) {

  return (

    <MeetupList meetups={meetups} />

  )
}

// getStaticPropos pedefined method that return an obj => can be used only in next.js pages 
export async function getStaticProps(){
return {
  props:{
    meetups:staticData
  },
  // revalidate each 10 seconds
  revalidate: 10
}}

//  will not run in the build process BUT it will run in server!! after request
// not like useEffect that's run on client and miss item html (bad for seo)
// this code will be executed in server!!
// more secure usefull for authentification and data that changes frequencly
// slower than getStaticProps
export async function getServerSideProps(context) {
  //  access to request and response ;)
  const req= context.req
  const res=context.res
  return {
    props: {
      meetups: staticData
    },
  }

}

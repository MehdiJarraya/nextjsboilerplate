import Head from "next/head"
import MeetupList from "../components/meetups/MeetupList"
import { MongoClient } from "mongodb"
// When using a package only in getStaticProps/getServerPropos
//  Next.js will detect that and the package will not be a part of CLIENT bundle ;))))
// good for bundle size and for security ;)



export default function Home({ meetups, backendMeetup }) {


  return (
<>
<Head>
  <title> Next.js tutorial</title>
  <meta name="description" content="This is description for google search engine"></meta>
</Head>
{/* {  JSON.stringify(meetups)}
{JSON.stringify(JSON.parse(backendMeetup))} */}
<MeetupList meetups={meetups} />
</>
    

  )
}

// getStaticPropos pedefined method that return an obj => can be used only in next.js pages 
export async function getStaticProps() {

  const client = await MongoClient.connect("mongodb+srv://mehdi:0000@cluster0.hqkwb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
  const db = client.db()
  const meetupsCollection = db.collection('meetups')
  const meetups = await meetupsCollection.find().toArray()
  client.close()

  return {
    props: {
      // to prevent Error serializing _id returned from `getStaticProps` we have generate new array OR JSON.stringifybackend result
      // not clear :/
      meetups: meetups.map(item => ({
        title:item.title,
        description:item.description,
        image:item.image,
        address:item.address,
        // _id mongoDb is object => toString
        id: item._id.toString()
      })),
      backendMeetup:JSON.stringify(meetups),
    },
    // revalidate each 10 seconds
    revalidate: 10
  }
}

//  will not run in the build process BUT it will run in server!! after request
// not like useEffect that's run on client and miss item html (bad for seo)
// this code will be executed in server!!
// more secure usefull for authentification and data that changes frequencly
// slower than getStaticProps
// export async function getServerSideProps(context) {
//   //  access to request and response ;)
//   const req= context.req
//   const res=context.res
//   return {
//     props: {
//       meetups: staticData
//     },
//   }

// }

import { useRouter } from 'next/dist/client/router';
import React from 'react'
import NewMeetupForm from "../../components/meetups/NewMeetupForm"

export default function NewMeetup() {
    const router=useRouter()
    async function addMeetup(newMeetupData) {
        console.log("newMeetupData", newMeetupData);
        const response = await fetch('/api/new-meetup', {
            body: JSON.stringify(newMeetupData),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(" response json data", data);
        router.push('/')

    }
    return (
        <NewMeetupForm onAddMeetup={addMeetup} />
    )
}

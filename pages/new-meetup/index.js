import React from 'react'
import NewMeetupForm from "../../components/meetups/NewMeetupForm"

export default function NewMeetup() {

    function addMeetup(data){
        console.log("data", data);
    }
    return (
        <NewMeetupForm onAddMeetup={addMeetup} />
    )
}

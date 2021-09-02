import NewMeetupForm from '../components/meetups/NewMeetupForm'

export default function new_meetup() {
    const addMeetup = meetupData => {
        console.log(meetupData)
    }

    return <NewMeetupForm onAddMeetup={addMeetup} />
}

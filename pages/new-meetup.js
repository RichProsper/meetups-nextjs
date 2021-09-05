import NewMeetupForm from '../components/meetups/NewMeetupForm'

export default function new_meetup() {
    const addMeetup = async meetupData => {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json',
            }
        })

        const data = await response.json()
        console.log(data)
    }

    return <NewMeetupForm onAddMeetup={addMeetup} />
}

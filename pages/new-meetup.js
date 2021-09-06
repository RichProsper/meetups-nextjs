import NewMeetupForm from '../components/meetups/NewMeetupForm'
import { useRouter } from 'next/router'
import Head from 'next/head'

export default function new_meetup() {
    const router = useRouter()

    const addMeetup = async meetupData => {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json',
            }
        })

        router.push('/') //Return to Home Page
    }

    return (
        <>
            <Head>
                <title>New Meetup</title>
                <meta name='description' content='Save your favorite Meetup spots' />
                <meta name="keywords" content="Meetups, Places, Spots"></meta>
            </Head>
            <NewMeetupForm onAddMeetup={addMeetup} />
        </>
    )
}

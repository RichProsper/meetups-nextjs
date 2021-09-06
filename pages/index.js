import MeetupList from '../components/meetups/MeetupList'
import { MongoClient } from 'mongodb'
import Head from 'next/head'

export default function index({ meetups }) {
    return (
        <>
            <Head>
                <title>All Meetups</title>
                <meta name='description' content='Browse your saved favorite Meetup spots' />
                <meta name="keywords" content="Meetups, Places, Spots"></meta>
            </Head>
            <MeetupList meetups={meetups} />
        </>
    )
}

export const getStaticProps = async () => {
    const client = await MongoClient.connect('mongodb+srv://richp:richPMongod1b@cluster0.rsa9t.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db()
    const meetupsCollection = db.collection('meetups')

    const meetups = (await meetupsCollection.find().toArray()).map(meetup => {
        return {
            id: meetup._id.toString(),
            title: meetup.title,
            image: meetup.image,
            address: meetup.address,
        }
    })
    client.close()

    return {
        props: {
            meetups
        },
        revalidate: 60 //Rebuild and redeploy every 60 seconds
    }
}
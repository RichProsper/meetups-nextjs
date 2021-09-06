import React from 'react'
import { MongoClient, ObjectId } from 'mongodb'
import Head from 'next/head'

export default function meetup_details({ meetup }) {
    return (
        <>
            <Head>
                <title>{meetup.title}</title>
                <meta name='description' content={meetup.description} />
                <meta name="keywords" content="Meetups, Places, Spots"></meta>
            </Head>
            <img
                src={meetup.image}
                alt={meetup.title}
                style={{width: '500px', height: 'auto'}}
            />
            <h1>{meetup.title}</h1>
            <address>{meetup.address}</address>
            <p>{meetup.description}</p>
        </>
    )
}

export const getStaticPaths = async () => {
    const client = await MongoClient.connect('mongodb+srv://richp:richPMongod1b@cluster0.rsa9t.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db()
    const meetupsCollection = db.collection('meetups')

    const meetupIds = await meetupsCollection.find({}, {_id: 1}).toArray()
    client.close()

    return {
        fallback: 'blocking',
        paths: meetupIds.map(meetup => {
            return {
                params: { meetupId: meetup._id.toString() }
            }
        })
    }
}

export const getStaticProps = async context => {
    const id = context.params.meetupId

    const client = await MongoClient.connect('mongodb+srv://richp:richPMongod1b@cluster0.rsa9t.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db()
    const meetupsCollection = db.collection('meetups')

    const meetup = await meetupsCollection.findOne({_id: ObjectId(id)})
    client.close()

    return {
        props: {
            meetup: {
                id: meetup._id.toString(),
                title: meetup.title,
                image: meetup.image,
                address: meetup.address,
                description: meetup.description
            }
        }
    }
}
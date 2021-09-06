import { MongoClient } from "mongodb"

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body

        if (data) {
            const client = await MongoClient.connect('mongodb+srv://richp:richPMongod1b@cluster0.rsa9t.mongodb.net/meetups?retryWrites=true&w=majority')
            const db = client.db()
            const meetupsCollection = db.collection('meetups')

            const result = await meetupsCollection.insertOne(data)

            client.close()

            res.status(201).json({ message: 'Meetup inserted' })
        }
        else {
            res.status(400).json({ message: 'Missing Payload!' })
        }
    }
    else {
        res.status(400).json({ message: `Request method ${req.method} not allowed!` })
    }
}
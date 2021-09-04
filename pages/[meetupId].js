import React from 'react'

export default function meetup_details({ meetupDetails }) {
    return (
        <div id={meetupDetails.id}>
            <img
                src={meetupDetails.image}
                alt={meetupDetails.title}
            />
            <h1>{meetupDetails.title}</h1>
            <address>{meetupDetails.address}</address>
            <p>{meetupDetails.description}</p>
        </div>
    )
}

export const getStaticPaths = async () => {
    return {
        fallback: false,
        paths: [
            { params: {meetupId: '1'} },
            { params: {meetupId: '2'} }
        ]
    }
}

export const getStaticProps = async context => {
    const id = context.params.meetupId

    return {
        props: {
            meetupDetails: {
                id,
                image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.gvn-zUVatq-nVTY4mnV8bAHaEK%26pid%3DApi&f=1',
                title: 'First Meetup',
                address: '1234 Address',
                description: 'Meetup Description'
            }
        }
    }
}
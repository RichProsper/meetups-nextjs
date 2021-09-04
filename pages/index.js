import MeetupList from '../components/meetups/MeetupList'

export default function index({ meetups }) {
    return <MeetupList meetups={meetups} />
}

export const getStaticProps = async () => {
    // Fetch data from an API
    return {
        props: {
            meetups: [
                {
                    id: 1,
                    title: 'First Meet',
                    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.gvn-zUVatq-nVTY4mnV8bAHaEK%26pid%3DApi&f=1',
                    address: 'Address',
                    desc: 'Description'
                },
                {
                    id: 2,
                    title: 'Second Meet',
                    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpoper.com%2Fimages%2F00%2F29%2F00%2F25%2Fforest_00290025.jpg&f=1&nofb=1',
                    address: 'Address',
                    desc: 'Description'
                }
            ]
        },
        revalidate: 60 //Rebuild and redeploy every 10 seconds
    }
}
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import { useRouter } from 'next/router'

function MeetupItem({ meetup }) {
  const router = useRouter()

  const showDetails = () => {
    router.push(`/${meetup.id}`)
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={meetup.image} alt={meetup.title} />
        </div>
        <div className={classes.content}>
          <h3>{meetup.title}</h3>
          <address>{meetup.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetails}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;

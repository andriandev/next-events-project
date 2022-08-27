import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
import Button from '../shared/button';
import styles from './EventItem.module.css';

function EventItem(props) {
  const { id, title, image, date, location } = props;

  const humanDate = new Date(date).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formatAddress = location.replace(', ', '\n');

  const exploreLink = `/events/${id}`;

  return (
    <li className={styles.item}>
      <img src={`/assets/img/${image}`} alt={title} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{humanDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{formatAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={exploreLink}>
            <span>Explore Link</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;

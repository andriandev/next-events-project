import { useRouter } from 'next/router';
import { getEventById } from '../../app/data';
import EventSummary from '../../app/components/event-detail/event-summary';
import EventLogistic from '../../app/components/event-detail/event-logistics';
import EventContent from '../../app/components/event-detail/event-content';
import ErrorAlert from '../../app/components/events/ErrorAlert';
import Button from '../../app/components/shared/button';

function EventDetailPage() {
  const router = useRouter();

  const eventId = router.query.event_id;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <>
        <ErrorAlert>
          <p className="center">Event not found!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistic
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}

export default EventDetailPage;

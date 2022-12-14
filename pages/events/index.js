import { useRouter } from 'next/router';
import { getAllEvents } from '../../app/data';
import EventList from '../../app/components/events/EventList';
import EventSearch from '../../app/components/events/EventSearch';

function AllEventsPage() {
  const router = useRouter();
  const events = getAllEvents();

  function findEventHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </>
  );
}

export default AllEventsPage;

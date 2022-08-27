import { getFeaturedEvents } from '../app/data';
import EventList from '../app/components/events/EventList';

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <>
      <EventList items={featuredEvents} />
    </>
  );
}

export default HomePage;

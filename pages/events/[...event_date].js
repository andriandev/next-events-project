import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../app/data';
import EventList from '../../app/components/events/EventList';
import ResultsTitle from '../../app/components/events/ResultsTitle';
import ErrorAlert from '../../app/components/events/ErrorAlert';
import Button from '../../app/components/shared/button';

function FilteredEventsPage() {
  const router = useRouter();

  const filterData = router.query.event_date;

  if (!filterData) {
    return (
      <>
        <ErrorAlert>
          <p className="center">Loading...</p>
        </ErrorAlert>
      </>
    );
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (isNaN(numYear) || isNaN(numMonth) | (numMonth > 12) || numMonth < 1) {
    return (
      <>
        <ErrorAlert>
          <p className="center">Invalid Filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p className="center">No events found!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
}

export default FilteredEventsPage;

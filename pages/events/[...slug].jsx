import { useEffect, useState } from "react";
import { getFilteredEvents } from "../../helpers/api";
import { useRouter } from 'next/router';
import EventCard from "../../components/events/EventCard";
import Link from 'next/link';

export default function EventSearchPage() {
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [noEvents, setNoEvents] = useState(false);
  const router = useRouter();

  const url = router.asPath;
  
  const segments = url.split("/");
  const year = segments[segments.length - 1];
  const month = segments[segments.length - 2];

  useEffect(() => {
    getFilteredEvents(year, month).then((data) => {
      !data.length ? setNoEvents(true) : setFilteredEvents(data);
    });
  }, []);

  if (
    isNaN(year) ||
    year > 2030 ||
    year < 2020 
  ) {
    return (
      <>
        <p>Invalid filter. Please adjust your values!</p>
      </>
    );
  }

  return (
    <div className='EventSearchPage'>
      {noEvents && <p>No Events</p>}
      {filteredEvents.map((event) => {
        return <EventCard event={event} key={event.id} />;
      })}
      <Link href='/'>
        <p>Back to all events</p>
      </Link>
    </div>
  );
}

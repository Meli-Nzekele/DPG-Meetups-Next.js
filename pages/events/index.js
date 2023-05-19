import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getAllEvents } from "/helpers/api";
import EventList from "/components/events/EventList";
import EventsSearch from "@/components/events/EventSearch";
import Loader from "/components/Loader";

function AllEventsPage() {
  const [events, setEvents] = useState([]);
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  useEffect(() => {
    getAllEvents().then((events) => {
      setEvents(events);
    });
  }, []);

  if (!events.length) {
    return <Loader />
  }

  return (
    <>
      <h1 className="main_title">All Events</h1>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList events={events} />
    </>
  );
}

export default AllEventsPage;

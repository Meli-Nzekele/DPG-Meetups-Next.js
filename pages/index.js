import { getFeaturedEvents } from "/helpers/api";
import EventList from "./../components/events/EventList";
import { useState, useEffect } from "react";
import Loader from "/components/Loader";

export default function Homepage() {
  const [featuredEvents, setFeaturedEvents] = useState([]);

  useEffect(() => {
    getFeaturedEvents().then((events) => {
      setFeaturedEvents(events);
    });
  }, []);

  if (!featuredEvents.length) {
    return <Loader />
  }

  return (
    <div className="Homepage">
      <h1 className="main_title">Welcome to DevOps Playground Events Page</h1>
      <EventList events={featuredEvents} />
    </div>
  );
}



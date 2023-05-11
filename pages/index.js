import { getFeaturedEvents } from "/helpers/api";
import EventList from "./events";
import { useState, useEffect } from "react";

export default function Homepage() {
  const [featuredEvents, setFeaturedEvents] = useState([]);

  useEffect(() => {
    getFeaturedEvents().then((events) => {
      setFeaturedEvents(events);
    });
  }, []);

  if (!featuredEvents.length) {
    return <p>Loading...</p>;
  }

  return (
    <div className='Homepage'>
      <h1>ALL EVENTS</h1>
      <EventList events={featuredEvents}/>
    </div>
  );
}
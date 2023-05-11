import { getFeaturedEvents } from "/helpers/api";
import EventList from "./../components/events/EventList";
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
      <h1>WELCOME TO DEVOPS PLAYGROUND EVENTS PAGE</h1>
      <h2>Featured Events</h2>
      <EventList events={featuredEvents}/>
    </div>
  );
}
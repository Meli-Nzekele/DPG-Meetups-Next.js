import { useEffect, useState } from "react";
import { getEventById } from "/helpers/api";
import { useRouter } from "next/router";

export default function IndividualEventPage() {
  const router = useRouter();
  const { eventid } = router.query;
  const [event, setEvent] = useState();

  useEffect(() => {
    getEventById(eventid).then((data) => {
      setEvent(data);
    });
  }, [eventid]);

  if (isNaN(eventid)) {
    return (
      <>
        <p>Invalid URL</p>
      </>
    );
  }

  if (!event) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{event.title}</h1>
      <h2>{event.date}</h2>
      <h3>{event.location}</h3>
      <p>{event.description}</p>
    </div>
  );
}

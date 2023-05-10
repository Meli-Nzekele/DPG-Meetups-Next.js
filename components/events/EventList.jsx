import EventCard from "./EventCard";
export default function EventList({ events }) {
  return (
    <div className='event_list'>
      {events.map((event) => {
        return <EventCard event={event} key={event.id} />;
      })}
    </div>
  );
}

import Link from 'next/link';

export default function EventCard({ event }) {
  const eventid = event.id;
  return (
    <div className='event_card'>
      <Link href={`/events/${eventid}`}>{event.title}</Link>
      <p>{event.date}</p>
      <p>{event.location}</p>
    </div>
  );
}

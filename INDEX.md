pages/index.js - Code executed during DevOpsPlayground Session with Alicia Barczak

```js
// import { getFeaturedEvents } from "/helpers/api";
import EventList from "./../components/events/EventList";
import { MongoClient } from "mongodb";
// import { useState, useEffect } from "react";
// import Loader from "/components/Loader";
// import fs from "fs/promises";
// import path from "path";

export default function Homepage({featuredEvents}) {
  // const [featuredEvents, setFeaturedEvents] = useState([]);

  // useEffect(() => {
  //   getFeaturedEvents().then((events) => {
  //     setFeaturedEvents(events);
  //   });
  // }, []);

  // if (!featuredEvents.length) {
  //   return <Loader />
  // }

  return (
    <div className="Homepage">
      <h1 className="main_title">Welcome to DevOps Playground Events Page</h1>
      <EventList events={featuredEvents} />
    </div>
  );
}

//  File Emoji from Mongo DB
// export async function getStaticProps() {
//   const featuredEvents = await getFeaturedEvents();
  
//   return {
//     props: {
//       featuredEvents,
//     }
//   }
// }

// export async function getStaticProps() {
// const filepath = path.join(process.cwd(), "data", "events_data.json");
// const jsonData = await fs.readFile(filepath);
// const allEvents = JSON.parse(jsonData);

// const featuredEvents = allEvents.events.filter(event => event.featured);

// return {
//   props: {
//     featuredEvents,
//   }
// }
// }


//  Bread Emoji from Mongo DB
export async function getStaticProps() {
  const DB_STRING = `mongodb+srv://${process.env.mongoDB_username}:${process.env.mongoDB_password}@cluster0.qonetii.mongodb.net/meetups?retryWrites=true&w=majority`;
  const client = await MongoClient.connect(DB_STRING);

  const db = client.db();

  const meetupCollection = db.collection("meetups");
  const events = await meetupCollection.find().toArray();

  client.close();

  const featuredEvents = events.filter(event => event.featured);

  return {
    props: {
      featuredEvents: featuredEvents.map((event) => ({
        date: event.date,
        description: event.description,
        featured: event.featured,
        location: event.location,
        presenters: event.presenters,
        title: event.title,
        id: event._id.toString(),
      })),
    }
  };
}
```

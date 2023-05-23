### Prerequisites (Your own machine)
This playground uses the following technology so you will need to check they are installed:

-   Web Browser
-   Code IDE (we use VS Code)
-   Terminal (We use Bash)
-   Node.js

_**Network**_  The following ports will be used for the application and testing:
-   3000 -> React application
-   3001 -> Next.js application


# Getting Started

The playground uses React 18 and Next.js 13. Although no existing knowledge of either will be needed for this playground it would be beneficial to have basic knowledge of Javascript.

# Introduction

In this playground, we'll explore React Server Components using Next.js, a leading framework for server-side web application development.

In the first part of our session, we'll dive into the emerging trend in Front-End Development, focusing on the migration of logic from the client to the server. This strategic shift addresses common challenges such as slow load times and Search Engine Optimization concerns, offering potential solutions.

In the second part, we'll delve into React Server Components and their pivotal role in transforming React into a comprehensive full-stack framework. We'll unlock the possibilities offered by Server-Side Rendering and React Server Components, showcasing how this approach enables developers to tackle the aforementioned challenges in web development.

# Part 1 

In this section, we will explore the inner workings of a traditional React application. Our focus will narrow down to a specific timeframe within the application's lifecycle, specifically the events that unfold between a user entering a URL into the browser and the moment they witness meaningful content on the page.

<img width="668" alt="Screenshot 2023-05-23 at 10 06 27" src="https://github.com/DevOpsPlayground/DPG-Meetups-Next.js/assets/101208108/9db157cc-5d35-4171-8ebe-b741d77ec4d5">

We will conclude that... 

# Part 2 

In this part, we will transform a traditional React application from being client-side rendered to being server-side rendered using Next.js.

##  Setting up the infrastructure:

### 1. Steps for running the Next.js application in the browser

#### Step 1
Go to: https://lab.devopsplayground.org/ 

This should bring up the following page:

<img width="581" alt="Screenshot 2023-05-23 at 11 29 42" src="https://github.com/DevOpsPlayground/DPG-Meetups-Next.js/assets/101208108/431705d0-fabd-4ee9-83d5-a4b8ec9c1257">


#### Step 2
Enter YOUR OWN NAME AND SURNAME in the username box like in the following example. Make sure to use capital letters as per the example below:  

<img width="640" alt="Screenshot 2023-05-23 at 11 31 32" src="https://github.com/DevOpsPlayground/DPG-Meetups-Next.js/assets/101208108/dd37b03c-2e64-46f0-917a-fdd00ac923bd">

Once done, click submit.


#### Step 3
The submit button should take you to a page that looks like this:

<img width="544" alt="Screenshot 2023-05-23 at 11 33 12" src="https://github.com/DevOpsPlayground/DPG-Meetups-Next.js/assets/101208108/a8e6b536-6926-4ae6-a72a-5c19e7f4d207">

 Essentially, you should have access to a terminal and a IDE (VS Code) links. 
 
 
#### Step 4
Copy and paste the terminal link into the address bar of your browser. This should take you to the terminal that looks something like this:

<img width="687" alt="Screenshot 2023-05-23 at 11 35 57" src="https://github.com/DevOpsPlayground/DPG-Meetups-Next.js/assets/101208108/7076d659-525e-4f96-a9c4-839c740bd6f7">


#### Step 5
As prompted, enter the following password: 

> Next23


*Please be aware that when entering your password, it will not be visibly displayed on the screen as you type it. If you made a mistake, just refresh the page and try again.*

If you have successfully logged in, your terminal should display the following message:

<img width="675" alt="Screenshot 2023-05-23 at 11 41 04" src="https://github.com/DevOpsPlayground/DPG-Meetups-Next.js/assets/101208108/7fc373ff-4bb2-434d-ba7b-7a1e96a4327c">

#### Step 6
Run the following commands in the terminal in the following order:

 1. > cd workdir
  2.  > cd DPG-Meetups-Next.js
   3. > npm i
    4. > npm run dev

If all of your commands executed correctly, your terminal should display the following outputs:

<img width="1113" alt="Screenshot 2023-05-23 at 11 51 57" src="https://github.com/DevOpsPlayground/DPG-Meetups-Next.js/assets/101208108/15dfee9f-7797-4d2a-b0a6-1c4c1f5431f2">


#### Step 7
**KEEPT THE TERMINAL PAGE RUNNING** and open a new browser tab. 


#### Step 8
Go back to your terminal page and copy the terminal page URL. The URL should be a link ending in "devopsplayground.org:5050/wetty". For example:

<img width="517" alt="Screenshot 2023-05-23 at 11 53 44" src="https://github.com/DevOpsPlayground/DPG-Meetups-Next.js/assets/101208108/46b41768-de12-461b-8e6c-dc2ad5779c92">


#### Step 9
In the new tab that you have opened as part of step 7 above, paste the terminal page URL that you have just copied as part of step 8. **DO NOT PRESS ENTER**.


#### Step 10
Edit the URL that you have just copied into the new browser tab as part of step 9 by replacing "5050/wetty" with "3001". Your edited URL should look something like this:

<img width="424" alt="Screenshot 2023-05-23 at 11 57 33" src="https://github.com/DevOpsPlayground/DPG-Meetups-Next.js/assets/101208108/7dbea636-4365-4d91-844a-112eb432169d">


#### Step 11
Press enter and check your application is running correctly. If it is running correctly, it should look like this:

<img width="1697" alt="Screenshot 2023-05-23 at 11 58 33" src="https://github.com/DevOpsPlayground/DPG-Meetups-Next.js/assets/101208108/f97b0bfa-5204-44bb-9dad-72a29ad3b4ae">

If you are having any issues, please ask for help 😊. 

### Opening the Next.js application in VS Code

#### Step 1

Go back to https://lab.devopsplayground.org/.

If you need to, enter your name and surname again into the username box. 

You should be presented with the following page: 

<img width="544" alt="Screenshot 2023-05-23 at 11 33 12" src="https://github.com/DevOpsPlayground/DPG-Meetups-Next.js/assets/101208108/a8e6b536-6926-4ae6-a72a-5c19e7f4d207">

#### Step 2

Copy the IDE link

Open a new tab and paste that link into the address bar of the new tab. 

You should be presented with VS Code which should look something like this:

<img width="1720" alt="Screenshot 2023-05-23 at 12 22 14" src="https://github.com/DevOpsPlayground/DPG-Meetups-Next.js/assets/101208108/c7c00fcd-cd46-4f57-9ed8-7e80850f9438">


#  Solutions

##  Aim 1: fetch data from an API on the server using React Server  Component

 1. In VS Code, go to the index.js file which sits inside of the pages folder:

<img width="351" alt="Screenshot 2023-05-23 at 13 47 24" src="https://github.com/DevOpsPlayground/DPG-Meetups-Next.js/assets/101208108/cbea5182-6e7d-4527-832e-325eda0f0fec">

if you are in the right file, you should be presented with this code:

```
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
```

2. At the bottom of the file and OUTSIDE of the Homepage component, we will create a React Server Component using Next.js ```getStaticProps``` function. 
3. Inside of this function, we will return an object with a key of props:

```
export async function getStaticProps() {
  return {
    props: {
      featuredEvents,
    }
  }
}
```

The complete code will now look like this:

```
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

export async function getStaticProps() {
  return {
    props: {
      featuredEvents,
    }
  }
}

```

4. We will now use the same API call as we are currently using inside of the useEffect to fetch the featuredEvents data inside of getStaticProps:

```
export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  
  return {
    props: {
      featuredEvents,
    }
  }
}

```

5. Once we have fetched featuredEvents from the API inside of getStaticProps, we can go back to put Homepage component and deconstruct the featuredEvents that we are passing from getStaticProps as props:

```
export default function Homepage({featuredEvents}) {

[rest of the code...]

}

```

6. Once we have the featuredEvent data already in the Homepage component, we remove any refrences to client side data fetching from that component. We will therefore delete:
- the useState hook
- the useEffect hook
- the Loader component 
- all imports that we are no longer using

Consiqently, our code should look like this:


```
import { getFeaturedEvents } from "/helpers/api";
import EventList from "./../components/events/EventList";

export default function Homepage({featuredEvents}) {
  return (
    <div className="Homepage">
      <h1 className="main_title">Welcome to DevOps Playground Events Page</h1>
      <EventList events={featuredEvents} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      featuredEvents,
    }
  }
}

```

Our application should look like this:
<img width="1724" alt="Screenshot 2023-05-23 at 14 05 29" src="https://github.com/DevOpsPlayground/DPG-Meetups-Next.js/assets/101208108/8819a459-1a19-44c8-a953-ed2457212409">


##  Aim 2: read data from a filesystem  on the server using React Server Component

1. Comment out the current getStaticProps component or remove all of the code inside of it so it is empty for us to work with. 
2. You can also remove the getFeaturedEvents import at the top of the page so the overall code looks like this:

```
import EventList from "./../components/events/EventList";

export default function Homepage({featuredEvents}) {
  return (
    <div className="Homepage">
      <h1 className="main_title">Welcome to DevOps Playground Events Page</h1>
      <EventList events={featuredEvents} />
    </div>
  );
}

export async function getStaticProps() {

}
```

3. at the top of the page, we will import the fs module from node:
```
import fs from "fs/promises"
```
4. We will use fs's ``readFile`` method inside of the getStaticProps function and await its data:

```
export async function getStaticProps() {
const jsonData = await fs.readFile();
}

```

5. We will then construct the path between our current working directory and the file we are trying to read. To do that, we will import ``path`` from node and create a new varibale inside of getStaticProps where we can hold our constructed path. We can then ensure that the constructed path is consumed by ``fs.readFile()``:

```import "path" from "path" 

....

export async function getStaticProps() {
  const filepath = path.join(process.cwd(), "data", "events", "events_data.json")
  const jsonData = await fs.readFile(filepath);
}

```
6. We can now parse the data that we received from ``readFile()`` using the JSON object:

```
export async function getStaticProps() {
  const filepath = path.join(process.cwd(), "data", "events", "events_data.json")
  const jsonData = await fs.readFile(filepath);
  const allEvents = JSON.parse(jsonData);
}

```

7. Lastly, we will return the data in ``allEvents`` using an object with a props key. Our completed ``getStaticProps`` function should look like this:

```
export async function getStaticProps() {
  const filepath = path.join(process.cwd(), "data", "events", "events_data.json")
  const jsonData = await fs.readFile(filepath);
  const allEvents = JSON.parse(jsonData);

  return {
    props: {
      allEvents: allEvents.events
    }
  }
}
```

8. We can now return to our Homepage component and ensure that:
 - we are destructuring the correct key (allEvents): 
 ```
 export  default  function  Homepage({ allEvents }) {
 
 ....
 
 }
 ```
 - and we are filtering out featured events using the featured key:

```
export default function Homepage({allEvents}) {

  const featuredEvents = allEvents.filter(event => event.featured);
  
  return (
    <div className="Homepage">
      <h1 className="main_title">Welcome to DevOps Playground Events Page</h1>
      <EventList events={featuredEvents} />
    </div>
  );
}
```

9. the complete solution should look like this:

```
import EventList from "./../components/events/EventList";
import fs from "fs/promises"
import path from "path"

export default function Homepage({allEvents}) {

  const featuredEvents = allEvents.filter(event => event.featured);
  
  return (
    <div className="Homepage">
      <h1 className="main_title">Welcome to DevOps Playground Events Page</h1>
      <EventList events={featuredEvents} />
    </div>
  );
}

export async function getStaticProps() {
  const filepath = path.join(process.cwd(), "data", "events", "events_data.json")
  const jsonData = await fs.readFile(filepath);
  const allEvents = JSON.parse(jsonData);

  return {
    props: {
      allEvents: allEvents.events
    }
  }
}

```

10. Our running application should look like this:

<img width="1696" alt="Screenshot 2023-05-23 at 14 35 53" src="https://github.com/DevOpsPlayground/DPG-Meetups-Next.js/assets/101208108/7b6b0317-e414-44ad-a21d-475963024334">


##  Aim 3: fetch data directly from a database on the server using React Server Component

1. Comment out the current getStaticProps component or remove all of the code inside of it so it is empty for us to work with. 
2. At the top of the file, we will import Mongo Client from monogodb.

```import { MongoClient } from "mongodb"```

4. Inside of getStaticProps, we need to estblish connection with MongoDB. We will use the ``MongoClient`` we have just imported as well as the connection string provided by MongoDB to do this. However we have ammended that string so it uses enviroment varibales which include our credentials. 

```
export async function getStaticProps() {
  const DB_STRING = `mongodb+srv://${process.env.mongoDB_username}:${process.env.mongoDB_password}@cluster0.qonetii.mongodb.net/meetups?retryWrites=true&w=majority`;
  const client = await MongoClient.connect(DB_STRING);
}

```

5. Once we have established connection, we can connect to the database. 

```
export async function getStaticProps() {
  const DB_STRING = `mongodb+srv://${process.env.mongoDB_username}:${process.env.mongoDB_password}@cluster0.qonetii.mongodb.net/meetups?retryWrites=true&w=majority`;
  const client = await MongoClient.connect(DB_STRING);

  const db = client.db();
}
```

6. We can now connect to the collection which stores our data:

```
export async function getStaticProps() {
  const DB_STRING = `mongodb+srv://${process.env.mongoDB_username}:${process.env.mongoDB_password}@cluster0.qonetii.mongodb.net/meetups?retryWrites=true&w=majority`;
  const client = await MongoClient.connect(DB_STRING);

  const db = client.db();

  const meetupCollection = db.collection("meetups");

}
```

7. Finally, we can retrive data from our collection as follows and turn it into an array for us to work with: 

```
export async function getStaticProps() {
  const DB_STRING = `mongodb+srv://${process.env.mongoDB_username}:${process.env.mongoDB_password}@cluster0.qonetii.mongodb.net/meetups?retryWrites=true&w=majority`;
  const client = await MongoClient.connect(DB_STRING);

  const db = client.db();

  const meetupCollection = db.collection("meetups");
  const events = await meetupCollection.find().toArray();

}
```

8. Don't forget to close connection to your database once the data has been retrived: 

```
export async function getStaticProps() {
  const DB_STRING = `mongodb+srv://${process.env.mongoDB_username}:${process.env.mongoDB_password}@cluster0.qonetii.mongodb.net/meetups?retryWrites=true&w=majority`;
  const client = await MongoClient.connect(DB_STRING);

  const db = client.db();

  const meetupCollection = db.collection("meetups");
  const events = await meetupCollection.find().toArray();

  client.close();

}
```

9. Now we can return the retrived data: 

```
export async function getStaticProps() {
  const DB_STRING = `mongodb+srv://${process.env.mongoDB_username}:${process.env.mongoDB_password}@cluster0.qonetii.mongodb.net/meetups?retryWrites=true&w=majority`;
  const client = await MongoClient.connect(DB_STRING);

  const db = client.db();

  const meetupCollection = db.collection("meetups");
  const events = await meetupCollection.find().toArray();

  client.close();

  return {
    props: {
      events: events.map((event) => ({
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

10. the complete solution should look like this:

```
import EventList from "./../components/events/EventList";
import { MongoClient } from "mongodb"

export default function Homepage({allEvents}) {

  const featuredEvents = allEvents.filter(event => event.featured);

  return (
    <div className="Homepage">
      <h1 className="main_title">Welcome to DevOps Playground Events Page</h1>
      <EventList events={featuredEvents} />
    </div>
  );
}

export async function getStaticProps() {
  const DB_STRING = `mongodb+srv://${process.env.mongoDB_username}:${process.env.mongoDB_password}@cluster0.qonetii.mongodb.net/meetups?retryWrites=true&w=majority`;
  const client = await MongoClient.connect(DB_STRING);

  const db = client.db();

  const meetupCollection = db.collection("meetups");
  const events = await meetupCollection.find().toArray();

  client.close();

  return {
    props: {
      events: events.map((event) => ({
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

import React, { useState } from "react";
import EventsList from "../components/EventsList";
const dummy = {
  events: [
    {
      id: "e1",
      title: "A dummy event",
      date: "2023-02-22",
      image:
        "https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg",
      description:
        "Join this amazing event and connect with fellow developers.",
    },
  ],
};
const EventsPage = () => {
  const [eventsList, setEventsList] = useState(dummy.events);
  return (
    <>
      <EventsList events={eventsList} />
    </>
  );
};

export default EventsPage;

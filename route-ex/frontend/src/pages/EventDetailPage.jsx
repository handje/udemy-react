import { useParams } from "react-router-dom";
import EventItem from "../components/EventItem";

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

const EventDetailPage = () => {
  const { id } = useParams();
  const [event] = dummy.events.filter((ev) => ev.id === id);
  return (
    <>
      <EventItem event={event} />
    </>
  );
};

export default EventDetailPage;

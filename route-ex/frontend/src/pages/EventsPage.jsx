import EventsList from "../components/EventsList";
import { json, useLoaderData } from "react-router-dom";

function EventsPage() {
  const data = useLoaderData();
  const events = data?.events;

  return <EventsList events={events} />;
}

export default EventsPage;

//loader코드는 브라우저에서 실행(서버x)
export const eventsLoader = async () => {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: "Fetching events failed." }), {
    //   status: 500,
    // });
    throw json({ message: "Fetching events failed." }, { status: 500 });
  } else {
    return response;
  }
};

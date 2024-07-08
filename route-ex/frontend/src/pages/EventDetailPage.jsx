import { json, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const data = useRouteLoaderData("event-detail");
  return (
    <>
      <EventItem event={data?.event} />
    </>
  );
};

export default EventDetailPage;

export const eventDetailLoader = async ({ request, params }) => {
  const id = params.id;
  const response = await fetch(`http://localhost:8080/events/${id}`);
  if (!response.ok) {
    throw json({ message: "Fetching event failed." }, { status: 500 });
  } else {
    return response;
  }
};

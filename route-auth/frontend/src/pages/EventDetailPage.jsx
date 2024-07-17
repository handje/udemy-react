import {
  Await,
  defer,
  json,
  redirect,
  useRouteLoaderData,
} from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

const EventDetailPage = () => {
  const { event, events } = useRouteLoaderData("event-detail");
  return (
    <>
      <Suspense fallback={<p>loading...</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p>loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
};

export default EventDetailPage;

const loadEvent = async (id) => {
  const response = await fetch(`http://localhost:8080/events/${id}`);
  if (!response.ok) {
    throw json({ message: "Fetching event failed." }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData?.event;
  }
};
const loadEvents = async () => {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    throw json({ message: "Fetching events failed." }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData?.events;
  }
};

export const eventDetailLoader = async ({ request, params }) => {
  const id = params.id;
  return defer({
    event: await loadEvent(id),
    events: loadEvents(),
  });
};

export const eventDetailAction = async ({ request, params }) => {
  const id = params.id;
  const response = await fetch(`http://localhost:8080/events/${id}`, {
    method: request.method,
  });
  if (!response.ok) {
    throw json({ message: "Deleting event failed." }, { status: 500 });
  }
  return redirect("/events");
};

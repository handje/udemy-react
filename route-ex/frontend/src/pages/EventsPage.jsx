import { Suspense } from "react";
import EventsList from "../components/EventsList";
import { Await, defer, json, useLoaderData } from "react-router-dom";

function EventsPage() {
  const { events } = useLoaderData();
  console.log(events);
  // const events = data?.events;
  // return <EventsList events={events} />;
  return (
    <Suspense fallback={<p>loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

//loader코드는 브라우저에서 실행(서버x)
const loader = async () => {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: "Fetching events failed." }), {
    //   status: 500,
    // });
    throw json({ message: "Fetching events failed." }, { status: 500 });
  } else {
    // return response;
    const resData = await response.json();
    return resData?.events;
  }
};

export const eventsLoader = () => {
  return defer({
    events: loader(),
  });
};

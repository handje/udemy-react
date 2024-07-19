import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import EventsPage, { eventsLoader } from "./pages/EventsPage";
import NewEventPage from "./pages/NewEventPage";
import EventDetailPage, {
  eventDetailAction,
  eventDetailLoader,
} from "./pages/EventDetailPage";
import EditEventPage from "./pages/EditEventPage";
import EventsRoot from "./pages/EventsRoot";
import Error from "./pages/Error";
import { formAction } from "./components/EventForm";
import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter";
import Authentication, { action as authAction } from "./pages/Authentication";
import { action as logoutAction } from "./pages/Logout";
import { tokenLoader, checkAuthLoader } from "./utils/authToken";

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <Root />,
    loader: tokenLoader,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRoot />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: formAction,
            loader: checkAuthLoader,
          },
          {
            id: "event-detail",
            path: ":id",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: eventDetailAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: formAction,
                loader: checkAuthLoader,
              },
            ],
          },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
      {
        path: "auth",
        element: <Authentication />,
        action: authAction,
      },
      {
        path: "logout",
        action: logoutAction,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

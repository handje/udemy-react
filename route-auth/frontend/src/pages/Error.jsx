import React from "react";
import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";

const Error = () => {
  let title = "Error!";
  let message = "Something went wrong!";
  const error = useRouteError();

  if (error.status === 404) {
    title = "Page not found";
    message = "Invalid URL";
  }
  if (error.status === 500) {
    title = "Internal Server Error";
    message = error.data.message;
  }
  if (error.status === 401 || error.status === 422) {
    title = "Dont accessable";
    message = error.data.message;
  }
  console.log(error);
  return (
    <PageContent title={title}>
      <p>{error?.data?.message || message}</p>
    </PageContent>
  );
};

export default Error;

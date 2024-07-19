import React, { useEffect } from "react";
import {
  Outlet,
  useLoaderData,
  useNavigation,
  useSubmit,
} from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import { getTokenDuration } from "../utils/authToken";

const Root = () => {
  const navigation = useNavigation();
  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    if (!token) {
      return;
    }
    if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
      return;
    }
    const duration = getTokenDuration();
    console.log(duration);
    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, duration);
  }, [token, submit]);
  return (
    <>
      <MainNavigation />
      <main>
        {navigation.state === "loading" ? <p>Loading...</p> : <Outlet />}
      </main>
    </>
  );
};

export default Root;

import { redirect } from "react-router-dom";

export const getTokenDuration = () => {
  const tokenDuration = localStorage.getItem("expiration");
  const expirationDate = new Date(tokenDuration);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
};

export const getAuthToken = () => {
  const response = localStorage.getItem("token");
  const tokenDuration = getTokenDuration();
  if (!response) {
    return null;
  }

  if (tokenDuration < 0) {
    return "EXPIRED";
  }
  return response;
};

export const tokenLoader = () => {
  return getAuthToken();
};

export const checkAuthLoader = () => {
  const token = getAuthToken();

  if (!token) {
    return redirect("/");
  }

  return null;
};

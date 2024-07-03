import { useCallback, useEffect, useState } from "react";

const sendHttpRequest = async (url, config) => {
  const response = await fetch(url, config);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(
      data.message || "Something went wrong, failed to send request."
    );
  }
  return data;
};

const useHttp = (url, config, initial) => {
  const [data, setData] = useState(initial);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const clearData = () => {
    setData(initial);
  };
  const sendRequest = useCallback(
    async (bodyData) => {
      setIsLoading(true);
      try {
        const resData = await sendHttpRequest(url, {
          ...config,
          body: bodyData,
        });
        setData(resData);
      } catch (err) {
        setError(err.message || "Something went wrong!");
      }
      setIsLoading(false);
    },
    [url, config]
  );

  useEffect(() => {
    if ((config && (config.method === "GET" || !config.method)) || !config) {
      sendRequest();
    }
  }, [sendRequest, config]);

  return {
    data,
    isLoading,
    error,
    sendRequest,
    clearData,
  };
};

export default useHttp;

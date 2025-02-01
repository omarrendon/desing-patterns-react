import React, { useCallback, useEffect, useMemo, useState } from "react";

interface IUseFetchProps<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useFetch<T>(url: string): IUseFetchProps<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>("");

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      const dataResponse = await response.json();
      setData(dataResponse);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    }
    setIsLoading(false);
  }, [url]);

  const memoizedData = useMemo(() => data, [data]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data: memoizedData,
    error,
    isLoading,
    refetch: fetchData,
  };
}

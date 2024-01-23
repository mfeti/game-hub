import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchResponse<T> {
    count: number;
    previous?: string;
    next?: string;
    results: T[];
  }

const useData = <T>(endpoint: string) => {
    const [data, setData] = useState<T[]>([]);
    const [errors, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
      const controller = new AbortController();
      setLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
        .then((res) => {
          setLoading(false);
          setData(res.data.results);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });
  
      return () => controller.abort();
    }, []);
  
    return { data, errors, isLoading };
  };

  export default useData;
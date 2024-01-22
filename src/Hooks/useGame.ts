import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Game {
    id: number;
    name: string;
  }
  interface FetchGameResponse {
    count: number;
    previous?: string;
    next?: string;
    results: Game[];
  }
const useGame = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [errors, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGameResponse>("/games", {signal:controller.signal})
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message)});

      return ()=> controller.abort();
  }, []);

  return {games, errors}
};
export default useGame;

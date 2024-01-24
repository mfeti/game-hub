import genres from "../Data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () => {return {data:genres, errors:null, isLoading:null}};

export default useGenre;

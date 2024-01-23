import useGenre from "../Hooks/useGenre";

const GenreList = () => {
  const { data } = useGenre();
  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;

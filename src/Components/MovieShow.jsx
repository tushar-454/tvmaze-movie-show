import { useParams } from 'react-router-dom';

const MovieShow = () => {
  const { movieId } = useParams();
  return <div>this is the movie show component - id {movieId}</div>;
};

export default MovieShow;

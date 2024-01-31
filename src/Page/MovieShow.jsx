import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MovieDetailsCard from '../Components/MovieDetailsCard';
import Container from '../Components/Shared/Container';
import SectionTitle from '../Components/Shared/SectionTitle';

const MovieShow = () => {
  const { movieId } = useParams();
  // get the single movie details from the api using axios and tanstack/react-query
  const {
    data: singleMovie,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['singleMovie'],
    queryFn: async () => {
      const response = await axios.get(
        `https://api.tvmaze.com/shows/${movieId}`,
      );
      return response.data;
    },
  });
  return (
    <main className='bg-slate-50'>
      <Container>
        <div className='py-10'>
          <SectionTitle
            title={`Here is the details of ${
              !isLoading && singleMovie?.name
            } movie show`}
            subTitle={
              'You can see the details of the movie show here. And book your ticket. Enjoy!'
            }
          />
          {/* signle movie details card  */}
          {isError ? (
            <div>There was an error whdile fetching the data.</div>
          ) : !isLoading ? (
            <MovieDetailsCard singleMovie={singleMovie} />
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </Container>
    </main>
  );
};

export default MovieShow;

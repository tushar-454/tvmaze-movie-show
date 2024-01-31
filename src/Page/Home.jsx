import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import MovieCard from '../Components/MovieCard';
import Container from '../Components/Shared/Container';
import SectionTitle from '../Components/Shared/SectionTitle';

const Home = () => {
  // data fetch from api using tanstack/react-query and axios for caching data and better experience
  const {
    data: movies,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['movies'],
    queryFn: async () => {
      const response = await axios.get(
        `https://api.tvmaze.com/search/shows?q=all`,
      );
      return response.data;
    },
  });
  return (
    <main className='bg-slate-50'>
      <Container>
        <div className='py-10'>
          <SectionTitle
            title={'Our All Movies'}
            subTitle={
              'Here You will found old or new movies. Check it and enjoy your self.'
            }
          />
          {/* all movies layout show here  */}
          {isError ? (
            <div>There was an error.</div>
          ) : (
            <div className='grid grid-cols-1 gap-5 py-10 md:grid-cols-2 lg:grid-cols-3'>
              {isLoading ? (
                <div>Loading...</div>
              ) : (
                movies?.map((movie, index) => (
                  <MovieCard key={index} movie={movie} />
                ))
              )}
            </div>
          )}
        </div>
      </Container>
    </main>
  );
};

export default Home;

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetailsCard from '../Components/MovieDetailsCard';
import Container from '../Components/Shared/Container';
import SectionTitle from '../Components/Shared/SectionTitle';
import Tickets from '../Components/Tickets';

const MovieShow = () => {
  const { movieId } = useParams();
  const [tickets, setTickets] = useState([]);
  console.log(tickets);
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
  useEffect(() => {
    // get the tickets from the local storage
    const tickets = localStorage.getItem('ticketInformation');
    if (tickets) {
      setTickets(JSON.parse(tickets));
    }
  }, []);
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
            <MovieDetailsCard
              setTickets={setTickets}
              singleMovie={singleMovie}
            />
          ) : (
            <div>Loading...</div>
          )}
        </div>
        {tickets.length > 0 && <Tickets tickets={tickets} />}
      </Container>
    </main>
  );
};

export default MovieShow;

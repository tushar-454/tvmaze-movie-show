import PropTypes from 'prop-types';
import { HiOutlineCalendar, HiOutlineLocationMarker } from 'react-icons/hi';
import { MdOutlineSportsScore } from 'react-icons/md';
import ReactStars from 'react-rating-stars-component';
import Button from './UI/Button';

const MovieCard = ({ movie }) => {
  const { score, show } = movie;
  return (
    <div className='rounded-xl border p-4'>
      {/* movie image  */}
      <div>
        <img
          src={show?.image?.original || 'https://cutt.ly/NwZBfaFg'}
          alt={`${show?.name} movie poster`}
          className='h-[500px] w-full cursor-pointer rounded-xl object-cover transition-all hover:object-contain'
        />
      </div>
      {/* movie details  */}
      <div className='border-b py-4'>
        <h1 className='text-xl font-bold'>{show?.name || 'Movie Name'}</h1>
        <p className='text-base font-normal'>{`This is a ${show?.type} type ${show?.language} movie, Premiered on ${show?.premiered}.`}</p>
        <ReactStars
          value={show?.rating?.average || 0}
          size={20}
          isHalf={true}
          edit={false}
        />
      </div>
      {/* movie location and available time  */}
      <div className='space-y-2 py-4 text-gray-600'>
        <div className='flex items-center gap-3 text-base font-normal'>
          <HiOutlineLocationMarker className='text-xl' />
          <p>
            {show?.network?.country?.name || 'Unknown'} -{' '}
            {show?.network?.country?.code || 'Unknown'} -{' '}
            {show?.network?.country?.timezone || 'Unknown'}
          </p>
        </div>
        <div className='flex items-center gap-3 text-base font-normal'>
          <HiOutlineCalendar className='text-xl' />
          <p>
            {show?.schedule?.days.length > 0 ? show?.schedule?.days : 'Unknown'}{' '}
            at {show?.schedule?.time || 'Unknown'}
          </p>
        </div>
        <div className='flex items-center gap-3 text-base font-normal'>
          <MdOutlineSportsScore className='text-xl' />
          <p>{score || 0}</p>
        </div>
        {/* movie show genres  */}
        <div className='flex flex-wrap gap-4'>
          {show?.genres?.map((genre, index) => (
            <span key={index} className='rounded-full bg-white px-3 py-1'>
              {genre}
            </span>
          ))}
        </div>
      </div>
      {/* movie booked button  */}
      <Button path={`movie/${show?.id}`}>View Summary</Button>
    </div>
  );
};
MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};
export default MovieCard;

import PropTypes from 'prop-types';
import { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import BookedForm from './BookedForm';
import Button from './UI/Button';

const MovieDetailsCard = ({ singleMovie }) => {
  const [isShowBookForm, setIsShowBookForm] = useState(false);
  const { name, type, language, premiered, image, summary, rating } =
    singleMovie;
  return (
    <>
      <div className='relative py-8 sm:py-10'>
        <div className='flex flex-col justify-center gap-5 md:flex-row'>
          {/* single movie left side poster */}
          <div className='w-full md:w-1/2 lg:w-1/3'>
            <img
              src={image?.original || 'https://cutt.ly/NwZBfaFg'}
              alt={`poster of ${name}`}
              className='h-[500px] w-full rounded-lg object-contain'
            />
          </div>
          {/* single movie right side details */}
          <div className='w-full md:w-1/2 lg:w-2/3'>
            {/* movie details  */}
            <div className='border-b py-4'>
              <h1 className='text-xl font-bold'>{name || 'Movie Name'}</h1>
              <p className='text-base font-normal'>{`This is a ${type} type ${language} movie, Premiered on ${premiered}.`}</p>
              <ReactStars
                value={rating?.average || 0}
                size={20}
                isHalf={true}
                edit={false}
              />
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: summary }}
              className='mt-5'
            />
            <Button
              path={''}
              style={{ width: '200px' }}
              onClick={() => setIsShowBookForm(!isShowBookForm)}
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
      {isShowBookForm && (
        <BookedForm
          name={name}
          type={type}
          language={language}
          setIsShowBookForm={setIsShowBookForm}
        />
      )}
    </>
  );
};
MovieDetailsCard.propTypes = {
  singleMovie: PropTypes.object.isRequired,
};
export default MovieDetailsCard;

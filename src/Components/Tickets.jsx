import PropTypes from 'prop-types';
import { useState } from 'react';
import SectionTitle from './Shared/SectionTitle';
import Ticket from './Ticket';

const Tickets = ({ tickets }) => {
  const [showTickets, setShowTickets] = useState(false);
  return (
    <div>
      <SectionTitle title={'View All Ticket'} subTitle='' />
      <button
        type='button'
        className='my-4 w-[200px] rounded-full bg-deep-teal-100/50 p-2 transition hover:bg-deep-teal-100 active:bg-deep-teal-200'
        onClick={() => setShowTickets(!showTickets)}
      >
        {showTickets ? 'Hide All' : 'Show All'}
      </button>
      {showTickets && (
        <div className='grid grid-cols-1 gap-4 py-10 sm:grid-cols-2 lg:grid-cols-3'>
          {tickets?.map((ticket, index) => (
            <Ticket ticket={ticket} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};
Tickets.propTypes = {
  tickets: PropTypes.array.isRequired,
};
export default Tickets;

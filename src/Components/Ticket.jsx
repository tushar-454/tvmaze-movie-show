import PropTypes from 'prop-types';
const Ticket = ({ ticket }) => {
  const { movieName, time, date, seat, hall, name, email } = ticket;
  return (
    <div className='rounded-lg bg-blue-500 p-4 shadow-md'>
      <div className='mb-4 flex items-center justify-between'>
        <h2 className='text-xl font-bold text-white'>Movie Ticket</h2>
        <span className='text-gray-200'>Seat: {seat || 0}</span>
      </div>
      <div className='rounded-lg bg-white p-4'>
        <div className='mb-2 flex items-center justify-between'>
          <span className='text-gray-500'>Movie:</span>
          <span className='font-bold'>{movieName || ''}</span>
        </div>
        <div className='mb-2 flex items-center justify-between'>
          <span className='text-gray-500'>Date:</span>
          <span className='font-bold'>{date || ''}</span>
        </div>
        <div className='mb-2 flex items-center justify-between'>
          <span className='text-gray-500'>Time:</span>
          <span className='font-bold'>{time || ''}</span>
        </div>
        <div className='mb-2 flex items-center justify-between'>
          <span className='text-gray-500'>Hall Room:</span>
          <span className='font-bold'>{hall || ''}</span>
        </div>
        <div className='mb-2 flex items-center justify-between'>
          <span className='text-gray-500'>Owner:</span>
          <span className='font-bold'>{name || ''}</span>
        </div>
        <div className='flex flex-wrap items-center justify-between'>
          <span className='text-gray-500'>Email:</span>
          <span className='font-bold'>{email || ''}</span>
        </div>
      </div>
    </div>
  );
};
Ticket.propTypes = {
  ticket: PropTypes.object.isRequired,
};
export default Ticket;

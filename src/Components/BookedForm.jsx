import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { RxCross2 } from 'react-icons/rx';
import bookingFromError from '../Utils/bookingFromError';
import Input from './UI/Input';
const BookedForm = ({ name, type, language, setIsShowBookForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all', resolver: bookingFromError });
  // handle book movie show ticket
  const onSubmit = (data) => {
    const ticketInformation = {
      ...data,
      movieName: name,
      movieType: type,
      movieLanguage: language,
    };
    // store ticket information in local storage
    if (localStorage.getItem('ticketInformation') === null) {
      localStorage.setItem(
        'ticketInformation',
        JSON.stringify([ticketInformation]),
      );
    } else {
      const existingTicket = JSON.parse(
        localStorage.getItem('ticketInformation'),
      );
      localStorage.setItem(
        'ticketInformation',
        JSON.stringify(existingTicket.concat(ticketInformation)),
      );
    }
    toast.success('Ticket Booked Successfully');
    setIsShowBookForm(false);
  };
  return (
    <div className='absolute left-0 top-0 flex h-screen w-screen items-start justify-center bg-[#00000050] xl:items-center'>
      <div className='my-10 rounded-lg border bg-white shadow-2xl'>
        <div className='relative overflow-auto p-10'>
          {/* minimize the form icon */}
          <div
            className='absolute right-2 top-2'
            onClick={() => setIsShowBookForm(false)}
          >
            <RxCross2 className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-black text-3xl font-bold text-white transition-all hover:scale-105 active:scale-95' />
          </div>
          <h1 className='mb-5 whitespace-nowrap text-center text-3xl font-bold'>
            Book Your Ticket
          </h1>
          <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col gap-4 sm:flex-row'>
              <Input
                label={'Name'}
                type={'text'}
                id={'name'}
                name={'name'}
                placeholder={'Ali Hossain'}
                register={{ ...register('name', { required: true }) }}
                error={errors.name && errors.name.message}
              />
              <Input
                label={'Email'}
                type={'email'}
                id={'email'}
                name={'email'}
                placeholder={'alihossain@gmail.com'}
                register={{ ...register('email', { required: true }) }}
                error={errors.email && errors.email.message}
              />
            </div>
            <div className='flex flex-col gap-4 xl:flex-row'>
              <Input
                label={'Movie Name'}
                type={'text'}
                id={'MovieName'}
                name={'MovieName'}
                defaultValue={name}
                register={{}}
                error={''}
                disabled
              />
              <Input
                label={'Movie Type'}
                type={'text'}
                id={'MovieType'}
                name={'MovieType'}
                defaultValue={type}
                register={{}}
                error={''}
                disabled
              />
              <Input
                label={'Movie Language'}
                type={'text'}
                id={'MovieLanguage'}
                name={'MovieLanguage'}
                defaultValue={language}
                register={{}}
                error={''}
                disabled
              />
            </div>
            <div className='flex flex-col gap-4 sm:flex-row'>
              <Input
                label={'Date'}
                type={'date'}
                id={'date'}
                name={'date'}
                register={{ ...register('date', { required: true }) }}
                error={errors.date && errors.date.message}
              />
              <Input
                label={'Time'}
                type={'time'}
                id={'time'}
                name={'time'}
                register={{ ...register('time', { required: true }) }}
                error={errors.time && errors.time.message}
              />
            </div>
            <button
              type='submit'
              className='mt-4 w-full rounded-full bg-deep-teal-100/50 p-2 transition hover:bg-deep-teal-100 active:bg-deep-teal-200'
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
BookedForm.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  setIsShowBookForm: PropTypes.func.isRequired,
};
export default BookedForm;

import PropTypes from 'prop-types';
const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className='flex flex-col items-center gap-4'>
      <h1 className='text-center text-4xl font-bold'>{title}</h1>
      <p className='w-full text-center text-base font-normal md:w-[768px]'>
        {subTitle}
      </p>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default SectionTitle;

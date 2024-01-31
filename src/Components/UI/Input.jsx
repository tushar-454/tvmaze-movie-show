import PropTypes from 'prop-types';
import { useState } from 'react';
import { LuEye, LuEyeOff } from 'react-icons/lu';

const Input = ({
  label,
  id,
  type,
  isPassword = false,
  error,
  register,
  ...rest
}) => {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className='w-full space-y-2'>
      <label htmlFor={id} className='text-xl font-semibold'>
        {label}
      </label>
      <div className='relative'>
        <input
          {...rest}
          {...register}
          id={id}
          type={showPass ? 'text' : type}
          className={`w-full rounded-lg border border-transparent bg-gray-100 p-3 text-lg outline-none ${
            error && 'border-red-600 bg-red-50'
          } ${isPassword && 'pr-12'}`}
        />
        {/* password icon toggle */}
        {isPassword && (
          <div className='absolute right-2 top-3'>
            {showPass ? (
              <LuEyeOff
                className='cursor-pointer text-3xl text-gray-500'
                onClick={() => setShowPass(!showPass)}
              />
            ) : (
              <LuEye
                className='cursor-pointer text-3xl text-gray-500'
                onClick={() => setShowPass(!showPass)}
              />
            )}
          </div>
        )}
        <p className='mt-2 text-sm text-red-600'>{error}</p>
      </div>
    </div>
  );
};
Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isPassword: PropTypes.bool,
  error: PropTypes.string,
  register: PropTypes.object.isRequired,
};
export default Input;

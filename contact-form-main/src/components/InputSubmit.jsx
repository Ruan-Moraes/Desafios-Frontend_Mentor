import { PropTypes } from 'prop-types';

const InputSubmit = ({ text }) => {
  return (
    <div>
      <div>
        <button
          type="submit"
          className="w-full p-4 font-bold text-white rounded-md bg-primary-green-medium"
          onClick={(e) => e.preventDefault()}
        >
          {text}
        </button>
      </div>
    </div>
  );
};

InputSubmit.propTypes = {
  text: PropTypes.String,
};

export default InputSubmit;

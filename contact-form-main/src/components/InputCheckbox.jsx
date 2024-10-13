import { PropTypes } from 'prop-types';

const InputCheckbox = ({ label }) => {
  return (
    <div className="my-6">
      <div>
        <label className="flex gap-4">
          <input type="checkbox" className="w-4 border-neutral-grey-medium" />
          <span className="text-neutral-grey-dark">
            {label} <span className="text-neutral-grey-medium">*</span>
          </span>
        </label>
      </div>
    </div>
  );
};

InputCheckbox.propTypes = {
  label: PropTypes.String,
};

export default InputCheckbox;

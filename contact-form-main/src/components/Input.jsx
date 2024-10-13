import { PropTypes } from 'prop-types';

const Input = ({ label }) => {
  return (
    <div>
      <label className="flex flex-col gap-2">
        <span className="text-sm text-neutral-grey-dark">
          {label} <span className="text-neutral-grey-medium">*</span>
        </span>
        <input
          type="text"
          className="rounded-md border-[0.075rem] border-neutral-grey-medium p-3 w-full"
        />
      </label>
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
};

export default Input;

import { PropTypes } from 'prop-types';

const InputTextArea = ({ label }) => {
  return (
    <div>
      <div>
        <label className="flex flex-col gap-2">
          <span className="text-sm text-neutral-grey-dark">
            {label} <span className="text-neutral-grey-medium">*</span>
          </span>
          <textarea className="min-h-52 rounded-md border-[0.075rem] border-neutral-grey-medium p-3"></textarea>
        </label>
      </div>
    </div>
  );
};

InputTextArea.propTypes = {
  label: PropTypes.String,
};

export default InputTextArea;

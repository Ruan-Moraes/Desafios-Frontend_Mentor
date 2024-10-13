import { PropTypes } from 'prop-types';

const InputRadio = ({ label, inputValues }) => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <span className="text-sm text-neutral-grey-dark">
          {label} <span className="text-neutral-grey-medium">*</span>
        </span>
        <div className="flex flex-col gap-2">
          <div className="rounded-md border-[0.075rem] border-neutral-grey-medium px-6 p-3 w-full">
            <label className="flex items-center gap-3">
              <input type="radio" name="queryType" value={inputValues[0]} />
              <span className="mt-[0.075rem] text-neutral-grey-dark">
                {inputValues[0]}
              </span>
            </label>
          </div>
          <div className="rounded-md border-[0.075rem] border-neutral-grey-medium px-6 p-3 w-full">
            <label className="flex items-center gap-3">
              <input type="radio" name="queryType" value={inputValues[1]} />
              <span className="mt-[0.075rem] text-neutral-grey-dark">
                {inputValues[1]}
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

InputRadio.propTypes = {
  label: PropTypes.string,
  inputValues: PropTypes.array,
};

export default InputRadio;

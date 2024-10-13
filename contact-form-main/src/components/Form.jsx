import { PropTypes } from 'prop-types';

const Form = ({ children }) => {
  return (
    <div>
      <form className="flex flex-col gap-6">{children}</form>
    </div>
  );
};

Form.propTypes = {
  children: PropTypes.node,
};

export default Form;

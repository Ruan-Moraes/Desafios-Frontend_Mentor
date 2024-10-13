import { PropTypes } from 'prop-types';

const FormBody = ({ children }) => {
  return <div className="flex flex-col gap-4">{children}</div>;
};

FormBody.propTypes = {
  children: PropTypes.node,
};

export default FormBody;

import { HashLoader } from 'react-spinners';

const override = {
  display: 'flex',
  margin: 'auto',
  borderColor: 'red',
};

const Spinner = () => {
  return (
    <div className={override}>
      <HashLoader color="orange" cssOverride={override} size={50} />
    </div>
  );
};

export default Spinner;

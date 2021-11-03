import ReactLoaderSpinner from 'react-loader-spinner';
import styles from './spinner.module.css';

function Spinner(): JSX.Element {
  return (
    <div className={styles.spinner}>
      <ReactLoaderSpinner
        type="Watch"
        color="#4481c3"
        height={150}
        width={150}
      />
    </div>
  );
}

export default Spinner;

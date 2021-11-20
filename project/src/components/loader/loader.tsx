import ReactLoaderSpinner from 'react-loader-spinner';
import styles from './loader.module.css';

function Loader(): JSX.Element {
  return (
    <div
      className={styles.loader}
      data-testid="loader"
    >
      <ReactLoaderSpinner
        type="Watch"
        color="#4481c3"
        height={150}
        width={150}
      />
    </div>
  );
}

export default Loader;

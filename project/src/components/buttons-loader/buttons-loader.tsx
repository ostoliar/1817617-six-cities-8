import ReactLoaderSpinner from 'react-loader-spinner';

function ButtonsLoader(): JSX.Element {
  return (
    <div data-testid="buttonsLoader">
      <ReactLoaderSpinner
        type="Watch"
        color="#4481c3"
        height={30}
        width={30}
      />
    </div>
  );
}

export default ButtonsLoader;

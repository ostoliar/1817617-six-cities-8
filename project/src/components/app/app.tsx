import MainScreen from '../main-screen/main-screen';

type AppScreenProps = {
  cardCount: number,
  CardProperties:
    {
      id: number
    }[]
}

function App({cardCount, CardProperties} : AppScreenProps): JSX.Element {
  return (
    <MainScreen
      cardCount = {cardCount}
      CardProperties = {CardProperties}
    />
  );
}

export default App;


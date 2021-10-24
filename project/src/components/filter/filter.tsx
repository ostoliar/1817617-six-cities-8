import cn from 'classnames';
import { connect, ConnectedProps } from 'react-redux';
import { Dispatch } from 'redux';
import { changeCity } from '../../store/action';
import { Actions } from '../../types/action';
import { State } from '../../types/state';

type AppScreenProps = {
  cities: string[];
}

const mapStateToProps = ({ currentCity, offers }: State) => ({
  currentCity,
  offers,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onChangeCity(city: string) {
    dispatch(changeCity(city));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & AppScreenProps;

function Filter(props: ConnectedComponentProps): JSX.Element {
  const {cities, currentCity, onChangeCity} = props;

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            { cities.map((city) => {
              const classNameActive = cn({
                'tabs__item--active': city === currentCity,
              });

              return (
                <li className="locations__item" key={city}>
                  <a href="/#"
                    className={ `locations__item-link tabs__item 
                      ${classNameActive}` }
                    onClick={() => onChangeCity(city)}
                  >
                    <span>{city}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </>
  );
}

export { Filter };
export default connector(Filter);

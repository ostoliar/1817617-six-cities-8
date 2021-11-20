import {useMemo} from 'react';
import Header from '../../components/header/header';
import LoginSignIn from '../../components/sign-in-screen/sign-in-screen';
import {AuthorizationStatus} from '../../const';

type LoginProps = {
  authorizationStatus: AuthorizationStatus;
}

function Login({authorizationStatus}: LoginProps): JSX.Element {
  const memoHeader = useMemo(
    () => <Header authorizationStatus={authorizationStatus} />,
    [authorizationStatus],
  );

  return (
    <div
      className="page page--gray page--login"
      data-testid="pageLogin"
    >
      {memoHeader}
      <LoginSignIn />
    </div>
  );
}

export default Login;

import Header from '../../components/header/header';
import LoginSignIn from '../../components/sign-in-screen/sign-in-screen';

function Login(): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <Header />
      <LoginSignIn />
    </div>
  );
}

export default Login;

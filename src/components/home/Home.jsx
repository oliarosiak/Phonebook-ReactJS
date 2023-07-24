import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';

import { HeaderContainer, MainHeader, Links } from './Home.styled';

const Home = () => {
  const isLogin = useSelector(authSelectors.selectIsLogin);
  return (
    <HeaderContainer>
      <MainHeader>Welcome to Phonebook!</MainHeader>
      {!isLogin ? (
        <div>
          <h2>
            Don't have an account? Create it <Links to="/register">here</Links>
          </h2>
          <h2>
            Already have one? Then just <Links to="/login">enter</Links> it!
          </h2>
        </div>
      ) : (
        <div>
          <h2>We hope you like the app!</h2>
        </div>
      )}
    </HeaderContainer>
  );
};

export default Home;

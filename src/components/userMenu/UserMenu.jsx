import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperation';
import authSelectors from 'redux/auth/authSelectors';

import { UserMenuContainer, UserMenuText, UserMenuButton } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.selectUserName);

  return (
    <UserMenuContainer>
      <UserMenuText>Welcome, {userName}</UserMenuText>
      <UserMenuButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </UserMenuButton>
    </UserMenuContainer>
  );
};

export default UserMenu;

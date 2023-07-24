import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperation';
import authSelectors from 'redux/auth/authSelectors';

import {
  UserMenuContainer,
  UserMenuText,
  UserMenuButton,
} from './UserMenu.styled';
import { CgHello } from 'react-icons/cg';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.selectUserName);

  return (
    <UserMenuContainer>
      <UserMenuText>
        <CgHello /> Welcome, {userName}
      </UserMenuText>
      <UserMenuButton type="button" onClick={() => dispatch(logOut())}>
        Logout
      </UserMenuButton>
    </UserMenuContainer>
  );
};

export default UserMenu;

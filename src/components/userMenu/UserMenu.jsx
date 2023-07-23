import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperation';
import authSelectors from 'redux/auth/authSelectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.selectUserName);

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <p
        style={{
          marginRight: '16px',
        }}
      >
        Hello, {userName}
      </p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;

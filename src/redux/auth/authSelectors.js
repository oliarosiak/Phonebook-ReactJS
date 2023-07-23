const selectIsLogin = state=> state.auth.isLogin;

const selectUserName = state => state.auth.user.name;

const authSelectors = {
    selectIsLogin,
    selectUserName,
};

export default authSelectors; 
import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.post('/auth/refresh-tokens');
    setAuth((prev) => {
      return {
        ...prev,
        user: response.data.user,
        accessToken: response.data.token.token,
      };
    });
    return response.data.token.token;
  };
  return refresh;
};

export default useRefreshToken;

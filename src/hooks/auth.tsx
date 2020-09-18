import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect
} from 'react';
import api, { publicApi } from '../services/api';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
}

interface AuthState {
  token: string;
  isAuthenticated: boolean;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface SignInUpData {
  username: string;
  email: string;
  password: string;
  phone?: string;
}

interface AuthContextData {
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut(): void;
  signUp: (credentials: SignInUpData) => Promise<void>;
  updateUser(user: User): void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    setIsInitialized(true);
  }, []);

  const [data, setData] = useState<AuthState>(() => {
    if (isInitialized) {
      const token = localStorage.getItem('@SameSideSimulator:token');

      if (token) {
        api.defaults.headers.authorization = `Bearer ${token}`;
        return { token, isAuthenticated: true };
      }
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await publicApi.post(
      '/oauth/token?grant_type=password',
      {},
      {
        params: {
          username: email,
          password
        },
        headers: {
          Authorization: `Basic ${btoa('samesideapp:sameside-secret')}`
        }
      }
    );

    const { access_token: token } = response.data;

    localStorage.setItem('@SameSideSimulator:token', token);

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, isAuthenticated: true });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@SameSideSimulator:token');

    setData({} as AuthState);
  }, []);

  const signUp = useCallback(async ({ username, email, password, phone }) => {
    const response = await publicApi.post('/api/signup', {
      name: username,
      email,
      password,
      phone
    });

    const { name, email: responseEmail, phone: responsePhone } = response.data;

    localStorage.setItem(
      '@SameSideSimulator:user',
      JSON.stringify({ name, responseEmail, responsePhone })
    );
  }, []);

  const updateUser = useCallback(
    (user: User) => {
      localStorage.setItem('@SameSideSimulator:user', JSON.stringify(user));
      setData({
        token: data.token,
        isAuthenticated: data.isAuthenticated
      });
    },
    [data.token, data.isAuthenticated]
  );

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        signUp,
        updateUser,
        isAuthenticated: data.isAuthenticated
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { useAuth, AuthProvider };

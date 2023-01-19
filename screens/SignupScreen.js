import { useState,useContext } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverLay from '../components/ui/LoadingOverlay';
import { createUser } from "../util/auth.js";
import { AuthContext } from '../store/auth-context';
function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);
  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert("Authentication failed!", "Could not create user.Please check you input!");
      setIsAuthenticating(false);
    }

  }

  if (isAuthenticating) {
    return <LoadingOverLay message='Creating user...' />
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;

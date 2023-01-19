import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverLay from '../components/ui/LoadingOverlay';
import { createUser } from "../util/auth.js";
function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);


  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      await createUser(email, password);
    } catch (error) {
      Alert.alert("Authentication failed!", "Could not create user.Please check you input!");
    }
    setIsAuthenticating(false);

  }

  if (isAuthenticating) {
    return <LoadingOverLay message='Creating user...' />
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;

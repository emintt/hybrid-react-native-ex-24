import {useEffect, useState} from 'react';
import {Button} from '@rneui/base';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import {useUserContext} from '../hooks/contextHooks';
import { Keyboard, TouchableOpacity } from 'react-native';

const Login = () => {
  const [toggleRegister, setToggleRegister] = useState(false);
  const handleToggle = () => setToggleRegister(!toggleRegister);
  const {handleAutoLogin} = useUserContext();

  useEffect(() => {
    handleAutoLogin();
  }, []);
  return (
    <>
      <TouchableOpacity
        onPress={() => Keyboard.dismiss()}
        style={{flex: 1}}
        activeOpacity={1}
      >
        {!toggleRegister ? (
          <LoginForm />
        ) : (
          <RegisterForm handleToggle={handleToggle} />
        )}
        <Button
          onPress={handleToggle}
          title={
            !toggleRegister
              ? 'No account yet? Register here!'
              : 'Back to Login.'
          }
        />
      </TouchableOpacity>
    </>
  );
};

export default Login;

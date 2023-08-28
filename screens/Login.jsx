import React, {useState} from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import CustomInput from '../components/authentication/CustomInput';
import CustomButton from '../components/authentication/CustomButton';
import BackArrowButton from '../components/common/BackArrowButton';
import { styles } from '../styles/Authentication';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onLoginPressed = () => {
    console.warn('Login')
  }

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <BackArrowButton navigation={navigation} />

        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>
          {'Please provide your credentials\nto access the account'}
        </Text>

        <CustomInput 
          placeholder='Username' 
          value={username} 
          setValue={setUsername} 
        />
        <CustomInput 
          placeholder='Password' 
          value={password} 
          setValue={setPassword} 
          secureTextEntry
        />

        <View style={{marginTop: 40, width: '100%'}}>
          <CustomButton text='Login' onPress={onLoginPressed} type='PRIMARY' />
        </View>
        <CustomButton 
          text="Don't have an account? Register" 
          onPress={() => navigation.navigate('Register')} 
          type='SECONDARY' 
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;

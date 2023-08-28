import React, {useState} from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import CustomInput from '../components/authentication/CustomInput';
import CustomButton from '../components/authentication/CustomButton';
import BackArrowButton from '../components/common/BackArrowButton';
import { styles } from '../styles/Authentication';

const Register = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onRegisterPressed = () => {
    console.warn('Register')
  }

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <BackArrowButton navigation={navigation} />

        <Text style={styles.title}>Register</Text>
        <Text style={styles.subtitle}>
          {'Enter your details\nto create a new account'}
        </Text>

        <CustomInput 
          placeholder='Username' 
          value={username} 
          setValue={setUsername} 
        />
        <CustomInput 
          placeholder='Email' 
          value={username} 
          setValue={setUsername} 
        />
        <CustomInput 
          placeholder='Password' 
          value={password} 
          setValue={setPassword} 
          secureTextEntry
        />
        <CustomInput 
          placeholder='Confirm Password' 
          value={password} 
          setValue={setPassword} 
          secureTextEntry
        />

        <View style={{marginTop: 40, width: '100%'}}>
          <CustomButton text='Register' onPress={onRegisterPressed} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;
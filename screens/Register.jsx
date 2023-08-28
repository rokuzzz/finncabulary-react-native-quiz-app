import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons, } from '@expo/vector-icons';

import CustomInput from '../components/authentication/CustomInput';
import CustomButton from '../components/authentication/CustomButton';
import BackArrowButton from '../components/common/BackArrowButton';

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

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    paddingHorizontal: 15,
    marginBottom: 10,

    fontSize: 40,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',

    color: '#000080',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  subtitle: {
    paddingHorizontal: 15,
    marginBottom: 40,
    
    fontSize: 18,
    textAlign: 'center',

    color: '#000080',
  },
});

export default Register;

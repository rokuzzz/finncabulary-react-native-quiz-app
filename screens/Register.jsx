import React, {useState} from 'react';
import { ActivityIndicator, KeyboardAvoidingView, SafeAreaView, Text, View } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import CustomInput from '../components/authentication/CustomInput';
import CustomButton from '../components/authentication/CustomButton';
import BackArrowButton from '../components/common/BackArrowButton';
import { styles } from '../styles/Authentication';
import { FIREBASE_AUTH } from '../FirebaseConfig';

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const onRegisterPressed = async () => {
    setLoading(true)
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password)
      console.log(response)
      alert('Check your emails!')
    } catch (err) {
      console.log(err)
      alert('Registration failed: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <SafeAreaView style={styles.root}>
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <BackArrowButton navigation={navigation} />

        <Text style={styles.title}>Register</Text>
        <Text style={styles.subtitle}>
          {'Enter your details\nto create a new account'}
        </Text>

        <CustomInput 
          placeholder='Email' 
          value={email} 
          setValue={setEmail} 
        />
        <CustomInput 
          placeholder='Password' 
          value={password} 
          setValue={setPassword} 
          secureTextEntry
        />
        {/* <CustomInput 
          placeholder='Confirm Password' 
          value={password} 
          setValue={setPassword} 
          secureTextEntry
        /> */}

        <View style={{marginTop: 40, width: '100%'}}>
          { loading ? <ActivityIndicator size='large' color='#000080' /> 
                    : <CustomButton text='Register' onPress={onRegisterPressed} type='PRIMARY' />
          }
        </View>
        <CustomButton 
          text="Already have an account? Login" 
          onPress={() => navigation.navigate('Login')} 
          type='SECONDARY' 
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Register;
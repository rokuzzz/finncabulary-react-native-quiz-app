import React, {useState} from 'react';
import { ActivityIndicator, KeyboardAvoidingView, SafeAreaView, Text, View } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';

import CustomInput from '../components/authentication/CustomInput';
import CustomButton from '../components/authentication/CustomButton';
import BackArrowButton from '../components/common/BackArrowButton';
import { styles } from '../styles/Authentication';
import { FIREBASE_AUTH } from '../FirebaseConfig';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const onLoginPressed = async () => {
    setLoading(true)
    try {
      const response = await signInWithEmailAndPassword(auth, email, password)
      console.log(response)
    } catch (err) {
      console.log(err)
      alert('Login failed: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <SafeAreaView style={styles.root}>
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <BackArrowButton navigation={navigation} />

        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>
          {'Please provide your credentials\nto access the account'}
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

        <View style={{marginTop: 40, width: '100%'}}>
        { loading ? <ActivityIndicator size='large' color='#000080' /> 
                  : <CustomButton text='Login' onPress={onLoginPressed} type='PRIMARY' />
        }
        </View>
        <CustomButton 
          text="Don't have an account? Register" 
          onPress={() => navigation.navigate('Register')} 
          type='SECONDARY' 
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

import React from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles, CustomButton } from '../styles/WelcomeScreen/index.js';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={['#add8e6', '#000080']}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Finncabulary</Text>
          <Text style={styles.slogan}>«Boost Your Finnish Vocabulary,</Text>
          <Text style={styles.slogan}>Quiz by Quiz!»</Text>
        </View>

        <View style={styles.buttonContainer}>
          <CustomButton
            title='Login'
            onPress={() => navigation.navigate('Login')}
          />
          <CustomButton
            title='Register'
            onPress={() => navigation.navigate('Register')}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default WelcomeScreen;

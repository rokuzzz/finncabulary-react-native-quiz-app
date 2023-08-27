import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const WelcomeScreen = () => {
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
            onPress={() => console.log('Login Pressed!')}
          />
          <CustomButton
            title='Register'
            onPress={() => console.log('Register Pressed!')}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

const CustomButton = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.button, { backgroundColor: '#add8e6' }]}>
      <Text style={styles.buttonText}>{title}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  headerContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'white',
    marginBottom: 2,
  },
  slogan: {
    fontSize: 20,
    textTransform: 'capitalize',
    color: 'white',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#add8e6',
    marginVertical: 5,
    width: 150,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonText: {
    color: '#000080',
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;

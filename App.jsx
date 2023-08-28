import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// screens
import WelcomeScreen from './screens/WelcomeScreen';
import Login from './screens/Login';
import Register from './screens/Register';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator 
        initialRouteName='WelcomeScreen' 
        screenOptions={{ 
          cardStyle: {backgroundColor: '#F9FBFC'},
          headerShown: false
        }} 
      >
        <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

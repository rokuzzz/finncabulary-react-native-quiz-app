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
      <Stack.Navigator initialRouteName='WelcomeScreen'>
        <Stack.Screen 
          name='WelcomeScreen' 
          component={WelcomeScreen} 
          options={{ headerShown: false }} />
        <Stack.Screen 
          name='Login' 
          component={Login} 
          options={{ headerShown: false }} />
        <Stack.Screen 
          name='Register' 
          component={Register}
          options={{ headerShown: false }} />
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

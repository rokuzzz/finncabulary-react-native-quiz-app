import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { onAuthStateChanged } from 'firebase/auth';

import WelcomeScreen from './screens/WelcomeScreen';
import Login from './screens/Login';
import Register from './screens/Register';
import InsideLayout from './components/InsideLayout';
import { FIREBASE_AUTH } from './FirebaseConfig';

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='WelcomeScreen'
        screenOptions={{
          cardStyle: { backgroundColor: '#F9FBFC' },
          headerShown: false,
        }}
      >
        {user ? (
          <Stack.Screen
            name='InsideLayout'
            component={InsideLayout}
            options={{ headerShown: false }}
          ></Stack.Screen>
        ) : (
          <>
            <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

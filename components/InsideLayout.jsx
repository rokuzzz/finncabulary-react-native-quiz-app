import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import QuizList from '../screens/QuizList';
import ProfileScreen from '../screens/ProfileScreen';

const InsideStack = createBottomTabNavigator();

function InsideLayout() {
  return (
    <InsideStack.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === 'Quizzes') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (rn === 'Profile') {
            iconName = focused ? 'happy' : 'happy-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#000080',
        labelStyle: { fontSize: 9 },
      }}
    >
      <InsideStack.Screen
        name='Quizzes'
        component={QuizList}
        options={{ headerShown: false }}
      />
      <InsideStack.Screen
        name='Profile'
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </InsideStack.Navigator>
  );
}

export default InsideLayout;

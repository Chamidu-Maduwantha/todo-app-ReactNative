import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './Screens/SplashScreen';
import DasboardScreen from './Screens/dashboard';
import LoginScreen from './Screens/LoginScreen';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={SplashScreen}
          options={{ headerShown: false }} // Hide header for welcome screen
        />
        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={{ headerShown: false }} // Hide header for login screen
        />
        <Stack.Screen 
          name="Dashboard" 
          component={DasboardScreen}

        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
